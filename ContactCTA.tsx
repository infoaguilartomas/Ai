import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from '../hooks/useInView';

interface FormData {
  nombre: string;
  email: string;
  tipoClinica: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  tipoClinica?: string;
}

export function ContactCTA() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    tipoClinica: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido';
    }
    if (!formData.tipoClinica) newErrors.tipoClinica = 'Selecciona un tipo de clínica';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,155,155,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,119,0.08),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <FadeIn>
              <span className="inline-block text-teal-light text-sm font-semibold tracking-wider uppercase mb-4">
                Contacto
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Comienza a Transformar tu{' '}
                <span className="text-gradient bg-gradient-to-r from-gold to-gold-light">
                  Contenido Visual
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                Solicita una consulta sin compromiso y descubre cómo la inteligencia artificial puede 
                impulsar el marketing de tu clínica de forma ética y profesional.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 space-y-5">
                {[
                  'Consulta inicial gratuita y sin compromiso',
                  'Propuesta personalizada en 24 horas',
                  'Precios transparentes y cerrados',
                  'Soporte continuo durante todo el proceso',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Social Proof */}
            <FadeIn delay={0.3}>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      'from-teal to-teal-dark',
                      'from-gold to-gold-light',
                      'from-rose-400 to-rose-500',
                      'from-violet-400 to-violet-500',
                    ].map((gradient, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-navy flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold">
                          {['CM', 'DR', 'AE', 'MK'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80">+50 clínicas confían en nosotros</div>
                    <div className="text-xs text-white/30">en España y Latinoamérica</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Form */}
          <FadeIn delay={0.1} direction="left">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/20">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">¡Mensaje Enviado!</h3>
                  <p className="text-navy/50 leading-relaxed max-w-sm mx-auto">
                    Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ nombre: '', email: '', tipoClinica: '', mensaje: '' });
                    }}
                    className="mt-8 inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-navy">Solicitar Información</h3>
                    <p className="text-navy/45 mt-2">Completa el formulario y te contactaremos.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-navy mb-2">
                        Nombre completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => {
                          setFormData({ ...formData, nombre: e.target.value });
                          if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-surface/50 text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all ${
                          errors.nombre ? 'border-red-300 bg-red-50/50' : 'border-border-custom'
                        }`}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.nombre}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-surface/50 text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all ${
                          errors.email ? 'border-red-300 bg-red-50/50' : 'border-border-custom'
                        }`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>

                    {/* Clinic Type */}
                    <div>
                      <label htmlFor="tipoClinica" className="block text-sm font-semibold text-navy mb-2">
                        Tipo de clínica <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="tipoClinica"
                        value={formData.tipoClinica}
                        onChange={(e) => {
                          setFormData({ ...formData, tipoClinica: e.target.value });
                          if (errors.tipoClinica) setErrors({ ...errors, tipoClinica: undefined });
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-surface/50 text-navy focus:outline-none focus:border-teal focus:bg-white transition-all appearance-none cursor-pointer ${
                          errors.tipoClinica ? 'border-red-300 bg-red-50/50' : 'border-border-custom'
                        } ${!formData.tipoClinica ? 'text-navy/30' : ''}`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A2B4A' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.25rem',
                        }}
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="estetica">Clínica de Medicina Estética</option>
                        <option value="dermatologia">Centro Dermatológico</option>
                        <option value="dental">Clínica Dental Estética</option>
                        <option value="agencia">Agencia de Marketing Médico</option>
                        <option value="otro">Otro</option>
                      </select>
                      {errors.tipoClinica && (
                        <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.tipoClinica}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-semibold text-navy mb-2">
                        Mensaje <span className="text-navy/30">(opcional)</span>
                      </label>
                      <textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border-custom bg-surface/50 text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all resize-none"
                        placeholder="Cuéntanos sobre tus necesidades..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal text-white font-semibold text-lg hover:bg-teal-dark transition-all duration-300 shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/35 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      Solicitar Información
                    </button>

                    <p className="text-xs text-navy/30 text-center leading-relaxed pt-1">
                      Al enviar este formulario, aceptas nuestra{' '}
                      <a href="#" className="text-teal/60 hover:text-teal underline">Política de Privacidad</a>.
                      No compartiremos tus datos con terceros.
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
