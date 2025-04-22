import Footer4 from '@/components/footers/Footer4';
import Header4 from '@/components/headers/Header4';
import Action from '@/components/homes/home-5/Action';
import Epl from '@/components/homes/home-5/Epl';
import Faq from '@/components/homes/home-5/Faq';
import Hero from '@/components/homes/home-5/Hero';
import Qr from '@/components/homes/home-5/Qr';
import MainLayout from '@/layouts/main-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/dashboard',
    },
];

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="page-wrapper uni-body panel bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl overflow-x-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                <Header4 />
                <div id="wrapper" className="wrap">
                    <Hero />
                    <Qr />
                    <Epl />
                    <Action />
                    <Faq />
                </div>
                <Footer4 />
            </div>
        </MainLayout>
    );
}
