import { memo } from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { User, Bot, Pencil } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
  onEdit?: () => void;
  canEdit?: boolean;
}

const ChatBubbleComponent = ({ message, isUser, isTyping, onEdit, canEdit }: ChatBubbleProps) => {
  return (
    <div className={cn(
      "w-full py-8 px-4 animate-fade-in",
      isUser ? "bg-background" : "bg-muted/20"
    )}>
      <div className="max-w-4xl mx-auto">
        <div className={cn(
          "flex gap-5 items-start",
          isUser && "flex-row-reverse"
        )}>
          {/* Avatar */}
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-110",
            isUser 
              ? "bg-gradient-to-br from-primary to-primary-light text-primary-foreground" 
              : "bg-gradient-to-br from-accent to-accent-light text-accent-foreground"
          )}>
            {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
          </div>

          {/* Message Content */}
          <div className="flex-1 space-y-2">
            {/* Label */}
            <div className={cn(
              "text-xs font-medium tracking-wide uppercase",
              isUser ? "text-primary" : "text-accent"
            )}>
              {isUser ? "You" : "Edumate"}
            </div>

            {/* Message Bubble */}
            <div className={cn(
              "relative",
              isUser && "flex justify-end"
            )}>
              {isTyping ? (
                <div className="flex gap-2 px-5 py-4 bg-muted/50 rounded-2xl border border-border/50 shadow-sm">
                  <span className="w-2.5 h-2.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2.5 h-2.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2.5 h-2.5 bg-muted-foreground/50 rounded-full animate-bounce" />
                </div>
              ) : (
                <div 
                  className={cn(
                    "inline-block max-w-[85%] px-5 py-4 rounded-2xl shadow-sm transition-all duration-300",
                    isUser 
                      ? "bg-primary/5 border border-primary/10 hover:border-primary/20" 
                      : "bg-card border border-border/50 hover:border-border",
                    canEdit && "cursor-pointer group hover:shadow-md"
                  )}
                  onClick={canEdit ? onEdit : undefined}
                >
                  <div className={cn(
                    "text-[15px] leading-relaxed",
                    "prose prose-sm max-w-none",
                    "prose-p:my-3 prose-p:first:mt-0 prose-p:last:mb-0",
                    "prose-strong:text-foreground prose-strong:font-semibold",
                    "prose-headings:text-foreground prose-headings:font-semibold",
                    isUser ? "text-foreground/90" : "text-foreground"
                  )}>
                    <ReactMarkdown>{message}</ReactMarkdown>
                  </div>
                  
                  {canEdit && (
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Pencil className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">
                        Edit response
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChatBubble = memo(ChatBubbleComponent);
