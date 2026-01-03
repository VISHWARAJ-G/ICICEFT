import {
  Brain,
  Network,
  Cpu,
  Eye,
  ShieldCheck,
  Leaf,
  Smartphone,
  Wifi,
} from "lucide-react";

import {
  IconRobot,
  IconCloudComputing,
  IconCube3dSphere,
  IconPhoto,
  IconBlocks,
  IconCircuitBattery,
} from "@tabler/icons-react";

import {
  Database,
  Cpu as PhosphorCpu,
  Atom,
  Cloud,
} from "phosphor-react";


export const tracksList = [
  "Artificial Intelligence",
  "Machine Learning & Deep Learning",
  "Big Data Analytics",
  "Data Science",
  "Human-Computer Interaction",
  "Augmented & Virtual Reality",
  "Virtualization",
  "Robotics",
  "Blockchain",
  "Image Processing",
  "Green Computing",
  "Intelligent Computing",
  "Cyber Security",
  "Nano Computing",
  "Mobile Communication",
  "5G Technology",
  "Internet of Things",
];

export const TRACK_ICON_MAP = {
  "Artificial Intelligence": Brain,
  "Machine Learning & Deep Learning": Network,
  "Big Data Analytics": Database,
  "Data Science": PhosphorCpu,
  "Human-Computer Interaction": Eye,
  "Augmented & Virtual Reality": IconCube3dSphere,
  "Virtualization": IconCloudComputing,
  "Robotics": IconRobot,
  "Blockchain": IconBlocks,
  "Image Processing": IconPhoto,
  "Green Computing": Leaf,
  "Intelligent Computing": Cpu,
  "Cyber Security": ShieldCheck,
  "Nano Computing": Atom,
  "Mobile Communication": Smartphone,
  "5G Technology": Wifi,
  "Internet of Things": IconCircuitBattery,
};

export const TRACK_DESCRIPTIONS = {
  "Artificial Intelligence":
    "Intelligent systems, reasoning models, autonomous agents and AI for Industry 5.0 applications.",

  "Machine Learning & Deep Learning":
    "Learning algorithms, neural architectures, training optimization and predictive systems.",

  "Big Data Analytics":
    "Large-scale data processing, mining, visualization and real-time analytical systems.",

  "Data Science":
    "Statistical modeling, data engineering pipelines and knowledge discovery methods.",

  "Human-Computer Interaction":
    "User experience engineering, cognitive interfaces and accessibility-driven designs.",

  "Augmented & Virtual Reality":
    "Digital twins, immersive systems and mixed reality applications.",

  "Virtualization":
    "Cloud computing, virtual machines, containers and infrastructure abstraction.",

  "Robotics":
    "Autonomous robots, industrial automation and intelligent control systems.",

  "Blockchain":
    "Distributed ledgers, smart contracts and decentralized security systems.",

  "Image Processing":
    "Computer vision, image analysis, recognition and enhancement techniques.",

  "Green Computing":
    "Energy-efficient architectures and sustainable computing systems.",

  "Intelligent Computing":
    "Cognitive computing, adaptive systems and autonomous decision models.",

  "Cyber Security":
    "Threat modeling, cryptography, intrusion detection and digital forensics.",

  "Nano Computing":
    "MEMS, nano-scale architectures and next-generation computational materials.",

  "Mobile Communication":
    "Wireless protocols, mobile networks and communication infrastructures.",

  "5G Technology":
    "Ultra-low latency networks, massive IoT and next-gen wireless systems.",

  "Internet of Things":
    "Smart connected devices, sensor networks and cyber-physical systems.",
};
