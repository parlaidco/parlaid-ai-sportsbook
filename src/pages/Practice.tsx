import PlayerCard from "@/components/PlayerCard";

const practiceData = [
  {
    id: "p1",
    name: "Lamar Jackson",
    team: "BAL", 
    opponent: "CIN",
    statLine: "Rushing Yards",
    statValue: 65.5,
    confidence: 82,
  },
  {
    id: "p2",
    name: "Joe Burrow", 
    team: "CIN",
    opponent: "BAL",
    statLine: "Passing TDs",
    statValue: 2.5,
    confidence: 68,
  },
  {
    id: "p3",
    name: "Mark Andrews",
    team: "BAL",
    opponent: "CIN", 
    statLine: "Receptions",
    statValue: 5.5,
    confidence: 75,
  },
  {
    id: "p4",
    name: "Ja'Marr Chase",
    team: "CIN",
    opponent: "BAL",
    statLine: "Receiving Yards", 
    statValue: 88.5,
    confidence: 79,
  },
];

const Practice = () => {
  const handlePracticeSelect = (playerId: string, selection: 'over' | 'under') => {
    console.log(`Practice pick: ${selection.toUpperCase()} for player ${playerId}`);
    // TODO: Add to practice parlay tracking
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <h1 className="font-heading text-4xl font-bold text-foreground">
            PRACTICE MODE
          </h1>
          <div className="bg-secondary px-4 py-2 rounded-lg">
            <span className="font-stats text-sm font-bold text-secondary-foreground">
              NO REAL MONEY
            </span>
          </div>
        </div>
        <p className="font-body text-lg text-muted-foreground">
          Test your skills with simulated picks and track your performance
        </p>
      </div>

      {/* Practice Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              Practice Record
            </span>
            <span className="font-stats text-xl font-bold text-foreground">
              24-8
            </span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              Win Rate
            </span>
            <span className="font-stats text-xl font-bold text-primary">
              75.0%
            </span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              Best Streak
            </span>
            <span className="font-stats text-xl font-bold text-foreground">
              9
            </span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              ROI
            </span>
            <span className="font-stats text-xl font-bold text-primary">
              +18.4%
            </span>
          </div>
        </div>
      </div>

      {/* Practice Alert */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-red"></div>
          <span className="font-body text-sm text-foreground">
            <strong>Practice Mode:</strong> All picks are simulated. Use this to learn and improve your strategy without risk.
          </span>
        </div>
      </div>

      {/* Practice Player Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-slide-up">
        {practiceData.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onSelect={handlePracticeSelect}
          />
        ))}
      </div>

      {/* Practice Tips */}
      <div className="mt-12 bg-muted/10 rounded-lg p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-4">
          PRACTICE TIPS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-body font-semibold text-foreground">
              Building Your Strategy
            </h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>• Focus on high-confidence picks first</li>
              <li>• Consider opposing team matchups</li>
              <li>• Track weather and injury impacts</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-body font-semibold text-foreground">
              Risk Management  
            </h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>• Limit parlay sizes for better odds</li>
              <li>• Diversify across different stat types</li>
              <li>• Use AI confidence as a guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;