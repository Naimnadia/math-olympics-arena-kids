
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Link to="/" className="text-sm font-medium">
            © 2023 Olympiades Mathématiques
          </Link>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>
          <Link to="/exercises" className="hover:underline">
            Exercices
          </Link>
          <Link to="/competitions" className="hover:underline">
            Compétitions
          </Link>
          <Link to="/progress" className="hover:underline">
            Progression
          </Link>
          <Link to="/tutorials" className="hover:underline">
            Réussir l'Olympiade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
