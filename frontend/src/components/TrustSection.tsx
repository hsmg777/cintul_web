import { Factory, TrendingUp, CheckCircle2, Award, Users, Wrench } from 'lucide-react';

export function TrustSection() {
    const features = [
        {
            icon: <Factory className="w-8 h-8 text-yellow-400" />,
            title: "Representación Directa de Fábrica",
            description: "30 años como fabricantes directos, garantizando trazabilidad completa en cada producto"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
            title: "Mejora Continua",
            description: "Innovación constante en diseño, materiales y estética, adaptándonos a los estándares más exigentes"
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-yellow-400" />,
            title: "Cumplimiento Nacional",
            description: "Entregas puntuales y servicio postventa integral en todo Ecuador"
        },
        {
            icon: <Award className="w-8 h-8 text-yellow-400" />,
            title: "Pruebas laboratorio INEN",
            description: "Todos nuestros productos cumplen con normativas técnicas y pruebas de laboratorio"
        },
        {
            icon: <Users className="w-8 h-8 text-yellow-400" />,
            title: "Experiencia Probada",
            description: "Equipos utilizados en los principales proyectos eléctricos y de telecomunicaciones del país"
        },
        {
            icon: <Wrench className="w-8 h-8 text-yellow-400" />,
            title: "Soporte Técnico",
            description: "Asesoría especializada y acompañamiento en la selección del equipo adecuado para cada proyecto"
        }
    ];

    return (
        <section id="experiencia" className="relative py-20 bg-slate-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-lg mb-4">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 tracking-wide font-mono text-sm">CONFIANZA & EXPERIENCIA</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Más de <span className="text-yellow-400">30 Años</span> Protegiendo Vidas
                    </h2>

                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        CINTUL es sinónimo de <span className="text-white font-semibold">seguridad industrial certificada por clientes en todo el país</span>.
                        Tres décadas de compromiso con la calidad, innovación y servicio en equipos de protección para trabajos en altura.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center space-y-2">
                        <div className="text-4xl font-bold text-yellow-400">30+</div>
                        <div className="text-sm text-slate-400">Años de Experiencia</div>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center space-y-2">
                        <div className="text-4xl font-bold text-yellow-400">100%</div>
                        <div className="text-sm text-slate-400">Fabricación Nacional</div>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center space-y-2">
                        <div className="text-4xl font-bold text-yellow-400">INEN</div>
                        <div className="text-sm text-slate-400">Pruebas laboratorio Oficiales</div>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center space-y-2">
                        <div className="text-4xl font-bold text-yellow-400">24/7</div>
                        <div className="text-sm text-slate-400">Soporte Técnico</div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-slate-800 border border-slate-700 hover:border-yellow-400/50 rounded-xl p-6 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-1"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-xl group-hover:bg-yellow-400/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-16 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 border border-yellow-400/30 rounded-2xl p-8 text-center">
                    <p className="text-2xl text-white font-semibold mb-2">
                        Equipamiento Profesional para Proyectos Críticos
                    </p>
                    <p className="text-slate-400">
                        Nuestros productos son la elección de empresas líderes en los sectores eléctrico y de telecomunicaciones en Ecuador
                    </p>
                </div>
            </div>
        </section>
    );
}