import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

const faqs = [
  {
    question: '¿Las imágenes son 100% generadas por IA?',
    answer: 'Sí, absolutamente. Todas nuestras imágenes son creadas íntegramente por inteligencia artificial. No utilizamos fotografías de pacientes reales en ninguna etapa del proceso. Cada imagen es una creación digital original.',
  },
  {
    question: '¿Es legal usar estas imágenes en publicidad médica?',
    answer: 'Sí, el uso de imágenes generadas por IA es legal para publicidad y marketing médico, siempre que se identifiquen correctamente como ilustraciones o recreaciones, no como resultados reales de pacientes. Te asesoramos sobre las mejores prácticas de etiquetado según la normativa vigente.',
  },
  {
    question: '¿Qué debo incluir cuando publico estas imágenes?',
    answer: 'Recomendamos incluir siempre un disclaimer visible que indique que la imagen ha sido generada por IA con fines ilustrativos, como por ejemplo: "Imagen generada por IA — Con fines ilustrativos". Te proporcionamos textos modelo adaptados a cada plataforma.',
  },
  {
    question: '¿Cuánto tiempo toma el proceso?',
    answer: 'El proceso estándar desde el brief hasta la entrega final es de 5-7 días laborables. Para necesidades urgentes, ofrecemos un servicio express con entregas en 48-72 horas. Los tiempos exactos dependen de la complejidad y el volumen del proyecto.',
  },
  {
    question: '¿Puedo solicitar modificaciones?',
    answer: 'Por supuesto. Nuestro proceso incluye una ronda de ajustes en la que incorporamos tu feedback para refinar las imágenes. Trabajamos de forma iterativa hasta conseguir el resultado que necesitas. Rondas adicionales están disponibles bajo solicitud.',
  },
  {
    question: '¿Qué formatos y resoluciones recibo?',
    answer: 'Entregamos archivos en los formatos más utilizados: JPEG y PNG en alta resolución (hasta 4K). También adaptamos las imágenes a los formatos específicos de cada plataforma: Instagram (1:1, 4:5, 9:16), Facebook, web, y materiales impresos.',
  },
  {
    question: '¿Las imágenes son exclusivas o se venden a otras clínicas?',
    answer: 'Cada imagen que creamos es exclusiva para tu clínica. No reutilizamos ni revendemos el contenido generado para un cliente. Tu inversión se traduce en material visual único que solo tú utilizarás en tu comunicación.',
  },
  {
    question: '¿Ofrecen diferentes estilos visuales?',
    answer: 'Sí, trabajamos con múltiples estilos: fotorrealista clínico, editorial de lujo, estilo lifestyle, minimalista médico y más. Adaptamos el estilo a tu identidad de marca y al tono de comunicación de tu clínica para garantizar coherencia visual.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-teal/20 bg-teal/[0.02] shadow-lg shadow-teal/5' : 'border-border-custom/60 bg-white hover:border-teal/10'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={`text-base lg:text-lg font-semibold transition-colors ${isOpen ? 'text-teal' : 'text-navy'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-teal text-white rotate-180' : 'bg-surface text-navy/40'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 -mt-1">
          <p className="text-navy/50 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed max-w-2xl mx-auto">
            Resolvemos las dudas más habituales sobre nuestro servicio de generación de imágenes con IA.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
