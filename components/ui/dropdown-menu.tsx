import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, trigger, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm hover:bg-slate-100 transition-colors"
        >
          {trigger}
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-full z-20 mt-1 min-w-[120px] rounded-md border bg-white shadow-lg">
              {children}
            </div>
          </>
        )}
      </div>
    );
  }
);
DropdownMenu.displayName = "DropdownMenu";

const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full px-3 py-2 text-left text-sm hover:bg-slate-50 transition-colors",
        className
      )}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export { DropdownMenu, DropdownMenuItem };
