export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-11 h-11 rounded-full bg-vet-green flex items-center justify-center shadow-soft">
        <svg viewBox="0 0 64 64" className="w-7 h-7" fill="white" aria-hidden>
          <path d="M20 26c2 0 3.6-2.5 3.6-5.5S22 15 20 15s-3.6 2.5-3.6 5.5S18 26 20 26zm24 0c2 0 3.6-2.5 3.6-5.5S46 15 44 15s-3.6 2.5-3.6 5.5S42 26 44 26zM26 20c2 0 3.6-2.5 3.6-5.5S28 9 26 9s-3.6 2.5-3.6 5.5S24 20 26 20zm12 0c2 0 3.6-2.5 3.6-5.5S40 9 38 9s-3.6 2.5-3.6 5.5S36 20 38 20zm-6 6c-5 0-12 7-12 13.5 0 3.7 2.8 6.5 6.5 6.5 1.8 0 2.8-.9 5.5-.9s3.7.9 5.5.9c3.7 0 6.5-2.8 6.5-6.5C44 33 37 26 32 26z"/>
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display text-[17px] font-bold text-vet-green-dark tracking-tight">
          Occivet
        </div>
        <div className="text-[11px] text-vet-text-soft font-medium tracking-wide">
          Clínica Veterinaria · Naranjo
        </div>
      </div>
    </div>
  )
}
