import { Syringe, Stethoscope, Smile, Megaphone } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const audiences = [
  {
    icon: Syringe,
    title: 'Clínicas de Medicina Estética',
    description: 'Imágenes para promocionar tratamientos faciales, corporales y de rejuvenecimiento. Contenido visual que refleja resultados profesionales para tu web y redes sociales.',
    features: ['Tratamientos faciales', 'Rellenos y toxina botulínica', 'Contorno corporal'],
  },
  {
    icon: Stethoscope,
    title: 'Centros Dermatológicos',
    description: 'Visualizaciones de tratamientos dermatológicos y resultados de cuidado de la piel. Material educativo y promocional adaptado a tu especialidad.',
    features: ['Tratamientos de piel', 'Procedimientos láser', 'Dermatología estética'],
  },
  {
    icon: Smile,
    title: 'Clínicas Dentales Estéticas',
    description: 'Imágenes de sonrisas perfectas y resultados de tratamientos dentales estéticos. Contenido que inspira confianza en tus futuros pacientes.',
    features: ['Blanqueamiento dental', 'Carillas y coronas', 'Ortodoncia estética'],
  },
  {
    icon: Megaphone,
    title: 'Agencias de Marketing Médico',
    description: 'Recursos visuales de alta calidad para las campañas de tus clientes del sector salud. Contenido listo para usar en estrategias multicanal.',
    features: ['Campañas publicitarias', 'Gestión de RRSS', 'Diseño web médico'],
  },
];

export function TargetAudience() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Para Quién
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            ¿Para Quién Es Este Servicio?
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed">
            Profesionales del sector estético y de la salud que buscan soluciones visuales de calidad, legales y éticas.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <FadeIn key={audience.title} delay={index * 0.1}>
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-surface to-white border border-border-custom/60 shadow-sm hover:shadow-xl hover:shadow-teal/5 transition-all duration-500 group hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shadow-lg shadow-navy/20 flex-shrink-0 group-hover:bg-teal transition-colors duration-300">
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                      {audience.title}
                    </h3>
                    <p className="text-navy/50 leading-relaxed mb-4">{audience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {audience.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal/5 text-xs font-medium text-teal border border-teal/10"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
