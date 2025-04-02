
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ProblemPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
  const [textAnswer, setTextAnswer] = React.useState("");
  const [showSolution, setShowSolution] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  
  // Mock problem data
  const problem = {
    id: id || "A1",
    title: "Équation du second degré et solutions complexes",
    statement: `Soit l'équation : x² + 4x + 6 = 0. 
    
    Déterminez les solutions de cette équation dans l'ensemble des nombres complexes.`,
    category: "Algèbre",
    difficulty: "Intermédiaire",
    answerType: "choice", // or "text"
    options: [
      { id: "a", text: "x = -2 + i√2 et x = -2 - i√2" },
      { id: "b", text: "x = -2 + i√5 et x = -2 - i√5" },
      { id: "c", text: "x = -2 + 2i et x = -2 - 2i" },
      { id: "d", text: "x = -2 + i et x = -2 - i" },
    ],
    correctAnswer: "b",
    solution: `Pour résoudre l'équation x² + 4x + 6 = 0, utilisons la formule quadratique :
    
    x = (-b ± √(b² - 4ac)) / 2a
    
    Avec a = 1, b = 4, c = 6
    
    x = (-4 ± √(16 - 24)) / 2
    x = (-4 ± √(-8)) / 2
    x = (-4 ± 2i√2) / 2
    x = -2 ± i√2
    
    Les solutions sont donc x = -2 + i√2 et x = -2 - i√2`,
    points: 15,
    hints: [
      "Utilisez la formule quadratique pour résoudre l'équation.",
      "N'oubliez pas que √(-1) = i.",
      "Simplifiez votre réponse autant que possible."
    ]
  };

  const handleSubmitAnswer = () => {
    if (problem.answerType === "choice" && !selectedAnswer) {
      toast({
        title: "Réponse manquante",
        description: "Veuillez sélectionner une réponse avant de soumettre.",
        variant: "destructive",
      });
      return;
    }

    if (problem.answerType === "text" && !textAnswer.trim()) {
      toast({
        title: "Réponse manquante",
        description: "Veuillez saisir une réponse avant de soumettre.",
        variant: "destructive",
      });
      return;
    }

    // Check if answer is correct
    const correct = problem.answerType === "choice" 
      ? selectedAnswer === problem.correctAnswer
      : textAnswer.trim().toLowerCase() === problem.correctAnswer.toLowerCase();

    setIsCorrect(correct);
    setShowSolution(true);

    // Show toast notification
    toast({
      title: correct ? "Bonne réponse !" : "Réponse incorrecte",
      description: correct 
        ? `Félicitations ! Vous avez gagné ${problem.points} points.` 
        : "N'abandonnez pas ! Consultez la solution pour comprendre.",
      variant: correct ? "default" : "destructive",
    });
  };

  const handleUseTry = () => {
    setSelectedAnswer(null);
    setTextAnswer("");
    setShowSolution(false);
    setIsCorrect(null);
  };

  const handleGetHint = () => {
    // Get a random hint from the hints array
    const randomHint = problem.hints[Math.floor(Math.random() * problem.hints.length)];
    
    toast({
      title: "Indice",
      description: randomHint,
    });
  };

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" onClick={() => navigate("/exercises")}>
            Retour aux exercices
          </Button>
          <div className="flex items-center gap-2">
            <Badge className="bg-olympiad-blue">{problem.category}</Badge>
            <Badge className="bg-olympiad-orange">{problem.difficulty}</Badge>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              Problème #{problem.id}: {problem.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-line rounded bg-muted p-4 font-mono">
              {problem.statement}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Votre réponse</CardTitle>
          </CardHeader>
          <CardContent>
            {problem.answerType === "choice" ? (
              <RadioGroup
                value={selectedAnswer || ""}
                onValueChange={setSelectedAnswer}
                disabled={showSolution}
              >
                {problem.options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-2 p-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Textarea
                placeholder="Entrez votre réponse ici..."
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                disabled={showSolution}
                className="min-h-[100px]"
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {!showSolution ? (
              <>
                <Button variant="outline" onClick={handleGetHint}>
                  Obtenir un indice
                </Button>
                <Button onClick={handleSubmitAnswer}>
                  Soumettre la réponse
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleUseTry}>
                  Nouvel essai
                </Button>
                <div className="flex items-center gap-2">
                  {isCorrect !== null && (
                    <Badge
                      className={isCorrect ? "bg-green-500" : "bg-red-500"}
                    >
                      {isCorrect ? "Correct" : "Incorrect"}
                    </Badge>
                  )}
                  <Button onClick={() => navigate("/exercises")}>
                    Problème suivant
                  </Button>
                </div>
              </>
            )}
          </CardFooter>
        </Card>

        {showSolution && (
          <Card>
            <CardHeader>
              <CardTitle>Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line">{problem.solution}</div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
