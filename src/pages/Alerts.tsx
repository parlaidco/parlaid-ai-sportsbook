import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, TrendingDown, Clock } from "lucide-react";

interface Alert {
  id: string;
  type: 'injury' | 'line_movement' | 'weather' | 'news';
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  time: string;
  impact: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "injury",
    severity: "high", 
    title: "Stefon Diggs - Questionable",
    description: "Limited practice with ankle injury. 70% chance to play according to team sources.",
    time: "2 mins ago",
    impact: "May reduce receiving yards prop value"
  },
  {
    id: "2",
    type: "line_movement",
    severity: "medium",
    title: "Josh Allen Passing Yards",
    description: "Line moved from 285.5 to 288.5 - significant sharp action on OVER.",
    time: "15 mins ago", 
    impact: "Market confidence increasing on OVER"
  },
  {
    id: "3",
    type: "weather",
    severity: "low",
    title: "Buffalo Weather Update",
    description: "Wind speeds decreased to 8mph. Indoor dome game conditions favorable.",
    time: "1 hour ago",
    impact: "Positive for passing game props"
  },
  {
    id: "4",
    type: "line_movement", 
    severity: "high",
    title: "Travis Kelce Receiving Yards",
    description: "Massive reverse line movement - UNDER 68.5 now favored by books.",
    time: "1 hour ago",
    impact: "Professional money hitting UNDER heavily"
  },
  {
    id: "5",
    type: "news",
    severity: "medium",
    title: "Miami Offensive Changes",
    description: "OC confirmed increased target share for Tyreek Hill in red zone packages.",
    time: "3 hours ago",
    impact: "Boost to Hill receiving props"
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'injury':
      return <AlertTriangle className="h-5 w-5" />;
    case 'line_movement':
      return <TrendingUp className="h-5 w-5" />;
    case 'weather':
      return <Clock className="h-5 w-5" />;
    case 'news':
      return <TrendingDown className="h-5 w-5" />;
    default:
      return <AlertTriangle className="h-5 w-5" />;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return 'bg-destructive text-destructive-foreground';
    case 'medium':
      return 'bg-primary text-primary-foreground';
    case 'low':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const Alerts = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
          LIVE ALERTS
        </h1>
        <p className="font-body text-lg text-muted-foreground">
          Real-time injury updates and line movements
        </p>
      </div>

      {/* High Priority Alerts Banner */}
      <div className="mb-8">
        {mockAlerts
          .filter(alert => alert.severity === 'high')
          .map(alert => (
            <div key={alert.id} className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4 animate-pulse-red">
              <div className="flex items-start space-x-3">
                <div className="text-destructive mt-0.5">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {alert.title}
                    </h3>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="font-body text-muted-foreground mb-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">
                      {alert.time}
                    </span>
                    <span className="font-body text-sm text-destructive font-medium">
                      {alert.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* All Alerts */}
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <Card key={alert.id} className="bg-gradient-to-br from-card to-card-gradient border border-border hover:border-primary/30 transition-all duration-200">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`text-${alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'primary' : 'muted-foreground'} mt-1`}>
                  {getAlertIcon(alert.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {alert.title}
                    </h3>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <span className="font-body text-xs text-muted-foreground">
                      {alert.time}
                    </span>
                  </div>
                  
                  <p className="font-body text-muted-foreground mb-3 leading-relaxed">
                    {alert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">
                      Impact:
                    </span>
                    <span className="font-body text-sm font-medium text-primary">
                      {alert.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Alerts;