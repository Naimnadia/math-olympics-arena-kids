
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/ui/category-card";
import { DifficultySelector } from "@/components/ui/difficulty-selector";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  BarChart,
  ChevronRight,
  GraduationCap,
  Lightbulb,
  Brain,
  Calculator
} from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("beginner");

  const difficultyOptions = [
    {
      id: "beginner",
      label: "Débutant",
      icon: <Lightbulb className="h-4 w-4" />,
      color: "bg-olympiad-green",
      description: "Problèmes d'introduction, concepts de base et défis simples."
    },
    {
      id: "intermediate",
      label: "Intermédiaire",
      icon: <GraduationCap className="h-4 w-4" />,
      color: "bg-olympiad-orange",
      description: "Problèmes plus complexes nécessitant une logique avancée."
    },
    {
      id: "advanced",
      label: "Avancé",
      icon: <Brain className="h-4 w-4" />,
      color: "bg-olympiad-red",
      description: "Défis complexes de niveau olympiade pour les experts."
    }
  ];

  const categories = [
    {
      title: "Algèbre",
      description: "Équations, inéquations, polynômes et plus",
      icon: <Calculator className="h-5 w-5" />,
      color: "bg-olympiad-blue",
      progress: 45
    },
    {
      title: "Géométrie",
      description: "Formes, angles, transformations et théorèmes",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="3,18 12,4 21,18" />
      </svg>,
      color: "bg-olympiad-purple",
      progress: 30
    },
    {
      title: "Logique",
      description: "Raisonnement, déduction et résolution de puzzles",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9,10 L9,14 L15,14 L15,10 Z" />
      </svg>,
      color: "bg-olympiad-green",
      progress: 60
    },
    {
      title: "Combinatoire",
      description: "Permutations, combinaisons et probabilités",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4,10 L20,10 M10,4 L10,20" />
      </svg>,
      color: "bg-olympiad-orange",
      progress: 15
    },
    {
      title: "Théorie des nombres",
      description: "Propriétés des nombres, divisibilité et congruences",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8,12 L16,12 M12,8 L12,16" />
        <circle cx="12" cy="12" r="9" />
      </svg>,
      color: "bg-olympiad-yellow",
      progress: 25
    },
    {
      title: "Suites",
      description: "Séquences, séries et récurrences",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4,12 L7,7 L10,13 L13,9 L16,15 L19,10" />
      </svg>,
      color: "bg-olympiad-red",
      progress: 10
    }
  ];

  const handleCategoryClick = () => {
    navigate("/exercises");
  };

  // Shape animation elements
  const shapes = [
    { symbol: '+', top: '10%', left: '5%', animation: 'animate-float' },
    { symbol: '÷', top: '15%', right: '8%', animation: 'animate-spin-slow' },
    { symbol: '=', bottom: '20%', left: '7%', animation: 'animate-bounce-small' },
    { symbol: 'π', top: '30%', right: '12%', animation: 'animate-float' },
    { symbol: '∞', bottom: '25%', right: '10%', animation: 'animate-spin-slow' },
    { symbol: '√', top: '50%', left: '10%', animation: 'animate-bounce-small' },
  ];

  return (
    <>
      {/* Math symbols background */}
      {shapes.map((shape, index) => (
        <div 
          key={index}
          className={`math-shape text-5xl font-bold text-olympiad-blue/10 ${shape.animation}`}
          style={{ 
            top: shape.top, 
            left: shape.left, 
            right: shape.right, 
            bottom: shape.bottom 
          }}
        >
          {shape.symbol}
        </div>
      ))}

      {/* Hero section */}
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
              Prépare-toi pour les{" "}
              <span className="bg-gradient-to-r from-olympiad-blue to-olympiad-purple bg-clip-text text-transparent">
                Olympiades de Mathématiques
              </span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Développe tes compétences en résolvant des problèmes de différents niveaux et catégories, et prépare-toi à devenir un champion des mathématiques.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/exercises")}>
                Commencer maintenant
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/competitions")}>
                Voir les compétitions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty selection */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <h2 className="mb-6 text-center text-3xl font-bold">Choisis ton niveau</h2>
          <DifficultySelector 
            options={difficultyOptions}
            selectedId={selectedDifficulty}
            onChange={setSelectedDifficulty}
            className="mx-auto max-w-3xl"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-6 text-center text-3xl font-bold">Catégories de problèmes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                color={category.color}
                progress={category.progress}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Fonctionnalités</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olympiad-blue text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Exercices interactifs</h3>
              <p className="mt-2 text-muted-foreground">
                Résous des problèmes adaptés à ton niveau avec un feedback instantané.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olympiad-purple text-white">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Compétitions simulées</h3>
              <p className="mt-2 text-muted-foreground">
                Entraîne-toi dans des conditions réelles de compétition avec des défis chronométrés.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olympiad-green text-white">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Suivi de progression</h3>
              <p className="mt-2 text-muted-foreground">
                Visualise tes progrès, débloque des badges et monte en niveau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="olympiad-gradient py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Prêt à relever le défi ?</h2>
            <p className="mt-4">
              Commence dès maintenant ton parcours et deviens un champion des Olympiades de Mathématiques !
            </p>
            <Button
              size="lg"
              className="mt-6 bg-white text-olympiad-blue hover:bg-white/90"
              onClick={() => navigate("/exercises")}
            >
              Commencer l'aventure
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
