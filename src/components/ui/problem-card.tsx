
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProblemCardProps {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  timeLimit?: number;
  points?: number;
  solved?: boolean;
  onClick?: () => void;
  categoryColor?: string;
  className?: string;
}

export function ProblemCard({
  id,
  title,
  category,
  difficulty,
  timeLimit,
  points = 10,
  solved = false,
  onClick,
  categoryColor = "bg-olympiad-blue",
  className,
}: ProblemCardProps) {
  const difficultyColors = {
    "Débutant": "bg-olympiad-green text-white",
    "Intermédiaire": "bg-olympiad-orange text-white",
    "Avancé": "bg-olympiad-red text-white",
  };

  const difficultyColor = difficultyColors[difficulty as keyof typeof difficultyColors] || "bg-muted";

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md",
        onClick ? "cursor-pointer" : "",
        className
      )}
    >
      <div className={cn("h-2", categoryColor)} />
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            <span className="text-muted-foreground">#{id}</span> {title}
          </CardTitle>
          {solved && (
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Résolu
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2">
          <Badge className={cn(categoryColor)}>{category}</Badge>
          <Badge className={cn(difficultyColor)}>{difficulty}</Badge>
          {timeLimit && (
            <Badge variant="outline" className="ml-auto">
              {timeLimit} min
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-olympiad-purple">{points}</span>
          <span className="text-muted-foreground">points</span>
        </div>
        <Button variant="outline" size="sm" onClick={onClick}>
          {solved ? "Revoir" : "Résoudre"}
        </Button>
      </CardFooter>
    </Card>
  );
}
