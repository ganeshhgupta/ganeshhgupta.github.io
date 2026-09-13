import React, { useState } from 'react';
import {
  Card, CardContent, CardMedia,
  Typography, Box, Chip, Collapse, IconButton, useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const CATEGORIES = ['Agentic', 'Gen AI', 'ML', 'Full Stack'];

// ─── ALL PROJECTS ────────────────────────────────────────────────────────────
const allProjects = [
  // ── TOP FEATURED ─────────────────────────────────────────────────────────
  {
    title: "Tomorokoshi: Longitudinal Psychological Digital Twin App",
    description: "A self-modeling system where journaling and adaptive, high-signal MCQs continuously build a dynamic graph of a user's psychology. Instead of a chatbot, it forms a structured \"digital twin\" that understands behaviors, values, and internal conflicts over time. The twin enables personalized introspection, predicts reactions, tracks psychological drift, and offers compatibility mapping with others, while delivering insights gradually based on the user's level of self-awareness.",
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
    title: "Real-Time Movie Recommendation System",
    description: "Built a movie recommendation engine that combines the strengths of content-based and collaborative filtering, enriched by transformer models capable of understanding complex user-item relationships. The system integrates multi-modal inputs, text descriptions, metadata, and user interaction history, to deliver highly personalized suggestions. Evaluated on the MovieLens dataset, it reached 96% accuracy.",
    image: "./images/rec.png",
    link: "https://github.com/ganeshhgupta/movie-recommendation-system",
    tags: ['ML'],
  },
  {
    title: "Real-Time Credit Card Fraud Detection System",
    description: "Designed a real-time fraud detection system that uses Apache Kafka to stream live credit card transactions and Apache Spark Structured Streaming to process them in motion. The pipeline applies machine learning-based anomaly detection models that learn spending behavior and flag suspicious activity within milliseconds.",
    image: "./images/fraud.png",
    link: "https://github.com/ganeshhgupta/credit-card-fraud-detection",
    tags: ['ML', 'Full Stack'],
  },
  {
    title: "Event-Based Histogram of Gradients for Lane Detection: Thesis",
    description: "Vision Transformers have revolutionized the field of computer vision by applying the self-attention mechanism to image recognition tasks. This project enhances ViT's performance by incorporating HOG features, which capture shape and appearance information through gradient distributions.",
    image: "./images/1.png",
    link: "https://github.com/ganeshhgupta/HoG-ViT",
    tags: ['ML'],
  },
  {
    title: "YouTube Video Querying Assistant: RAG, LangChain, Pinecone",
    description: "Developed an interactive YouTube video query system using LangChain, leveraging OpenAI Embeddings to process video transcripts stored in a vector database. Improved search functionality with recursive querying and robust error handling for more accurate and efficient results.",
    image: "./images/yt-query.png",
    link: "https://github.com/ganeshhgupta/HoG-ViT",
    tags: ['Gen AI', 'Full Stack'],
  },
  {
    title: "Community Detection in Social Networks: Big Data",
    description: "Architected a Map-Reduce program to partition a directed graph into K clusters using multi-source BFS, optimizing proximity-based grouping through iterative propagation. Used Apache Spark SQL and RDDs to calculate neighbors and efficiently group nodes.",
    image: "./images/2.png",
    link: "https://github.com/ganeshhgupta/CCBD",
    tags: ['ML', 'Full Stack'],
  },
  {
    title: "Caltech 256 Object Classifier: ResNet50",
    description: "Built an image classifier using PyTorch and transfer learning with a pre-trained ResNet50 model. Key techniques included data augmentation, layer fine-tuning for task adaptation, and regularization to prevent overfitting, plus few-shot learning for classes with limited data.",
    image: "./images/3.png",
    link: "https://github.com/ganeshhgupta",
    tags: ['ML'],
  },
  {
    title: "Twitter Sentiment Analysis using BERT",
    description: "Fine-tuned BERT to analyze and classify sentiment in Twitter data, accurately detecting positive, negative, or neutral sentiment even in tweets with slang or informal language.",
    image: "./images/4.png",
    link: "https://github.com/ganeshhgupta/Twitter-Sentiment-Analysis",
    tags: ['ML', 'Gen AI'],
  },
  {
    title: "Lane Detection System for Autonomous Driving: UNet, YOLO Panoptic",
    description: "Enhances lane detection in challenging conditions like low light and poor weather using UNet for semantic segmentation and YOLO Panoptic for object detection, ensuring safer navigation in fog, rain, or nighttime driving.",
    image: "./images/5.png",
    link: "https://github.com/ganeshhgupta",
    tags: ['ML'],
  },
  {
    title: "Bitcoin Price Prediction: LSTM, 1D-CNN, N-BEATS",
    description: "Predicts Bitcoin prices using LSTM, 1D-CNN, and N-BEATS models, analyzing historical price data and factors like trading volume and market sentiment for short-term forecasts.",
    image: "./images/7.png",
    link: "https://github.com/ganeshhgupta",
    tags: ['ML'],
  },
  {
    title: "ETL Pipeline for Amazon Books: Apache Airflow",
    description: "Developed an Apache Airflow DAG to extract, transform, and load book data from Amazon into PostgreSQL, ensuring efficient data structuring and automation.",
    image: "./images/etl.png",
    link: "https://github.com/ganeshhgupta/Amazon-Books-ETL",
    tags: ['Full Stack'],
  },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, isOpen, onToggle }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        borderColor: isOpen ? 'primary.main' : 'divider',
      }}
      onClick={onToggle}
    >
      <Box
        component="a"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        sx={{ display: 'block', height: 150, overflow: 'hidden' }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{ width: '100%', height: 150, objectFit: 'cover', display: 'block' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.wip && (
            <Chip
              label="Work in Progress"
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.62rem', height: 18, borderColor: 'divider', color: 'text.secondary' }}
            />
          )}
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.65rem', height: 18, borderColor: 'divider', color: 'text.secondary' }}
            />
          ))}
        </Box>

        <Typography variant="h6" sx={{ fontSize: { xs: '0.92rem', sm: '0.97rem' }, lineHeight: 1.3 }}>
          {project.title}
        </Typography>

        <Collapse in={isOpen} collapsedSize={48}>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.81rem' }}>
            {project.description}
          </Typography>
        </Collapse>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            size="small"
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            sx={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Projects = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [openIdx, setOpenIdx] = useState(null);
  const isDesktop = useMediaQuery('(min-width:900px)');

  const toggleFilter = (cat) => {
    setActiveFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered =
    activeFilters.length === 0
      ? allProjects
      : allProjects.filter((p) => p.tags.some((t) => activeFilters.includes(t)));

  return (
    <Box id="projects" sx={{ pt: { xs: 1, sm: 2 }, pb: { xs: 3, sm: 4 } }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Projects
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 3 }}>
        <Chip
          label="All"
          onClick={() => setActiveFilters([])}
          variant={activeFilters.length === 0 ? 'filled' : 'outlined'}
          color={activeFilters.length === 0 ? 'primary' : 'default'}
          sx={{ fontWeight: 600, borderColor: 'divider' }}
        />
        {CATEGORIES.map((cat) => {
          const active = activeFilters.includes(cat);
          return (
            <Chip
              key={cat}
              label={cat}
              onClick={() => toggleFilter(cat)}
              variant={active ? 'filled' : 'outlined'}
              color={active ? 'primary' : 'default'}
              sx={{ fontWeight: 600, borderColor: 'divider' }}
            />
          );
        })}
      </Box>

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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: isDesktop ? (index % 3) * 0.06 : 0 }}
          >
            <ProjectCard
              project={project}
              isOpen={openIdx === index}
              onToggle={() => setOpenIdx(openIdx === index ? null : index)}
            />
          </motion.div>
        ))}
      </Box>

      {filtered.length === 0 && (
        <Typography color="text.secondary" sx={{ textAlign: 'center', mt: 4, fontStyle: 'italic' }}>
          No projects match the selected filters.
        </Typography>
      )}
    </Box>
  );
};

export default Projects;
