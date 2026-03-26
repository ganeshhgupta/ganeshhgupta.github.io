import React, { useState } from 'react';
import {
  Card, CardContent, CardMedia,
  Typography, Box, Chip, Collapse, IconButton, useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, LayoutGroup } from 'framer-motion';

const CATEGORIES = ['Agentic', 'Gen AI', 'ML', 'Full Stack'];

const CATEGORY_COLORS = {
  'Agentic':    { bg: '#EDE9FE', text: '#6D28D9', border: '#7C3AED' },
  'Gen AI':     { bg: '#ECFEFF', text: '#0E7490', border: '#0891B2' },
  'ML':         { bg: '#FFF7ED', text: '#C2410C', border: '#EA580C' },
  'Full Stack': { bg: '#EFF6FF', text: '#1D4ED8', border: '#2563EB' },
};

// ─── ALL PROJECTS ────────────────────────────────────────────────────────────
const allProjects = [
  // ── TOP FEATURED ─────────────────────────────────────────────────────────
  {
    title: "Tomorokoshi: Longitudinal Psychological Digital Twin App",
    description: "A self-modeling system where journaling and adaptive, high-signal MCQs continuously build a dynamic graph of a user's psychology. Instead of a chatbot, it forms a structured \"digital twin\" that understands behaviors, values, and internal conflicts over time. The twin enables personalized introspection, predicts reactions, tracks psychological drift, and offers compatibility mapping with others—while delivering insights gradually based on the user's level of self-awareness.",
    image: "./images/tomorokoshi.png",
    link: "https://github.com/ganeshhgupta/tomorokoshi",
    tags: ['Agentic', 'Gen AI', 'Full Stack'],
    wip: true,
  },
  {
    title: "LangFetch",
    description: "An agentic SQL workspace that translates complex business questions into multi-step PostgreSQL query plans, carrying intermediate results forward across steps to synthesize a single coherent answer. Powered by Claude 3.5 Sonnet with LangChain orchestration, it includes an MCP server for native Claude Desktop integration, a schema explorer with ERD diagrams, and five pre-seeded industry schemas with 170K rows of realistic data.",
    image: "./images/langfetch.png",
    link: "https://github.com/ganeshhgupta/langfetch",
    tags: ['Agentic', 'Gen AI', 'Full Stack'],
  },
  {
    title: "Distributed KV Store Simulator",
    description: "A production-grade distributed key-value store simulator implementing quorum consensus, write-ahead logging, and leader-follower replication across a three-node cluster backed by NeonDB. The system supports network partition injection and automated WAL catch-up recovery, with a live dashboard visualizing replication lag, quorum decisions, and zero-data-loss guarantees under fault scenarios.",
    image: "./images/kvstore.png",
    link: "https://github.com/ganeshhgupta/distributed-kv-store",
    tags: ['Full Stack'],
  },
  {
    title: "original-thought",
    description: "A multi-agent reasoning system designed to push a language model toward genuine hypothesis generation rather than retrieval. A generator works through 12 free reasoning steps with Lean 4, Z3, and SymPy tool access before adversarial critics engage, with a persistent failure memory, determinantal point process corpus sampling, and Thompson-sampled framing variants driving exploration toward novel mathematical results. Work in progress.",
    image: "./images/originalthought.png",
    link: "https://github.com/ganeshhgupta/original-thought",
    tags: ['Agentic', 'Gen AI'],
    wip: true,
  },
  {
    title: "Watch Your LLM",
    description: "A self-hosted LLM observability platform that wraps any model call with a decorator or context manager and asynchronously ships traces, token counts, latency, and computed cost to a PostgreSQL collector. A React dashboard surfaces real-time error rates, cost trends, and per-model breakdowns with a filterable trace explorer and full prompt-response replay.",
    image: "./images/watchllm.png",
    link: "https://github.com/ganeshhgupta/watch-your-llm",
    tags: ['Gen AI', 'Full Stack'],
  },

  // ── OTHER NEW PROJECTS ────────────────────────────────────────────────────
  {
    title: "RootCause AI",
    description: "An autonomous network operations system that ingests raw telecom signals, detects anomalies using statistical baselines, and diagnoses root causes by retrieving from a knowledge base of runbooks. The system generates concrete remediation actions, executes them via real HTTP calls, and pauses for human approval on high-risk decisions, creating a fully traceable observe-reason-act loop.",
    image: "./images/rootcause.png",
    link: "https://github.com/ganeshhgupta/rootcause-ai",
    tags: ['Agentic', 'Gen AI'],
  },
  {
    title: "Distributed Semantic Search Engine (SearchOS)",
    description: "A production-grade distributed search engine that shards 15K Wikipedia embeddings across three FAISS worker nodes using consistent hashing with virtual nodes. The coordinator fans out queries in parallel, merges results by cosine similarity, and maintains fault tolerance through background health polling, achieving sub-100ms p99 latency under load.",
    image: "./images/searchos.png",
    link: "https://github.com/ganeshhgupta/searchos",
    tags: ['Full Stack', 'ML'],
  },
  {
    title: "VPC Control Plane Simulator",
    description: "An AWS VPC networking simulator that implements longest-prefix match routing with animated step-by-step trace resolution, stateful security group evaluation with connection tracking, and stateless NACL rule evaluation. The system adds version-aware drift detection by diffing live resource configs against hypervisor-synced snapshots, exposing the full control plane logic that cloud providers abstract away.",
    image: "./images/vpc.png",
    link: "https://github.com/ganeshhgupta/vpc-control-plane",
    tags: ['Full Stack'],
  },
  {
    title: "ML Retraining Pipeline",
    description: "An automated YOLOv8 retraining and deployment pipeline for dental disease detection, processing over 10,000 inferences per day through a six-layer AWS architecture. An EventBridge-triggered Step Functions workflow validates data quality, detects class imbalance, applies Albumentations augmentation, and promotes new models only on a verified 2% mAP improvement, with blue-green deployment and automatic rollback on error rate spikes.",
    image: "./images/mlpipeline.png",
    link: "https://github.com/ganeshhgupta/ml-retraining-pipeline",
    tags: ['ML'],
  },
  {
    title: "FeatureLab",
    description: "An autonomous feature engineering agent for CTR prediction that iteratively profiles raw features, hypothesizes transformations grounded in distribution statistics, evaluates signal gain via mutual information and LightGBM importance, and retries on failure before moving on. The agent surfaces surprises after every five features, proposes semantically meaningful interaction terms across the top signals, and auto-saves the final feature set when AUC improvement clears the configured threshold.",
    image: "./images/featurelab.png",
    link: "https://github.com/ganeshhgupta/featurelab",
    tags: ['Agentic', 'ML'],
  },
  {
    title: "Multi-Agent Energy Scheduling (Digital Network Twin)",
    description: "A cooperative multi-agent reinforcement learning system that models base station energy scheduling as a joint optimization problem within a Digital Network Twin simulation. Using VDN, MAPPO, and MADDPG, the agents learn coordinated power allocation policies across the network, achieving a 35% reduction in simulated power draw compared to the greedy baseline. Work in progress.",
    image: "./images/marl.png",
    link: "https://github.com/ganeshhgupta/digital-network-twin",
    tags: ['Agentic', 'ML'],
    wip: true,
  },
  {
    title: "LLaMA 2 Fine-Tuning Pipeline for Financial Documents",
    description: "A scalable generative AI fine-tuning pipeline that adapts LLaMA 2 to financial document understanding using LoRA and PEFT, reducing trainable parameter count while preserving model capacity. The pipeline incorporates systematic hyperparameter optimization to maximize inference performance on finance-specific tasks, enabling efficient deployment of domain-adapted language models at scale.",
    image: "./images/llama2.png",
    link: "https://github.com/ganeshhgupta/llama2-finance-finetuning",
    tags: ['Gen AI', 'ML'],
  },

  // ── ORIGINAL PROJECTS ─────────────────────────────────────────────────────
  {
    title: "Real-Time Movie Recommendation System 2025",
    description: "Built a movie recommendation engine that combines the strengths of content-based and collaborative filtering, enriched by transformer models capable of understanding complex user-item relationships. The system integrates multi-modal inputs—text descriptions, metadata, and user interaction history—to deliver highly personalized suggestions. Evaluated on the MovieLens dataset, it reached 96% accuracy.",
    image: "./images/rec.png",
    link: "https://github.com/ganeshhgupta/movie-recommendation-system",
    tags: ['ML'],
  },
  {
    title: "Real-Time Credit Card Fraud Detection System 2025",
    description: "Designed a real-time fraud detection system that uses Apache Kafka to stream live credit card transactions and Apache Spark Structured Streaming to process them in motion. The pipeline applies machine learning–based anomaly detection models that learn spending behavior and flag suspicious activity within milliseconds.",
    image: "./images/fraud.png",
    link: "https://github.com/ganeshhgupta/credit-card-fraud-detection",
    tags: ['ML', 'Full Stack'],
  },
  {
    title: "Event-Based Histogram of Gradients for Lane Detection : Thesis",
    description: "Vision Transformers have revolutionized the field of computer vision by applying the self-attention mechanism to image recognition tasks. This project aims to enhance ViT's performance by incorporating HOG features, which are known for their ability to capture shape and appearance information through gradient distributions.",
    image: "./images/1.png",
    link: "https://github.com/ganeshhgupta/HoG-ViT",
    tags: ['ML'],
  },
  {
    title: "YouTube Video Querying Assistant : RAG, Langchain, Pinecone",
    description: "Developed an interactive YouTube video query system using LangChain, leveraging OpenAI Embeddings to process video transcripts stored in a vector database. Improved search functionality with recursive querying and robust error handling for more accurate and efficient results.",
    image: "./images/yt-query.png",
    link: "https://github.com/ganeshhgupta/HoG-ViT",
    tags: ['Gen AI', 'Full Stack'],
  },
  {
    title: "Community Detection in Social Networks : Big Data",
    description: "Architected a Map-Reduce program to partition a directed graph into K clusters using multi-source BFS, optimizing proximity-based grouping through iterative propagation. Utilized Apache Spark SQL and RDDs to calculate neighbors and efficiently group nodes.",
    image: "./images/2.png",
    link: "https://github.com/ganeshhgupta/CCBD",
    tags: ['ML', 'Full Stack'],
  },
  {
    title: "Caltech 256 Object Classifier : ResNet50 : UTA Datathon",
    description: "This project built an image classifier using PyTorch and transfer learning with a pre-trained ResNet50 model. Key techniques included data augmentation, layer fine-tuning for task adaptation, and regularization to prevent overfitting. Few-shot learning was also implemented to improve classification performance for classes with limited data.",
    image: "./images/3.png",
    link: "https://portfolio.com",
    tags: ['ML'],
  },
  {
    title: "Twitter Sentiment Analysis using BERT",
    description: "This project uses the BERT model to analyze and classify sentiment in Twitter data. By fine-tuning BERT for natural language understanding, the system accurately detects positive, negative, or neutral sentiments, even in tweets with slang or informal language.",
    image: "./images/4.png",
    link: "https://github.com/ganeshhgupta/Twitter-Sentiment-Analysis",
    tags: ['ML', 'Gen AI'],
  },
  {
    title: "Lane Detection System for Autonomous Driving : UNet, Yolo Panoptic",
    description: "This project enhances lane detection in challenging conditions like low light and poor weather using UNet for semantic segmentation and Yolo Panoptic for object detection. The system accurately identifies lane markings, ensuring safer navigation in fog, rain, or nighttime driving.",
    image: "./images/5.png",
    link: "https://weather-dashboard.com",
    tags: ['ML'],
  },
  {
    title: "Emotion Detection using Haar Cascades Classifier : OpenCV",
    description: "This project uses Haar Cascades to detect emotions from facial expressions in real-time, identifying emotions like happiness, sadness, and anger. Suitable for applications like user experience monitoring and emotion-based AI interactions.",
    image: "./images/6.png",
    link: "https://blog-platform.com",
    tags: ['ML'],
  },
  {
    title: "Bitcoin Price Prediction : LSTM, 1D-CNN, N-Beats",
    description: "This project predicts Bitcoin prices using models like LSTM, 1D-CNN, and N-BEATS, analyzing historical price data and factors like trading volume and market sentiment for accurate short-term predictions.",
    image: "./images/7.png",
    link: "https://taskmanager.com",
    tags: ['ML'],
  },
  {
    title: "Employee Management Dashboard : Java, Spring, SQL",
    description: "A web-based portal for managing employee data with secure login and full CRUD operations. Built with Java, Spring, and SQL, it enhances operational efficiency and boosts user engagement by 25%.",
    image: "./images/8.png",
    link: "https://chatapp.com",
    tags: ['Full Stack'],
  },
  {
    title: "Facebook vs Google AdWords A/B Testing and Conversion Analysis",
    description: "Conducted data cleaning and analyzed click-to-conversion ratios, segmented data, and performed correlation, regression, and A/B testing with interactive visualizations to determine the more effective marketing platform.",
    image: "./images/ab_test.png",
    link: "https://github.com/ganeshhgupta/Facebook_vs_Adwords_AB_Testing",
    tags: ['ML'],
  },
  {
    title: "ETL Pipeline for Amazon Books : Apache Airflow",
    description: "Developed an Apache Airflow DAG to extract, transform, and load book data from Amazon into PostgreSQL, ensuring efficient data structuring and automation.",
    image: "./images/etl.png",
    link: "https://github.com/ganeshhgupta/Amazon-Books-ETL",
    tags: ['Full Stack'],
  },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, expanded, onMobileToggle, mobileExpanded }) => {
  const isMobile = useMediaQuery('(max-width:899px)');
  const isOpen = isMobile ? mobileExpanded : expanded;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: expanded ? 10 : 3,
        transition: 'box-shadow 0.3s ease',
        cursor: isMobile ? 'pointer' : 'default',
        overflow: 'hidden',
      }}
      onClick={() => isMobile && onMobileToggle()}
    >
      {/* Image — full image shown when expanded, cropped preview when collapsed */}
      <Box
        sx={{
          overflow: 'hidden',
          flexShrink: 0,
          height: isOpen ? 'auto' : 150,
          transition: 'height 0.4s ease',
        }}
      >
        <Box
          component="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          sx={{ display: 'block' }}
        >
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: isOpen ? 'auto' : 150,
              objectFit: isOpen ? 'contain' : 'cover',
              display: 'block',
              transition: 'transform 0.4s ease',
              transform: isOpen ? 'scale(1)' : 'scale(1)',
            }}
          />
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1, pb: 1 }}>
        {/* Chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.wip && (
            <Chip
              label="Work in Progress"
              size="small"
              sx={{
                fontSize: '0.62rem', height: 18,
                backgroundColor: '#FEF3C7', color: '#92400E',
                fontWeight: 700, border: '1px solid #F59E0B',
              }}
            />
          )}
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.65rem', height: 18,
                backgroundColor: CATEGORY_COLORS[tag]?.bg,
                color: CATEGORY_COLORS[tag]?.text,
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Raleway", serif',
            fontSize: { xs: '0.92rem', sm: '0.97rem' },
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Collapse in={isOpen} collapsedSize={48}>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.81rem' }}>
            {project.description}
          </Typography>
        </Collapse>
      </CardContent>

      {/* Mobile toggle */}
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1, pb: 0.5 }}>
          <IconButton
            size="small"
            onClick={(e) => { e.stopPropagation(); onMobileToggle(); }}
            sx={{
              transform: mobileExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Card>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Projects = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const isDesktop = useMediaQuery('(min-width:900px)');

  const toggleFilter = (cat) => {
    setHoveredIdx(null);
    setActiveFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered =
    activeFilters.length === 0
      ? allProjects
      : allProjects.filter((p) => p.tags.some((t) => activeFilters.includes(t)));

  // CSS Grid style for each item.
  // Giving BOTH explicit gridColumn AND gridRow puts the item in placement step-1,
  // so the browser reserves its 2×2 area BEFORE auto-placing neighbours.
  // Left/center expand rightward; right column expands leftward (mirror).
  const getGridStyle = (index) => {
    if (!isDesktop || hoveredIdx !== index) return {};
    const col = index % 3;
    const row = Math.floor(index / 3) + 1; // 1-based CSS grid row
    return {
      gridColumn: col === 2 ? '2 / 4' : `${col + 1} / span 2`,
      gridRow: `${row} / span 2`,
      zIndex: 10,
      position: 'relative',
      alignSelf: 'stretch',
    };
  };

  const toggleMobile = (title) => {
    setMobileExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 3, ease: 'easeOut' }}
    >
      <Box id="projects" sx={{ py: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontFamily: '"Raleway", serif', fontWeight: 400, textAlign: 'center' }}
        >
          Projects
        </Typography>

        {/* Filter Chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 3 }}>
          <Chip
            label="All"
            onClick={() => { setHoveredIdx(null); setActiveFilters([]); }}
            sx={{
              fontWeight: 600,
              backgroundColor: activeFilters.length === 0 ? '#1F2937' : 'transparent',
              color: activeFilters.length === 0 ? '#fff' : 'inherit',
              border: '1px solid #9CA3AF',
              '&:hover': { backgroundColor: activeFilters.length === 0 ? '#374151' : '#F3F4F6' },
            }}
          />
          {CATEGORIES.map((cat) => {
            const active = activeFilters.includes(cat);
            const colors = CATEGORY_COLORS[cat];
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => toggleFilter(cat)}
                sx={{
                  fontWeight: 600,
                  backgroundColor: active ? colors.border : 'transparent',
                  color: active ? '#fff' : colors.text,
                  border: `1px solid ${colors.border}`,
                  '&:hover': { backgroundColor: active ? colors.border : colors.bg },
                }}
              />
            );
          })}
        </Box>

        {/* CSS Grid + Framer Motion layout animations */}
        <LayoutGroup>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: 2, sm: 3 },
              alignItems: 'start',
            }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                style={{
                  ...getGridStyle(index),
                  height: isDesktop && hoveredIdx === index ? '100%' : undefined,
                }}
                transition={{ layout: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } }}
                onHoverStart={() => isDesktop && setHoveredIdx(index)}
                onHoverEnd={() => isDesktop && setHoveredIdx(null)}
              >
                <ProjectCard
                  project={project}
                  expanded={isDesktop && hoveredIdx === index}
                  mobileExpanded={!!mobileExpanded[project.title]}
                  onMobileToggle={() => toggleMobile(project.title)}
                />
              </motion.div>
            ))}
          </Box>
        </LayoutGroup>

        {filtered.length === 0 && (
          <Typography color="text.secondary" sx={{ textAlign: 'center', mt: 4, fontStyle: 'italic' }}>
            No projects match the selected filters.
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

export default Projects;
