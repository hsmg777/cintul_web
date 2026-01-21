import { ArrowRight, Shield, Weight, Ruler, Award } from 'lucide-react';

export interface ProductData {
    id: string;
    code: string;
    model: string;
    name: string;
    description: string;
    image: string;
    features: string[];
    specs: {
        label: string;
        value: string;
        icon?: React.ReactNode;
    }[];
    technicalDetails: string[];
}

interface ProductCardProps {
    product: ProductData;
    onViewDetails: () => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
    return (
        <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2">
            {/* Image Section */}
            <div className="relative h-80 overflow-hidden bg-slate-900">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-6">
                {/* Title */}
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                    {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-300">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                    {product.specs.slice(0, 2).map((spec, index) => (
                        <div key={index} className="space-y-1">
                            <p className="text-xs text-slate-500 uppercase tracking-wide">{spec.label}</p>
                            <p className="text-sm text-white font-semibold">{spec.value}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                    <button
                        onClick={onViewDetails}
                        className="group/btn w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40"
                    >
                        <span className="font-bold">Ver Especificaciones Técnicas</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <a
                        href={`https://wa.me/593994005006?text=${encodeURIComponent(`Hola estoy interesado en ${product.name}!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-700 text-white border border-slate-600 hover:border-yellow-400 px-6 py-3 rounded-lg transition-all duration-300"
                    >
                        <span className="font-bold">Solicitar Información</span>
                    </a>
                </div>

                {/* Certification Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-700">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <p className="text-xs text-slate-400">Certificación INEN | Fabricado en Ecuador</p>
                </div>
            </div>
        </div>
    );
}
