export default function DurationBadge({ duration }: { duration: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-forest text-cream font-body text-xs uppercase tracking-widest rounded-full font-bold">
      {duration}
    </span>
  )
}
