
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProblemCard } from "@/components/ui/problem-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function ExercisesPage() {
  const navigate = useNavigate();
  const [filterCategory, setFilterCategory] = React.useState("all");
  const [filterDifficulty, setFilterDifficulty] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  // Dummy problems data
  const problems = [
    {
      id: "A1",
      title: "Équation du second degré et solutions complexes",
      category: "Algèbre",
      difficulty: "Intermédiaire",
      points: 15,
      solved: true,
      categoryColor: "bg-olympiad-blue"
    },
    {
      id: "G1",
      title: "Triangles semblables et théorème de Thalès",
      category: "Géométrie",
      difficulty: "Débutant",
      points: 10,
      solved: false,
      categoryColor: "bg-olympiad-purple"
    },
    {
      id: "L1",
      title: "Problème de logique avec des ensembles",
      category: "Logique",
      difficulty: "Débutant",
      points: 10,
      solved: true,
      categoryColor: "bg-olympiad-green"
    },
    {
      id: "C1",
      title: "Dénombrement et coefficients binomiaux",
      category: "Combinatoire",
      difficulty: "Intermédiaire",
      points: 20,
      solved: false,
      categoryColor: "bg-olympiad-orange"
    },
    {
      id: "N1",
      title: "Divisibilité et congruences modulo n",
      category: "Théorie des nombres",
      difficulty: "Avancé",
      points: 25,
      solved: false,
      categoryColor: "bg-olympiad-yellow"
    },
    {
      id: "S1",
      title: "Suites arithmétiques et géométriques",
      category: "Suites",
      difficulty: "Débutant",
      points: 10,
      solved: true,
      categoryColor: "bg-olympiad-red"
    },
    {
      id: "A2",
      title: "Systèmes d'équations linéaires",
      category: "Algèbre",
      difficulty: "Intermédiaire",
      points: 15,
      solved: false,
      categoryColor: "bg-olympiad-blue"
    },
    {
      id: "G2",
      title: "Aire et périmètre de figures complexes",
      category: "Géométrie",
      difficulty: "Débutant",
      points: 10,
      solved: true,
      categoryColor: "bg-olympiad-purple"
    },
    {
      id: "L2",
      title: "Problème de chevaliers et de menteurs",
      category: "Logique",
      difficulty: "Avancé",
      points: 25,
      solved: false,
      categoryColor: "bg-olympiad-green"
    },
  ];

  // Filter problems
  const filteredProblems = problems.filter((problem) => {
    const matchesCategory = filterCategory === "all" || problem.category === filterCategory;
    const matchesDifficulty = filterDifficulty === "all" || problem.difficulty === filterDifficulty;
    const matchesSearch = searchTerm === "" || 
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleProblemClick = (problemId: string) => {
    navigate(`/problem/${problemId}`);
  };

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Exercices</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <TabsList className="mb-2 sm:mb-0">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="solved">Résolus</TabsTrigger>
            <TabsTrigger value="unsolved">Non résolus</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-1 flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un problème..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Select
                value={filterCategory}
                onValueChange={setFilterCategory}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="Algèbre">Algèbre</SelectItem>
                  <SelectItem value="Géométrie">Géométrie</SelectItem>
                  <SelectItem value="Logique">Logique</SelectItem>
                  <SelectItem value="Combinatoire">Combinatoire</SelectItem>
                  <SelectItem value="Théorie des nombres">Théorie des nombres</SelectItem>
                  <SelectItem value="Suites">Suites</SelectItem>
                </SelectContent>
              </Select>
              
              <Select
                value={filterDifficulty}
                onValueChange={setFilterDifficulty}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Difficulté" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="Débutant">Débutant</SelectItem>
                  <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                  <SelectItem value="Avancé">Avancé</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <TabsContent value="all">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProblems.length > 0 ? (
              filteredProblems.map((problem) => (
                <ProblemCard
                  key={problem.id}
                  id={problem.id}
                  title={problem.title}
                  category={problem.category}
                  difficulty={problem.difficulty}
                  points={problem.points}
                  solved={problem.solved}
                  categoryColor={problem.categoryColor}
                  onClick={() => handleProblemClick(problem.id)}
                />
              ))
            ) : (
              <div className="col-span-full py-8 text-center">
                <p className="text-lg text-muted-foreground">Aucun problème trouvé pour cette recherche.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterCategory("all");
                    setFilterDifficulty("all");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="solved">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProblems.filter(p => p.solved).length > 0 ? (
              filteredProblems
                .filter(p => p.solved)
                .map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    id={problem.id}
                    title={problem.title}
                    category={problem.category}
                    difficulty={problem.difficulty}
                    points={problem.points}
                    solved={problem.solved}
                    categoryColor={problem.categoryColor}
                    onClick={() => handleProblemClick(problem.id)}
                  />
                ))
            ) : (
              <div className="col-span-full py-8 text-center">
                <p className="text-lg text-muted-foreground">Aucun problème résolu pour cette recherche.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterCategory("all");
                    setFilterDifficulty("all");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="unsolved">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProblems.filter(p => !p.solved).length > 0 ? (
              filteredProblems
                .filter(p => !p.solved)
                .map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    id={problem.id}
                    title={problem.title}
                    category={problem.category}
                    difficulty={problem.difficulty}
                    points={problem.points}
                    solved={problem.solved}
                    categoryColor={problem.categoryColor}
                    onClick={() => handleProblemClick(problem.id)}
                  />
                ))
            ) : (
              <div className="col-span-full py-8 text-center">
                <p className="text-lg text-muted-foreground">Aucun problème non résolu pour cette recherche.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterCategory("all");
                    setFilterDifficulty("all");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
