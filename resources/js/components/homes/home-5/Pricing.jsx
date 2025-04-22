import { pricingPlans } from '@/data/pricing';
import { Link } from '@inertiajs/react';
export default function Pricing() {
    return (
        <div id="pricing_tiers" className="pricing-tiers section panel overflow-hidden">
            <div className="section-outer panel pt-4 md:pt-6 xl:pt-9">
                <div className="container sm:max-w-lg">
                    <div className="section-inner panel">
                        <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
                            <div
                                className="heading vstack panel max-w-550px mx-auto gap-2 text-center"
                                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                            >
                                <span className="fw-bold text-primary dark:text-secondary">Pricing</span>
                                <h2 className="title h3 lg:h2 xl:h1 m-0">Simple, scalable pricing.</h2>
                                <p className="fs-6 xl:fs-5">No extra charges. No hidden fees.</p>
                            </div>
                            <div className="content panel w-100">
                                <div
                                    className="row child-cols-12 sm:child-cols-6 col-match g-2 justify-center"
                                    data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                                >
                                    {pricingPlans.map((plan, index) => (
                                        <div key={index}>
                                            <div
                                                className={`tier panel vstack rounded-1-5 lg:rounded-2 bg-secondary dark:bg-opacity-5 text-dark justify-between p-3 text-center md:p-4 lg:p-6 xl:p-8 dark:bg-white dark:text-white ${plan.additionalClasses}`}
                                            >
                                                {plan.badge && (
                                                    <span className="fs-7 position-absolute fw-bold text-uppercase text-primary end-0 top-0 mx-3 my-2 dark:text-white">
                                                        {plan.badge}
                                                    </span>
                                                )}
                                                <header className="tier-header vstack items-center gap-2">
                                                    <h5 className="h5 lg:h4 text-primary m-0 dark:text-white">{plan.title}</h5>
                                                    <div className="d-flex gap-narrow mt-1 items-end">
                                                        <h3 className="h1 lg:display-6 price text-dark m-0 dark:text-white">{plan.price}</h3>
                                                        <span className="h6 lg:h3 pb-narrow text-dark m-0 dark:text-white">/ mo</span>
                                                    </div>
                                                    <p className="desc lg:fs-5">{plan.description}</p>
                                                    <a
                                                        className="btn btn-md lg:btn-lg btn-primary rounded-default mt-2 w-100 text-white"
                                                        href={plan.linkHref}
                                                    >
                                                        <span>{plan.linkText}</span>
                                                    </a>
                                                    <p className="details">Billed annually.</p>
                                                </header>
                                                <hr className="my-2 md:my-3 lg:my-4" />
                                                <div className="tier-body">
                                                    <ul className="nav-y gap-2 text-start">
                                                        {plan.features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="hstack items-start gap-1">
                                                                <i className="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold" />
                                                                <span className="d-inline">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="footer panel text-center"
                                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
                            >
                                <Link
                                    to={`/page-pricing`}
                                    className="btn btn-md rounded-default border-opacity-20 hover:border-opacity-40 mt-1 border-gray-900 bg-white shadow-xs dark:border-white dark:bg-gray-700 dark:text-white"
                                >
                                    <span>Compare plans</span>
                                </Link>
                                <p className="mt-2">Prices exclude any applicable taxes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
