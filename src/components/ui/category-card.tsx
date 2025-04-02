
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  progress?: number;
  level?: string;
  onClick?: () => void;
  className?: string;
}

export function CategoryCard({
  title,
  description,
  icon,
  color = "bg-olympiad-blue",
  progress = 0,
  level,
  onClick,
  className,
}: CategoryCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg",
        onClick ? "cursor-pointer hover:-translate-y-1" : "",
        className
      )}
      onClick={onClick}
    >
      <div className={cn("h-2", color)} />
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn("rounded-full p-2 text-white", color)}>{icon}</div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {level && (
            <Badge variant="outline" className="bg-muted">
              {level}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {progress > 0 && (
          <div className="mt-2">
            <div className="mb-1 flex justify-between text-xs">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn("h-full", color)}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
