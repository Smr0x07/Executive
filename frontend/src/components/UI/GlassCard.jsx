import React from 'react';

const GlassCard = ({ children, className = "" }) => (
    <div className={`backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:shadow-white/5 transition-all duration-300 ${className}`}>
        {children}
    </div>
);

export default GlassCard;