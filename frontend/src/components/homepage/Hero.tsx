import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from '../icons';

export const Hero = () => {
    return (
        <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
            {/* Multi-layer Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

            {/* Geometric Shapes - Cloud Visuals */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large circle  top-right */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>

                {/* Medium circle - bottom-left */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed"></div>

                {/* Small circles scattered */}
                <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-2xl animate-float-slow"></div>
                <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-full blur-2xl animate-float"></div>
            </div>

            {/* Floating Calculator Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[10%] glass p-4 rounded-xl shadow-lg animate-float">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>

                <div className="absolute top-40 right-[15%] glass p-3 rounded-lg shadow-lg animate-float-delayed">
                    <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div className="absolute bottom-32 left-[20%] glass p-3 rounded-lg shadow-lg animate-float-slow">
                    <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                </div>

                <div className="absolute top-1/2 right-[8%] glass p-4 rounded-xl shadow-lg animate-float">
                    <svg className="w-7 h-7 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        All-in-One Smart
                        <span className="block mt-2 bg-gradient-to-r from-[#0972d3] via-[#7d3c98] to-[#f093fb] bg-clip-text text-transparent animate-pulse-glow">
                            Calculator Platform
                        </span>
                    </h1>

                    {/* Subtext */}
                    <div className="glass-strong rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            Over <span className="font-bold text-[#0972d3]">100+ calculators</span> powered by cloud precision —
                            from finance to fitness, science to conversions. Lightning-fast, accurate, and beautifully designed.
                        </p>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['Time Calculators', 'Fitness Tools', 'Financial Analysis', 'Converters', 'Custom Tools'].map((feature) => (
                            <span
                                key={feature}
                                className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md hover:scale-105 transition-transform cursor-pointer"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button size="lg" variant="primary" className="group shadow-xl hover:shadow-2xl">
                            Get Started
                            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="glass-hover shadow-lg">
                            Try Demo
                        </Button>
                    </div>

                    {/* Stats Glass Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '100+', label: 'Calculators', gradient: 'from-blue-500 to-cyan-500' },
                            { value: '50K+', label: 'Users', gradient: 'from-purple-500 to-pink-500' },
                            { value: '1M+', label: 'Calculations/mo', gradient: 'from-green-500 to-emerald-500' },
                            { value: '99.9%', label: 'Accuracy', gradient: 'from-orange-500 to-amber-500' },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-strong p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
