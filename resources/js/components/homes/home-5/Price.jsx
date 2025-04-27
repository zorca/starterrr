export default function Price() {
    return (
        <div className="section panel overflow-hidden">
            <div className="section-outer panel pt-4 pb-4 md:pt-6 md:pb-6 xl:pt-9 xl:pb-9">
                <div className="container max-w-1200">
                    <div className="section-inner panel">
                        <div className="row text-center lg:text-start">
                            <div className="col-12">
                                <div className="max-w-450">
                                    <h2 className="">Цены</h2>
                                    <p className="fs-5 m-auto max-w-450 pb-4 lg:m-0">Стоимость после того, как пройдут три бесплатных месяца</p>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center lg:text-start">
                            <div className="col-12 sm:col-4">
                                <div className="price-block">
                                    <h4>1 штука</h4>
                                    <div className="fs-4 text-primary uc-text-bold text-end">19 руб.</div>
                                </div>
                            </div>
                            <div className="col-12 sm:col-4">
                                <div className="price-block price-block--alt text-white">
                                    <h4>1 месяц безлимит</h4>
                                    <div className="fs-4 uc-text-bold text-end text-white">499 руб.</div>
                                </div>
                            </div>
                            <div className="col-12 sm:col-4">
                                <div className="price-block">
                                    <h4>1 год безлимит</h4>
                                    <div className="fs-4 text-primary uc-text-bold text-end">4 999 руб.</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="fs-5 text-primary fw-medium pt-4">
                                Водителям не было выписано ни одного штрафа за наши электронные путевые.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
