import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <img src="/isotipo.png" alt="Logo" className="h-10 w-auto brightness-200" />
                            <span className="text-2xl font-bold">NovaDigital</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Transformamos la visión de tu negocio en una realidad digital impactante. Expertos en crecimiento y diseño estratégico.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all text-slate-400">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm">
                            {['Sobre Nosotros', 'Nuestros Servicios', 'Casos de Éxito', 'Blog', 'Carreras'].map((link) => (
                                <li key={link}><a href="#" className="hover:text-primary-400 transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            {['Términos de Servicio', 'Política de Privacidad', 'Cookies', 'Aviso Legal'].map((link) => (
                                <li key={link}><a href="#" className="hover:text-primary-400 transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-primary-500 shrink-0" />
                                <span>Calle Innovación 42, Hub Tecnológico, Madrid</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-primary-500 shrink-0" />
                                <span>+34 912 345 678</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-primary-500 shrink-0" />
                                <span>hola@novadigital.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-sm text-center">
                    <p>© {new Date().getFullYear()} NovaDigital S.L. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
