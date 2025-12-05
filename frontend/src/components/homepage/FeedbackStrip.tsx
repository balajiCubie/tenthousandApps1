'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';

export const FeedbackStrip = () => {
    const [selected, setSelected] = useState<'yes' | 'no' | null>(null);

    return (
        <section className="py-12 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb]">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-2">
                            Did you find what you were looking for today?
                        </h3>
                        <p className="text-blue-100">
                            Your feedback helps us improve our platform
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setSelected('yes')}
                            className={`px-8 py-3 rounded-lg font-medium transition-all ${selected === 'yes'
                                    ? 'bg-white text-[#667eea] shadow-lg'
                                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                                }`}
                        >
                            {selected === 'yes' ? '✓ Yes' : 'Yes'}
                        </button>
                        <button
                            onClick={() => setSelected('no')}
                            className={`px-8 py-3 rounded-lg font-medium transition-all ${selected === 'no'
                                    ? 'bg-white text-[#667eea] shadow-lg'
                                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                                }`}
                        >
                            {selected === 'no' ? '✓ No' : 'No'}
                        </button>
                    </div>
                </div>

                {selected && (
                    <div className="mt-6 text-center text-white">
                        <p className="text-sm">
                            {selected === 'yes'
                                ? '🎉 Great! Thank you for your feedback!'
                                : 'We\'re sorry to hear that. Please tell us how we can improve.'}
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
};
