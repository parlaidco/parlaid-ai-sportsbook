import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExplanationData {
  id: string;
  player: string;
  pick: string;
  reasoning: string;
  historicalContext: string;
  keyFactors: string[];
}

const mockExplanations: ExplanationData[] = [
  {
    id: "1",
    player: "Josh Allen",
    pick: "OVER 285.5 Passing Yards",
    reasoning: "Josh Allen has consistently exceeded 285.5 passing yards in 7 of his last 10 games against AFC East opponents. Miami's secondary ranks 28th in pass defense DVOA, allowing an average of 267 yards per game to opposing quarterbacks. Allen's aggressive downfield passing style particularly exploits Miami's weak coverage over the middle of the field.",
    historicalContext: "In 4 career games against Miami, Allen averages 298.2 passing yards with a 75% success rate on this line. Weather conditions are favorable with indoor dome environment eliminating wind factor that typically affects Allen's deep ball accuracy.",
    keyFactors: [
      "Miami ranks 28th in pass defense DVOA",
      "Allen averages 298.2 yards vs MIA historically", 
      "7 of 10 recent games exceeded this line"
    ]
  },
  {
    id: "2", 
    player: "Tyreek Hill",
    pick: "OVER 92.5 Receiving Yards",
    reasoning: "Hill faces a Buffalo defense that has allowed the 8th most receiving yards to opposing wide receivers this season. His target share has increased to 28% over the last 4 games, and Miami's offensive game plan heavily features quick slants and crossing routes that Hill excels at. Buffalo's man coverage scheme creates mismatches for Hill's speed.",
    historicalContext: "Hill has surpassed 92.5 receiving yards in 6 of 8 games against Buffalo during his career between Kansas City and Miami tenures. The Bills have struggled containing speedy slot receivers, allowing 15+ yard plays on 23% of targets to the position.",
    keyFactors: [
      "Buffalo allows 8th most yards to WRs",
      "28% target share trending upward",
      "6 of 8 historical games exceeded line vs BUF"
    ]
  },
  {
    id: "3",
    player: "Travis Kelce", 
    pick: "UNDER 68.5 Receiving Yards",
    reasoning: "Las Vegas has dramatically improved their tight end coverage, ranking 3rd best in limiting production to the position over their last 6 games. Kelce's snap count has decreased by 12% as Kansas City manages his workload late in the season. The Raiders' defensive coordinator has specifically game-planned to bracket Kelce with safety help over the top.",
    historicalContext: "Kelce has failed to reach 68.5 receiving yards in 3 of his last 4 games against Las Vegas. The Raiders have held opposing tight ends to under 50 yards receiving in 4 consecutive games entering this matchup.",
    keyFactors: [
      "LV ranks 3rd in limiting TE production recently",
      "Kelce's snap count down 12% in workload management",
      "Raiders specifically game-planning to bracket Kelce"
    ]
  }
];

const ExplainMode = () => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
          EXPLAIN MODE
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          Detailed AI reasoning and analysis behind each pick
        </p>
      </div>

      <div className="space-y-6">
        {mockExplanations.map((explanation) => {
          const isExpanded = expandedCards.has(explanation.id);
          
          return (
            <Card key={explanation.id} className="bg-gradient-to-br from-card to-card-gradient border border-border overflow-hidden">
              {/* Header - Always Visible */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                      {explanation.player}
                    </h3>
                    <p className="font-stats text-lg text-primary font-bold">
                      {explanation.pick}
                    </p>
                  </div>
                  <Button
                    onClick={() => toggleCard(explanation.id)}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="p-6 space-y-6 animate-fade-slide-up">
                  {/* Main Reasoning */}
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-3">
                      AI REASONING
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {explanation.reasoning}
                    </p>
                  </div>

                  {/* Historical Context */}
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-3">
                      HISTORICAL CONTEXT
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {explanation.historicalContext}
                    </p>
                  </div>

                  {/* Key Factors */}
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-3">
                      TOP 3 KEY FACTORS
                    </h4>
                    <div className="space-y-3">
                      {explanation.keyFactors.map((factor, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="font-stats text-xs font-bold text-primary-foreground">
                              {index + 1}
                            </span>
                          </div>
                          <p className="font-body text-muted-foreground">
                            {factor}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ExplainMode;