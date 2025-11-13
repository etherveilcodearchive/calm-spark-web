import { Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CorraButton = () => {
  return (
    <Link to="/assistant">
      <Button
        size="lg"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-glow animate-float z-40 p-0"
        title="Chat with Corra - Your AI Wellness Assistant"
      >
        <Bot className="h-7 w-7" />
      </Button>
    </Link>
  );
};

export default CorraButton;
