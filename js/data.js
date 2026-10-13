/*
 * =============================================================
 *  YOUR CONTENT — edit this file to update the whole site.
 *  (Projects, experience and education are all listed here.)
 * =============================================================
 */

const PROFILE = {
  initials: "GN",
  name: "Gaspard Nordin",
  tagline: ["Engineering Student", "Arts et Métiers"],
  email: "gaspardnordin@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile",   // ← put your real LinkedIn URL
  photo: "assets/images/photo.jpg",                        // ← add your photo with this name
  cv: "assets/cv.pdf"
};

/*  PROJECTS
 *  category  short label shown as "// CATEGORY"
 *  featured  true = shown on the Dashboard
 *  details   list of paragraphs shown when the card is opened
 *  links     [{ text, url }]  e.g. report PDF in assets/docs/
 */
const PROJECTS = [
  {
    title: "Inclusive Task Allocation",
    category: "Research",
    period: "Sep 2025 — Present",
    context: "Research-supervised project · ENSAM Metz",
    summary: "Task allocation model that accounts for operators' varying functional capabilities in a production system.",
    details: [
      "Context — In a production system, operators do not all have the same functional capabilities. The goal is to allocate tasks so that the line stays productive while remaining fair.",
      "Approach — Graph theory and stochastic modelling (Markov chains, Petri nets) to make planning more robust to variability.",
      "Results — A multi-agent simulation in AnyLogic compares allocation scenarios on productivity and operational fairness.",
      "[Add your personal contribution, one key figure and what you learned.]"
    ],
    tags: ["Graph theory", "Markov chains", "Petri nets", "AnyLogic"],
    image: "",
    featured: true,
    links: []
  },
  {
    title: "Electric Motorcycle Innovation",
    category: "Entrepreneurship",
    period: "Oct 2024 — Jun 2025",
    context: "Team project with Medusa (French e-motorcycle start-up) · ENSAM Metz",
    summary: "Innovation concept for the electric motorcycle market, developed with a French start-up.",
    details: [
      "Context — Medusa is a French electric motorcycle start-up. Our team had to propose an innovation concept for this market.",
      "Approach — Brainstorming, market study, cross-analysis and synthesis to converge on one concept.",
      "[Describe the concept, your role in the team and the start-up's feedback.]"
    ],
    tags: ["Market study", "Ideation", "Project management"],
    image: "",
    featured: false,
    links: []
  },
  {
    title: "Queueing Systems Optimisation",
    category: "Modelling",
    period: "Sep 2023 — Jun 2024",
    context: "TIPE · CPGE, Lycée Lakanal",
    summary: "Optimising space, staffing and waiting time in server–client systems.",
    details: [
      "Question — How should a queueing system (number of servers, space) be sized to reduce waiting time?",
      "Method — Continuous-time Markov processes, validated with numerical simulations in Python.",
      "[Add your main results, a chart and a link to your slides or code.]"
    ],
    tags: ["Python", "Markov processes", "Simulation"],
    image: "",
    featured: false,
    links: []
  }
];

/*  EXPERIENCE */
const EXPERIENCE = [
  {
    label: "Construction",
    period: "Jun 2025 — Jul 2025",
    title: "Chantiers Modernes Construction (VINCI)",
    role: "Construction Site Worker Intern — Formwork",
    place: "Paris",
    points: [
      "On-site immersion on a major infrastructure project (EOLE / Line 15 interfaces).",
      "Full prepare–formwork–pour–strip cycle for reinforced concrete: fibre-reinforced segments, walls, columns, foundation raft in a shaft.",
      "Read technical drawings, took measurements with surveyor support and ran visual quality checks.",
      "Coordinated with waterproofing and rebar teams on sequencing and site readiness."
    ]
  },
  {
    label: "Teaching",
    period: "Oct 2024 — Present",
    title: "Tutoring London",
    role: "Private Tutor (remote)",
    place: "Remote",
    points: [
      "Prepare high-school students for the scientific baccalauréat (maths and physics)."
    ]
  }
];

/*  EDUCATION
 *  label        small badge (e.g. "Research Master")
 *  description  short paragraph under the degree
 *  points       bullet points
 *  skills       tags shown at the bottom of the card
 */
const EDUCATION = [
  {
    label: "Research Master",
    period: "Sep 2026 — Sep 2027",
    school: "Arts et Métiers — MSc KIMP",
    degree: "Master of Science in Industrial Engineering · Knowledge Integration in Mechanical Production — Design & Manufacturing track",
    place: "Paris",
    description: "International research master taught in English, backed by the 14 laboratories and research teams of the Arts et Métiers network and designed as a pathway to doctoral research. It trains engineers to integrate product and manufacturing-process knowledge in order to reach the best global compromise rather than a locally optimal solution.",
    skills: [
      "Integrated design & manufacturing", "CAD / CAM", "Geometric modelling",
      "AI for design (rules & data)", "Mechatronics modelling & control",
      "Manufacturing process management", "Robust design & big data",
      "Digital mock-up & VR", "Decision & risk analysis"
    ]
  },
  {
    label: "Engineering Degree",
    period: "Sep 2024 — Present",
    school: "Arts et Métiers Institute of Technology (ENSAM)",
    degree: "Diplôme d'Ingénieur — Generalist Engineering Degree (Programme Grande École)",
    place: "Metz · Paris",
    description: "A founding member of ParisTech, Arts et Métiers is renowned for its excellence in mechanical and industrial engineering. Its demanding curriculum pairs fundamental physics with hands-on industrial practice. Pursued in parallel with the MSc KIMP.",
    points: [
      "Exchange semester at Universiti Teknologi PETRONAS, Malaysia (Mar — Aug 2026)."
    ],
    skills: ["Data Science", "Mechanics", "Thermodynamics", "Materials Science", "Supply Chain"]
  },
  {
    label: "Preparatory Classes",
    period: "2021 — 2024",
    school: "Lycée Lakanal",
    degree: "CPGE — Mathematics & Physics (MP)",
    place: "Sceaux",
    description: "Intensive programme in mathematics and physics preparing for the competitive entrance exams of the French Grandes Écoles d'ingénieurs.",
    points: [
      "Around 35 hours of lectures and tutorials per week.",
      "A 4-hour written exam every week.",
      "2 to 3 one-hour oral examinations (khôlles) every week.",
      "Total workload of around 60 hours per week including personal study."
    ],
    skills: [
      "Linear algebra", "Real & complex analysis", "Probability",
      "Classical mechanics", "Electromagnetism", "Thermodynamics", "Optics & waves"
    ]
  }
];

const SKILLS = {
  "Modelling": ["Graph theory", "Markov chains", "Petri nets", "Queueing theory"],
  "Tools": ["Python", "AnyLogic (multi-agent)", "LaTeX", "Microsoft Office"],
  "Languages": ["French (native)", "English (C1)", "Spanish (B1)", "Chinese (beginner)"]
};
