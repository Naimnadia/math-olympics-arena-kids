
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, BookOpen, LightbulbIcon, GraduationCap } from "lucide-react";

export default function TutorialsPage() {
  return (
    <div className="container py-10">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold">Réussir l'Olympiade</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Découvre nos ressources pour t'aider à exceller aux Olympiades de Mathématiques
          avec des tutoriels, des conseils et des méthodes de résolution.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Youtube className="h-6 w-6 text-olympiad-red" />
          <span>Tutoriels vidéo</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Comment aborder les problèmes d'Olympiade</CardTitle>
              <CardDescription>
                Techniques essentielles pour analyser et résoudre les problèmes mathématiques complexes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-lg">
                <iframe 
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Comment aborder les problèmes d'Olympiade"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex justify-between">
                <CardTitle>Autres ressources vidéo</CardTitle>
                <Youtube className="h-5 w-5 text-olympiad-red" />
              </div>
              <CardDescription>
                Des vidéos supplémentaires pour approfondir tes connaissances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Géométrie avancée pour les Olympiades",
                  "Techniques de dénombrement et combinatoire",
                  "Astuces pour les problèmes d'algèbre",
                  "Comment gérer son temps pendant les épreuves"
                ].map((title, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-0.5 shrink-0 rounded-full bg-olympiad-blue/10 p-1">
                      <LightbulbIcon className="h-4 w-4 text-olympiad-blue" />
                    </div>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-4 w-full">
                Voir toutes les vidéos
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-olympiad-green" />
          <span>Guides et méthodes</span>
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Guide du débutant",
              description: "Les bases essentielles pour bien débuter aux Olympiades",
              icon: <LightbulbIcon className="h-5 w-5" />,
              color: "bg-olympiad-green"
            },
            {
              title: "Méthodes de résolution",
              description: "Stratégies efficaces pour aborder différents types de problèmes",
              icon: <GraduationCap className="h-5 w-5" />,
              color: "bg-olympiad-orange"
            },
            {
              title: "Conseils des champions",
              description: "Astuces et expériences partagées par d'anciens médaillés",
              icon: <Trophy className="h-5 w-5" />,
              color: "bg-olympiad-purple"
            }
          ].map((guide, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${guide.color} text-white`}>
                    {guide.icon}
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm text-muted-foreground">{guide.description}</p>
                <Button variant="ghost" className="mt-4 justify-start p-0 text-olympiad-blue">
                  Lire le guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
