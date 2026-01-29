import { Shield, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-8 h-8 text-yellow-400" />
                            <span className="text-2xl font-bold text-white">CINTUL</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            30 años fabricando equipos de seguridad industrial para trabajos en altura en Ecuador.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Productos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#productos" className="text-slate-400 hover:text-yellow-400 transition-colors">
                                    Línea de Vida
                                </a>
                            </li>
                            <li>
                                <a href="#productos" className="text-slate-400 hover:text-yellow-400 transition-colors">
                                    Trepadoras para Postes
                                </a>
                            </li>
                            <li>
                                <a href="#productos" className="text-slate-400 hover:text-yellow-400 transition-colors">
                                    Cinturón Liniero
                                </a>
                            </li>
                            <li>
                                <a href="#productos" className="text-slate-400 hover:text-yellow-400 transition-colors">
                                    Ver Todos los Productos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                                    Inicio
                                </a>
                            </li>

                            <li>
                                <a href="#contacto" className="text-slate-400 hover:text-yellow-400 transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400">Ecuador - Cobertura Nacional</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400">+593 99 400 5006</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400">osc_german243@hotmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} CINTUL. Todos los derechos reservados.
                        </p>
                    </div>

                    {/* Developer Credit */}
                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://nivusoftware.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group"
                        >
                            <img
                                src="/images/logo_nube.png"
                                alt="Nivusoft"
                                className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                            <span className="text-sm font-medium tracking-wide">
                                Desarrollado por Nivusoft
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
