'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';

export const CalculatorPreview = () => {
    const [distance, setDistance] = useState('10');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('45');
    const [seconds, setSeconds] = useState('30');

    const calculatePace = () => {
        const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
        const distanceKm = parseFloat(distance);
        if (distanceKm > 0 && totalSeconds > 0) {
            const paceSeconds = totalSeconds / distanceKm;
            const paceMin = Math.floor(paceSeconds / 60);
            const paceSec = Math.floor(paceSeconds % 60);
            return `${paceMin}:${paceSec.toString().padStart(2, '0')}`;
        }
        return '0:00';
    };

    return (
        <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Try Our Interactive Calculators
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Experience instant, accurate calculations right in your browser. Our calculators are designed
                            with simplicity and precision in mind, giving you results in real-time as you type.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start glass px-4 py-3 rounded-lg">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-medium">Real-time calculations as you type</span>
                            </li>
                            <li className="flex items-start glass px-4 py-3 rounded-lg">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-medium">No registration required</span>
                            </li>
                            <li className="flex items-start glass px-4 py-3 rounded-lg">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 font-medium">100% free to use</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - Calculator */}
                    <div className="glass-strong rounded-2xl p-8 shadow-2xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Running Pace Calculator</h3>
                            <p className="text-sm text-gray-600">Calculate your pace per kilometer</p>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Distance (km)
                                </label>
                                <input
                                    type="number"
                                    value={distance}
                                    onChange={(e) => setDistance(e.target.value)}
                                    className="w-full px-4 py-3 glass border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[#0972d3] focus:border-transparent transition-all text-lg"
                                    placeholder="10"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Time
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    <div>
                                        <input
                                            type="number"
                                            value={hours}
                                            onChange={(e) => setHours(e.target.value)}
                                            className="w-full px-3 py-3 glass border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[#0972d3] focus:border-transparent text-center text-lg transition-all"
                                            placeholder="HH"
                                        />
                                        <span className="block text-xs text-gray-500 mt-2 text-center font-medium">Hours</span>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            value={minutes}
                                            onChange={(e) => setMinutes(e.target.value)}
                                            className="w-full px-3 py-3 glass border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[#0972d3] focus:border-transparent text-center text-lg transition-all"
                                            placeholder="MM"
                                        />
                                        <span className="block text-xs text-gray-500 mt-2 text-center font-medium">Minutes</span>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            value={seconds}
                                            onChange={(e) => setSeconds(e.target.value)}
                                            className="w-full px-3 py-3 glass border-2 border-white/50 rounded-xl focus:ring-2 focus:ring-[#0972d3] focus:border-transparent text-center text-lg transition-all"
                                            placeholder="SS"
                                        />
                                        <span className="block text-xs text-gray-500 mt-2 text-center font-medium">Seconds</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-[#0972d3] to-[#7d3c98] rounded-2xl shadow-xl">
                                <div className="text-sm text-white/90 mb-2 font-medium">Your Pace</div>
                                <div className="text-4xl font-bold text-white">
                                    {calculatePace()} <span className="text-lg text-white/80">min/km</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
