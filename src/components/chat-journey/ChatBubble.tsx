import { memo } from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Pencil, Sparkles, User } from "lucide-react";
import edumateLogo from "../../../public/favicon.ico";
import TypewriterText from "./TypewriterText";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
  onEdit?: () => void;
  canEdit?: boolean;
  typewriter?: boolean;
}

const ChatBubbleComponent = ({ message, isUser, isTyping, onEdit, canEdit, typewriter = false }: ChatBubbleProps) => {
  return (
    <div className={cn(
      "w-full py-6 px-4 md:px-6 transition-all duration-300",
      "animate-fade-in"
    )}>
      <div className="max-w-3xl mx-auto">
        <div className={cn(
          "flex gap-4",
          isUser ? "flex-row-reverse" : "flex-row"
        )}>
          {/* Enhanced Avatar */}
          <div className="flex-shrink-0 pt-1">
            {isUser ? (
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-card to-primary/5 border-2 border-border/50 flex items-center justify-center shadow-md backdrop-blur-sm overflow-hidden">
                  <User className="w-5 h-5 text-primary" strokeWidth={2.5} />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full ring-2 ring-background" />
              </div>
            ) : (
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-card to-primary/5 border-2 border-border/50 flex items-center justify-center shadow-md backdrop-blur-sm overflow-hidden">
                  <img src={edumateLogo} alt="Edumate" className="w-6 h-6 object-contain" />
                </div>
                {/* AI indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full flex items-center justify-center ring-2 ring-background">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Message Content */}
          <div className={cn(
            "flex-1 min-w-0",
            isUser ? "flex flex-col items-end" : ""
          )}>
            {/* Enhanced Sender Label */}
            <div className={cn(
              "flex items-center gap-2 mb-2",
              isUser ? "flex-row-reverse" : "flex-row"
            )}>
              <span className={cn(
                "text-xs font-bold uppercase tracking-wide",
                isUser ? "text-primary" : "text-accent"
              )}>
                {isUser ? "You" : "Edumate AI"}
              </span>
              {/* {!isUser && (
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
                  AI
                </span>
              )} */}
            </div>

        {/* Message Bubble */}
        {isTyping ? (
          <div className="inline-flex items-center gap-1.5 px-5 py-4 chat-bubble-ai">
            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
          </div>
        ) : (
          <div 
            className={cn(
              "relative inline-block group",
              isUser ? "chat-bubble-user" : "chat-bubble-ai"
            )}
          >
            {typewriter && !isUser ? (
              <TypewriterText><ReactMarkdown>{message}</ReactMarkdown></TypewriterText>
            ) : (
              <ReactMarkdown>{message}</ReactMarkdown>
            )}
            
            {/* Edit Button - positioned outside the bubble */}
            {canEdit && onEdit && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
                className="absolute -right-1 -top-1 p-1.5 rounded-full bg-card border border-border shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-muted hover:scale-110 z-10"
                aria-label="Edit response"
              >
                <Pencil className="w-3 h-3 text-muted-foreground" />
              </button>
            )}
          </div>
        )}

            {/* Message timestamp (optional) */}
            {!isTyping && (
              <div className={cn(
                "mt-1.5 text-[11px] text-muted-foreground/60",
                isUser ? "text-right" : "text-left"
              )}>
                Just now
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChatBubble = memo(ChatBubbleComponent);