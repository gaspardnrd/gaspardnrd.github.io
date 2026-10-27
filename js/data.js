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
  linkedin: "https://www.linkedin.com/in/gaspard-nordin-a32736345",
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
    period: "Sep — Dec 2025",
    context: "Research project, team of 5 · Arts et Métiers",
    summary: "Modelling a production workshop where operators differ in capability and fatigue, to compare task-allocation strategies on both performance and fairness.",
    details: [
      "Context — Companies must combine productivity with well-being and inclusion (CSR, and in France the obligation for firms with 20+ employees to employ at least 6% of workers with disabilities). The project asks how task allocation can account for the diversity of operators without degrading the performance of the production system.",
      "System — A workshop (applied to watchmaking assembly) with three operators who can all perform every operation, but with different capabilities and a fatigue level that changes over time. Products of random complexity arrive with random demand.",
      "Why not a single Markov chain — Representing the whole system as one chain leads to a state-space explosion: with only 5 products and 3 levels of fatigue, capability and complexity, there are more than a billion states. Fatigue also depends on past effort, which breaks the Markov property.",
      "Hybrid model — Product arrivals as an M/M/1 queue (Poisson arrivals, exponential service) handled by a supervisor agent; a bounded fatigue law dF/dt = Va(1−F) − Vr·F, with accumulation and recovery rates set by task strain (fuzzy logic); stochastic Petri nets for events and synchronisation; and a multi-agent model where each operator is an autonomous agent.",
      "Evaluation framework — Performance indicators (throughput, lead time, waiting time, WIP, utilisation, workload balance, fatigue) and four allocation strategies: first in first served, least-tired operator, most-skilled operator, and most-skilled with forced rest above a fatigue threshold. No strategy is optimal in every respect: throughput and fairness pull in opposite directions.",
      "My contribution — I carried out the first phase of the project, documented in the report below: building this modelling framework. The project then continued with numerical simulations and an agent-based model in AnyLogic."
    ],
    tags: ["Queueing theory", "Markov chains", "Poisson process", "Stochastic Petri nets", "Fatigue modelling", "Multi-agent systems", "AnyLogic"],
    image: "assets/images/task-allocation/workshop.png",
    gallery: [
      { src: "assets/images/task-allocation/workshop.png", caption: "The workshop: products of random complexity and demand are allocated to three operators, each with their own capability and a fatigue level that evolves over time." },
      { src: "assets/images/task-allocation/markov-queue.jpg", caption: "Product arrivals modelled as a Markovian queue: Poisson arrivals and exponential service times." },
      { src: "assets/images/task-allocation/poisson.png", caption: "Poisson process: random arrival times (left) and the distribution of the number of tasks per interval (right)." },
      { src: "assets/images/task-allocation/petri-net.png", caption: "A stochastic Petri net, used to represent events, resources and synchronisation." },
      { src: "assets/images/task-allocation/architecture.png", caption: "Final architecture: the M/M/1 queue feeds a supervisor agent, which allocates tasks to the assembly agents based on their skill, fatigue and work capacity." }
    ],
    featured: true,
    links: [{ text: "Read the phase 1 report (PDF, in French)", url: "assets/docs/inclusive-task-allocation.pdf" }]
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
    title: "Automated Warehouse Simulation",
    category: "Programming",
    period: "Spring 2025",
    context: "Object-oriented programming project, team of 2 · Arts et Métiers",
    summary: "An object-oriented Python simulation of an automated warehouse, where robots, ejectors and a conveyor move products to the exit under the control of a central coordinator.",
    details: [
      "Brief — Simulate the flow of goods on a warehouse grid. Products leave a fixed storage zone, are carried by type-1 robots to temporary zones, then by type-2 robots to ejectors that feed a conveyor leading to the exit. Every action takes one cycle and must be approved by a central coordinator, which checks capacities and prevents collisions.",
      "Object model — One class per entity (Product, FixedZone, TemporaryZone, Ejector, Conveyor), a Robot base class with two specialised subclasses, and a Centralisateur that receives and validates every request. Typed attributes, accessors and mutators throughout.",
      "Coordination — The coordinator gives each robot the nearest available target (Manhattan distance), skipping targets already chosen by another robot. The conveyor moves products one cell per cycle towards the exit, nearest product first, within its maximum capacity.",
      "Path finding — Robots move in four directions only. A breadth-first search finds the shortest path to the target, treating other robots and fixed structures as obstacles and trying the directions that lead towards the goal first.",
      "Configuration and outputs — The warehouse is loaded from an XML file and displayed with Tkinter, with a heatmap of the most-used cells, distance statistics per robot and a movement log saved to a file.",
      "My contribution — I handled the programming of the simulation (classes, coordinator logic and path finding); my teammate handled the configuration and display part."
    ],
    tags: ["Python", "Object-oriented programming", "Inheritance", "Breadth-first search", "XML", "Tkinter"],
    image: "assets/images/warehouse/warehouse-level3.svg",
    gallery: [
      { src: "assets/images/warehouse/warehouse-level3.svg", caption: "The level 3 warehouse (entrepot_niveau_3.xml): 15 products, 5 type-1 and 5 type-2 robots, 2 temporary zones and 3 ejectors feeding the conveyor." },
      { src: "assets/images/warehouse/flow.svg", caption: "How a product flows through the warehouse, with every action approved by the coordinator." },
      { src: "assets/images/warehouse/bfs-path.svg", caption: "Example of the path-finding logic: the shortest four-direction path found by breadth-first search on a sample grid, avoiding other robots and fixed structures." }
    ],
    featured: false,
    links: []
  },
  {
    title: "Modular Electric Motorcycle",
    category: "Entrepreneurship",
    period: "Oct 2024 — Jan 2025",
    context: "PEIT (Entrepreneurship & Technological Innovation track), team of 3 · Arts et Métiers",
    summary: "Which innovation could help electric motorcycles take off? A data-driven concept for a modular motorcycle that reconfigures itself for each use.",
    details: [
      "Problem — Electric motorcycles are held back by range, price and charging, but also by rigidity of use: most simply copy combustion models, while riders range from city commuters to tourers and off-road riders. Our question: which innovation would let this segment thrive?",
      "Choosing the topic — A brainstorm produced about fifty ideas (mind map). Five recurring themes were scored on innovation, usefulness, feasibility and originality; modularity of use came out on top.",
      "Market study — The French market for motorcycles over 125 cc reached 202,553 registrations in 2024 (+2.5%), and the global electric motorcycle market was worth about $37 billion in 2023. A Pareto analysis of uses showed that road rides, commuting and travel account for over 65% of use cases.",
      "From uses to specifications — We mapped 10 uses, 23 usage constraints and 20 adjustable technical characteristics, built two scoring matrices (usage → constraint from 0 to 3, constraint → characteristic from −2 to +2), and multiplied them (weighted cross-analysis) to score each characteristic for each use.",
      "Calibration — A market benchmark gave the real range of each characteristic (e.g. wheelbase 1,200–1,600 mm, seat height 750–900 mm). Linear interpolation turned scores into target values, e.g. a 1,530 mm wheelbase and 25° rake for commuting. An interactive Excel model compares these targets with what each motorcycle category can offer.",
      "Concept — Six modules: sliding and pivoting handlebar, adjustable or interchangeable seat, movable footrests, variable-pressure suspension, clip-on bodywork and a suitcase-format removable battery. The adjustable handlebar alone covers 8 of the 10 uses, and the five main modules together cover over 90% of the needs identified.",
      "My contribution — I carried out the state-of-the-art study (with a teammate) and wrote and edited the final report."
    ],
    tags: ["Design thinking", "Market study", "Value analysis", "Weighted multi-criteria analysis", "Pareto analysis", "Excel modelling", "Product design"],
    image: "assets/images/motorcycle/wheelbase-module.jpg",
    gallery: [
      { src: "assets/images/motorcycle/mind-map.png", caption: "Mind map from the initial brainstorm: about fifty topics around the electric motorcycle." },
      { src: "assets/images/motorcycle/uses-pareto.png", caption: "Pareto chart of motorcycle uses: road rides, commuting and travel make up over 65% of use cases." },
      { src: "assets/images/motorcycle/weighted-matrix.png", caption: "Weighted cross-analysis: the score of each technical characteristic for each use." },
      { src: "assets/images/motorcycle/dynamic-model.png", caption: "Interactive model: for a chosen category (here roadster) and use (here road ride), the green band shows what the category can offer and the red mark the target value." },
      { src: "assets/images/motorcycle/wheelbase-module.jpg", caption: "Proposed module for adjusting the wheelbase and the rake." },
      { src: "assets/images/motorcycle/handlebar-module.png", caption: "Proposed module for adjusting handlebar width and orientation." }
    ],
    featured: false,
    links: [{ text: "Read the full report (PDF, in French)", url: "assets/docs/electric-motorcycle-report.pdf" }]
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
    role: "Site Operations Intern (worker internship) — Formwork",
    place: "Paris",
    points: [
      "Worked on the interfaces between the EOLE extension (RER E) and Line 15 of the Grand Paris Express.",
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
    period: "Sep 2024 — Sep 2027",
    school: "Arts et Métiers Institute of Technology (ENSAM)",
    degree: "Diplôme d'Ingénieur — Generalist Engineering Degree (Programme Grande École), double degree with the MSc KIMP",
    place: "Metz · Paris",
    description: "Arts et Métiers, a founding school of ParisTech, is renowned for its excellence in mechanical and industrial engineering. Its demanding curriculum pairs fundamental physics with hands-on industrial practice. Pursued in parallel with the MSc KIMP.",
    points: [
      "Exchange semester at Universiti Teknologi PETRONAS, Malaysia (Mar — Aug 2026). Main courses: oilfield and process-related corrosion, condition-based monitoring and analysis, mechatronics, control systems, and building air-conditioning systems."
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
      "A 4-hour written exam and 2 to 3 one-hour oral examinations (khôlles) every week.",
      "Admitted to Arts et Métiers through the French national competitive entrance examination."
    ],
    skills: [
      "Linear algebra", "Real & complex analysis", "Probability",
      "Classical mechanics", "Electromagnetism", "Thermodynamics", "Optics & waves"
    ]
  }
];

const SKILLS = {
  "Modelling": ["Markov chains", "Queueing theory", "Stochastic Petri nets", "Multi-agent simulation", "Kriging"],
  "Methods": ["Design of experiments (Taguchi)", "Gauge R&R / ANOVA", "Robust optimisation", "Genetic algorithms", "Weighted multi-criteria analysis"],
  "Tools": ["Python", "AnyLogic", "Excel", "LaTeX", "Microsoft Office"],
  "Languages": ["French (native)", "English (C1)", "Spanish (B1)", "Chinese (beginner)"]
};
