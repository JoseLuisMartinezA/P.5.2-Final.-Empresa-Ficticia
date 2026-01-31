import React from 'react';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

const CTA = () => {
    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 md:px-16 md:py-24 text-center">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary-500/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-accent/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                    <div className="max-w-2xl mx-auto space-y-8">
                        <Heading level={2} className="text-white">
                            ¿Listo para ver tu negocio crecer?
                        </Heading>
                        <p className="text-lg text-slate-400">
                            Únete a las cientos de empresas que ya están transformando su presencia digital con nuestras estrategias personalizadas.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button className="w-full sm:w-auto px-8 py-4 text-lg">
                                Reservar Consultoría Gratis
                            </Button>
                            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg bg-transparent border-slate-700 text-white hover:bg-slate-800">
                                Ver Planes
                            </Button>
                        </div>
                        <p className="text-sm text-slate-500">
                            Sin compromiso. Respuesta en menos de 24 horas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
