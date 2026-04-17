import { motion } from 'framer-motion'
import { Stethoscope, Syringe, Scissors, Bug, Sparkles, Siren } from 'lucide-react'
import { waLink } from '../lib/constants'

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta General',
    desc: 'Revisión médica completa con diagnóstico profesional y seguimiento personalizado para tu mascota.',
    color: 'text-vet-green',
    bg: 'bg-vet-green/10',
  },
  {
    icon: Syringe,
    title: 'Vacunación',
    desc: 'Esquemas de vacunación al día contra parvovirus, moquillo, rabia y enfermedades felinas.',
    color: 'text-vet-blue',
    bg: 'bg-vet-blue/10',
  },
  {
    icon: Scissors,
    title: 'Cirugía',
    desc: 'Esterilizaciones, castraciones y procedimientos quirúrgicos con anestesia monitoreada.',
    color: 'text-vet-green',
    bg: 'bg-vet-green/10',
  },
  {
    icon: Bug,
    title: 'Desparasitación',
    desc: 'Control interno y externo contra pulgas, garrapatas, gusanos y parásitos intestinales.',
    color: 'text-vet-blue',
    bg: 'bg-vet-blue/10',
  },
  {
    icon: Sparkles,
    title: 'Limpieza Dental',
    desc: 'Profilaxis dental bajo anestesia para prevenir enfermedades bucales y mantener sonrisas sanas.',
    color: 'text-vet-green',
    bg: 'bg-vet-green/10',
  },
  {
    icon: Siren,
    title: 'Emergencias',
    desc: 'Atención urgente para accidentes, intoxicaciones y situaciones críticas de salud.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="eyebrow">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Atención veterinaria integral
          </h2>
          <p className="text-vet-text-soft text-lg leading-relaxed">
            Cubrimos todas las necesidades de salud de tu mascota bajo un mismo techo,
            con equipamiento moderno y trato cálido.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card card-hover p-7 group cursor-pointer"
              onClick={() => window.open(waLink(`Hola, quisiera información sobre el servicio de ${s.title}`), '_blank')}
            >
              <div
                className={`w-14 h-14 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <s.icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-vet-green-dark">{s.title}</h3>
              <p className="text-vet-text-soft text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 text-sm font-semibold text-vet-green flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Consultar <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
