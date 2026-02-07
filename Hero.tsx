import { ArrowRight, ChevronDown } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface to-teal/5" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-teal/[0.03] rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                Tecnología IA para Medicina Estética
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight">
                Imágenes Profesionales con{' '}
                <span className="text-gradient bg-gradient-to-r from-teal via-teal-light to-teal">
                  IA
                </span>{' '}
                para tu Clínica Estética
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg lg:text-xl text-navy/55 leading-relaxed max-w-xl">
                Contenido visual de alta calidad, ético y legal para redes sociales, web y
                publicidad. Sin pacientes reales, sin riesgos legales.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-dark transition-all duration-300 shadow-xl shadow-teal/25 hover:shadow-2xl hover:shadow-teal/35 hover:-translate-y-0.5"
                >
                  Solicitar Información
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-navy/10 text-navy font-semibold hover:border-teal/40 hover:text-teal transition-all duration-300"
                >
                  Cómo Funciona
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-12 flex items-center gap-6 sm:gap-8 pt-8 border-t border-navy/[0.08]">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy">100%</div>
                  <div className="text-xs sm:text-sm text-navy/45 font-medium">Legal y Ético</div>
                </div>
                <div className="w-px h-12 bg-navy/[0.08]" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy">48-72h</div>
                  <div className="text-xs sm:text-sm text-navy/45 font-medium">Entrega Rápida</div>
                </div>
                <div className="w-px h-12 bg-navy/[0.08]" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy">4K+</div>
                  <div className="text-xs sm:text-sm text-navy/45 font-medium">Alta Resolución</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative lg:pl-8">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/15 border border-white/60">
                <div className="aspect-[4/5] relative">
                  {/* Before/After Split */}
                  <div className="absolute inset-0 flex">
                    {/* Before Side */}
                    <div className="w-1/2 relative bg-gradient-to-br from-stone-200 via-stone-300 to-stone-200">
                      <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/80 text-[11px] font-bold text-navy/50 backdrop-blur-sm tracking-wider uppercase">
                        Antes
                      </div>
                      {/* Abstract face representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-28 h-36 rounded-[40%] bg-gradient-to-b from-stone-300/80 to-stone-400/60" />
                          <div className="absolute top-[30%] left-[15%] w-3 h-1 rounded-full bg-stone-400/40" />
                          <div className="absolute top-[30%] right-[15%] w-3 h-1 rounded-full bg-stone-400/40" />
                          <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-4 h-2 rounded-full bg-stone-400/30" />
                          {/* Imperfection indicators */}
                          <div className="absolute top-[45%] right-[8%] w-2 h-2 rounded-full bg-red-300/40" />
                          <div className="absolute top-[55%] right-[20%] w-1.5 h-1.5 rounded-full bg-red-300/30" />
                          <div className="absolute top-[50%] left-[10%] w-1.5 h-1.5 rounded-full bg-red-300/35" />
                        </div>
                      </div>
                      {/* Subtle texture overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,transparent_40%,rgba(0,0,0,0.03))]" />
                    </div>

                    {/* Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white z-10 -translate-x-1/2 shadow-lg">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center border border-border-custom">
                        <div className="flex gap-[3px]">
                          <svg className="w-3 h-3 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                          <svg className="w-3 h-3 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* After Side */}
                    <div className="w-1/2 relative bg-gradient-to-br from-teal/[0.08] via-amber-50 to-gold/[0.12]">
                      <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-teal/15 text-[11px] font-bold text-teal backdrop-blur-sm tracking-wider uppercase">
                        Después
                      </div>
                      {/* Clean face representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-28 h-36 rounded-[40%] bg-gradient-to-b from-amber-100/60 to-amber-200/40 shadow-inner" />
                          <div className="absolute top-[30%] left-[15%] w-3 h-1 rounded-full bg-amber-300/40" />
                          <div className="absolute top-[30%] right-[15%] w-3 h-1 rounded-full bg-amber-300/40" />
                          <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-4 h-2 rounded-full bg-amber-300/30" />
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-[40%] bg-gradient-to-t from-teal/[0.05] to-transparent" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(74,155,155,0.04),transparent_60%)]" />
                    </div>
                  </div>

                  {/* AI Badge */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-navy/80 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-2 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    Generado con IA — No es un paciente real
                  </div>
                </div>
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute -top-3 -right-2 sm:-right-4 px-4 py-3 rounded-2xl bg-white shadow-xl shadow-navy/10 border border-border-custom animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy">RGPD Compliant</div>
                    <div className="text-[10px] text-navy/40 font-medium">Sin datos personales</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 px-4 py-3 rounded-2xl bg-white shadow-xl shadow-navy/10 border border-border-custom animate-float-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy">Alta Resolución</div>
                    <div className="text-[10px] text-navy/40 font-medium">4K · PNG · JPEG</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-navy/30 animate-bounce">
          <span className="text-xs font-medium tracking-wider uppercase">Descubrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
