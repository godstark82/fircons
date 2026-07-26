import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../common/SectionHeader";

const TRACKS = [
  {
    name: "Advancing Mathematical Frontiers",
    subtopics: [
      "Algebraic Structures and Number Theory",
      "Differential Geometry and Topology",
      "Functional Analysis and Operator Theory",
      "Nonlinear Analysis and Dynamical Systems",
    ],
  },
  {
    name: "Innovations in Mathematical Sciences",
    subtopics: [
      "Discrete Mathematics and Combinatorics",
      "Graph Theory and Network Science",
      "Probability Theory and Stochastic Processes",
      "Mathematical Logic and Foundations",
    ],
  },
  {
    name: "Mathematics for Global Challenges",
    subtopics: [
      "Mathematical Epidemiology and Public Health",
      "Climate and Environmental Modelling",
      "Optimization for Sustainable Development",
      "Financial Mathematics and Risk Analysis",
    ],
  },
  {
    name: "Future of Mathematical Research",
    subtopics: [
      "AI-Assisted Mathematical Discovery",
      "Data-Driven Mathematical Methods",
      "Interdisciplinary Research Frameworks",
      "Open Problems and Emerging Directions",
    ],
  },
  {
    name: "Emerging Trends in Mathematics",
    subtopics: [
      "Machine Learning and Mathematical Foundations",
      "Quantum Computing and Quantum Information",
      "Topological Data Analysis",
      "Cryptography and Coding Theory",
    ],
  },
  {
    name: "Frontiers of Pure Mathematics",
    subtopics: [
      "Algebraic Geometry and Commutative Algebra",
      "Analytic Number Theory",
      "Representation Theory",
      "Homological Algebra and Category Theory",
    ],
  },
  {
    name: "Applied Mathematics for Innovation",
    subtopics: [
      "Industrial and Engineering Mathematics",
      "Control Theory and Systems Engineering",
      "Operations Research and Decision Science",
      "Image Processing and Signal Analysis",
    ],
  },
  {
    name: "Mathematics Driving Discovery",
    subtopics: [
      "Mathematical Physics",
      "Biomathematics and Systems Biology",
      "Statistical Learning and Inference",
      "Scientific Computing for Discovery",
    ],
  },
  {
    name: "Mathematical Models and Applications",
    subtopics: [
      "Differential Equations and Modelling",
      "Numerical Methods and Approximation Theory",
      "Multiscale and Multiphysics Models",
      "Inverse Problems and Parameter Estimation",
    ],
  },
  {
    name: "Computational Mathematics Revolution",
    subtopics: [
      "High-Performance Scientific Computing",
      "Numerical Linear Algebra",
      "Computational Fluid Dynamics",
      "Algorithm Design and Complexity",
    ],
  },
];

export default function Tracks() {
  return (
    <section className="bg-[#f5f7fa] py-16">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader title="Themes" />
        <Accordion type="multiple" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {TRACKS.map((track) => (
            <AccordionItem key={track.name} value={track.name}>
              <Card className="bg-secondary text-white rounded-xl shadow-lg transition hover:scale-[1.03] border-none">
                <AccordionTrigger className="px-7 py-6 text-lg font-semibold text-left rounded-t-xl border-none focus:ring-2 focus:ring-secondary">
                  {track.name}
                </AccordionTrigger>
                {track.subtopics?.length > 0 && (
                  <AccordionContent>
                    <CardContent className="pl-7 pb-5">
                      <ul className="list-disc text-base space-y-2">
                        {track.subtopics.map((sub, i) => (
                          <li key={i} className="ml-4 text-white">{sub}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </AccordionContent>
                )}
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
