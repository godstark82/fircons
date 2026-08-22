'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const TRACKS = [
  {
    name: "Mathematical Modelling and Simulation",
  },
  {
    name: "Mathematics for Artificial Intelligence and Machine Learning",
  },
  {
    name: "Optimization Theory and Applications",
  },
  {
    name: "Data Science and Statistical Mathematics",
  },
  {
    name: "Mathematical Biology and Healthcare",
  },
  {
    name: "Cryptography and Post-Quantum Security",
  },
  {
    name: "Financial Mathematics",
  },
  {
    name: "Climate and Environmental Mathematics",
  },
  {
    name: "Quantum Computing and Quantum Information",
  },
  {
    name: "Network Science and Complex Systems",
  },
  {
    name: "Scientific Computing and Computational Mathematics",
  },
  {
    name: "Mathematics for Sustainable Development",
  },
];

const CONFERENCE_TRACKS = [
  {
    title: "1. Pure Mathematics",
    subtopics: [
      "Abstract Algebra",
      "Group Theory",
      "Ring Theory",
      "Field Theory",
      "Module Theory",
      "Representation Theory",
      "Number Theory",
      "Algebraic Number Theory",
      "Analytic Number Theory",
      "Geometry",
      "Euclidean and Non-Euclidean Geometry",
      "Differential Geometry",
      "Algebraic Geometry",
      "Topology",
      "Algebraic Topology",
      "Differential Topology",
      "Functional Analysis",
      "Real Analysis",
      "Complex Analysis",
      "Measure Theory",
      "Operator Theory",
      "Set Theory",
      "Mathematical Logic"
    ]
  },
  {
    title: "2. Applied Mathematics",
    subtopics: [
      "Mathematical Modelling",
      "Differential Equations",
      "Ordinary Differential Equations",
      "Partial Differential Equations",
      "Integral Equations",
      "Difference Equations",
      "Dynamical Systems",
      "Nonlinear Systems",
      "Perturbation Methods",
      "Asymptotic Analysis",
      "Numerical Analysis",
      "Computational Mathematics",
      "Scientific Computing"
    ]
  },
  {
    title: "3. Probability and Statistics",
    subtopics: [
      "Probability Theory",
      "Stochastic Processes",
      "Stochastic Differential Equations",
      "Markov Chains",
      "Random Processes",
      "Bayesian Statistics",
      "Mathematical Statistics",
      "Multivariate Analysis",
      "Time Series Analysis",
      "Reliability Theory",
      "Survival Analysis",
      "Statistical Inference",
      "Experimental Design",
      "High-Dimensional Statistics"
    ]
  },
  {
    title: "4. Optimization and Operations Research",
    subtopics: [
      "Linear Programming",
      "Nonlinear Programming",
      "Integer Programming",
      "Multi-objective Optimization",
      "Convex Optimization",
      "Global Optimization",
      "Combinatorial Optimization",
      "Dynamic Programming",
      "Optimal Control Theory",
      "Operations Research",
      "Supply Chain Optimization",
      "Transportation Problems",
      "Scheduling Theory",
      "Game Theory",
      "Decision Theory"
    ]
  },
  {
    title: "5. Computational and Numerical Mathematics",
    subtopics: [
      "Numerical Methods for Differential Equations",
      "Finite Element Methods",
      "Finite Difference Methods",
      "Spectral Methods",
      "Computational Fluid Dynamics",
      "High-Performance Computing",
      "Parallel Computing",
      "Mathematical Simulation",
      "Computer Algebra",
      "Numerical Optimization",
      "Scientific Machine Learning"
    ]
  },
  {
    title: "6. Mathematical Modelling",
    subtopics: [
      "Mathematical Modelling in Biology",
      "Mathematical Modelling in Medicine",
      "Epidemiological Modelling",
      "Population Dynamics",
      "Ecological Modelling",
      "Environmental Modelling",
      "Climate Modelling",
      "Mathematical Modelling in Engineering",
      "Financial Modelling",
      "Social and Economic Modelling",
      "Traffic and Transportation Modelling",
      "Energy System Modelling"
    ]
  },
  {
    title: "7. Mathematics and Artificial Intelligence",
    subtopics: [
      "Mathematical Foundations of Machine Learning",
      "Deep Learning Theory",
      "Optimization in Machine Learning",
      "Statistical Learning Theory",
      "Neural Network Mathematics",
      "Graph Theory in AI",
      "Explainable AI and Mathematical Interpretability",
      "Reinforcement Learning",
      "Probabilistic Machine Learning",
      "AI for Scientific Computing",
      "Mathematical Analysis of Algorithms",
      "Federated Learning and Optimization"
    ]
  },
  {
    title: "8. Data Science and Big Data Mathematics",
    subtopics: [
      "Data Analytics",
      "Mathematical Foundations of Data Science",
      "Dimensionality Reduction",
      "Clustering Algorithms",
      "Network Analysis",
      "Graph Analytics",
      "Topological Data Analysis",
      "Data Mining",
      "Statistical Learning",
      "Information Theory",
      "Compressed Sensing",
      "High-Dimensional Data Analysis"
    ]
  },
  {
    title: "9. Mathematical Biology and Medicine",
    subtopics: [
      "Mathematical Biology",
      "Population Dynamics",
      "Epidemiological Models",
      "Cancer Modelling",
      "Tumour Growth Models",
      "Neuroscience Modelling",
      "Genetic and Evolutionary Mathematics",
      "Bioinformatics",
      "Systems Biology",
      "Pharmacokinetic Modelling",
      "Mathematical Modelling of Infectious Diseases",
      "Medical Image Analysis"
    ]
  },
  {
    title: "10. Mathematical Physics",
    subtopics: [
      "Classical Mechanics",
      "Quantum Mechanics",
      "Quantum Field Theory",
      "Relativity",
      "Mathematical Cosmology",
      "Quantum Gravity",
      "Statistical Mechanics",
      "Fluid Mechanics",
      "Electromagnetic Theory",
      "Mathematical Modelling of Physical Systems",
      "Nonlinear Waves",
      "Soliton Theory"
    ]
  },
  {
    title: "11. Financial and Actuarial Mathematics",
    subtopics: [
      "Mathematical Finance",
      "Financial Derivatives",
      "Option Pricing",
      "Risk Management",
      "Portfolio Optimization",
      "Stochastic Finance",
      "Financial Time Series",
      "Actuarial Science",
      "Insurance Mathematics",
      "Credit Risk Modelling",
      "Cryptocurrency and Blockchain Mathematics"
    ]
  },
  {
    title: "12. Cryptography and Information Security",
    subtopics: [
      "Mathematical Cryptography",
      "Number-Theoretic Cryptography",
      "Elliptic Curve Cryptography",
      "Post-Quantum Cryptography",
      "Coding Theory",
      "Information Theory",
      "Error-Correcting Codes",
      "Secret Sharing",
      "Secure Computation",
      "Blockchain Mathematics"
    ]
  },
  {
    title: "13. Discrete Mathematics and Computer Science",
    subtopics: [
      "Graph Theory",
      "Combinatorics",
      "Coding Theory",
      "Automata Theory",
      "Theory of Computation",
      "Algorithms",
      "Complexity Theory",
      "Discrete Optimization",
      "Network Theory",
      "Computational Geometry"
    ]
  },
  {
    title: "14. Mathematical Engineering",
    subtopics: [
      "Control Theory",
      "Robotics Mathematics",
      "Signal Processing",
      "Image Processing",
      "Communication Systems",
      "Systems Engineering",
      "Structural Mechanics",
      "Fluid Dynamics",
      "Mathematical Modelling of Smart Systems",
      "Industrial Mathematics"
    ]
  },
  {
    title: "15. Environmental and Sustainability Mathematics",
    subtopics: [
      "Climate Change Modelling",
      "Environmental Systems Analysis",
      "Renewable Energy Modelling",
      "Sustainable Resource Optimization",
      "Water Resource Modelling",
      "Air Pollution Modelling",
      "Ecological Dynamics",
      "Disaster Risk Modelling",
      "Sustainable Transportation Models",
      "Mathematics for Sustainable Development Goals"
    ]
  },
  {
    title: "16. Emerging and Interdisciplinary Research Areas",
    subtopics: [
      "Quantum Computing Mathematics",
      "Quantum Information Theory",
      "Network Science",
      "Complex Systems",
      "Mathematical Neuroscience",
      "Digital Twins",
      "Mathematics of the Metaverse",
      "Blockchain and Distributed Systems",
      "Mathematical Epidemiology",
      "Computational Social Science",
      "Sports Analytics",
      "Mathematics in Economics and Policy",
      "Mathematical Foundations of Artificial General Intelligence"
    ]
  }
];

function TrackCard({ track }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-white text-secondary rounded-xl shadow-md border border-gray-100 flex flex-col transition hover:shadow-lg">
      <CardContent className="p-6 flex flex-col h-full">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center gap-4 cursor-pointer select-none group border-b border-gray-100 pb-3"
        >
          <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
            {track.title}
          </h3>
          <div className="p-1 group-hover:bg-gray-100 rounded-full transition-colors">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
        
        {isOpen && (
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm mt-4 animate-in fade-in slide-in-from-top-1 duration-200">
            {track.subtopics.map((sub, i) => (
              <li key={i}>{sub}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export default function Tracks() {
  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="container mx-auto px-6 md:px-10">
        {/* Themes Section */}
        <SectionHeader title="Themes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 mb-20">
          {TRACKS.map((track) => (
            <Card key={track.name} className="bg-secondary text-white rounded-xl shadow-lg transition hover:scale-[1.03] border-none">
              <CardContent className="px-6 py-8 text-lg font-semibold text-center flex items-center justify-center min-h-[120px]">
                {track.name}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300/40 my-16" />

        {/* Tracks Section */}
        <SectionHeader title="Tracks" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {CONFERENCE_TRACKS.map((track) => (
            <TrackCard key={track.title} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}
