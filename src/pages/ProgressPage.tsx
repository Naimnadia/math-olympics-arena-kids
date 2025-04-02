
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BadgeAchievement } from "@/components/ui/badge-achievement";
import { ProgressChart } from "@/components/ui/progress-chart";
import { Star, Trophy, BookOpen, Brain, Medal, Lightbulb, Award } from "lucide-react";

export default function ProgressPage() {
  // Dummy user progress data
  const userProgress = {
    level: 3,
    xp: 2750,
    nextLevelXp: 3500,
    totalProblems: 45,
    totalSolved: 28,
    categories: [
      { name: "Algèbre", value: 8, color: "#4263EB" },
      { name: "Géométrie", value: 6, color: "#7E57C2" },
      { name: "Logique", value: 5, color: "#2ECC71" },
      { name: "Combinatoire", value: 3, color: "#E67E22" },
      { name: "Théorie des nombres", value: 4, color: "#F1C40F" },
      { name: "Suites", value: 2, color: "#E74C3C" },
    ],
    difficulties: [
      { name: "Débutant", value: 15, color: "#2ECC71" },
      { name: "Intermédiaire", value: 10, color: "#E67E22" },
      { name: "Avancé", value: 3, color: "#E74C3C" },
    ],
  };

  // Badges data
  const badges = [
    {
      title: "Premier pas",
      icon: <BookOpen />,
      color: "bg-olympiad-blue",
      unlocked: true,
    },
    {
      title: "5 problèmes résolus",
      icon: <Star />,
      color: "bg-olympiad-purple",
      unlocked: true,
    },
    {
      title: "Expert en algèbre",
      icon: <Award />,
      color: "bg-olympiad-blue",
      unlocked: true,
    },
    {
      title: "Première compétition",
      icon: <Trophy />,
      color: "bg-olympiad-yellow",
      unlocked: true,
    },
    {
      title: "Problème avancé",
      icon: <Brain />,
      color: "bg-olympiad-red",
      unlocked: true,
    },
    {
      title: "Top 10",
      icon: <Medal />,
      color: "bg-olympiad-orange",
      unlocked: false,
    },
    {
      title: "Série parfaite",
      icon: <Lightbulb />,
      color: "bg-olympiad-green",
      unlocked: false,
    },
    {
      title: "Champion",
      icon: <Trophy />,
      color: "bg-olympiad-red",
      unlocked: false,
    },
  ];

  // Activity data
  const recentActivity = [
    {
      id: 1,
      text: "Problème 'Équation du second degré' résolu",
      points: "+15 XP",
      time: "Aujourd'hui, 15:30",
    },
    {
      id: 2,
      text: "Nouveau badge débloqué: Expert en algèbre",
      points: "+50 XP",
      time: "Aujourd'hui, 14:45",
    },
    {
      id: 3,
      text: "Participé au Challenge Hebdomadaire",
      points: "+100 XP",
      time: "Hier, 16:20",
    },
    {
      id: 4,
      text: "Problème 'Triangles semblables' résolu",
      points: "+10 XP",
      time: "Hier, 10:15",
    },
    {
      id: 5,
      text: "Atteint le niveau 3",
      points: "+200 XP",
      time: "Il y a 3 jours",
    },
  ];

  const calculateProgress = (current: number, max: number) => {
    return (current / max) * 100;
  };

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Ma progression</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* User level card */}
        <Card className="col-span-full lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Niveau {userProgress.level}</CardTitle>
            <CardDescription>
              {userProgress.xp} / {userProgress.nextLevelXp} XP pour le niveau suivant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress
              value={calculateProgress(userProgress.xp, userProgress.nextLevelXp)}
              className="h-3"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Encore{" "}
              <span className="font-bold text-primary">
                {userProgress.nextLevelXp - userProgress.xp} XP
              </span>{" "}
              pour atteindre le niveau {userProgress.level + 1}
            </p>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="col-span-full lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Statistiques</CardTitle>
            <CardDescription>
              Vue d'ensemble de ta progression dans différentes catégories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Problèmes résolus
                  </span>
                  <span className="font-medium">
                    {userProgress.totalSolved} / {userProgress.totalProblems}
                  </span>
                </div>
                <Progress
                  value={calculateProgress(
                    userProgress.totalSolved,
                    userProgress.totalProblems
                  )}
                  className="h-2"
                />

                <div className="mt-4 space-y-1">
                  {userProgress.categories.map((category) => (
                    <div key={category.name} className="grid grid-cols-3 gap-2 text-sm">
                      <span className="col-span-1">{category.name}:</span>
                      <div className="col-span-1 flex items-center">
                        <div
                          className="mr-2 h-3 w-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span>{category.value}</span>
                      </div>
                      <span className="col-span-1 text-right text-muted-foreground">
                        {Math.round((category.value / userProgress.totalSolved) * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <ProgressChart
                  data={userProgress.categories}
                  title=""
                  className="border-0 p-0 shadow-none"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="col-span-full">
          <CardHeader className="pb-2">
            <CardTitle>Badges</CardTitle>
            <CardDescription>
              Récompenses débloquées pour tes accomplissements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {badges.map((badge, index) => (
                <BadgeAchievement
                  key={index}
                  title={badge.title}
                  icon={badge.icon}
                  color={badge.color}
                  unlocked={badge.unlocked}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Problèmes par catégorie</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressChart
              data={userProgress.categories}
              title=""
              className="border-0 p-0 shadow-none"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Problèmes par difficulté</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressChart
              data={userProgress.difficulties}
              title=""
              className="border-0 p-0 shadow-none"
            />
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card className="col-span-full lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Activité récente</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className="text-sm font-medium text-olympiad-green">
                    {activity.points}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
