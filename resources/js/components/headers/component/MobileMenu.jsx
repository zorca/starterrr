import { icons, menuItems } from '@/data/menu';
import { closeMobileMenu } from '@/utlis/toggleMobileMenu';

import { useEffect, useRef, useState } from 'react';

export default function MobileMenu() {
    //const { isChecked, handleToggle } = useContextElement();
    //const { pathname } = useLocation();
    const [activeParent1, setActiveParent1] = useState(-1);
    const [activeParent2, setActiveParent2] = useState(-1);
    const elementRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current && // Check if click is inside #mobileMenu
                containerRef.current.contains(event.target) &&
                elementRef.current && // Check if click is outside .gt-menu-area
                !elementRef.current.contains(event.target)
            ) {
                closeMobileMenu();
                // Add your custom logic here
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // useEffect(() => {
    //   closeMobileMenu();
    // }, [pathname]);

    const isMenuActive = (menu) => {
        let isActive = false;
        // if (menu.href) {
        //   if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        //     isActive = true;
        //   }
        // }
        if (menu.subItems) {
            menu.subItems.forEach((el) => {
                // if (el.href) {
                //   if (pathname.split("/")[1] == el.href?.split("/")[1]) {
                //     isActive = true;
                //   }
                // }
                if (el.subItems) {
                    el.subItems.map((elm) => {
                        // if (elm.href) {
                        //   if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                        //     isActive = true;
                        //   }
                        // }
                    });
                }
            });
        }
        return isActive;
    };
    return (
        <div
            ref={containerRef}
            id="uc-menu-panel"
            data-uc-offcanvas="overlay: true;"
            className="uc-offcanvas mobile-menu"
            style={{ display: 'block' }}
            tabIndex={-1}
        >
            <div
                ref={elementRef}
                className="uc-offcanvas-bar text-dark uc-offcanvas-bar-animation uc-offcanvas-slide bg-white dark:bg-gray-900 dark:text-white"
                role="dialog"
                aria-modal="true"
                style={{ maxWidth: 876 }}
            >
                <header className="uc-offcanvas-header hstack items-center justify-between bg-white pb-2 dark:bg-gray-900">
                    <div className="uc-logo">
                        <a href={`/`} className="h5 text-none text-gray-900 dark:text-white">
                            <img className="w-32px" alt="Lexend" src="/assets/images/common/logo-mark.svg" width="34" height="34" />
                        </a>
                    </div>
                    <button
                        className="uc-offcanvas-close icon-3 btn dark:text-opacity-50 hover:text-primary m-1 mt-2 border-0 transition-all duration-150 hover:rotate-90 rtl:start-0 rtl:end-auto dark:text-white"
                        type="button"
                        onClick={closeMobileMenu}
                    >
                        <i className="unicon-close" />
                    </button>
                </header>
                <div className="panel">
                    <div className="uc-sticky-placeholder" style={{ height: 10, width: 290, margin: '0px 0px 16px' }} hidden="" />
                    <ul className="nav-y gap-narrow fw-medium fs-6 uc-nav" data-uc-nav="">
                        {menuItems.map((item, index) => (
                            <li key={index} className={`${item.subItems ? 'uc-parent' : ''} ${activeParent1 == index ? 'active' : ''}`}>
                                {item.href ? (
                                    <a className={isMenuActive(item) ? 'menuActive' : ''} href={item.href}>
                                        {item.label}
                                    </a>
                                ) : (
                                    <>
                                        <a
                                            className={isMenuActive(item) ? 'menuActive' : ''}
                                            onClick={() => setActiveParent1((pre) => (pre == index ? -1 : index))}
                                        >
                                            {item.label}
                                        </a>
                                        {item.subItems && (
                                            <ul className={`uc-nav-sub ${activeParent1 == index ? 'active' : ''}`}>
                                                {item.subItems.map((subItem, index2) => (
                                                    <li
                                                        key={index2}
                                                        className={`${!subItem.href ? 'uc-parent' : ''} ${activeParent2 == index2 ? 'active' : ''}`}
                                                        role="presentation"
                                                    >
                                                        {subItem.href ? (
                                                            <a className={isMenuActive(subItem) ? 'menuActive' : ''} href={subItem.href}>
                                                                {subItem.label}
                                                            </a>
                                                        ) : (
                                                            <>
                                                                <a
                                                                    className={isMenuActive(subItem) ? 'menuActive' : ''}
                                                                    onClick={() => setActiveParent2((pre) => (pre == index2 ? -1 : index2))}
                                                                >
                                                                    {subItem.label}
                                                                </a>
                                                                {subItem.subItems && (
                                                                    <ul className={`uc-nav-sub ${activeParent2 == index2 ? 'active' : ''}`}>
                                                                        {subItem.subItems.map((subItem, index3) => (
                                                                            <li
                                                                                key={index3}
                                                                                className={!subItem.href ? 'uc-parent' : ''}
                                                                                role="presentation"
                                                                            >
                                                                                {subItem.href ? (
                                                                                    <a
                                                                                        className={isMenuActive(subItem) ? 'menuActive' : ''}
                                                                                        href={subItem.href}
                                                                                    >
                                                                                        {subItem.label}
                                                                                    </a>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                        <li className="hr my-1 opacity-10" />
                        <li>
                            <a href={`/`}>Скачать приложение</a>
                        </li>
                    </ul>
                    <ul className="social-icons nav-x mt-4">
                        <li>
                            {icons.map((icon, index) => (
                                <a key={index} href={icon.href}>
                                    <i className={icon.iconClass} />
                                </a>
                            ))}
                        </li>
                    </ul>
                    <div className="uc-sticky-placeholder" style={{ height: 83, width: 290, margin: '32px 0px 0px' }} />
                </div>
            </div>
        </div>
    );
}
