
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Trophy, 
  BarChart, 
  Star,
  MenuIcon,
  X,
  Youtube
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems: NavItem[] = [
    {
      label: "Exercices",
      href: "/exercises",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      label: "Compétitions",
      href: "/competitions",
      icon: <Trophy className="h-4 w-4" />,
    },
    {
      label: "Progression",
      href: "/progress",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      label: "Réussir l'Olympiade",
      href: "/tutorials",
      icon: <Youtube className="h-4 w-4" />,
    }
  ];

  const NavLinks = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-1", className)}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          size="sm"
          asChild
          className="flex items-center gap-1"
          onClick={() => setIsOpen(false)}
        >
          <Link to={item.href}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-olympiad-blue text-white">
            <Star className="h-4 w-4" />
          </div>
          <span className="hidden sm:inline-block">Olympiades Mathématiques</span>
          <span className="sm:hidden">Olympiades Math</span>
        </Link>
        
        {!isMobile ? (
          <nav className="ml-auto flex items-center gap-2">
            <NavLinks />
          </nav>
        ) : (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="ml-auto">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-olympiad-blue text-white">
                      <Star className="h-4 w-4" />
                    </div>
                    <span>Olympiades Mathématiques</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Fermer</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      asChild
                      className="justify-start"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={item.href}>
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
