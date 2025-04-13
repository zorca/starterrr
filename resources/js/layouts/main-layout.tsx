import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import MobileMenu from "@/components/headers/component/MobileMenu";

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children }: AppLayoutProps) => (
    <div>
        {children}
        <MobileMenu />
    </div>
);
