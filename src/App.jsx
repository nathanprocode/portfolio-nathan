import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Palette,
  Code2,
  Layers,
  Linkedin,
  Instagram,
  Link as LinkIcon,
  Mail,
  MonitorSmartphone,
  Figma,
  MousePointerClick,
  Send,
  X,
  PenTool,
  Megaphone,
  Sparkles,
  MapPin,
  LayoutTemplate,
  Terminal,
  Framer,
  CheckCircle2,
} from "lucide-react";

// ==========================================
// 1. BASES DE DONNÉES
// ==========================================

// Projets Principaux (Modal)
const projectsData = [
  {
    id: 1,
    title: "Quadraré",
    category: "UI/UX • Design System • Intégration",
    image: "/quadrare.jpg",
    tools: ["Wordpress", "Elementor", "Adobe XD"],
    description:
      "Une refonte complète de l'expérience utilisateur pour une application de gestion de finances personnelles. L'objectif était de simplifier la vue des dépenses tout en gardant un design premium et rassurant.",
  },
  {
    id: 2,
    title: "Kfz Gutachter",
    category: "UX Research • Web App • Intégration",
    image: "/kfz.jpg",
    tools: ["Figma", "Wordpress", "Elementor"],
    description:
      "Création d'un tableau de bord SaaS pour les vendeurs en ligne. Focus particulier sur la visualisation des données complexes et l'accessibilité des actions rapides.",
  },
  {
    id: 3,
    title: "Jennifer Meyer",
    category: "Web Design • Framer",
    image: "/jennifer.jpg",
    tools: ["Framer", "Wordpress"],
    description:
      "Design et intégration d'une landing page à fort taux de conversion pour une nouvelle banque en ligne ciblant la génération Z.",
  },
  {
    id: 4,
    title: "Batiamo",
    category: "Mobile App • UI Design",
    image: "/Batiamo.jpg",
    tools: ["Adobe XD", "Elementor", "Wordpress"],
    description:
      "Interface mobile connectée à une montre intelligente pour le suivi de la fréquence cardiaque et du sommeil, avec un mode sombre optimisé.",
  },
];

// Autres réalisations (Animation Marquee / Mur de projets)
const otherProjects = [
  {
    id: 101,
    title: "Bergerac - Site de la halle",
    url: "https://www.halle-bergerac.fr/",
    image: "/bergerac.jpg",
    color: "bg-emerald-500",
  },
  {
    id: 102,
    title: "Alliance expo",
    url: "https://alliance-expo.com/",
    image: "/alliance.jpg",
    color: "bg-orange-500",
  },
  {
    id: 103,
    title: "Le 1896 - Restaurant",
    url: "https://www.le1896bergerac.fr/",
    image: "/1886.jpg",
    color: "bg-blue-400",
  },
  {
    id: 104,
    title: "Ferme du Burgeaud",
    url: "https://fermeburgaud.fr/",
    image: "/burgeaud.jpg",
    color: "bg-purple-400",
  },
  {
    id: 105,
    title: "Lhomme et fils TP",
    url: "https://lhomme-fils.fr/",
    image: "/hommefils.jpg",
    color: "bg-slate-500",
  },
  {
    id: 106,
    title: "STAD Bergerac",
    url: "https://stad-termite.com/",
    image: "/stad2.jpg",
    color: "bg-green-400",
  }, // Note: j'ai ajouté le / devant stad2.jpg pour éviter les bugs
];

// Plans tarifaires (Page Pricing)
const pricingPlans = [
  {
    title: "Landing Page",
    price: "799 €",
    description:
      "Un site d'une page percutant. Idéal pour valider une idée, lancer un produit ou capturer des leads rapidement.",
    features: [
      "Atelier de cadrage (1h)",
      "Design UI/UX sur-mesure",
      "Intégration et développement",
      "Optimisation mobile et SEO",
      "Formulaire de contact",
      "Livraison sous 2 semaines",
    ],
    isPopular: false,
  },
  {
    title: "Site Vitrine Pro",
    price: "1 500 €",
    description:
      "L'outil parfait pour asseoir la crédibilité de votre entreprise avec plusieurs pages et un design mémorable.",
    features: [
      "Tout le pack Landing Page",
      "Jusqu'à 5 pages (Accueil, À propos, Services...)",
      "Design System complet",
      "Animations avancées (Scroll, Hover)",
      "Formation à la prise en main (1h)",
      "Support post-lancement (30 jours)",
    ],
    isPopular: true, // Cette option aura le style sombre mis en avant
  },
  {
    title: "App & Sur-mesure",
    price: "Sur devis",
    description:
      "Pour des besoins complexes, boutiques en ligne, interfaces SaaS ou refonte totale de votre marque.",
    features: [
      "Recherche Utilisateur (UX)",
      "Parcours utilisateurs complexes",
      "Prototypage interactif",
      "Design System évolutif",
      "Tests utilisateurs",
      "Accompagnement long terme",
    ],
    isPopular: false,
  },
];

// Textes légaux
const legalTexts = {
  mentions: {
    title: "Mentions Légales",
    content: (
      <div className="space-y-6">
        <p>
          Éditeur : Nathan Vulpiani, UI/UX Designer.
          <br />
          Contact : nathan.procode@gmail.com
        </p>
        <p>Hébergement : Ce site est hébergé par Vercel Inc.</p>
      </div>
    ),
  },
  cgu: {
    title: "Conditions Générales d'Utilisation",
    content: (
      <div className="space-y-6">
        <p>
          L'utilisation du site implique l'acceptation pleine et entière des
          conditions générales d'utilisation ci-après décrites.
        </p>
        <p>
          Toute reproduction, représentation ou modification est interdite sauf
          autorisation écrite.
        </p>
      </div>
    ),
  },
  cookies: {
    title: "Politique de Cookies",
    content: (
      <div className="space-y-6">
        <p>
          Un cookie est un fichier qui enregistre des informations relatives à
          la navigation sur un site.
        </p>
        <p>
          Actuellement, ce site n'utilise que des cookies techniques strictement
          nécessaires à son bon fonctionnement.
        </p>
      </div>
    ),
  },
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const BentoCard = ({ children, className = "", noHover = false }) => {
  const hoverEffects = noHover
    ? {}
    : {
        scale: 1.02,
        borderColor: "#0b25e9",
        boxShadow: "0 20px 40px -10px rgba(11, 37, 233, 0.1)",
      };
  return (
    <motion.div
      variants={itemVariants}
      whileHover={hoverEffects}
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 transition-colors duration-300 ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

const SectionTitle = ({ children }) => (
  <motion.h2
    variants={itemVariants}
    className="mb-10 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
  >
    <span className="text-[#0b25e9]">/</span> {children}
  </motion.h2>
);

// ==========================================
// COMPOSANT PRINCIPAL
// ==========================================
function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePage, setActivePage] = useState("home");

  if (selectedProject) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  // Scroll Animations (Home)
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const yGraphic = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityGraphic = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Scroll Animations (Marquee / Mur de projets)
  const showcaseRef = useRef(null);
  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const xMoveLeft = useTransform(showcaseScroll, [0, 1], ["0%", "-15%"]);
  const xMoveRight = useTransform(showcaseScroll, [0, 1], ["-15%", "0%"]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 selection:bg-[#0b25e9] selection:text-white overflow-x-hidden font-sans relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        .noise-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 40; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
      `}</style>
      <div className="noise-overlay"></div>

      {/* --- FENÊTRE MODALE PROJETS --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-3 bg-white/80 backdrop-blur-md text-slate-900 rounded-full hover:bg-[#0b25e9] hover:text-white transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
              <div className="w-full h-64 sm:h-96 bg-slate-100 relative">
                <div className="absolute inset-0 bg-[#0b25e9]/5 z-10 mix-blend-multiply"></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 sm:p-12">
                <div className="text-[#0b25e9] font-bold text-sm uppercase tracking-wider mb-3">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-8">
                  <span className="text-sm font-semibold text-slate-900 mr-2 flex items-center">
                    Outils utilisés :
                  </span>
                  {selectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <header className="fixed top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div
            onClick={() => navigateTo("home")}
            className="font-bold text-[#0b25e9] text-2xl tracking-tighter cursor-pointer transition-transform hover:scale-105"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            NV.
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <button
              onClick={() => navigateTo("home")}
              className="hover:text-[#0b25e9] transition-colors"
            >
              Portfolio
            </button>
            {/* Nouveau bouton Tarifs ajouté au header ! */}
            <button
              onClick={() => navigateTo("pricing")}
              className="hover:text-[#0b25e9] transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => {
                navigateTo("home");
                setTimeout(
                  () =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" }),
                  100
                );
              }}
              className="hover:text-[#0b25e9] transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* --- AFFICHAGE CONDITIONNEL DES PAGES --- */}

      {/* 1. PAGE D'ACCUEIL (PORTFOLIO) */}
      {activePage === "home" && (
        <main className="container mx-auto px-6 pt-24 pb-24">
          <motion.section
            ref={targetRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-12 py-20"
          >
            <div className="flex-1 space-y-6 text-center lg:text-left z-10">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center rounded-full border border-[#0b25e9]/20 bg-[#0b25e9]/5 px-3 py-1 text-sm text-[#0b25e9] font-medium"
              >
                <span className="mr-2 relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b25e9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0b25e9]"></span>
                </span>
                Disponible pour de nouveaux projets
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-7xl lg:leading-[1.1]"
              >
                Salut, je suis <br className="hidden sm:block" />
                <span className="text-[#0b25e9]">Nathan Vulpiani</span>.
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-medium text-slate-500"
              >
                <span className="text-slate-900 font-bold">UI/UX Designer</span>{" "}
                de 25 ans créant des expériences numériques mémorables.
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 py-3 font-bold text-white transition-all hover:bg-[#0b25e9] hover:shadow-lg hover:shadow-[#0b25e9]/30"
                >
                  <span className="relative z-10 flex items-center">
                    Voir mes travaux{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.div>
            </div>
            <div className="flex-1 relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[600px]">
              <motion.div
                style={{ y: yGraphic, opacity: opacityGraphic }}
                className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl relative"
              >
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src="/nathan-portrait.jpg"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              <div className="absolute -inset-4 -z-10 blur-3xl bg-[#0b25e9]/10 rounded-full opacity-60"></div>
            </div>
          </motion.section>

          <section id="about" className="py-24 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionTitle>À propos de moi</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-[auto_auto]">
                <BentoCard className="md:col-span-2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-[#0b25e9]">
                    Au carrefour du design et de la technologie.
                  </h3>
                  <p className="text-lg text-slate-600">
                    Je ne me contente pas de rendre les choses jolies. Je
                    conçois des interfaces intuitives qui résolvent de vrais
                    problèmes. Mon approche combine une recherche UX rigoureuse
                    avec une exécution UI au pixel près.
                  </p>
                </BentoCard>
                <BentoCard className="md:row-span-2 flex flex-col">
                  <div className="h-12 w-12 rounded-full bg-[#0b25e9]/10 flex items-center justify-center mb-6 text-[#0b25e9]">
                    <Palette size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Ma Vision
                  </h3>
                  <p className="mb-6 flex-grow text-slate-600">
                    Je crois au design qui s'efface pour laisser place au
                    contenu. Le minimalisme n'est pas une absence de design,
                    c'est la forme la plus pure de la fonctionnalité.
                  </p>
                </BentoCard>
                <BentoCard className="flex flex-col items-center justify-center text-center">
                  <div className="text-6xl font-extrabold text-[#0b25e9] leading-none">
                    25
                  </div>
                  <span className="text-sm uppercase tracking-widest font-bold pt-2 text-slate-400">
                    Ans d'énergie
                  </span>
                </BentoCard>
                <BentoCard className="flex flex-col items-center justify-center text-center">
                  <div className="p-3 bg-[#0b25e9]/10 text-[#0b25e9] rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Basé en France</h4>
                  <span className="text-sm text-slate-500 mt-1">
                    Dispo en Remote
                  </span>
                </BentoCard>
                <BentoCard className="md:col-span-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Layers className="mr-2 text-[#0b25e9]" size={20} /> Outils
                    de prédilection
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: "Figma", icon: Figma },
                      { name: "WordPress", icon: LayoutTemplate },
                      { name: "Framer", icon: Framer },
                      { name: "Coder de zéro", icon: Terminal },
                    ].map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 rounded-xl bg-slate-50 p-3 border border-slate-100 hover:border-[#0b25e9]/30 hover:bg-[#0b25e9]/5 transition-colors"
                      >
                        <tool.icon size={18} className="text-[#0b25e9]" />
                        <span className="font-semibold text-slate-700">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </BentoCard>
                <BentoCard className="md:col-span-3 mt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Sparkles className="mr-2 text-[#0b25e9]" size={20} /> Mes
                    champs d'expertise
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0b25e9]/30 transition-colors group">
                      <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <MonitorSmartphone
                          className="text-[#0b25e9]"
                          size={24}
                        />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        UI/UX Design
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Création d'interfaces web et mobiles intuitives,
                        esthétiques et centrées sur l'utilisateur.
                      </p>
                    </div>
                    <div className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0b25e9]/30 transition-colors group">
                      <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <PenTool className="text-[#0b25e9]" size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        Identité Visuelle
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Conception de logos marquants, chartes graphiques
                        complètes et branding sur-mesure.
                      </p>
                    </div>
                    <div className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0b25e9]/30 transition-colors group">
                      <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Megaphone className="text-[#0b25e9]" size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        Communication Digitale
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Déclinaison de vos supports de communication pour le web
                        (réseaux) et le print.
                      </p>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </motion.div>
          </section>

          {/* SECTION PROJETS PRINCIPAUX */}
          <section id="projects" className="pt-24 pb-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionTitle>Études de cas</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-200 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* MUR DE PROJETS (MARQUEE) */}
          <section ref={showcaseRef} className="py-12 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12">
              <h3 className="text-2xl font-bold text-slate-900">
                D'autres créations qui marquent les esprits.
              </h3>
              <p className="text-slate-500 mt-2">
                Cliquez pour visiter les sites en direct.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 w-[400vw] sm:w-[200vw] -ml-[150vw] sm:-ml-[50vw]">
              <motion.div
                style={{ x: xMoveLeft }}
                className="flex gap-4 sm:gap-6 px-6"
              >
                {[...otherProjects, ...otherProjects].map((proj, idx) => (
                  <a
                    key={idx}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shrink-0 w-64 h-40 sm:w-80 sm:h-56 md:w-96 md:h-64 ${proj.color} rounded-2xl p-2 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden relative group">
                      <div className="absolute inset-0 bg-slate-900/0 md:group-hover:bg-slate-900/10 transition-colors z-10 flex items-center justify-center">
                        <div className="bg-white text-slate-900 font-bold px-3 py-1.5 text-sm sm:text-base sm:px-4 sm:py-2 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 shadow-lg">
                          Visiter le site
                        </div>
                      </div>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                ))}
              </motion.div>
              <motion.div
                style={{ x: xMoveRight }}
                className="flex gap-4 sm:gap-6 px-6"
              >
                {[...otherProjects]
                  .reverse()
                  .concat([...otherProjects].reverse())
                  .map((proj, idx) => (
                    <a
                      key={`rev-${idx}`}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`shrink-0 w-64 h-40 sm:w-80 sm:h-56 md:w-96 md:h-64 ${proj.color} rounded-2xl p-2 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="w-full h-full bg-white rounded-xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-slate-900/0 md:group-hover:bg-slate-900/10 transition-colors z-10 flex items-center justify-center">
                          <div className="bg-white text-slate-900 font-bold px-3 py-1.5 text-sm sm:text-base sm:px-4 sm:py-2 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 shadow-lg">
                            Visiter le site
                          </div>
                        </div>
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </a>
                  ))}
              </motion.div>
            </div>
          </section>

          {/* SECTION CONTACT */}
          <section id="contact" className="py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 sm:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0b25e9] rounded-full blur-3xl opacity-10 pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                      Prêt à créer quelque chose{" "}
                      <span className="text-[#0b25e9]">d'exceptionnel ?</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                      Remplissez ce formulaire et je vous répondrai dans les
                      plus brefs délais.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://www.linkedin.com/in/nathan-vulpiani-a3672421b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl bg-slate-50 text-slate-600 hover:bg-[#0b25e9] hover:text-white transition-all border border-slate-100"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href="https://www.instagram.com/vulpiani_nathan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl bg-slate-50 text-slate-600 hover:bg-[#0b25e9] hover:text-white transition-all border border-slate-100"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="mailto:nathan.procode@gmail.com"
                        className="p-4 rounded-xl bg-slate-50 text-slate-600 hover:bg-[#0b25e9] hover:text-white transition-all border border-slate-100"
                      >
                        <Mail size={24} />
                      </a>
                      <a
                        href="https://taap.bio/nathanvulpiani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl bg-slate-50 text-slate-600 hover:bg-[#0b25e9] hover:text-white transition-all border border-slate-100"
                      >
                        <LinkIcon size={24} />
                      </a>
                    </div>
                  </div>
                  <form
                    action="https://formspree.io/f/mbdapreb"
                    method="POST"
                    className="flex flex-col space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nom Prénom"
                        required
                        className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0b25e9] outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="hello@votre-entreprise.com"
                        required
                        className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0b25e9] outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        rows="4"
                        required
                        className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0b25e9] outline-none transition-all text-slate-900 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="group w-full p-4 rounded-xl bg-[#0b25e9] text-white font-bold flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
                    >
                      Envoyer le message{" "}
                      <Send
                        size={18}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      )}

      {/* 2. PAGE TARIFS (PRICING) */}
      {activePage === "pricing" && (
        <main className="container mx-auto px-6 pt-32 pb-24 min-h-screen">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold text-slate-900 mb-6"
            >
              Forfaits & <span className="text-[#0b25e9]">Tarifs</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Je conçois des solutions adaptées à vos objectifs. Choisissez la
              formule qui correspond à l'étape de votre entreprise.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          >
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative flex flex-col p-8 rounded-[2rem] border ${
                  plan.isPopular
                    ? "bg-slate-900 border-slate-800 text-white shadow-2xl shadow-[#0b25e9]/20 scale-105 z-10"
                    : "bg-white border-slate-200 text-slate-900 shadow-xl"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#0b25e9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Le plus demandé
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div
                  className={`text-4xl font-extrabold mb-4 ${
                    plan.isPopular ? "text-white" : "text-[#0b25e9]"
                  }`}
                >
                  {plan.price}
                </div>
                <p
                  className={`mb-8 flex-grow ${
                    plan.isPopular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle2
                        className={`shrink-0 mr-3 h-5 w-5 ${
                          plan.isPopular ? "text-[#0b25e9]" : "text-emerald-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.isPopular ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    navigateTo("home");
                    setTimeout(
                      () =>
                        document
                          .getElementById("contact")
                          .scrollIntoView({ behavior: "smooth" }),
                      100
                    );
                  }}
                  className={`w-full py-4 rounded-xl font-bold transition-transform hover:scale-105 ${
                    plan.isPopular
                      ? "bg-[#0b25e9] text-white hover:shadow-lg hover:shadow-[#0b25e9]/50"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Réserver un appel
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Section d'infos supp. (Style Luke Netti) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Modalités de paiement
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Un acompte de 50% est demandé pour valider et démarrer le
                projet. Les 50% restants seront facturés le jour de la mise en
                ligne ou de la livraison finale des fichiers. Les paiements se
                font par virement bancaire.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Support & Suivi
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Votre réussite m'importe ! C'est pourquoi chaque forfait web
                inclut une garantie de suivi après le lancement. Si vous
                rencontrez un bug ou avez une question d'utilisation, je suis là
                pour vous aider.
              </p>
            </div>
          </motion.div>
        </main>
      )}

      {/* 3. PAGES LÉGALES */}
      {["mentions", "cgu", "cookies"].includes(activePage) && (
        <main className="container mx-auto px-6 pt-32 pb-24 min-h-screen">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center text-[#0b25e9] font-bold mb-8 hover:underline group"
          >
            <ArrowRight className="mr-2 h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />{" "}
            Retour au portfolio
          </button>
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-[2rem] shadow-xl border border-slate-100">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
              {legalTexts[activePage]?.title}
            </h1>
            <div className="text-slate-600 leading-relaxed">
              {legalTexts[activePage]?.content}
            </div>
          </div>
        </main>
      )}

      {/* --- FOOTER UNIVERSEL --- */}
      <footer className="container mx-auto px-6 pb-8">
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-semibold text-slate-500">
            <button
              onClick={() => navigateTo("mentions")}
              className="hover:text-[#0b25e9] transition-colors"
            >
              Mentions légales
            </button>
            <button
              onClick={() => navigateTo("cgu")}
              className="hover:text-[#0b25e9] transition-colors"
            >
              Conditions d'utilisation
            </button>
            <button
              onClick={() => navigateTo("cookies")}
              className="hover:text-[#0b25e9] transition-colors"
            >
              Politique de cookies
            </button>
          </div>
          <div className="text-center text-sm font-medium text-slate-400 mt-4">
            © {new Date().getFullYear()} Nathan Vulpiani. Conçu et codé avec
            passion.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
