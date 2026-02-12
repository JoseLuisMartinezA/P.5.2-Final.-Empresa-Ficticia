import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const StyleGuide = () => {
    return (
        <section id="styleguide" className="pt-24 min-h-screen">
            <Section alternate className="border-t border-secondary-100 dark:border-secondary-800">
                <div className="mb-8">
                    <Link to="/" className="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-2 mb-8 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Vuelve a la página principal
                    </Link>
                    <small className="uppercase tracking-widest text-primary-500 font-bold">Documentación</small>
                    <Heading level={1} className="mb-4">Sistema de Diseño <span className="text-gradient">Premium</span></Heading>
                    <p className="max-w-2xl text-lg text-secondary-600">
                        Este sistema ha sido diseñado para ofrecer una experiencia visual coherente, moderna y profesional en toda la web.
                    </p>
                </div>

                {/* Colores */}
                <div className="mb-20">
                    <Heading level={2} className="mb-8 border-b pb-2 border-secondary-100 italic">🎨 Paleta de Colores</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="mb-4">Primario (Indigo)</h3>
                            <div className="space-y-2">
                                <div className="h-16 w-full rounded-xl bg-primary-500 flex items-end p-2 text-white text-xs font-mono">#3b66f5 (500)</div>
                                <div className="grid grid-cols-5 gap-1">
                                    <div className="h-8 rounded bg-primary-100"></div>
                                    <div className="h-8 rounded bg-primary-200"></div>
                                    <div className="h-8 rounded bg-primary-300"></div>
                                    <div className="h-8 rounded bg-primary-400"></div>
                                    <div className="h-8 rounded bg-primary-600"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4">Secundario (Slate)</h3>
                            <div className="space-y-2">
                                <div className="h-16 w-full rounded-xl bg-secondary-500 flex items-end p-2 text-white text-xs font-mono">#64748b (500)</div>
                                <div className="grid grid-cols-5 gap-1">
                                    <div className="h-8 rounded bg-secondary-100"></div>
                                    <div className="h-8 rounded bg-secondary-200"></div>
                                    <div className="h-8 rounded bg-secondary-300"></div>
                                    <div className="h-8 rounded bg-secondary-400"></div>
                                    <div className="h-8 rounded bg-secondary-600"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4">Acento (Rose)</h3>
                            <div className="space-y-2">
                                <div className="h-16 w-full rounded-xl bg-accent-500 flex items-end p-2 text-white text-xs font-mono">#f43f5e (500)</div>
                                <div className="grid grid-cols-5 gap-1">
                                    <div className="h-8 rounded bg-accent-100"></div>
                                    <div className="h-8 rounded bg-accent-200"></div>
                                    <div className="h-8 rounded bg-accent-300"></div>
                                    <div className="h-8 rounded bg-accent-400"></div>
                                    <div className="h-8 rounded bg-accent-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tipografía */}
                <div className="mb-20">
                    <Heading level={2} className="mb-8 border-b pb-2 border-secondary-100 italic">🔤 Jerarquía Tipográfica</Heading>

                    <div className="mb-8 p-6 bg-white border border-secondary-100 rounded-2xl flex items-center gap-6">
                        <div className="text-5xl font-bold text-primary-500">Aa</div>
                        <div>
                            <h3 className="text-xl font-bold">Outfit</h3>
                            <p className="text-sm text-secondary-500 font-mono">Principal / Display Font</p>
                            <p className="mt-2 text-secondary-400">ABCDEFGHIJKLMNÑOPQRSTUVWXYZ<br />abcdefghijklmnñopqrstuvwxyz<br />1234567890(!@#$%&*)</p>
                        </div>
                    </div>

                    <div className="space-y-8 bg-secondary-50 p-8 rounded-3xl dark:bg-secondary-900/20">
                        <div>
                            <small className="text-secondary-400 font-mono">H1 - Bold / 60px</small>
                            <Heading level={1}>Título Principal de Impacto</Heading>
                        </div>
                        <div>
                            <small className="text-secondary-400 font-mono">H2 - Semibold / 36px</small>
                            <Heading level={2}>Subtítulo de Sección Importante</Heading>
                        </div>
                        <div>
                            <small className="text-secondary-400 font-mono">H3 - Semibold / 24px</small>
                            <Heading level={3}>Cabecera de Componente o Tarjeta</Heading>
                        </div>
                        <div>
                            <small className="text-secondary-400 font-mono">Body - Regular / 18px</small>
                            <p>El cuerpo de texto utiliza una tipografía legible con un interlineado relajado para mejorar la lectura del usuario en dispositivos digitales.</p>
                        </div>
                        <div>
                            <small className="text-secondary-400 font-mono">Small - Regular / 14px</small>
                            <br />
                            <small>Texto de apoyo, etiquetas o metadatos de menor importancia visual.</small>
                        </div>
                    </div>
                </div>

                {/* Componentes */}
                <div className="mb-20">
                    <Heading level={2} className="mb-8 border-b pb-2 border-secondary-100 italic">🧩 Componentes Base</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Botones */}
                        <div className="space-y-6">
                            <h3 className="font-bold">Botones (Variantes)</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary Button</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="accent">Accent Action</Button>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost Style</Button>
                            </div>
                        </div>

                        {/* Contenedores */}
                        <div className="space-y-6">
                            <h3 className="font-bold">Cards & Glassmorphism</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <Card className="p-6">
                                    <Heading level={4} className="mb-2">Standard Card</Heading>
                                    <p className="text-sm">Uso de sombras suaves y bordes redondeados (2xl).</p>
                                </Card>
                                <div className="glass p-6 rounded-2xl">
                                    <Heading level={4} className="mb-2">Glassmorphism Effect</Heading>
                                    <p className="text-sm">Ideal para elementos sobre fondos con gradientes o imágenes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </section>
    );
};

export default StyleGuide;
