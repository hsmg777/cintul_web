import { X, Shield, Award, CheckCircle2, Info } from 'lucide-react';
import { ProductData } from './ProductCard';

interface ProductModalProps {
    product: ProductData | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col border-2 border-slate-700 shadow-2xl">
                {/* Header - Fixed */}
                <div className="flex-shrink-0 bg-slate-900 border-b border-slate-700 p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                            <p className="text-slate-400 mt-2">{product.description}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
                        >
                            <X className="w-6 h-6 text-slate-400 hover:text-white" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* Product Image */}
                    <div className="rounded-xl overflow-hidden border border-slate-700 bg-white">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-contain"
                        />
                    </div>

                    {/* Características Principales */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-6 h-6 text-yellow-400" />
                            <h3 className="text-xl font-bold text-white">Características Principales</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-300 text-sm">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Especificaciones Técnicas */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Info className="w-6 h-6 text-yellow-400" />
                            <h3 className="text-xl font-bold text-white">Especificaciones Técnicas</h3>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
                            <table className="w-full">
                                <tbody className="divide-y divide-slate-700">
                                    {product.specs.map((spec, index) => (
                                        <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 text-slate-400 font-medium w-1/3">
                                                <div className="flex items-center gap-2">
                                                    {spec.icon}
                                                    {spec.label}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-white font-semibold">
                                                {spec.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Detalles Técnicos Adicionales */}
                    {product.technicalDetails && product.technicalDetails.length > 0 && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Award className="w-6 h-6 text-yellow-400" />
                                <h3 className="text-xl font-bold text-white">Detalles Técnicos Adicionales</h3>
                            </div>
                            <div className="space-y-2">
                                {product.technicalDetails.map((detail, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-slate-300 text-sm">{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certification */}
                    <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <Award className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                            <div className="space-y-2">
                                <h4 className="text-lg font-bold text-white">Certificación y Calidad</h4>
                                <p className="text-slate-300 text-sm">
                                    Producto certificado bajo normas INEN con pruebas de laboratorio.
                                    Fabricado en Ecuador con más de 30 años de experiencia en seguridad industrial.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA - Fixed */}
                <div className="flex-shrink-0 bg-slate-900 border-t border-slate-700 p-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={`https://wa.me/593994005006?text=${encodeURIComponent(`Hola quiero cotizar el producto ${product.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 text-center"
                        >
                            Solicitar Cotización
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}