import { ShieldCheck, FileCheck, Users, Scale } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Imágenes 100% Generadas por IA',
    description: 'Ninguna de nuestras imágenes utiliza fotografías de pacientes reales. Todo el contenido es creado íntegramente por inteligencia artificial.',
  },
  {
    icon: FileCheck,
    title: 'Fines Publicitarios e Ilustrativos',
    description: 'Nuestras imágenes están diseñadas exclusivamente para uso en marketing y comunicación. No sustituyen una consulta médica profesional.',
  },
  {
    icon: Users,
    title: 'Disclaimers Recomendados',
    description: 'Asesoramos a cada clínica sobre cómo etiquetar correctamente las imágenes para garantizar total transparencia con su audiencia.',
  },
  {
    icon: Scale,
    title: 'Alternativa Responsable',
    description: 'Ofrecemos una solución ética frente a prácticas cuestionables como el uso no autorizado de fotos de pacientes o resultados engañosos.',
  },
];

export function Ethics() {
  return (
    <section id="etica" className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(74,155,155,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <FadeIn>
              <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
                Nuestro Compromiso
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                Compromiso con la{' '}
                <span className="text-gradient bg-gradient-to-r from-gold to-gold-light">
                  Transparencia
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg text-navy/50 leading-relaxed">
                La honestidad es la base de nuestro servicio. Creemos que la tecnología debe usarse 
                de forma responsable, especialmente en el ámbito de la salud y la estética. Nuestro 
                compromiso es proporcionar herramientas que refuercen la confianza entre las clínicas 
                y sus pacientes.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-border-custom/60 shadow-sm">
                <p className="text-navy/60 leading-relaxed italic text-sm">
                  "Todas las imágenes producidas por AestheticAI se identifican claramente como 
                  contenido generado por inteligencia artificial. Recomendamos a nuestros clientes 
                  incluir siempre las etiquetas apropiadas en su comunicación."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">Equipo AestheticAI</div>
                    <div className="text-xs text-navy/40">Código Ético Interno</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border-2 border-gold/30 text-navy font-semibold hover:bg-gold/5 hover:border-gold/50 transition-all"
              >
                <FileCheck className="w-5 h-5 text-gold" />
                Conoce Nuestro Código Ético
              </a>
            </FadeIn>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 0.1} direction="left">
                <div className="p-6 rounded-2xl bg-white border border-border-custom/60 shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/15 transition-colors">
                    <principle.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">{principle.title}</h3>
                  <p className="text-sm text-navy/45 leading-relaxed">{principle.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
