import { motion } from 'framer-motion'

const photos = [
  { src: '/images/hero-vet.jpg', alt: 'Veterinario atendiendo a una mascota', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/consultorio.jpg', alt: 'Consultorio limpio y moderno', span: '' },
  { src: '/images/perro-feliz.jpg', alt: 'Perro feliz en la clínica', span: '' },
  { src: '/images/gato-consulta.jpg', alt: 'Gato en consulta veterinaria', span: 'lg:col-span-2' },
  { src: '/images/vet-exam.jpg', alt: 'Examen veterinario profesional', span: '' },
  { src: '/images/puppy.jpg', alt: 'Cachorro en su primera visita', span: '' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="section bg-vet-gray">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="eyebrow">Nuestro espacio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Un lugar hecho para ellos</h2>
          <p className="text-vet-text-soft text-lg">
            Instalaciones cómodas, limpias y diseñadas para hacer sentir a cada mascota en casa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-card overflow-hidden shadow-card group cursor-pointer ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vet-green-dark/80 via-vet-green-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {p.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
