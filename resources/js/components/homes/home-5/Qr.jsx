export default function Qr() {
    return (
        <div id="pricing_tiers" className="pricing-tiers section panel overflow-hidden">
            <div className="section-outer panel pt-4 pb-4 md:pt-6 md:pb-6 xl:pt-9 xl:pb-9">
                <div className="container max-w-1200">
                    <div className="section-inner panel">
                        <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
                            <div className="content panel w-200px text-center">
                                <img className="uc-display-inline" src="/assets/images/media/qr.png" alt="Application" />
                            </div>
                            <div>
                                <p className="fs-3 text-center">
                                    Открой камеру в телефоне и наведи на QR-код.
                                    <br />
                                    Скачай мобильное приложение для получения путевых листов.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
