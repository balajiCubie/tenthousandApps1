import React from 'react';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface DynamicIconProps {
    name: string;
    className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
    const IconComponent = (Icons as any)[name] as LucideIcon | undefined;

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <IconComponent className={className} />;
};

export default DynamicIcon;
