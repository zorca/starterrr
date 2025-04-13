import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/home-5/Hero";

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div
                className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
                <Header4 />
                <div id="wrapper" className="wrap">
                    <Hero />
                </div>
                <Footer4 />
            </div>
        </>
    );
}
