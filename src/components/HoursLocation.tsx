import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, MessageCircle, Navigation } from 'lucide-react'
import { CLINIC, telLink, waLink } from '../lib/constants'

const schedule = [
  { day: 'Lunes – Viernes', hours: '8:00 AM – 6:00 PM', active: true },
  { day: 'Sábado', hours: '8:00 AM – 2:00 PM', active: true },
  { day: 'Domingo', hours: 'Solo emergencias', active: false },
  { day: 'Feriados', hours: 'Consultar por WhatsApp', active: false },
]

export default function HoursLocation() {
  const today = new Date().getDay()
  const todayIdx = today === 0 ? 2 : today === 6 ? 1 : 0

  return (
    <section id="horarios" className="section bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="eyebrow">Encuéntranos</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Horarios y Ubicación</h2>
          <p className="text-vet-text-soft text-lg">
            Estamos a minutos de ti, listos para atender a tu mascota.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Schedule card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-vet-green/5" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-vet-green text-white flex items-center justify-center">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-vet-green-dark">Horarios de atención</h3>
                  <p className="text-sm text-vet-text-soft">Consultas con cita previa</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {schedule.map((s, i) => (
                  <div
                    key={s.day}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl transition ${
                      i === todayIdx ? 'bg-vet-green/10 border border-vet-green/30' : 'border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          s.active ? 'bg-vet-green' : 'bg-vet-text-soft/40'
                        }`}
                      />
                      <span className="font-semibold text-vet-text">{s.day}</span>
                      {i === todayIdx && (
                        <span className="text-[10px] uppercase tracking-wider bg-vet-green text-white px-2 py-0.5 rounded-full font-bold">
                          Hoy
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-vet-text-soft font-medium">{s.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-vet-beige rounded-2xl p-5 border border-vet-green/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-bold text-sm text-vet-green-dark">Emergencias 24/7</span>
                </div>
                <p className="text-sm text-vet-text-soft">
                  Para urgencias fuera de horario, escríbenos al WhatsApp{' '}
                  <a href={telLink(CLINIC.whatsapp)} className="font-bold text-vet-green underline">
                    {CLINIC.whatsapp}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="card overflow-hidden flex flex-col"
          >
            {/* Map placeholder */}
            <div className="relative h-64 md:h-72 bg-gradient-to-br from-vet-green/20 via-vet-blue/10 to-vet-beige flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full opacity-40"
                aria-hidden
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2E7D32" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                <path d="M 0 160 Q 100 140 200 170 T 400 150" stroke="#2E7D32" strokeWidth="3" fill="none" opacity="0.5" />
                <path d="M 0 100 Q 150 80 300 110 T 400 90" stroke="#1565C0" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-vet-green text-white flex items-center justify-center shadow-lift">
                  <MapPin size={28} fill="currentColor" />
                </div>
                <div className="mt-2 w-3 h-3 rounded-full bg-vet-green-dark/30" />
              </motion.div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 text-xs font-semibold text-vet-green-dark shadow-card">
                📍 Naranjo, Alajuela
              </div>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-white hover:bg-vet-green hover:text-white transition rounded-full px-4 py-2 text-xs font-bold text-vet-green-dark shadow-card flex items-center gap-1.5"
              >
                <Navigation size={14} /> Ver en Google Maps
              </a>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={20} className="text-vet-green mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-bold text-vet-green-dark mb-1">
                    {CLINIC.name}
                  </h3>
                  <p className="text-vet-text-soft">{CLINIC.address}</p>
                  <p className="text-sm text-vet-text-soft mt-1">{CLINIC.building}</p>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-black/5 flex flex-col sm:flex-row gap-3">
                <a href={telLink(CLINIC.phone)} className="btn-outline !py-2.5 flex-1 text-sm">
                  <Phone size={16} /> {CLINIC.phone}
                </a>
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 flex-1 text-sm">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
