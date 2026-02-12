import React from 'react';

const Section = ({
    children,
    id,
    className = '',
    containerClassName = '',
    alternate = false
}) => {
    const bgStyle = alternate
        ? 'bg-secondary-50 dark:bg-secondary-900/40'
        : 'bg-white dark:bg-secondary-950';

    return (
        <section id={id} className={`py-20 md:py-32 ${bgStyle} ${className}`}>
            <div className={`container-custom ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
