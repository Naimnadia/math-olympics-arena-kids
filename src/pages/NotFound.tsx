
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-muted/50 text-center">
      <div className="mx-auto max-w-md px-4">
        <h1 className="mb-4 text-6xl font-extrabold text-olympiad-blue">404</h1>
        <h2 className="mb-6 text-2xl font-bold">Page non trouvée</h2>
        <p className="mb-8 text-muted-foreground">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
