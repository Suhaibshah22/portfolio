import { cn } from "@/lib/utils";
import { GridWrapperProps } from "@/interfaces";

export function GridWrapper({
  grid = 1,
  mobile = 0,
  tablet = 0,
  desktop = 0,
  children,
  className,
}: GridWrapperProps) {
  return (
    <article
      className={cn(
        "grid gap-4",
        `grid-cols-${grid}`,
        `col-span-${mobile} md:!col-span-${tablet} xl:!col-span-${desktop}`,
        className
      )}
    >
      {children ?? ""}
    </article>
  );
}
