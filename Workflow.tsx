import { MessageCircle, FileText, Eye, RefreshCcw, PackageCheck } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const steps = [
  {
    icon: MessageCircle,
    title: 'Consulta Inicial',
    description: 'Entendemos tus necesidades, tu marca y los tratamientos que deseas promocionar. Sin compromiso.',
    color: 'bg-teal',
  },
  {
    icon: FileText,
    title: 'Brief Creativo',
    description: 'Definimos juntos los tratamientos, estilos visuales, formatos y plataformas de destino.',
    color: 'bg-navy-light',
  },
  {
    icon: Eye,
    title: 'Primera Entrega',
    description: 'Recibes una selección de muestras para revisar y validar la dirección visual del proyecto.',
    color: 'bg-teal',
  },
  {
    icon: RefreshCcw,
    title: 'Ajustes y Refinamiento',
    description: 'Incorporamos tu feedback para perfeccionar cada imagen hasta que se ajuste a tus expectativas.',
    color: 'bg-navy-light',
  },
  {
    icon: PackageCheck,
    title: 'Entrega Final',
    description: 'Archivos en alta resolución, optimizados para cada plataforma y listos para publicar.',
    color: 'bg-teal',
  },
];

export function Workflow() {
  return (
    <section className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Cómo Trabajamos Contigo
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed">
            Un proceso colaborativo diseñado para conseguir un resultado personalizado y profesional.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="relative flex gap-6 lg:gap-10 pb-12 last:pb-0">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-lg flex-shrink-0 z-10`}
                    style={{ boxShadow: `0 8px 20px -4px ${step.color === 'bg-teal' ? 'rgba(74,155,155,0.25)' : 'rgba(26,43,74,0.2)'}` }}
                  >
                    <step.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-teal/30 via-border-custom to-border-custom mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-teal/60 uppercase tracking-widest">
                      Paso {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-navy/50 leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Message */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border-custom/60 shadow-sm">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-semibold text-navy">
                Proceso colaborativo, resultado personalizado
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
