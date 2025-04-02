
import React from "react";
import { cn } from "@/lib/utils";

interface BadgeAchievementProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  unlocked?: boolean;
  className?: string;
}

export function BadgeAchievement({
  title,
  icon,
  color = "bg-olympiad-purple",
  unlocked = true,
  className,
}: BadgeAchievementProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-2 transition-all duration-300",
        unlocked ? "opacity-100" : "opacity-50 grayscale",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-full shadow-md",
          unlocked ? color : "bg-gray-400"
        )}
      >
        <div className="text-2xl text-white">{icon}</div>
        {unlocked && (
          <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
            ✓
          </div>
        )}
      </div>
      <p className="mt-2 max-w-[100px] text-center text-xs font-medium">{title}</p>
    </div>
  );
}
