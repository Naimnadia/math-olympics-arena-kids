
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DifficultyOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface DifficultySelectorProps {
  options: DifficultyOption[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function DifficultySelector({ 
  options, 
  selectedId, 
  onChange, 
  className 
}: DifficultySelectorProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          className={cn(
            "flex h-auto flex-col items-start gap-2 p-4 text-left",
            selectedId === option.id
              ? `border-2 ${option.color} shadow-sm`
              : "border-border"
          )}
          onClick={() => onChange(option.id)}
        >
          <div className="flex w-full items-center gap-2">
            <div className={cn("rounded-full p-1.5 text-white", option.color)}>
              {option.icon}
            </div>
            <span className="font-medium">{option.label}</span>
          </div>
          <p className="text-xs text-muted-foreground">{option.description}</p>
        </Button>
      ))}
    </div>
  );
}
