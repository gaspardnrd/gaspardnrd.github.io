/*
 * ==========================================================
 *  TES PROJETS — c'est le SEUL fichier à modifier pour en
 *  ajouter, retirer ou changer un projet.
 * ==========================================================
 *  Champs :
 *   titre       (obligatoire)
 *   categorie   sert aux boutons de filtre
 *   annee       ex. "2025"
 *   cadre       ex. "Projet encadré — ENSAM Metz"
 *   resume      1–2 phrases affichées sur la carte
 *   description texte long de la fenêtre de détail
 *               (chaque ligne vide = nouveau paragraphe)
 *   technos     liste de technologies / méthodes
 *   image       chemin vers une image dans assets/images/ (facultatif)
 *   liens       liste de { texte, url } : rapport PDF, code, vidéo…
 */
const PROJETS = [
  {
    titre: "Allocation inclusive des tâches",
    categorie: "Recherche",
    annee: "2025 – 2026",
    cadre: "Projet encadré par un laboratoire — ENSAM Metz",
    resume:
      "Un modèle d'affectation des tâches qui tient compte des capacités fonctionnelles variables des opérateurs.",
    description:
      "Contexte : dans un système de production, tous les opérateurs n'ont pas les mêmes capacités fonctionnelles. L'objectif est de répartir les tâches de façon à rester productif tout en étant équitable.\n\n" +
      "Démarche : modélisation du système par la théorie des graphes et des outils stochastiques (chaînes de Markov, réseaux de Petri) pour rendre la planification plus robuste.\n\n" +
      "Résultats : une simulation multi-agents sous AnyLogic permet de comparer les scénarios d'affectation selon la productivité et l'équité opérationnelle.\n\n" +
      "[Ajoute ici ta contribution personnelle, un chiffre clé et ce que tu en retiens.]",
    technos: ["Théorie des graphes", "Chaînes de Markov", "Réseaux de Petri", "AnyLogic"],
    image: "",
    liens: []
  },
  {
    titre: "Projet entrepreneuriat avec Medusa",
    categorie: "Innovation",
    annee: "2024 – 2025",
    cadre: "Projet de groupe — ENSAM Metz, avec la start-up Medusa",
    resume:
      "Conception d'un concept innovant pour le marché de la moto électrique, en partenariat avec une start-up française.",
    description:
      "Contexte : Medusa est une start-up française de motos électriques. Notre équipe devait proposer un concept d'innovation pour ce marché.\n\n" +
      "Démarche : brainstorming, étude de marché, analyse croisée puis synthèse pour converger vers un concept.\n\n" +
      "[Décris le concept retenu, ton rôle dans l'équipe et le retour de la start-up.]",
    technos: ["Étude de marché", "Idéation", "Gestion de projet"],
    image: "",
    liens: []
  },
  {
    titre: "TIPE : optimisation des files d'attente",
    categorie: "Modélisation",
    annee: "2023 – 2024",
    cadre: "TIPE — Classes préparatoires, lycée Lakanal",
    resume:
      "Optimiser l'espace, l'effectif et le temps d'attente dans un système client–serveur.",
    description:
      "Problématique : comment dimensionner un système de file d'attente (nombre de serveurs, espace) pour réduire le temps d'attente ?\n\n" +
      "Méthode : modélisation par des processus de Markov à temps continu, puis simulations numériques en Python pour valider le modèle.\n\n" +
      "[Ajoute tes résultats principaux, un graphique et le lien vers ton diaporama ou ton code.]",
    technos: ["Python", "Processus de Markov", "Simulation"],
    image: "",
    liens: []
  }
];
