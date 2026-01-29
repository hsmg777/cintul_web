import { useState } from "react";
import { ProductCard, ProductData } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import {
    Shield,
    Weight,
    Ruler,
    Wrench,
    Package,
    Award,
} from "lucide-react";

export function ProductsSection() {
    const [selectedProduct, setSelectedProduct] =
        useState<ProductData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const products: ProductData[] = [
        {
            id: "1",
            code: "1762",
            model: "OSCL",
            name: "Línea de Vida / Bandola / Faja",
            description:
                "Sistema de protección anticaída para trabajos en altura.",
            image:
                "/images/tecnicovida.png",
            features: [
                "Soporta hasta 27.59 kN de resistencia",
                "Cinta de 4 capas, 4.5 cm de ancho y 2 metros de largo",
                "Ganchos templados con doble seguro normado",
                "Alta resistencia a abrasión (caucho y nylon)",
                "Pruebas de laboratorio INEN",
                "Protección permanente durante desplazamiento vertical",
            ],
            specs: [
                {
                    label: "Resistencia Máxima",
                    value: "27.59 kN",
                    icon: <Weight className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Dimensiones Cinta",
                    value: "4.5 cm x 2 m",
                    icon: <Ruler className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Capas de Cinta",
                    value: "4 capas",
                    icon: <Package className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Material Cinta",
                    value: "Caucho y Nylon",
                    icon: <Shield className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Tipo de Ganchos",
                    value: "Templados Doble Seguro",
                    icon: <Wrench className="w-4 h-4 text-yellow-400" />,
                },
            ],
            technicalDetails: [
                "Sistema diseñado para protección anticaída en trabajos verticales",
                "Los ganchos cuentan con sistema de doble seguro normado para máxima confiabilidad",
                "Cinta multicapa de alta resistencia a la abrasión y condiciones climáticas adversas",
                "Probado en laboratorio según normativas INEN para trabajos en altura",
                "Ideal para linieros eléctricos y de telecomunicaciones",
                "Proporciona libertad de movimiento mientras mantiene la seguridad del usuario",
            ],
        },
        {
            id: "2",
            code: "T1965",
            model: "OSCT",
            name: "Trepadoras para Postes",
            description:
                "Ascenso y descenso seguro en postes circulares de fibra u hormigón",
            image:
                "images/tecnicotrepadora.png",
            features: [
                "Capacidad de carga hasta 180 kg",
                "Fabricadas en acero de alta resistencia",
                "Brazos circulares ajustables: 140 mm a 460 mm",
                "Correas impermeables de lona importada",
                "Hebillas galvanizadas resistentes a humedad",
                "Diseñadas para postes de fibra u hormigón",
            ],
            specs: [
                {
                    label: "Peso del Equipo",
                    value: "8 kg",
                    icon: <Weight className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Capacidad Máxima",
                    value: "180 kg",
                    icon: <Shield className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Rango Ajustable",
                    value: "140 mm - 460 mm",
                    icon: <Ruler className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Material Estructura",
                    value: "Acero Alta Resistencia",
                    icon: <Wrench className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Material Correas",
                    value: "Lona Importada Impermeable",
                    icon: <Package className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Origen",
                    value: "Ecuador - CINTUL",
                    icon: <Award className="w-4 h-4 text-yellow-400" />,
                },
            ],
            technicalDetails: [
                "Diseño ergonómico que permite ascenso y descenso seguro en postes circulares",
                "Brazos ajustables para adaptarse a diferentes diámetros de postes",
                "Construcción robusta en acero de alta resistencia con tratamiento anticorrosivo",
                "Correas de lona importada con impermeabilización para máxima durabilidad",
                "Hebillas galvanizadas que resisten condiciones de alta humedad",
                "Peso optimizado (8 kg) para facilitar el transporte sin comprometer resistencia",
                "Compatibles con postes de fibra de vidrio y hormigón",
                "Fabricadas bajo estándares de calidad CINTUL con más de 30 años de experiencia",
            ],
        },
        {
            id: "3",
            code: "1762",
            model: "OSCC",
            name: "Cinturón Liniero",
            description:
                "Seguridad y soporte lumbar para linieros en trabajos en altura",
            image:
                "images/tecnicocinturon.png",
            features: [
                "Resistencia certificada: 882.76 kg",
                "Tallas disponibles: 34 a 48",
                "Materiales: cuero baketa, nylon y caucho de alta resistencia",
                "Sistema porta-herramientas integrado",
                "Hebillas y ganchos tipo D en acero inoxidable AISI 304",
            ],
            specs: [
                {
                    label: "Peso del Cinturón",
                    value: "1.853 kg",
                    icon: <Weight className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Resistencia Certificada",
                    value: "882.76 kg",
                    icon: <Shield className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Tallas Disponibles",
                    value: "34 a 48",
                    icon: <Ruler className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Material Principal",
                    value: "Cuero Baketa",
                    icon: <Package className="w-4 h-4 text-yellow-400" />,
                },
                {
                    label: "Herrajes",
                    value: "Acero Inoxidable AISI 304",
                    icon: <Wrench className="w-4 h-4 text-yellow-400" />,
                }
            ],
            technicalDetails: [
                "Diseño ergonómico que proporciona soporte lumbar óptimo durante largas jornadas",
                "Construcción en cuero baketa de primera calidad para máxima durabilidad",
                "Refuerzos en nylon y caucho en zonas de alto desgaste",
                "Sistema integrado porta-herramientas para facilitar el trabajo en altura",
                "Hebillas y ganchos tipo D fabricados en acero inoxidable AISI 304 anticorrosivo",
                "Resistencia probada de 882.76 kg para máxima confiabilidad",
                "Disponible en amplia gama de tallas (34 a 48) para ajuste personalizado",
                "Fabricado en Ecuador bajo normas internacionales de seguridad industrial",
            ],
        },
    ];

    const handleViewDetails = (product: ProductData) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300);
    };

    return (
        <>
            <section id="productos" className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">


                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Equipos de Seguridad{" "}
                            <span className="text-yellow-400">
                                Industrial
                            </span>
                        </h2>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Línea completa de equipos de protección para
                            trabajos en altura. Diseñados para máxima
                            seguridad y durabilidad.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onViewDetails={() => handleViewDetails(product)}
                            />
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 text-center">
                        <p className="text-lg text-slate-300">
                            ¿Necesitas especificaciones técnicas adicionales o
                            asesoría para tu proyecto?
                        </p>
                        <a
                            href="https://wa.me/593994005006?text=Hola%20necesito%20mas%20informacion"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-yellow-400/20"
                        >
                            Contactar a un Especialista
                        </a>
                    </div>
                </div>
            </section>

            {/* Product Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}