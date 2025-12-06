import { AccordionItem } from '@/components/ui/Accordion';

/**
 * FAQ data for the FAQ section.
 */
export const faqItems: AccordionItem[] = [
    {
        id: 'free',
        title: 'Are the calculators free to use?',
        content: 'Yes! All our calculators are completely free to use. No registration or subscription required.',
    },
    {
        id: 'account',
        title: 'Do I need to create an account?',
        content: 'No, you can use all calculators without creating an account. However, creating an account allows you to save calculations and access premium features.',
    },
    {
        id: 'accuracy',
        title: 'How accurate are the calculations?',
        content: 'Our calculators use industry-standard formulas and are rigorously tested. We maintain 99.9% accuracy across all calculation types.',
    },
    {
        id: 'api',
        title: 'Can I use the API in my application?',
        content: 'Yes! We offer a comprehensive RESTful API for developers. Visit our API documentation to learn more about integration options.',
    },
    {
        id: 'security',
        title: 'Is my data secure and private?',
        content: "Absolutely. We don't store calculation data unless you explicitly save it to your account. All data transmission is encrypted using industry-standard protocols.",
    },
    {
        id: 'suggest',
        title: 'Can I suggest new calculators?',
        content: 'We love hearing from our users! Please contact us through our feedback form with your calculator suggestions.',
    },
];

/**
 * "Why Choose Us" accordion data.
 */
export const whyChooseUsItems: AccordionItem[] = [
    {
        id: 'accuracy',
        title: 'Accuracy & Reliability',
        content: 'Our calculators are built on proven formulas and algorithms, tested extensively to ensure precision. We validate every calculation against industry standards and scientific principles, giving you confidence in every result.',
    },
    {
        id: 'speed',
        title: 'Speed & Cloud Optimization',
        content: "Experience instant results with our cloud-powered infrastructure. Calculations happen in milliseconds, whether you're performing simple conversions or complex scientific computations. Our globally distributed servers ensure fast access from anywhere.",
    },
    {
        id: 'categories',
        title: '100+ Calculator Categories',
        content: 'From basic arithmetic to advanced financial modeling, we cover every calculation need. Our platform includes time & date calculators, fitness & health tools, financial analyzers, unit converters, scientific calculators, and custom tools for specialized industries.',
    },
    {
        id: 'api',
        title: 'Developer API Access',
        content: 'Integrate our calculation engines into your applications with our robust RESTful API. Access all calculator functions programmatically, with comprehensive documentation, code examples in multiple languages, and dedicated support for enterprise users.',
    },
];
