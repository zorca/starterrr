import { socialLinks } from '@/data/footer';

export default function Footer4() {
    return (
        <footer id="uc-footer" className="uc-footer panel overflow-hidden">
            <div className="footer-outer pb-4 lg:pb-6">
                <div className="uc-footer-content">
                    <div className="container max-w-1200">
                        <div className="uc-footer-inner">
                            <div className="uc-footer-bottom panel pt-4 text-center lg:pt-6">
                                <div className="row">
                                    <div className="col-12 lg:col-4">
                                        <p className="text-gray-300">ООО «Лоба-такси»</p>
                                        <p>Адрес г. Москва ул. Народного Ополчения, д. 38 к. 3</p>
                                    </div>
                                    <div className="col-12 lg:col-4">
                                        <p className="text-gray-300">
                                            График работы поддержки: 24/7
                                            <br />
                                            WhatsApp / Telegram +7 (961) 148-00-24
                                        </p>
                                        <div>
                                            <a className="btn btn-md btn-primary rounded-default h-48px text-white" href="#">
                                                Скачать приложение
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 lg:col-4">
                                        <ul className="nav-x justify-center gap-2 text-gray-300">
                                            {socialLinks.map((link, index) => (
                                                <li key={index}>
                                                    <a href={link.href}>
                                                        <i className={`icon icon-2 ${link.iconClass}`} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
