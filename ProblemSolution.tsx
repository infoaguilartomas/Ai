import { ShieldAlert, ImageOff, TrendingDown, ArrowRight } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const problems = [
  {
    icon: ShieldAlert,
    title: 'Fotos de Pacientes Reales',
    description:
      'Riesgos legales significativos con la RGPD, consentimientos complejos que caducan, y posibles reclamaciones futuras de los pacientes.',
    color: 'from-red-500/10 to-red-500/5',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
  },
  {
    icon: ImageOff,
    title: 'Bancos de Imágenes',
    description:
      'Imágenes genéricas que tu audiencia reconoce, poco creíbles para tratamientos específicos, sin personalización para tu marca.',
    color: 'from-amber-500/10 to-amber-500/5',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
  },
  {
    icon: TrendingDown,
    title: 'Producción Propia',
    description:
      'Costosa, requiere fotógrafo profesional, modelos, estudio. Lenta en producción y difícil de escalar cuando necesitas más contenido.',
    color: 'from-orange-500/10 to-orange-500/5',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
  },
];

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-custom to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            El Problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            El Desafío del Contenido Visual en Medicina Estética
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed">
            Las clínicas necesitan contenido visual impactante, pero las opciones actuales presentan importantes limitaciones.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <FadeIn key={problem.title} delay={index * 0.1}>
              <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-b ${problem.color} border border-border-custom/50 hover:shadow-lg transition-all duration-300 group`}>
                <div className={`w-14 h-14 rounded-2xl ${problem.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <problem.icon className={`w-7 h-7 ${problem.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{problem.title}</h3>
                <p className="text-navy/50 leading-relaxed">{problem.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Solution Transition */}
        <FadeIn delay={0.3}>
          <div className="mt-16 lg:mt-20 text-center">
            <div className="inline-flex flex-col items-center">
              <div className="w-px h-12 bg-gradient-to-b from-border-custom to-teal/30 mb-6" />
              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-teal/10 border border-teal/20">
                <span className="text-teal font-semibold text-lg">Existe una alternativa profesional</span>
                <ArrowRight className="w-5 h-5 text-teal" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
