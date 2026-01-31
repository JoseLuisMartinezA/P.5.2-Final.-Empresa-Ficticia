import React from 'react';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-900/50 text-primary-600 dark:text-primary-400 text-sm font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Líderes en Crecimiento Digital
                        </div>

                        <Heading level={1} gradient>
                            Impulsamos tu Marca al Siguiente Nivel
                        </Heading>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                            En NovaDigital fusionamos creatividad y datos para crear estrategias de marketing que generan resultados reales. Tu éxito es nuestra métrica principal.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="group">
                                Comenzar Proyecto
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="secondary" className="group">
                                <div className="p-1 rounded-full bg-primary-500 text-white mr-1">
                                    <Play size={14} fill="white" />
                                </div>
                                Ver Showreel
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-medium text-slate-500">
                                +1,200 clientes confían en nosotros
                            </p>
                        </div>
                    </div>

                    <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
                                    {/* Placeholder for Video/Image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                        alt="Digital Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-all">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                                            <Play size={32} fill="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Conversiones UP</p>
                                <p className="text-lg font-bold">+148%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
