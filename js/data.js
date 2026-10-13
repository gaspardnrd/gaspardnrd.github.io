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
 *  gallery   [{ src, caption }]  images shown in the detail window
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
    title: "Uncertain Catapult — Robust Inverse Design",
    category: "Design of Experiments",
    period: "Dec 2025",
    context: "Team project (5 students) · Arts et Métiers — OREXA",
    summary: "Finding the settings that make a noisy catapult hit a target range: measurement validation, design of experiments, robust optimisation and kriging.",
    details: [
      "Problem — A catapult has five settings (two angles, three positions) and several sources of noise: mechanical tolerances, mass dispersion, operator gestures. The same settings never give exactly the same range, and no simple formula links inputs to output. The goal was to solve the inverse problem: which settings hit a target range of 1.95 m ± 0.10 m?",
      "Measurement validation — A gauge R&R study (ANOVA on 30 shots, 3 configurations, 2 operators) showed that repeatability and reproducibility account for less than 0.03% of the variability: over 99% comes from the settings themselves.",
      "Modelling — Designs of experiments of increasing efficiency: full factorial 2⁵ (32 runs), fractional 2⁵⁻² (8 runs, same ranking of effects), then Taguchi L8 and L25. The L25 model explains 97% of the variance (R² = 0.97) with a mean error of 0.116 m.",
      "Robust optimisation — Solving the inverse problem with Nelder–Mead on the Taguchi model. Minimising the distance to the target alone was not enough (best setting: 76% of shots in tolerance). Adding robustness, centring and tolerance criteria to the objective gave a setting with 25/25 shots in tolerance (mean 1.954 m).",
      "Alternative approach — An ordinary kriging metamodel (polynomial variogram, R² = 0.981 on the test set) coupled with a genetic algorithm, which found a candidate setting within 10⁻⁴ of the target on the metamodel.",
      "My contribution — Within the team of five, I was in charge of the data processing part of the study."
    ],
    tags: ["Gauge R&R / ANOVA", "Design of experiments", "Taguchi", "Nelder–Mead", "Kriging", "Genetic algorithm", "Python", "Excel"],
    image: "assets/images/catapult/setup.png",
    gallery: [
      { src: "assets/images/catapult/setup.png", caption: "The catapult and its five settings: release angle A1, loading angle A2, spring positions L1 and L2, mass position L3." },
      { src: "assets/images/catapult/doe-effects.png", caption: "Relative effects of the main factors: the full factorial design (32 runs) and two fractional designs (8 runs each) agree." },
      { src: "assets/images/catapult/taguchi-fit.png", caption: "Taguchi L25 model: predicted vs measured range (R² = 0.97)." },
      { src: "assets/images/catapult/validation.png", caption: "Experimental validation, 25 shots per setting: the robust setting (blue) keeps 100% of shots in the ±0.10 m tolerance band." },
      { src: "assets/images/catapult/kriging-ga.png", caption: "Alternative approach: a kriging metamodel coupled with a genetic algorithm." }
    ],
    featured: false,
    links: [{ text: "Read the full report (PDF, in French)", url: "assets/docs/catapult-report.pdf" }]
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
    title: "Markov Chains: Queues & Monopoly",
    category: "Modelling",
    period: "Sep 2023 — Jun 2024",
    context: "TIPE (individual research project) · CPGE, Lycée Lakanal",
    summary: "Continuous-time Markov processes to size queueing systems, then a discrete-time Markov chain to model Monopoly and derive winning strategies.",
    details: [
      "Question — Queues are everywhere in daily life. How can probability theory predict waiting times and help organise servers, and how far can the same tools go on a game of chance such as Monopoly?",
      "M/M/1 queue — Poisson arrivals, exponential service times, one server, FIFO. From the infinitesimal generator and the Chapman–Kolmogorov equations, I derived the steady-state distribution and the performance indicators: mean queue length L = ρ/(1−ρ) and mean time in the system W = 1/(μ(1−ρ)).",
      "Simulation — A Python simulator validated the theory: for λ = 0.2 and μ = 0.3, the theoretical time in the system is 10 s and 1,000 simulated queues gave 9.998 s.",
      "Organising servers — Comparing two separate M/M/1 queues with one shared M/M/2 queue for the same load: pooling the queue cuts the mean time in the system from 5.0 to 3.8 (−24%), confirmed by 1,000 simulations each. I also tested customers split by gender with dedicated servers.",
      "Monopoly as a Markov chain — The board's 40 squares become the states of a discrete-time chain. Three increasingly realistic models: dice only; then the jail and the three-doubles rule (120 states); then Chance and Community Chest cards. The stationary distribution shows the jail is the most visited square (about 6%), confirmed by simulation.",
      "Strategy — Combining visit probabilities with rents gives the expected gain per opponent roll for each property and the time to pay back an investment. Payback time drops sharply up to three houses and barely improves after: three houses is the sweet spot. Results also hold for short games (250 rolls)."
    ],
    tags: ["Markov chains", "Queueing theory", "Stochastic processes", "Monte Carlo simulation", "Python"],
    image: "assets/images/markov/queue-diagram.png",
    gallery: [
      { src: "assets/images/markov/queue-diagram.png", caption: "A queueing system: customers arrive, wait in the queue, are served and leave." },
      { src: "assets/images/markov/mm1-validation.png", caption: "1,000 simulated M/M/1 queues over 10 hours: the mean time in the system (9.998 s) matches the theory (10 s)." },
      { src: "assets/images/markov/mm1-surface.png", caption: "Mean waiting time as a function of the arrival rate and the service rate: it explodes as the load ρ = λ/μ approaches 1." },
      { src: "assets/images/markov/pooling.png", caption: "Two separate queues (left) vs one shared queue with two servers (right): pooling cuts the waiting time from 5.0 to 3.8." },
      { src: "assets/images/markov/board-probabilities.png", caption: "Long-run probability of landing on each Monopoly square: theory (blue) vs simulation (orange). Square 10, the jail, stands out." },
      { src: "assets/images/markov/houses-roi.png", caption: "Time to pay back an investment vs number of houses, for each colour group: little is gained beyond three houses." }
    ],
    featured: false,
    links: [{ text: "View the presentation (PDF, in French)", url: "assets/docs/markov-queues-monopoly.pdf" }]
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
      "A 4-hour written exam and 2 to 3 one-hour oral examinations (khôlles) every week."
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
