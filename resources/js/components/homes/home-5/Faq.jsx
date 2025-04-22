import Accordion from '@/components/common/Accordion';

export default function Faq() {
    return (
        <div id="faq" className="faq section section-alter panel overflow-hidden pt-8 pb-8">
            <div className="section-outer panel">
                <div className="container max-w-md">
                    <div
                        className="section-inner panel"
                        data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="panel vstack gap-6 xl:gap-8">
                            <div className="vstack gap-2 text-center">
                                <h2 className="h4 sm:h3 xl:h2 m-0 text-center">Ответы на частые вопросы</h2>
                            </div>
                            <div className="panel">
                                <ul
                                    className="uc-accordion-divider uc-accordion gap-5"
                                    data-uc-accordion="targets: > li;"
                                    style={{ '--divider-gap': '40px' }}
                                >
                                    <Accordion parentClass="panel" />
                                </ul>
                            </div>
                            <div>
                                <p className="text-primary fw-medium">
                                    У нас опытные сотрудники поддержки, которые вам все объяснят. Звони и спрашивай.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
