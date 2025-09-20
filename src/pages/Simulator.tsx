import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const Simulator = () => {
  const [minutes, setMinutes] = useState([32]);
  const [injuryImpact, setInjuryImpact] = useState([15]);
  const [fatigue, setFatigue] = useState([25]);

  // Mock calculation based on sliders
  const calculateParlay = () => {
    const baseWin = 68;
    const minutesBonus = (minutes[0] - 30) * 2;
    const injuryPenalty = injuryImpact[0] * 0.5;
    const fatiguePenalty = fatigue[0] * 0.3;
    
    return Math.max(0, Math.min(100, baseWin + minutesBonus - injuryPenalty - fatiguePenalty));
  };

  const calculateEdge = () => {
    const parlayPercent = calculateParlay();
    const marketImplied = 58; // Mock market percentage
    return parlayPercent - marketImplied;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
          PARLAY SIMULATOR
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          Adjust variables and see real-time impact on your parlay
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <Card className="bg-card border border-border p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              SIMULATION CONTROLS
            </h3>
            
            <div className="space-y-6">
              {/* Minutes Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-body text-sm font-medium text-foreground">
                    Expected Minutes
                  </label>
                  <span className="font-stats text-lg font-bold text-primary">
                    {minutes[0]}
                  </span>
                </div>
                <Slider
                  value={minutes}
                  onValueChange={setMinutes}
                  max={40}
                  min={20}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>20 min</span>
                  <span>40 min</span>
                </div>
              </div>

              {/* Injury Impact Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-body text-sm font-medium text-foreground">
                    Injury Impact %
                  </label>
                  <span className="font-stats text-lg font-bold text-primary">
                    {injuryImpact[0]}%
                  </span>
                </div>
                <Slider
                  value={injuryImpact}
                  onValueChange={setInjuryImpact}
                  max={50}
                  min={0}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>No Impact</span>
                  <span>High Impact</span>
                </div>
              </div>

              {/* Fatigue Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-body text-sm font-medium text-foreground">
                    Fatigue Level %
                  </label>
                  <span className="font-stats text-lg font-bold text-primary">
                    {fatigue[0]}%
                  </span>
                </div>
                <Slider
                  value={fatigue}
                  onValueChange={setFatigue}
                  max={50}
                  min={0}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Fresh</span>
                  <span>Exhausted</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-card to-card-gradient border border-border p-6">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              REAL-TIME RESULTS
            </h3>
            
            <div className="space-y-6">
              {/* Parlay Percentage */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-body text-sm text-muted-foreground">
                    Parlay Win Probability
                  </span>
                  <span className="font-stats text-3xl font-bold text-primary">
                    {calculateParlay().toFixed(1)}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${calculateParlay()}%` }}
                  />
                </div>
              </div>

              {/* Edge vs Market */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-body text-sm text-muted-foreground">
                    Edge vs Market
                  </span>
                  <span className={`font-stats text-2xl font-bold ${
                    calculateEdge() >= 0 ? 'text-primary' : 'text-destructive'
                  }`}>
                    {calculateEdge() >= 0 ? '+' : ''}{calculateEdge().toFixed(1)}%
                  </span>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg">
                  <p className="font-body text-xs text-muted-foreground">
                    {calculateEdge() >= 0 
                      ? "Positive edge detected. This parlay may be profitable."
                      : "Negative edge. Consider adjusting your picks."
                    }
                  </p>
                </div>
              </div>

              {/* Market Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/10 rounded-lg">
                  <span className="font-body text-xs text-muted-foreground block">
                    Market Implied
                  </span>
                  <span className="font-stats text-lg font-bold text-foreground">
                    58.0%
                  </span>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <span className="font-body text-xs text-muted-foreground block">
                    AI Calculated
                  </span>
                  <span className="font-stats text-lg font-bold text-primary">
                    {calculateParlay().toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Simulator;