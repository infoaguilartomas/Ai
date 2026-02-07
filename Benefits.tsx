import { Shield, Clock, Palette, Eye, Heart, BadgeEuro } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const benefits = [
  {
    icon: Shield,
    title: '100% Legal y Seguro',
    description: 'Sin necesidad de consentimientos RGPD de pacientes. Elimina por completo los riesgos legales asociados al uso de fotografías de personas reales.',
    gradient: 'from-emerald-500 to-teal',
  },
  {
    icon: Clock,
    title: 'Producción Rápida',
    description: 'Entrega en 48-72 horas. Genera contenido nuevo cuando lo necesites sin depender de sesiones fotográficas ni de la disponibilidad de modelos.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Personalización Total',
    description: 'Cada imagen se adapta a tu marca, tus tratamientos específicos y tu público objetivo. Contenido único que refleja tu identidad profesional.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Eye,
    title: 'Consistencia Visual',
    description: 'Mantén el mismo estilo visual en todas tus plataformas: web, redes sociales, folletos y publicidad. Una imagen de marca coherente y profesional.',
    gradient: 'from-teal to-teal-dark',
  },
  {
    icon: Heart,
    title: 'Ético y Transparente',
    description: 'Promueve la honestidad con tu audiencia. Las imágenes se identifican claramente como generadas por IA, fortaleciendo la confianza con tus pacientes.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: BadgeEuro,
    title: 'Coste Predecible',
    description: 'Sin sorpresas ni variables. Presupuestos claros y cerrados que te permiten planificar tu inversión en marketing con total tranquilidad.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal/[0.03] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Ventajas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Por Qué Elegir Imágenes Generadas con{' '}
            <span className="text-gradient bg-gradient-to-r from-teal to-teal-dark">IA</span>
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed">
            Una solución integral que combina legalidad, calidad y eficiencia para transformar el marketing de tu clínica.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.08}>
              <div className="relative h-full p-8 rounded-2xl bg-white border border-border-custom/60 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 group hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '0 8px 20px -4px rgba(74, 155, 155, 0.15)' }}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-navy/50 leading-relaxed">{benefit.description}</p>

                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${benefit.gradient} opacity-[0.03] rounded-bl-[40px] rounded-tr-2xl group-hover:opacity-[0.06] transition-opacity`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
