import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';

function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        telefono: '',
        email: '',
        producto_interes: 'Seleccionar producto',
        mensaje: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al enviar el formulario');
            }

            setStatus('success');
            setFormData({
                nombre: '',
                empresa: '',
                telefono: '',
                email: '',
                producto_interes: 'Seleccionar producto',
                mensaje: ''
            });
        } catch (error: any) {
            console.error('Error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-400 mb-6">Hemos recibido tu solicitud correctamente. Nuestro equipo técnico te contactará en breve.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre Completo *
                </label>
                <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Juan Pérez"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Empresa
                </label>
                <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Empresa Eléctrica XYZ"
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Teléfono *
                    </label>
                    <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="+593 XXX XXX XXX"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="correo@empresa.com"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Producto de Interés
                </label>
                <select
                    name="producto_interes"
                    value={formData.producto_interes}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                    <option>Seleccionar producto</option>
                    <option>Línea de Vida / Bandola / Faja</option>
                    <option>Trepadoras para Postes</option>
                    <option>Cinturón Liniero</option>
                    <option>Todos los productos</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje
                </label>
                <textarea
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Describe tu proyecto o consulta técnica..."
                ></textarea>
            </div>

            {status === 'error' && (
                <div className="text-red-400 text-sm text-center">
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 px-6 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    'Enviar Solicitud'
                )}
            </button>

            <p className="text-xs text-slate-500 text-center">
                Al enviar este formulario aceptas que CINTUL se comunique contigo para brindarte información técnica y comercial.
            </p>
        </form>
    );
}

export function CTASection() {
    return (
        <section id="contacto" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - CTA Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-lg">
                                <MessageCircle className="w-5 h-5 text-yellow-400" />
                                <span className="text-yellow-400 tracking-wide font-mono text-sm">CONTACTO</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                ¿Necesitas Equipos de Seguridad Industrial?
                            </h2>

                            <p className="text-xl text-slate-400 leading-relaxed">
                                Nuestro equipo técnico está listo para asesorarte en la selección del equipo ideal para tu proyecto.
                                Solicita información técnica detallada y cotizaciones sin compromiso.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-yellow-400/50 transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-slate-400 mb-1">Teléfono</p>
                                    <p className="text-white font-semibold">+593 99 400 5006</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-yellow-400/50 transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-slate-400 mb-1">Email</p>
                                    <p className="text-white font-semibold">osc_german243@hotmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-yellow-400/50 transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-slate-400 mb-1">Ubicación</p>
                                    <p className="text-white font-semibold">Ecuador - Cobertura Nacional</p>
                                </div>
                            </div>
                        </div>

                        {/* Main CTA Button */}
                        <div className="pt-4">
                            <a
                                href="https://wa.me/593994005006?text=Hola%20necesito%20mas%20informacion%20sobre%20sus%20productos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-5 rounded-xl transition-all duration-300 shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:scale-105"
                            >
                                <span className="font-bold text-lg">Hablar con un Asesor Técnico</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Trust Note */}
                        <div className="pt-6 border-t border-slate-700">
                            <p className="text-sm text-slate-400">
                                <span className="text-yellow-400 font-semibold">Respuesta garantizada</span> en menos de 24 horas.
                                Atención personalizada para proyectos industriales de cualquier escala.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 shadow-2xl">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Solicita Información Técnica</h3>
                                <p className="text-slate-400">Completa el formulario y nos comunicaremos contigo</p>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
