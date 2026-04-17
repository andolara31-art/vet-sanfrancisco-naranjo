import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Phone, Heart, MapPin } from 'lucide-react'
import { CLINIC, telLink, waLink } from '../lib/constants'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <section
      ref={ref}
      className="relative pt-[88px] md:pt-[96px] pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-vet-beige via-white to-vet-gray"
    >
      {/* Soft decorative blobs */}
      <div className="absolute -top-10 -left-20 w-80 h-80 rounded-full bg-vet-green/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-24 w-96 h-96 rounded-full bg-vet-blue/10 blur-3xl pointer-events-none" />

      <div className="container-wide grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center relative">
        <motion.div style={{ y: contentY }} className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-card text-sm font-medium text-vet-green-dark"
          >
            <Heart size={14} className="fill-vet-green text-vet-green" />
            {CLINIC.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] font-bold tracking-tight"
          >
            El bienestar de{' '}
            <span className="text-gradient-green">tu mascota</span>
            <br />
            es nuestra prioridad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-vet-text-soft max-w-xl leading-relaxed"
          >
            Clínica veterinaria en Naranjo, Alajuela. Atención cálida, profesional y cercana
            para perros, gatos y toda la familia. Más de una década cuidando a las mascotas
            del cantón.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary text-base">
              <Calendar size={18} /> Agendar Cita
            </a>
            <a
              href={telLink(CLINIC.whatsapp)}
              className="btn-outline text-base !border-vet-blue !text-vet-blue hover:!bg-vet-blue hover:!text-white"
            >
              <Phone size={18} /> Emergencias: {CLINIC.whatsapp}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-vet-text-soft"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-vet-green" /> {CLINIC.addressShort}
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-vet-green fill-vet-green" />
              {CLINIC.facebook.likes.toLocaleString('es-CR')}+ familias confían en nosotros
            </div>
          </motion.div>
        </motion.div>

        {/* Image stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[580px]"
        >
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0 rounded-hero overflow-hidden shadow-card"
          >
            <img
              src="/images/hero-vet.jpg"
              alt="Veterinario atendiendo a un perro con cariño"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-card p-4 pr-6 flex items-center gap-3 max-w-[240px]"
          >
            <div className="w-12 h-12 rounded-full bg-vet-beige flex items-center justify-center text-2xl">
              🐾
            </div>
            <div>
              <div className="font-display font-bold text-vet-green-dark">+10 años</div>
              <div className="text-xs text-vet-text-soft">cuidando Naranjo</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-8 -right-3 sm:-right-6 bg-vet-green text-white rounded-2xl shadow-soft p-4 max-w-[180px]"
          >
            <div className="text-[11px] uppercase tracking-wider font-bold opacity-80">Emergencias</div>
            <div className="font-display text-xl font-bold">{CLINIC.whatsapp}</div>
            <div className="text-[11px] mt-1 opacity-90">WhatsApp directo</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
