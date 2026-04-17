import { motion } from 'framer-motion'
import { MessageCircle, Heart, Shield, Clock } from 'lucide-react'
import { waLink } from '../lib/constants'

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-vet-green-dark via-vet-green to-vet-green-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-vet-beige blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-vet-blue blur-3xl" />
      </div>

      <svg
        viewBox="0 0 1200 200"
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 100 + 50} ${(i % 3) * 60 + 30}) rotate(${i * 15})`}>
            <ellipse cx="0" cy="0" rx="8" ry="10" fill="white" />
            <ellipse cx="-12" cy="-14" rx="4" ry="5" fill="white" />
            <ellipse cx="12" cy="-14" rx="4" ry="5" fill="white" />
            <ellipse cx="-18" cy="-2" rx="3" ry="4" fill="white" />
            <ellipse cx="18" cy="-2" rx="3" ry="4" fill="white" />
          </g>
        ))}
      </svg>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm mb-6"
          >
            <Heart size={28} className="fill-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-[1.05]">
            Tu mascota <br />
            <span className="italic" style={{ fontFamily: 'Playfair Display' }}>
              merece lo mejor
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl mx-auto">
            Agenda tu cita por WhatsApp y recibe atención cálida, profesional y cercana.
            Respondemos rápido y con cariño.
          </p>

          <motion.a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-whatsapp text-lg"
          >
            <MessageCircle size={22} /> Escribir por WhatsApp
          </motion.a>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90 text-sm max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Clock size={16} /> Respuesta rápida
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield size={16} /> Atención profesional
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart size={16} /> Trato con cariño
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
