import { useEffect, useState } from 'react';
import Nav3 from './component/Nav3';

import { openMobileMenu } from '@/utlis/toggleMobileMenu';

export default function Header4() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(false);

    useEffect(() => {
        setPrevScrollPos(window.pageYOffset);
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = currentScrollPos < prevScrollPos;

            setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <header
            className={`uc-header header-default uc-navbar-sticky-wrap uc-sticky z-999 ${
                scrollingUp ? 'uc-sticky-below uc-sticky-fixed headerFixed' : ''
            }`}
            data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
        >
            <nav
                className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 ${scrollingUp ? 'uc-navbar-sticky' : 'uc-navbar-transparent'} `}
                data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
            >
                <div style={{ '--uc-nav-height': '80px' }} className="uc-navbar-main">
                    <div className="container max-w-1200">
                        <div className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white">
                            <div className="uc-navbar-left">
                                <div className="uc-logo text-dark dark:text-white">
                                    <a className="panel text-none" href={`/`} style={{ width: 140 }}>
                                        <img className="dark:d-none" alt="Lexend" src="/assets/images/common/logo.png" width="85" height="58" />
                                        <img
                                            className="d-none dark:d-block"
                                            alt="Lexend"
                                            src="/assets/images/common/logo.png"
                                            width="85"
                                            height="58"
                                        />
                                    </a>
                                </div>
                                <ul className="uc-navbar-nav d-none lg:d-flex gap-3 xl:gap-4 ltr:ms-2 ltr:xl:ms-4 rtl:me-2 rtl:xl:me-4">
                                    <Nav3 />
                                </ul>
                            </div>
                            <div className="uc-navbar-right items-center justify-center">
                                <div className="">
                                    <p className="color-mid-gray fs-8 text-end">Техподдержка 24/7</p>
                                    <div>
                                        <a className="uc-link text-underline dark:text-secondary" href="tel:79611480024">
                                            +7 (961) 148-00-24
                                        </a>
                                    </div>
                                </div>
                                <a className="d-block lg:d-none uc-icon uc-navbar-toggle-icon" onClick={openMobileMenu}>
                                    <svg width={20} height={20} viewBox="0 0 20 20">
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                                            }}
                                        />
                                        <rect className="line-1" y={3} width={20} height={2} />
                                        <rect className="line-2" y={9} width={20} height={2} />
                                        <rect className="line-3" y={9} width={20} height={2} />
                                        <rect className="line-4" y={15} width={20} height={2} />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
