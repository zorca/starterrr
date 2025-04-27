import Footer4 from '@/components/footers/Footer4';
import Header4 from '@/components/headers/Header4';
import Action from '@/components/homes/home-5/Action';
import Epl from '@/components/homes/home-5/Epl';
import Faq from '@/components/homes/home-5/Faq';
import Gai from '@/components/homes/home-5/Gai';
import Hero from '@/components/homes/home-5/Hero';
import Ofis from '@/components/homes/home-5/Ofis';
import Price from '@/components/homes/home-5/Price';
import Program from '@/components/homes/home-5/Program';
import Qr from '@/components/homes/home-5/Qr';
import Region from '@/components/homes/home-5/Region';
import MainLayout from '@/layouts/main-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/dashboard',
    },
];

export default function Welcome() {
    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <Head title="Главная" />
            <div className="page-wrapper uni-body panel bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl overflow-x-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                <Header4 />
                <div id="wrapper" className="wrap">
                    <Hero />
                    <Qr />
                    <Epl />
                    <Action />
                    <Region />
                    <Gai />
                    <Ofis />
                    <Program />
                    <Price />
                    <Faq />
                </div>
                <Footer4 />
            </div>
        </MainLayout>
    );
}
