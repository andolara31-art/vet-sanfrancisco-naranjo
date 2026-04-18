import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react'
import { CLINIC, telLink, waLink } from '../lib/constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', '57188588-f5f6-4bac-9a8e-075d9af37752')
    data.append('subject', 'Nueva consulta — Clínica Veterinaria Occivet')
    data.append('from_name', 'Web Occivet')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        throw new Error(json.message || 'Error al enviar')
      }
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Error al enviar')
    }
  }

  return (
    <section id="contacto" className="section bg-vet-gray">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Contáctanos</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              ¿Tienes una consulta?
            </h2>
            <p className="text-vet-text-soft text-lg mb-8 leading-relaxed">
              Escríbenos y te responderemos pronto. Para emergencias, preferimos WhatsApp
              o llamada directa.
            </p>

            <div className="space-y-4">
              <a
                href={telLink(CLINIC.phone)}
                className="flex items-start gap-4 p-5 bg-white rounded-card shadow-card hover:shadow-lift transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-vet-green/10 text-vet-green flex items-center justify-center shrink-0 group-hover:bg-vet-green group-hover:text-white transition">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-vet-text-soft mb-0.5">
                    Clínica
                  </div>
                  <div className="font-bold text-vet-text">{CLINIC.phone}</div>
                </div>
              </a>

              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-card shadow-card hover:shadow-lift transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-vet-text-soft mb-0.5">
                    WhatsApp · Emergencias
                  </div>
                  <div className="font-bold text-vet-text">{CLINIC.whatsapp}</div>
                </div>
              </a>

              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-5 bg-white rounded-card shadow-card hover:shadow-lift transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-vet-blue/10 text-vet-blue flex items-center justify-center shrink-0 group-hover:bg-vet-blue group-hover:text-white transition">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-vet-text-soft mb-0.5">
                    Ubicación
                  </div>
                  <div className="font-bold text-vet-text">{CLINIC.address}</div>
                  <div className="text-sm text-vet-text-soft mt-0.5">{CLINIC.building}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="card p-7 md:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-vet-green-dark mb-6">
              Envíanos un mensaje
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-vet-text block mb-2">Nombre completo *</span>
                <input
                  required
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-vet-gray focus:bg-white focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-vet-text block mb-2">Teléfono *</span>
                <input
                  required
                  type="tel"
                  name="telefono"
                  placeholder="8888-8888"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-vet-gray focus:bg-white focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition"
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-sm font-semibold text-vet-text block mb-2">Tipo de mascota *</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'Perro', icon: '🐕' },
                  { value: 'Gato', icon: '🐈' },
                  { value: 'Otro', icon: '🐾' },
                ].map((p) => (
                  <label
                    key={p.value}
                    className="relative cursor-pointer flex flex-col items-center gap-1 py-4 rounded-xl border-2 border-black/10 bg-vet-gray hover:bg-white hover:border-vet-green transition has-[:checked]:border-vet-green has-[:checked]:bg-white has-[:checked]:shadow-soft"
                  >
                    <input
                      type="radio"
                      name="mascota"
                      value={p.value}
                      required
                      className="sr-only"
                    />
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-sm font-semibold text-vet-text">{p.value}</span>
                  </label>
                ))}
              </div>
            </label>

            <label className="block mt-4">
              <span className="text-sm font-semibold text-vet-text block mb-2">Motivo de consulta *</span>
              <select
                required
                name="motivo"
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-vet-gray focus:bg-white focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option>Consulta general</option>
                <option>Vacunación</option>
                <option>Cirugía</option>
                <option>Desparasitación</option>
                <option>Limpieza dental</option>
                <option>Emergencia</option>
                <option>Otra consulta</option>
              </select>
            </label>

            <label className="block mt-4">
              <span className="text-sm font-semibold text-vet-text block mb-2">Mensaje *</span>
              <textarea
                required
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos sobre tu mascota..."
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-vet-gray focus:bg-white focus:border-vet-green focus:ring-2 focus:ring-vet-green/20 outline-none transition resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full mt-6 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} /> Enviar mensaje
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-start gap-3 p-4 bg-vet-green/10 border border-vet-green/20 rounded-xl text-vet-green-dark"
              >
                <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong>¡Mensaje enviado!</strong> Te contactaremos lo antes posible.
                </div>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
              >
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <div className="text-sm">
                  Hubo un problema: {error}. Escríbenos por WhatsApp al {CLINIC.whatsapp}.
                </div>
              </motion.div>
            )}

            <p className="mt-4 text-xs text-vet-text-soft text-center">
              Al enviar aceptas ser contactado por nuestro equipo. No compartimos tus datos.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
