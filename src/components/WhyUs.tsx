import { motion } from 'framer-motion'
import { Award, Users, HeartHandshake, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Experiencia comprobada',
    desc: 'Más de una década acompañando a las familias de Naranjo en el cuidado de sus mascotas.',
    stat: '+10',
    statLabel: 'años de servicio',
  },
  {
    icon: Users,
    title: 'Equipo profesional',
    desc: 'Veterinarios con formación continua, comprometidos con las mejores prácticas y actualizaciones.',
    stat: '100%',
    statLabel: 'certificados',
  },
  {
    icon: HeartHandshake,
    title: 'Amor por los animales',
    desc: 'Tratamos a cada mascota como parte de nuestra familia. Cariño y paciencia en cada visita.',
    stat: '2,944',
    statLabel: 'familias felices',
  },
  {
    icon: MapPin,
    title: 'Naranjo y alrededores',
    desc: 'Ubicación accesible en el centro de Naranjo, sirviendo a todo el cantón y comunidades vecinas.',
    stat: '547+',
    statLabel: 'visitas registradas',
  },
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="section bg-paws relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">¿Por qué elegirnos?</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La confianza de Naranjo por una razón
            </h2>
            <p className="text-vet-text-soft text-lg leading-relaxed mb-8">
              Desde nuestro edificio de dos plantas al sureste del Ministerio de Salud,
              hemos construido una relación de cariño con cada familia que cruza nuestra puerta.
              No somos solo veterinarios: somos vecinos cuidando a los amigos de cuatro patas
              del cantón.
            </p>

            <div className="relative rounded-hero overflow-hidden shadow-card aspect-[4/3]">
              <img
                src="/images/vet-team.jpg"
                alt="Equipo veterinario profesional"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vet-green-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-display text-2xl font-bold">Bienvenido a la familia</div>
                <div className="text-sm opacity-90 mt-1">Cuidamos a tu mascota como si fuera nuestra</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`card p-6 ${i % 2 === 1 ? 'sm:translate-y-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-vet-green/10 text-vet-green flex items-center justify-center mb-4">
                  <r.icon size={22} strokeWidth={2} />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="font-display text-3xl font-bold text-vet-green-dark">{r.stat}</div>
                  <div className="text-xs text-vet-text-soft font-medium">{r.statLabel}</div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-vet-text">{r.title}</h3>
                <p className="text-vet-text-soft text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
