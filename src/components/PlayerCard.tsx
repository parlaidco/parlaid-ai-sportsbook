import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PlayerCardProps {
  player: {
    id: string;
    name: string;
    team: string;
    opponent: string;
    statLine: string;
    statValue: number;
    confidence: number;
    playerImage?: string;
  };
  onSelect?: (playerId: string, selection: 'over' | 'under') => void;
}

const PlayerCard = ({ player, onSelect }: PlayerCardProps) => {
  const handleOverClick = () => {
    onSelect?.(player.id, 'over');
  };

  const handleUnderClick = () => {
    onSelect?.(player.id, 'under');
  };

  return (
    <Card className="bg-gradient-to-br from-card to-card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-hover hover:animate-card-hover cursor-pointer group">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          {/* Player/Team Logo Placeholder */}
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center border border-border">
            <span className="font-stats text-sm font-bold text-muted-foreground">
              {player.team.slice(0, 3).toUpperCase()}
            </span>
          </div>
          
          {/* Player Info */}
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">
              {player.name}
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              {player.team} vs {player.opponent}
            </p>
          </div>
        </div>

        {/* Stat Line */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm text-muted-foreground">
              {player.statLine}
            </span>
            <span className="font-stats text-lg font-bold text-foreground">
              {player.statValue}
            </span>
          </div>
          
          {/* Confidence Bar */}
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 animate-fill-bar"
              style={{ 
                width: `${player.confidence}%`,
                '--fill-width': `${player.confidence}%`
              } as React.CSSProperties}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-body text-xs text-muted-foreground">
              Confidence
            </span>
            <span className="font-stats text-xs font-bold text-primary">
              {player.confidence}%
            </span>
          </div>
        </div>

        {/* OVER/UNDER Buttons */}
        <div className="flex space-x-3">
          <Button
            onClick={handleOverClick}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-stats font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-glow"
          >
            OVER
          </Button>
          <Button
            onClick={handleUnderClick}
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-stats font-bold text-sm tracking-wide transition-all duration-200"
          >
            UNDER
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;