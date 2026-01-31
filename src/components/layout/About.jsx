import React, { useRef, useState } from 'react';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const About = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
    };

    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-bold uppercase tracking-wider">
                            Sobre Nosotros
                        </div>

                        <Heading level={2}>
                            No somos solo una agencia, somos tu <span className="text-primary-500">Socio Estratégico</span>
                        </Heading>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            En NovaDigital, creemos que el éxito digital no es fruto de la casualidad, sino del diseño meticuloso y la ejecución brillante. Nuestro equipo de expertos trabaja incansablemente para transformar ideas en realidades comerciales.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                                <img
                                    src="/media/imagenes/nuestro personal chica.png"
                                    alt="Talento Creativo"
                                    className="w-full h-48 object-cover object-top rounded-lg mb-3"
                                />
                                <h4 className="font-bold text-sm">Creatividad Humana</h4>
                                <p className="text-xs text-slate-500">Diseño centrado en personas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                                <img
                                    src="/media/imagenes/nuestro personal chico.png"
                                    alt="Estrategia Técnica"
                                    className="w-full h-48 object-cover object-top rounded-lg mb-3"
                                />
                                <h4 className="font-bold text-sm">Visión Técnica</h4>
                                <p className="text-xs text-slate-500">Análisis basado en datos</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <Button>Conoce al Equipo</Button>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <img src="/media/imagenes/equipo.png" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover object-top" alt="Team 1" />
                                </div>
                                <span className="text-sm font-medium text-slate-500">+40 Expertos</span>
                            </div>
                        </div>
                    </div>

                    {/* Video / Commercial Section */}
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/20 to-accent/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900">
                            <video
                                ref={videoRef}
                                className="w-full aspect-[4/5] lg:aspect-square object-cover"
                                loop
                                muted
                                playsInline
                                poster="/media/imagenes/oficina_moderna.png"
                            >
                                <source src="/media/videos/video.mp4" type="video/mp4" />
                                Tu navegador no soporta videos.
                            </video>

                            {/* Video Overlay Controls */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col text-white">
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">Showcase 2026</span>
                                        <span className="text-xl font-bold">NovaDigital Lifestyle</span>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={toggleMute}
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
                                        >
                                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                        </button>
                                        <button
                                            onClick={togglePlay}
                                            className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/40"
                                        >
                                            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500 text-white text-[10px] font-black uppercase tracking-tighter animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                Publicidad
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
