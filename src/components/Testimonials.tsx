import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'María Fernanda Solís',
    role: 'Dueña de Canela, Poodle',
    text: 'Llevo a mi perrita desde cachorra y siempre la tratan con muchísimo cariño. Los doctores son pacientes, explican todo y los precios son justos. Recomiendo la clínica mil veces.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Carlos Jiménez Araya',
    role: 'Dueño de Luna, Siamés',
    text: 'Mi gata tuvo una emergencia un sábado en la tarde y respondieron al instante por WhatsApp. La operaron esa misma noche. El profesionalismo y el amor por los animales se nota desde que entras.',
    rating: 5,
    initial: 'C',
  },
  {
    name: 'Adriana Vargas',
    role: 'Familia con 3 mascotas',
    text: 'Es la clínica de confianza de toda mi familia. Desde la vacunación hasta cirugías, siempre sentimos que nuestras mascotas están en las mejores manos. El trato humano es excepcional.',
    rating: 5,
    initial: 'A',
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="eyebrow">Lo que dicen de nosotros</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Familias que nos recomiendan</h2>
          <p className="text-vet-text-soft text-lg">
            La confianza de nuestros clientes es nuestro mejor testimonio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card card-hover p-7 relative"
            >
              <Quote
                size={48}
                className="absolute top-5 right-5 text-vet-green/10"
                fill="currentColor"
              />

              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-vet-text leading-relaxed mb-6 relative z-10">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-5 border-t border-black/5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-vet-green to-vet-blue text-white font-bold flex items-center justify-center shadow-soft">
                  {r.initial}
                </div>
                <div>
                  <div className="font-bold text-vet-text">{r.name}</div>
                  <div className="text-xs text-vet-text-soft">{r.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-vet-text-soft"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['👩', '👨', '👩‍🦰', '👱'].map((e, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-vet-beige flex items-center justify-center text-sm border-2 border-white"
                >
                  {e}
                </div>
              ))}
            </div>
            <span className="font-semibold">+2,944 familias satisfechas</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-black/10" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-2 font-semibold">5.0 en Facebook</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
