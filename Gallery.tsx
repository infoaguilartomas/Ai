import { FadeIn } from '../hooks/useInView';

const galleryItems = [
  {
    title: 'Rejuvenecimiento Facial',
    category: 'Tratamientos Faciales',
    gradientFrom: 'from-rose-100',
    gradientVia: 'via-amber-50',
    gradientTo: 'to-teal-50',
    accent: 'bg-rose-200',
  },
  {
    title: 'Tratamiento Anti-Arrugas',
    category: 'Toxina Botulínica',
    gradientFrom: 'from-teal-50',
    gradientVia: 'via-cyan-50',
    gradientTo: 'to-blue-50',
    accent: 'bg-teal-200',
  },
  {
    title: 'Contorno Corporal',
    category: 'Body Contouring',
    gradientFrom: 'from-amber-50',
    gradientVia: 'via-orange-50',
    gradientTo: 'to-rose-50',
    accent: 'bg-amber-200',
  },
  {
    title: 'Tratamiento Dermatológico',
    category: 'Dermatología',
    gradientFrom: 'from-emerald-50',
    gradientVia: 'via-teal-50',
    gradientTo: 'to-cyan-50',
    accent: 'bg-emerald-200',
  },
  {
    title: 'Rellenos Dérmicos',
    category: 'Ácido Hialurónico',
    gradientFrom: 'from-violet-50',
    gradientVia: 'via-purple-50',
    gradientTo: 'to-pink-50',
    accent: 'bg-violet-200',
  },
  {
    title: 'Estética Dental',
    category: 'Odontología Estética',
    gradientFrom: 'from-sky-50',
    gradientVia: 'via-blue-50',
    gradientTo: 'to-indigo-50',
    accent: 'bg-sky-200',
  },
];

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group relative rounded-2xl overflow-hidden border border-border-custom/50 bg-white shadow-sm hover:shadow-xl hover:shadow-navy/8 transition-all duration-500 cursor-pointer">
        {/* Image Placeholder */}
        <div className={`aspect-[4/5] relative bg-gradient-to-br ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} overflow-hidden`}>
          {/* Abstract medical aesthetic visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Before/After Split */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 relative opacity-60">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/40 to-transparent" />
                {/* Abstract texture */}
                <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-[45%]">
                  <div className={`w-full h-full rounded-[45%] ${item.accent} opacity-30`} />
                </div>
              </div>
              <div className="w-1/2 relative">
                <div className="absolute top-[20%] left-[15%] w-[60%] h-[60%] rounded-[45%]">
                  <div className={`w-full h-full rounded-[45%] ${item.accent} opacity-50`} />
                  <div className="absolute inset-2 rounded-[45%] bg-white/30" />
                </div>
              </div>
            </div>

            {/* Center divider */}
            <div className="absolute left-1/2 top-[15%] bottom-[15%] w-px bg-white/60 -translate-x-1/2" />

            {/* Before/After labels */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/70 backdrop-blur-sm text-[10px] font-bold text-navy/40 uppercase tracking-wider">
              Antes
            </div>
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-white/70 backdrop-blur-sm text-[10px] font-bold text-teal uppercase tracking-wider">
              Después
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent" />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-all duration-500 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
              <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>

          {/* AI Badge */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-center">
            <div className="px-3 py-1.5 rounded-full bg-navy/60 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-light" />
              Imagen generada con IA
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-5">
          <span className="text-xs font-semibold text-teal uppercase tracking-wider">{item.category}</span>
          <h3 className="text-base font-bold text-navy mt-1 group-hover:text-teal transition-colors">{item.title}</h3>
        </div>
      </div>
    </FadeIn>
  );
}

export function Gallery() {
  return (
    <section id="ejemplos" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Ejemplos de Nuestro Trabajo
          </h2>
          <p className="mt-5 text-lg text-navy/50 leading-relaxed">
            Visualizaciones de alta calidad para diferentes especialidades y tratamientos estéticos.
          </p>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-14">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-amber-50 border border-amber-200/60">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-amber-800/80 font-medium">
                Todas las imágenes mostradas son generadas por inteligencia artificial con fines exclusivamente ilustrativos. No representan pacientes ni resultados reales.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
