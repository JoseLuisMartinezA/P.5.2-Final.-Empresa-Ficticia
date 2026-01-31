import React from 'react';

const Heading = ({ level = 1, children, className = '', gradient = false }) => {
    const Tag = `h${level}`;

    const sizes = {
        1: 'text-4xl md:text-6xl font-extrabold tracking-tight',
        2: 'text-3xl md:text-4xl font-bold tracking-tight',
        3: 'text-2xl md:text-3xl font-semibold',
        4: 'text-xl font-semibold',
    };

    const gradientStyles = gradient ? 'text-gradient' : '';

    return (
        <Tag className={`${sizes[level]} ${gradientStyles} ${className}`}>
            {children}
        </Tag>
    );
};

export default Heading;
