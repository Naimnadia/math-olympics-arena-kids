
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, Calendar, Users, ChevronRight } from "lucide-react";

export default function CompetitionsPage() {
  const navigate = useNavigate();

  // Dummy upcoming competitions
  const upcomingCompetitions = [
    {
      id: "comp1",
      title: "Challenge Hebdomadaire: Algèbre",
      description: "Une série de problèmes d'algèbre de différents niveaux de difficulté.",
      date: "18 mai 2023",
      time: "14:00 - 15:30",
      participants: 45,
      category: "Algèbre",
      categoryColor: "bg-olympiad-blue",
    },
    {
      id: "comp2",
      title: "Mini-Olympiade de Géométrie",
      description: "Compétition spéciale centrée sur les problèmes de géométrie.",
      date: "23 mai 2023",
      time: "16:00 - 18:00",
      participants: 32,
      category: "Géométrie",
      categoryColor: "bg-olympiad-purple",
    },
    {
      id: "comp3",
      title: "Défi de Logique",
      description: "Une série de casse-têtes et de problèmes de logique à résoudre.",
      date: "30 mai 2023",
      time: "15:00 - 16:30",
      participants: 28,
      category: "Logique",
      categoryColor: "bg-olympiad-green",
    },
  ];

  // Dummy past competitions
  const pastCompetitions = [
    {
      id: "past1",
      title: "Challenge de Théorie des Nombres",
      description: "Problèmes divers sur les propriétés des nombres.",
      date: "10 mai 2023",
      participants: 56,
      category: "Théorie des nombres",
      categoryColor: "bg-olympiad-yellow",
      winner: "Lucas M.",
      yourRank: 8,
    },
    {
      id: "past2",
      title: "Olympiade Junior - Combinatoire",
      description: "Compétition sur le dénombrement et les probabilités.",
      date: "2 mai 2023",
      participants: 42,
      category: "Combinatoire",
      categoryColor: "bg-olympiad-orange",
      winner: "Emma L.",
      yourRank: 5,
    },
    {
      id: "past3",
      title: "Challenge des Suites",
      description: "Problèmes sur les suites et les séries.",
      date: "25 avril 2023",
      participants: 38,
      category: "Suites",
      categoryColor: "bg-olympiad-red",
      winner: "Noah K.",
      yourRank: 12,
    },
  ];

  // Handle competition entry
  const handleEnterCompetition = (id: string) => {
    navigate(`/competition/${id}`);
  };

  // Handle view competition results
  const handleViewResults = (id: string) => {
    navigate(`/competition-results/${id}`);
  };

  return (
    <div className="container py-8">
      <h1 className="mb-2 text-3xl font-bold">Compétitions</h1>
      <p className="mb-6 text-muted-foreground">
        Participe à des défis mathématiques chronométrés et compare tes performances avec d'autres participants.
      </p>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">À venir</TabsTrigger>
          <TabsTrigger value="past">Passées</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingCompetitions.map((competition) => (
              <Card key={competition.id} className="overflow-hidden">
                <div className={`h-2 ${competition.categoryColor}`} />
                <CardHeader>
                  <Badge className={`w-fit ${competition.categoryColor}`}>
                    {competition.category}
                  </Badge>
                  <CardTitle className="text-xl">{competition.title}</CardTitle>
                  <CardDescription>{competition.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.participants} participants</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => handleEnterCompetition(competition.id)}
                  >
                    S'inscrire
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastCompetitions.map((competition) => (
              <Card key={competition.id} className="overflow-hidden">
                <div className={`h-2 ${competition.categoryColor}`} />
                <CardHeader>
                  <Badge className={`w-fit ${competition.categoryColor}`}>
                    {competition.category}
                  </Badge>
                  <CardTitle className="text-xl">{competition.title}</CardTitle>
                  <CardDescription>{competition.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-olympiad-yellow" />
                    <span className="font-medium">Gagnant: {competition.winner}</span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">
                      Ton classement: <span className="text-olympiad-blue">{competition.yourRank}/{competition.participants}</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleViewResults(competition.id)}
                  >
                    Voir les résultats
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
