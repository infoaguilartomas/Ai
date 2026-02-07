import { MessageSquareText, Cpu, PackageCheck } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    icon: MessageSquareText,
    title: 'Defines tu Necesidad',
    description:
      'Nos indicas el tipo de tratamiento, el estilo visual deseado, tu identidad de marca y el uso previsto de las imágenes.',
    details: ['Tipo de tratamiento', 'Estilo visual', 'Formato requerido', 'Identidad de marca'],
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Generamos Imágenes Personalizadas',
    description:
      'Nuestra IA, entrenada específicamente en estética médica, crea imágenes fotorrealistas adaptadas a tus especificaciones.',
    details: ['IA especializada', 'Fotorrealismo clínico', 'Múltiples variantes', 'Control de calidad'],
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Recibes Contenido Listo',
    description:
      'Entregamos archivos en alta resolución, en los formatos y tamaños que necesitas, listos para usar en cualquier plataforma.',
    details: ['Alta resolución 4K', 'Múltiples formatos', 'Adaptado a RRSS', 'Listo para publicar'],
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Tecnología IA +{' '}
            <span className="text-gradient bg-gradient-to-r from-teal to-teal-dark">
              Expertise Clínico
            </span>
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed">
            Un proceso simple y colaborativo que combina la potencia de la inteligencia artificial con el conocimiento clínico real.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>
              <div className="relative h-full">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-teal/30 via-teal/20 to-transparent z-10" style={{ width: 'calc(100% - 3rem)' , left: 'calc(50% + 1.5rem)' }} />
                )}

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-border-custom/60 shadow-sm hover:shadow-xl hover:shadow-teal/5 transition-all duration-500 group h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shadow-lg shadow-teal/20 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-extrabold text-navy/[0.06] group-hover:text-teal/10 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-navy/50 leading-relaxed mb-6">{step.description}</p>

                  {/* Detail Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium text-navy/50 border border-border-custom/50"
                      >
                        {detail}
                      </span>
                    ))}
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
