import PlayerCard from "./PlayerCard";
import parlaidLogo from "@/assets/parlaid-logo.png";

const mockPlayers = [
  {
    id: "1",
    name: "Josh Allen",
    team: "BUF",
    opponent: "MIA",
    statLine: "Passing Yards",
    statValue: 285.5,
    confidence: 78,
  },
  {
    id: "2", 
    name: "Tyreek Hill",
    team: "MIA",
    opponent: "BUF",
    statLine: "Receiving Yards",
    statValue: 92.5,
    confidence: 85,
  },
  {
    id: "3",
    name: "Stefon Diggs",
    team: "BUF", 
    opponent: "MIA",
    statLine: "Receptions",
    statValue: 6.5,
    confidence: 72,
  },
  {
    id: "4",
    name: "Tua Tagovailoa",
    team: "MIA",
    opponent: "BUF", 
    statLine: "Passing TDs",
    statValue: 1.5,
    confidence: 65,
  },
  {
    id: "5",
    name: "Josh Jacobs",
    team: "LV",
    opponent: "KC",
    statLine: "Rushing Yards", 
    statValue: 78.5,
    confidence: 82,
  },
  {
    id: "6",
    name: "Travis Kelce",
    team: "KC",
    opponent: "LV",
    statLine: "Receiving Yards",
    statValue: 68.5,
    confidence: 76,
  },
];

const Dashboard = () => {
  const handlePlayerSelect = (playerId: string, selection: 'over' | 'under') => {
    console.log(`Selected ${selection.toUpperCase()} for player ${playerId}`);
    // TODO: Add to parlay state
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Introduction */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <img 
            src={parlaidLogo} 
            alt="Parlaid" 
            className="h-16 w-16 object-contain animate-pulse-subtle"
          />
          <h1 className="font-heading text-6xl font-bold text-foreground">
            PARLAID
          </h1>
        </div>
        <p className="font-heading text-2xl text-primary mb-4">
          SMARTER PARLAYS. POWERED BY AI.
        </p>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Advanced machine learning analyzes thousands of data points to give you the edge. 
          Our AI identifies value where the market doesn't, turning insights into winning parlays.
        </p>
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-6 max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            TODAY'S PICKS
          </h2>
          <p className="font-body text-muted-foreground">
            AI-powered player props with advanced analytics
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              Edge vs Market
            </span>
            <span className="font-stats text-xl font-bold text-primary">
              +12.3%
            </span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              Win Rate (7d)
            </span>
            <span className="font-stats text-xl font-bold text-foreground">
              74.2%
            </span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              Active Parlays
            </span>
            <span className="font-stats text-xl font-bold text-foreground">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-slide-up">
        {mockPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onSelect={handlePlayerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;