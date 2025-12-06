/**
 * Services table data - calculator services overview.
 */
export interface ServiceItem {
    category: string;
    description: string;
    tools: string;
}

export const services: ServiceItem[] = [
    {
        category: 'Time & Date',
        description: 'Convert and compute durations, ages, and time zones',
        tools: 'Time calculator, Age calculator, Date difference, Time zone converter',
    },
    {
        category: 'Finance',
        description: 'Interest, tax, EMI, and investment calculations',
        tools: 'Loan calculator, ROI calculator, CAGR, Tax calculator, EMI calculator',
    },
    {
        category: 'Science',
        description: 'Equations, conversions, and real-time graphs',
        tools: 'Scientific calculator, Unit converter, Physics formulas, Chemistry tools',
    },
    {
        category: 'Health & Fitness',
        description: 'Track your health metrics and fitness goals',
        tools: 'BMI calculator, Calorie counter, Pace calculator, Macro calculator',
    },
    {
        category: 'Conversion',
        description: 'Convert between units, currencies, and measurements',
        tools: 'Currency converter, Length converter, Weight converter, Temperature',
    },
];
