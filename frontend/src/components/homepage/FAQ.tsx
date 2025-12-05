import React from 'react';
import { Container } from '../ui/Container';

export const FAQ = () => {
    const faqs = [
        {
            question: 'Are the calculators free to use?',
            answer: 'Yes! All our calculators are completely free to use. No registration or subscription required.'
        },
        {
            question: 'Do I need to create an account?',
            answer: 'No, you can use all calculators without creating an account. However, creating an account allows you to save calculations and access premium features.'
        },
        {
            question: 'How accurate are the calculations?',
            answer: 'Our calculators use industry-standard formulas and are rigorously tested. We maintain 99.9% accuracy across all calculation types.'
        },
        {
            question: 'Can I use the API in my application?',
            answer: 'Yes! We offer a comprehensive RESTful API for developers. Visit our API documentation to learn more about integration options.'
        },
        {
            question: 'Is my data secure and private?',
            answer: 'Absolutely. We don\'t store calculation data unless you explicitly save it to your account. All data transmission is encrypted using industry-standard protocols.'
        },
        {
            question: 'Can I suggest new calculators?',
            answer: 'We love hearing from our users! Please contact us through our feedback form with your calculator suggestions.'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
