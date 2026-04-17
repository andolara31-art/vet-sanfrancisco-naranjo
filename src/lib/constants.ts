export const CLINIC = {
  name: 'Clínica Veterinaria San Francisco de Asís',
  shortName: 'San Francisco de Asís',
  tagline: 'El bienestar animal del cantón de Naranjo',
  address: 'Sureste del Ministerio de Salud, Naranjo, Alajuela',
  addressShort: 'Naranjo, Alajuela',
  building: 'Edificio de 2 plantas',
  phone: '2451-8306',
  phoneIntl: '+50624518306',
  whatsapp: '8639-8306',
  whatsappIntl: '+50686398306',
  whatsappMessage: 'Hola, necesito una cita para mi mascota',
  facebook: {
    likes: 2944,
    checkins: 547,
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Clinica+Veterinaria+San+Francisco+de+Asis+Naranjo+Alajuela',
}

export const waLink = (msg = CLINIC.whatsappMessage) =>
  `https://wa.me/${CLINIC.whatsappIntl.replace('+', '')}?text=${encodeURIComponent(msg)}`

export const telLink = (num: string) => `tel:${num.replace(/[^0-9+]/g, '')}`
