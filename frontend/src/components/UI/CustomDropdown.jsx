import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const CustomDropdown = ({
    options,
    value,
    onChange,
    placeholder = "Select option",
    className = "",
    icon: Icon
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(option => option.value === value);

    const handleSelect = (option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl px-4 py-3 text-white backdrop-blur-md hover:from-white/15 hover:to-white/10 transition-all duration-200 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
                <div className="flex items-center space-x-3">
                    {Icon && <Icon className="w-4 h-4 text-white/70" />}
                    <span className="text-sm font-medium">
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <ChevronDown
                    className={`w-4 h-4 text-white/70 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu */}
                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-20 overflow-hidden">
                        <div className="max-h-60 overflow-y-auto">
                            {options.map((option, index) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-all duration-200 flex items-center justify-between group ${value === option.value ? 'bg-blue-500/20 text-blue-300' : 'text-white/80'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{option.label}</span>
                                    {value === option.value && (
                                        <Check className="w-4 h-4 text-blue-400" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CustomDropdown;