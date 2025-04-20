export default function Hero() {
    return (
        <div id="hero_header" className="hero-header hero-five-scene section panel overflow-hidden">
            <div className="position-cover from-secondary bg-gradient-to-t to-white dark:from-gray-800 dark:to-gray-900" />
            <div className="section-outer panel pt-2 xl:pt-2">
                <div className="container max-w-1200">
                    <div className="section-inner panel pt-8 pb-8">
                        <div className="row child-cols-12 g-6 lg:g-0 items-center justify-center lg:justify-between">
                            <div className="sm:col-6 lg:col-6">
                                <div
                                    className="panel vstack gap-2 text-center lg:text-start xl:me-4 rtl:lg:text-end"
                                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                                >
                                    <h1 className="h2 sm:display-7 xl:display-7 fw-semibold">
                                        Электронные
                                        <br />
                                        путевые листы —<br />
                                        быстро, удобно, законно!
                                    </h1>

                                    <p className="fs-6 xl:fs-5">
                                        Мы создали крутую программу
                                        <br />
                                        для получения электронных путевых листов
                                        <br />
                                        водителями такси с наилучшими условиями.
                                    </p>
                                    <div className="vstack mt-2 gap-1">
                                        <div>
                                            <p className="text-primary">Скачайте приложение и зарегистрируйтесь</p>
                                        </div>
                                        <div className="row child-cols g-1 items-center justify-center">
                                            <div className="col-12 sm:col-auto">
                                                <a className="btn btn-md btn-primary rounded-default h-48px lg:min-w-150px w-100 text-white" href="#">
                                                    Скачать приложение
                                                </a>
                                            </div>
                                            <div className="">
                                                <div className="form-group inline-block">
                                                    <a className="uc-link text-underline dark:text-secondary" href="#">
                                                        Выдача лицензий
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-6 lg:col-6">
                                <div className="hero-scroll-scene panel sm:w-500px sm:h-600px lg:w-450px lg:h-500px xl:w-500px xl:h-500px">
                                    <div
                                        className="position-absolute sm:w-180px lg:w-200px xl:w-250px d-none sm:d-block"
                                        style={{ bottom: '0', left: '0' }}
                                    >
                                        <img alt="Manager" src="/assets/images/people/man-01.png" width="256" height="422" />
                                    </div>
                                    <div
                                        className="featured-image position-absolute sm:w-250px lg:w-200px xl:w-400px m-0 overflow-hidden"
                                        style={{ bottom: '0', left: '110px' }}
                                    >
                                        <img className="image" alt="Manager" src="/assets/images/people/girl-01.png" width="380" height="450" />
                                    </div>
                                    <div
                                        className="hero-five-account position-absolute sm:w-180px lg:w-200px xl:w-250px d-none sm:d-block"
                                        style={{ bottom: '0', right: '0' }}
                                    >
                                        <img alt="Manager" src="/assets/images/people/girl-02.png" width="283" height="478" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <img src="/assets/images/banners/first.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
