import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Calendar } from 'lucide-react'
import Logo from './Logo'
import { CLINIC, telLink, waLink } from '../lib/constants'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-[72px]">
        <a href="#" aria-label={CLINIC.name}>
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-vet-text hover:text-vet-green transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vet-green transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={telLink(CLINIC.phone)}
            className="flex items-center gap-2 text-sm font-semibold text-vet-blue hover:text-vet-blue-dark transition"
          >
            <Phone size={16} /> {CLINIC.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !px-5 text-sm">
            <Calendar size={16} /> Agendar Cita
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-vet-gray text-vet-green-dark"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-black/5"
          >
            <div className="container-wide py-5 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-vet-text font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={telLink(CLINIC.phone)}
                className="py-2 font-semibold text-vet-blue flex items-center gap-2"
              >
                <Phone size={16} /> {CLINIC.phone}
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary mt-2">
                <Calendar size={16} /> Agendar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
