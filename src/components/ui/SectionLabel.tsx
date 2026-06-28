export default function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`font-body text-label-caps uppercase tracking-wider mb-3 ${light ? 'text-gold' : 'text-gold'}`}>
      {children}
    </p>
  )
}
