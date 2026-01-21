import { useState, useEffect } from "react";
import {
    ArrowRight,
    Shield,
    Award,
    Factory,
} from "lucide-react";

const heroImages = [
    "/images/hero.png",
    "/images/lineavida.png",
    "/images/trepadora.png",
    "/images/cinturon.png"
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToProducts = () => {
        document
            .getElementById("productos")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        document
            .getElementById("contacto")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Carousel */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={image}
                        alt={`Background ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Headline */}
                <div className="space-y-6 mb-12">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                        Seguridad Industrial <br className="hidden md:block" />
                        <span className="text-yellow-400">Certificada</span> para Trabajos en Altura
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Más de <span className="text-yellow-400 font-bold">30 años</span> fabricando equipos de alta resistencia para
                        linieros eléctricos y telecomunicaciones en Ecuador.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <div className="flex flex-col items-center space-y-2 group">
                        <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-yellow-400/20 transition-colors">
                            <Factory className="w-8 h-8 text-yellow-400" />
                        </div>
                        <p className="text-sm font-medium text-gray-300">Fabricación Nacional</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 group">
                        <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-yellow-400/20 transition-colors">
                            <Award className="w-8 h-8 text-yellow-400" />
                        </div>
                        <p className="text-sm font-medium text-gray-300">Certificación INEN</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 group">
                        <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-yellow-400/20 transition-colors">
                            <Shield className="w-8 h-8 text-yellow-400" />
                        </div>
                        <p className="text-sm font-medium text-gray-300">30 Años Experiencia</p>
                    </div>
                </div>

                {/* DBttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={scrollToProducts}
                        className="group flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:scale-105"
                    >
                        Ver Productos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={scrollToContact}
                        className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                    >
                        Solicitar Información
                    </button>
                </div>


            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
