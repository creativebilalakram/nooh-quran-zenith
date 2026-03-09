import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
}

const ImageWithSkeleton = ({
  containerClassName,
  skeletonClassName,
  className,
  onLoad,
  ...props
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <img
        {...props}
        loading="lazy"
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
      {!loaded && (
        <div
          className={cn(
            "absolute inset-0 animate-pulse bg-muted flex flex-col items-center justify-center gap-3 p-4",
            skeletonClassName
          )}
        >
          <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
          <div className="h-3 w-3/4 rounded-md bg-muted-foreground/10" />
          <div className="h-3 w-1/2 rounded-md bg-muted-foreground/10" />
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;
