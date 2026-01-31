import React from 'react';
import * as LucideIcons from 'lucide-react';

const Card = ({ title, description, iconName, className = '' }) => {
    const Icon = LucideIcons[iconName] || LucideIcons.Zap;

    return (
        <div className={`p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${className}`}>
            <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default Card;
