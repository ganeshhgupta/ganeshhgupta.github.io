import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const fmtTime = (ms) => {
  if (!ms) return '--:--.--';
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(cs).padStart(2,'0')}`;
};

const GalagaGame = ({ skills, onExit }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const enemyEls = useRef([]);
  const rafRef = useRef(null);

  const [elapsedMs, setElapsedMs] = useState(0);
  const [bestMs, setBestMs] = useState(
    () => parseInt(localStorage.getItem('galagaBestTime') || '0')
  );
  const [won, setWon] = useState(false);
  const startTimeRef = useRef(Date.now());

  // Keep onExit stable in a ref so event listeners don't go stale
  const onExitRef = useRef(onExit);
  useEffect(() => { onExitRef.current = onExit; }, [onExit]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const W = container.clientWidth || 800;
    const H = container.clientHeight || 560;
    canvas.width = W;
    canvas.height = H;

    // Enemy grid
    const ESIZE = 46;
    const EGAP = 8;
    const COLS = Math.min(10, Math.floor((W - 40) / (ESIZE + EGAP)));
    const gridW = COLS * (ESIZE + EGAP) - EGAP;
    const ox = (W - gridW) / 2;
    const oy = 16;

    const enemies = skills.map((skill, i) => ({
      id: i,
      x: ox + (i % COLS) * (ESIZE + EGAP),
      y: oy + Math.floor(i / COLS) * (ESIZE + EGAP),
      w: ESIZE, h: ESIZE,
      alive: true, dying: false, dyingT: 0,
    }));

    startTimeRef.current = Date.now();

    gameRef.current = {
      W, H,
      // Ship follows mouse — start at center
      player: { x: W / 2 - 20, y: H - 65, w: 40, h: 40 },
      bullets: [],
      particles: [],
      enemies,
      dir: 1,
      moveTimer: 0,
      moveEvery: 18,   // fast from the start
      shootCD: 0,
      running: true,
    };

    // ── Mouse: ship tracks cursor X ───────────────────────────
    const onMouseMove = (e) => {
      const g = gameRef.current;
      if (!g) return;
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      g.player.x = Math.max(0, Math.min(mx - g.player.w / 2, g.W - g.player.w));
    };

    // ── Touch: finger controls ship X ────────────────────────
    let lastTapTime = 0;
    const onTouchMove = (e) => {
      e.preventDefault();
      const g = gameRef.current;
      if (!g) return;
      const rect = container.getBoundingClientRect();
      const mx = e.touches[0].clientX - rect.left;
      g.player.x = Math.max(0, Math.min(mx - g.player.w / 2, g.W - g.player.w));
    };
    const onTouchEnd = () => {
      const now = Date.now();
      if (now - lastTapTime < 300) onExitRef.current();
      lastTapTime = now;
    };

    // ── Double-click to exit ──────────────────────────────────
    const onDblClick = () => onExitRef.current();

    // ── Escape to exit ────────────────────────────────────────
    const onKeyDown = (e) => {
      if (e.code === 'Escape') { e.preventDefault(); onExitRef.current(); }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('dblclick', onDblClick);
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);
    window.addEventListener('keydown', onKeyDown);

    function loop() {
      const g = gameRef.current;
      if (!g.running) return;
      const ctx = canvas.getContext('2d');

      // ── Live timer ───────────────────────────────────────────
      setElapsedMs(Date.now() - startTimeRef.current);

      // ── Auto-fire (no user input needed) ─────────────────────
      if (g.shootCD > 0) g.shootCD--;
      if (g.shootCD === 0) {
        g.bullets.push({
          x: g.player.x + g.player.w / 2 - 2,
          y: g.player.y,
          w: 4, h: 14,
          alive: true,
        });
        g.shootCD = 10;
      }

      // ── Move bullets ──────────────────────────────────────────
      for (const b of g.bullets) {
        b.y -= 11;
        if (b.y < -20) b.alive = false;
      }
      g.bullets = g.bullets.filter(b => b.alive);

      // ── Move enemy formation ──────────────────────────────────
      g.moveTimer++;
      if (g.moveTimer >= g.moveEvery) {
        g.moveTimer = 0;
        const alive = g.enemies.filter(e => e.alive);
        if (alive.length > 0) {
          const maxX = Math.max(...alive.map(e => e.x + e.w));
          const minX = Math.min(...alive.map(e => e.x));
          const bump = 20;
          const drop = 22;
          if (g.dir === 1 && maxX + bump >= g.W) {
            for (const e of g.enemies) { if (e.alive) e.y += drop; }
            g.dir = -1;
          } else if (g.dir === -1 && minX - bump <= 0) {
            for (const e of g.enemies) { if (e.alive) e.y += drop; }
            g.dir = 1;
          } else {
            for (const e of g.enemies) { if (e.alive) e.x += g.dir * bump; }
          }
          // Accelerate as enemies die
          g.moveEvery = Math.max(6, Math.round(18 * (alive.length / skills.length)));
        }
      }

      // ── Bullet / enemy collisions ─────────────────────────────
      for (const b of g.bullets) {
        if (!b.alive) continue;
        for (const e of g.enemies) {
          if (!e.alive) continue;
          if (b.x < e.x + e.w && b.x + b.w > e.x &&
              b.y < e.y + e.h && b.y + b.h > e.y) {
            b.alive = false;
            e.alive = false;
            e.dying = true;
            e.dyingT = 18;
            for (let p = 0; p < 10; p++) {
              g.particles.push({
                x: e.x + e.w / 2, y: e.y + e.h / 2,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                life: 22, max: 22,
                r: 2 + Math.random() * 3,
                hue: 20 + Math.random() * 50,
              });
            }
            break;
          }
        }
      }
      g.bullets = g.bullets.filter(b => b.alive);

      // ── Particles ─────────────────────────────────────────────
      for (const p of g.particles) {
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.15;
        p.life--;
      }
      g.particles = g.particles.filter(p => p.life > 0);

      // ── Update enemy icon DOM positions ───────────────────────
      for (const e of g.enemies) {
        const el = enemyEls.current[e.id];
        if (!el) continue;
        if (e.dying) {
          e.dyingT--;
          const prog = Math.max(0, e.dyingT / 18);
          el.style.opacity = prog;
          el.style.transform = `translate(${e.x}px, ${e.y}px) scale(${prog})`;
          if (e.dyingT <= 0) { e.dying = false; el.style.display = 'none'; }
        } else if (e.alive) {
          el.style.transform = `translate(${e.x}px, ${e.y}px)`;
          el.style.opacity = '1';
          el.style.display = 'flex';
        } else {
          el.style.display = 'none';
        }
      }

      // ── Draw ──────────────────────────────────────────────────
      ctx.clearRect(0, 0, g.W, g.H);

      // Player ship — nose tip sits exactly at mouse cursor
      const { x: px, y: py, w: pw, h: ph } = g.player;
      ctx.fillStyle = '#00E5FF';
      ctx.shadowColor = '#00E5FF';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(px + pw / 2, py);
      ctx.lineTo(px + 6,      py + ph * 0.65);
      ctx.lineTo(px,          py + ph);
      ctx.lineTo(px + pw,     py + ph);
      ctx.lineTo(px + pw - 6, py + ph * 0.65);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
      // Cockpit
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(px + pw / 2, py + ph * 0.38, 3.5, 0, Math.PI * 2);
      ctx.fill();
      // Engine exhaust
      const exGrad = ctx.createLinearGradient(0, py + ph, 0, py + ph + 18);
      exGrad.addColorStop(0, 'rgba(255,120,0,0.95)');
      exGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = exGrad;
      ctx.fillRect(px + pw / 2 - 4, py + ph, 8, 18);

      // Bullets
      ctx.fillStyle = '#FFD700';
      ctx.shadowColor = '#FFD700';
      ctx.shadowBlur = 10;
      for (const b of g.bullets) ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.shadowBlur = 0;

      // Particles
      for (const p of g.particles) {
        ctx.globalAlpha = p.life / p.max;
        ctx.fillStyle = `hsl(${p.hue},100%,60%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // ── Win check ─────────────────────────────────────────────
      if (!g.enemies.some(e => e.alive || e.dying)) {
        g.running = false;
        const finalMs = Date.now() - startTimeRef.current;
        setElapsedMs(finalMs);
        const prev = parseInt(localStorage.getItem('galagaBestTime') || '0');
        if (prev === 0 || finalMs < prev) {
          localStorage.setItem('galagaBestTime', String(finalMs));
          setBestMs(finalMs);
        }
        setWon(true);
        return;
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('dblclick', onDblClick);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
      if (gameRef.current) gameRef.current.running = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      ref={containerRef}
      tabIndex={0}
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 480, sm: 560 },
        backgroundColor: 'transparent',
        overflow: 'hidden',
        userSelect: 'none',
        outline: 'none',
        cursor: 'none',          // hide cursor — ship IS the cursor
        '&:focus': { outline: 'none' },
      }}
    >
      {/* Canvas — ship, bullets, particles */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
      />

      {/* Enemy icon divs */}
      {skills.map((skill, i) => (
        <Box
          key={i}
          ref={el => { enemyEls.current[i] = el; }}
          sx={{
            position: 'absolute',
            top: 0, left: 0,
            width: 46, height: 46,
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <img
            src={skill.iconUrl}
            alt={skill.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>
      ))}

      {/* Time HUD */}
      <Box sx={{ position: 'absolute', top: 8, left: 10, zIndex: 10, pointerEvents: 'none' }}>
        <Typography sx={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', lineHeight: 1 }}>TIME</Typography>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFD700', fontFamily: 'monospace', lineHeight: 1.2 }}>
          {fmtTime(elapsedMs)}
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', top: 8, right: 44, zIndex: 10, textAlign: 'right', pointerEvents: 'none' }}>
        <Typography sx={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', lineHeight: 1 }}>BEST</Typography>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#FF6B6B', fontFamily: 'monospace', lineHeight: 1.2 }}>
          {fmtTime(bestMs)}
        </Typography>
      </Box>

      {/* Hint */}
      <Box sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', zIndex: 10, pointerEvents: 'none' }}>
        <Typography sx={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
          move mouse to aim &nbsp;•&nbsp; ESC or double-click to exit
        </Typography>
      </Box>

      {/* Win overlay */}
      {won && (
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 15,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(6px)',
          cursor: 'default',
        }}>
          <Typography sx={{ fontSize: '2.4rem', fontWeight: 700, fontFamily: 'monospace', color: '#FFD700', textShadow: '0 0 24px #FFD700' }}>
            CLEARED!
          </Typography>
          <Typography sx={{ mt: 1, color: '#fff', fontFamily: 'monospace' }}>Time: {fmtTime(elapsedMs)}</Typography>
          <Typography sx={{ color: '#FF6B6B', fontFamily: 'monospace', fontSize: '0.9rem' }}>Best: {fmtTime(bestMs)}</Typography>
          <Box
            onClick={onExit}
            sx={{ mt: 3, px: 3, py: 1, cursor: 'pointer', fontFamily: 'monospace', fontWeight: 700, color: '#00E5FF', border: '1px solid rgba(0,229,255,0.5)', borderRadius: 1, backgroundColor: 'rgba(0,229,255,0.1)', '&:hover': { backgroundColor: 'rgba(0,229,255,0.2)' } }}
          >
            EXIT
          </Box>
        </Box>
      )}

      {/* Close button */}
      <IconButton
        onClick={onExit}
        size="small"
        sx={{ position: 'absolute', top: 4, right: 4, zIndex: 20, color: 'rgba(255,255,255,0.5)', cursor: 'pointer', '&:hover': { color: '#FF6B6B', backgroundColor: 'rgba(255,0,0,0.12)' } }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default GalagaGame;
