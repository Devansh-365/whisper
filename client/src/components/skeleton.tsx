export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative animate-pulse rounded-md bg-gray-200/70 before:absolute before:inset-0 before:-translate-x-full before:border-y before:bg-gradient-to-r before:from-transparent before:via-gray8 before:to-transparent ${className}`}
      {...props}
    />
  );
}
