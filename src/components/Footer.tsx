import { Facebook, Phone, MessageCircle, MapPin } from 'lucide-react'
import Logo from './Logo'
import { CLINIC, telLink, waLink } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-vet-green-dark text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-4 inline-block">
              <Logo />
            </div>
            <p className="mt-5 text-white/80 text-sm leading-relaxed max-w-sm">
              {CLINIC.tagline}. Atención veterinaria cálida y profesional en Naranjo, Alajuela.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-vet-green-dark flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={telLink(CLINIC.phone)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-vet-green-dark flex items-center justify-center transition"
                aria-label="Teléfono"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-white transition">Nosotros</a></li>
              <li><a href="#horarios" className="hover:text-white transition">Horarios</a></li>
              <li><a href="#galeria" className="hover:text-white transition">Galería</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{CLINIC.address}</span>
              </li>
              <li>
                <a href={telLink(CLINIC.phone)} className="flex items-center gap-2 hover:text-white transition">
                  <Phone size={15} /> {CLINIC.phone}
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <MessageCircle size={15} /> {CLINIC.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {CLINIC.name}. Todos los derechos reservados.</div>
          <div className="flex items-center gap-2">
            Hecho con <span className="text-red-400">❤</span> para las mascotas de Naranjo
          </div>
        </div>
      </div>
    </footer>
  )
}
