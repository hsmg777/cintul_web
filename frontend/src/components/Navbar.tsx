import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img
                            src="/images/logo.png"
                            alt="CINTUL Logo"
                            className="h-16 w-auto "
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">CINTUL</span>
                            <span className="text-xs text-slate-400">Seguridad Industrial</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('productos')}
                            className="text-slate-300 hover:text-yellow-400 transition-colors font-medium"
                        >
                            Productos
                        </button>
                        <button
                            onClick={() => scrollToSection('experiencia')}
                            className="text-slate-300 hover:text-yellow-400 transition-colors font-medium"
                        >
                            Experiencia
                        </button>
                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="text-slate-300 hover:text-yellow-400 transition-colors font-medium"
                        >
                            Contacto
                        </button>

                        {/* Contact Info */}
                        <div className="flex items-center gap-4 pl-6 border-l border-slate-700">
                            <a href="tel:+593994005006" className="flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+593 99 400 5006</span>
                            </a>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40"
                        >
                            Solicitar Info
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-slate-900 border-t border-slate-800 shadow-xl">
                    <div className="px-4 py-6 space-y-4">
                        <button
                            onClick={() => scrollToSection('productos')}
                            className="block w-full text-left px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Productos
                        </button>
                        <button
                            onClick={() => scrollToSection('experiencia')}
                            className="block w-full text-left px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Experiencia
                        </button>
                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="block w-full text-left px-4 py-3 text-slate-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Contacto
                        </button>

                        <div className="pt-4 border-t border-slate-800 space-y-3">
                            <a
                                href="tel:+593"
                                className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+593 (0)2 XXX-XXXX</span>
                            </a>
                            <a
                                href="mailto:ventas@cintul.com.ec"
                                className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">ventas@cintul.com.ec</span>
                            </a>
                        </div>

                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all duration-300"
                        >
                            Solicitar Información
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
