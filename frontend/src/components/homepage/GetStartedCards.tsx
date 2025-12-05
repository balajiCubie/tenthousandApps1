import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { SparklesIcon, CodeIcon, BookIcon, ArrowRightIcon } from '../icons';

export const GetStartedCards = () => {
    const cards = [
        {
            icon: SparklesIcon,
            title: 'Start Using Calculators',
            description: 'Browse our collection of 100+ calculators and start calculating instantly. No sign-up required.',
            link: '#calculators',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: CodeIcon,
            title: 'Explore Developer API',
            description: 'Integrate our powerful calculation engines into your applications with our RESTful API.',
            link: '#api',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: BookIcon,
            title: 'Read Documentation',
            description: 'Learn how to make the most of our platform with comprehensive guides and tutorials.',
            link: '#docs',
            color: 'from-green-500 to-teal-500'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get Started Today
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose your path and start your journey with us
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <Card key={index} hover className="group">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                                <card.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0972d3] transition-colors">
                                {card.title}
                            </h3>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {card.description}
                            </p>

                            <a
                                href={card.link}
                                className="inline-flex items-center text-[#0972d3] font-medium group-hover:translate-x-1 transition-transform"
                            >
                                Learn more
                                <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </a>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};
