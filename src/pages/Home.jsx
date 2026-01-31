import React from 'react';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Section from '../components/layout/Section';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import CTA from '../components/layout/CTA';
import { SERVICES, METRICS } from '../data/mockData';

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Services Section */}
            <Section id="services" alternate>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Heading level={2} className="mb-4">Nuestros Servicios</Heading>
                    <p className="text-slate-600 dark:text-slate-400">
                        Ofrecemos soluciones integrales para cubrir todas las necesidades de tu ecosistema digital.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <Card
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            iconName={service.icon}
                        />
                    ))}
                </div>
            </Section>

            <About />

            {/* Stats Section / Trust */}
            <Section id="trust">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {METRICS.map((metric, idx) => (
                        <div key={idx} className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-2">{metric.value}</p>
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Features Detail Section */}
            <Section alternate>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                            alt="Team Working"
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>
                    <div className="space-y-6">
                        <Heading level={2}>Diseño que Convierte, Estrategia que Vende</Heading>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            No solo hacemos cosas bonitas. Creamos herramientas de negocio. Cada píxel y cada línea de código están pensados para optimizar el retorno de inversión de nuestros clientes.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Metodología ágil orientada a resultados",
                                "Análisis de datos en tiempo real",
                                "Soporte 24/7 y mantenimiento continuo"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            <CTA />
        </main>
    );
};

export default Home;
