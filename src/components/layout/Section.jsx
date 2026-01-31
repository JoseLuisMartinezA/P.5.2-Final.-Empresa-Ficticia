import React from 'react';

const Section = ({
    children,
    id,
    className = '',
    containerClassName = '',
    alternate = false
}) => {
    const bgStyle = alternate
        ? 'bg-slate-50 dark:bg-slate-900/50'
        : 'bg-white dark:bg-slate-950';

    return (
        <section id={id} className={`py-20 md:py-32 ${bgStyle} ${className}`}>
            <div className={`container-custom ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
