import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { CLINIC, waLink } from '../lib/constants'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)

  useEffect(() => {
    const show = () => setVisible(window.scrollY > 300)
    show()
    window.addEventListener('scroll', show, { passive: true })
    const t = setTimeout(() => setTooltipOpen(true), 2500)
    return () => {
      window.removeEventListener('scroll', show)
      clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed bottom-5 right-5 z-50 flex items-end gap-2"
        >
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-card p-4 pr-9 max-w-[240px] mb-1 relative"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-vet-gray flex items-center justify-center text-vet-text-soft hover:bg-vet-green hover:text-white transition"
                  aria-label="Cerrar"
                >
                  <X size={12} />
                </button>
                <div className="text-xs font-bold text-vet-green-dark mb-1">👋 ¡Hola!</div>
                <div className="text-sm text-vet-text leading-snug">
                  ¿Necesitas una cita para tu mascota? Escríbenos.
                </div>
                <div className="absolute -right-1.5 bottom-4 w-3 h-3 bg-white rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={waLink(CLINIC.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lift hover:shadow-card transition"
            aria-label="WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <MessageCircle size={26} className="relative" fill="currentColor" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
