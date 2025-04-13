export const menuItems = [
  {
    id: 1,
    label: "Home",
    subItems: [
      {
        href: "/",
        label: "Home 1",
      },
      {
        href: "/home-2",
        label: "Home 2",
      },
      {
        href: "/home-3",
        label: "Home 3",
      },
      {
        href: "/home-4",
        label: "Home 4",
      },
      {
        href: "/home-5",
        label: "Home 5",
      },
      {
        href: "/home-6",
        label: "Home 6",
      },
      {
        href: "/rtl",
        label: "Home RTL",
      },
    ],
  },
  {
    id: 2,
    href: "/page-features",
    label: "Features",
  },
  {
    id: 3,
    href: "/page-pricing",
    label: "Pricing",
  },
  {
    id: 4,
    href: "/page-about",
    label: "About",
  },
  {
    id: 5,
    href: "/page-career",
    label: "Career",
  },
  {
    id: 6,
    href: "/page-contact",
    label: "Contact",
  },
  {
    id: 7,
    label: "Inner Pages",
    subItems: [
      {
        label: "Blog",
        subItems: [
          {
            href: "/blog",
            label: "Full Width",
          },
          {
            href: "/blog-2cols/1",
            label: "Grid 2 Cols",
          },
          {
            href: "/blog-3cols/1",
            label: "Grid 3 Cols",
          },
          {
            href: "/blog-4cols/1",
            label: "Grid 4 Cols",
          },
        ],
      },
      {
        label: "Blog - detail",
        subItems: [
          {
            href: "/blog-details/1",
            label: "Blog detail",
          },
          {
            href: "/blog-details-2/1",
            label: "Blog detail - v2",
          },
        ],
      },
      {
        label: "Useful pages",
        subItems: [
          {
            href: "/sign-up",
            label: "Sign up",
          },
          {
            href: "/sign-in",
            label: "Sign in",
          },
          {
            href: "/reset-password",
            label: "Reset password",
          },
          {
            href: "/page-not-found",
            label: "404 page",
          },
          {
            href: "/coming-soon",
            label: "Coming soon",
          },
        ],
      },
      {
        label: "Other pages",
        subItems: [
          {
            href: "/page-terms",
            label: "FAQ",
          },
          {
            href: "/page-terms",
            label: "Terms of use",
          },
          {
            href: "/page-privacy",
            label: "Privacy policy",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: "Shop",
    subItems: [
      {
        label: "Shop layouts",
        subItems: [
          {
            href: "/shop",
            label: "Shop 4 cols",
          },
          {
            href: "/shop-3",
            label: "Shop 3 cols",
          },
          {
            href: "/shop-2",
            label: "Shop 2 cols",
          },
          {
            href: "/shop-sidebar",
            label: "Shop with sidebar",
          },
        ],
      },
      {
        href: "/shop-category/demo",
        label: "Archive category",
      },
      {
        href: "/shop-product-detail/2",
        label: "Product detail",
      },
      {
        href: "/shop-product-detail-2/2",
        label: "Product detail - v2",
      },
      {
        href: "/shop-cart",
        label: "Cart",
      },
      {
        href: "/shop-cart-2",
        label: "Cart - v2",
      },
      {
        href: "/shop-checkout",
        label: "Checkout",
      },
      {
        href: "/shop-checkout-2",
        label: "Checkout - v2",
      },
      {
        href: "/shop-order",
        label: "Order confirmation",
      },
    ],
  },
];

export const pagesData = [
  {
    id: 1,
    header: "Main Pages",
    items: [
      {
        href: "/",
        label: "Home 01",
      },
      {
        href: "/home-2",
        label: "Home 02",
      },
      {
        href: "/home-3",
        label: "Home 03",
      },
      {
        href: "/home-4",
        label: "Home 04",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/home-5",
        label: "Home 05",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/home-6",
        label: "Home 06",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/rtl",
        label: "Home RTL",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "#",
        label: "Home 07",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
      {
        href: "#",
        label: "Home 08",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
      {
        href: "#",
        label: "Home 09",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
      {
        href: "#",
        label: "Home 10",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
    ],
  },
  {
    id: 2,
    header: "Inner Pages",
    items: [
      {
        href: "/page-features",
        label: "Features",
      },
      {
        href: "/page-pricing",
        label: "Pricing",
      },
      {
        href: "/page-integrations",
        label: "Integrations",
      },
      {
        href: "/page-about",
        label: "About",
      },
      {
        href: "/page-career",
        label: "Career",
      },
      {
        href: "/page-team",
        label: "Team",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/page-career-detail/2",
        label: "Job details",
      },
      {
        href: "/page-contact",
        label: "Contact",
      },
      {
        href: "/page-contact-2",
        label: "Contact v2",
      },
      {
        href: "#",
        label: "Services",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
    ],
  },
  {
    id: 3,
    header: "CMS Pages",
    items: [
      {
        href: "/blog",
        label: "Modern",
      },
      {
        href: "/blog-classic",
        label: "Classic",
      },
      {
        href: "/blog-2cols",
        label: "Grid 2 cols",
      },
      {
        href: "/blog-3cols",
        label: "Grid 3 cols",
      },
      {
        href: "/blog-4cols",
        label: "Grid 4 cols",
      },
      {
        href: "/blog-category/Stratgy",
        label: "Category",
      },
      {
        href: "/blog-author/Amir Khan",
        label: "Author",
      },
      {
        href: "/blog-details/1",
        label: "Blog single",
      },
      {
        href: "/blog-details-2/2",
        label: "Blog single v2",
      },
      {
        href: "/blog-details-3/2",
        label: "Blog single v3",
      },
    ],
  },
  {
    id: 4,
    header: "Shop Pages",
    items: [
      {
        href: "/shop",
        label: "Grid 4 cols",
      },
      {
        href: "/shop-3",
        label: "Grid 3 cols",
      },
      {
        href: "/shop-2",
        label: "Grid 2 cols",
      },
      {
        href: "/shop-sidebar",
        label: "Grid with sidebar",
      },
      {
        href: "/shop-product-detail/2",
        label: "Product detail",
      },
      {
        href: "/shop-product-detail-2/2",
        label: "Product detail v2",
      },
      {
        href: "/shop-cart",
        label: "Cart",
      },
      {
        href: "/shop-cart-2",
        label: "Cart v2",
      },
      {
        href: "/shop-checkout",
        label: "Checkout",
      },
      {
        href: "/shop-checkout-2",
        label: "Checkout v2",
      },
      {
        href: "/shop-order",
        label: "Order confirmation",
      },
    ],
  },
  {
    id: 5,
    header: "Other pages",
    items: [
      {
        href: "/sign-in",
        label: "Sign in",
      },
      {
        href: "/sign-in-2",
        label: "Sign in v2",
      },
      {
        href: "/sign-up",
        label: "Sign up",
      },
      {
        href: "/sign-up-2",
        label: "Sign up v2",
      },
      {
        href: "/reset-password",
        label: "Reset password",
      },
      {
        href: "/reset-password-2",
        label: "Reset password v2",
      },
      {
        href: "/page-not-found",
        label: "404",
      },
      {
        href: "/coming-soon",
        label: "Coming Soon",
      },
      {
        href: "/page-terms",
        label: "Terms of service",
      },
      {
        href: "/page-privacy",
        label: "Privacy policy",
      },
    ],
  },
];

export const navItems = [
  { href: "#overview", label: "Overview", active: true },
  { href: "#features", label: "Features" },
  { href: "#how_it_works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#clients_feedback", label: "Reviews" },
  { href: "#insights", label: "Insights" },
];

export const mainPages = [
  {
    href: "/",
    alt: "Home - 01",
    src: "/assets/images/demos/screenshots/index.jpg",
    title: "Home 1",
  },
  {
    href: "/home-2",
    alt: "Home - 02",
    src: "/assets/images/demos/screenshots/index-2.jpg",
    title: "Home 2",
  },
  {
    href: "/home-3",
    alt: "Home - 03",
    src: "/assets/images/demos/screenshots/index-3.jpg",
    title: "Home 3",
  },
  {
    href: "/home-4",
    alt: "Home - 04",
    src: "/assets/images/demos/screenshots/index-4.jpg",
    title: "Home 4",
  },
  {
    href: "/page-features",
    alt: "Features",
    src: "/assets/images/demos/screenshots/page-features.jpg",
    title: "Features",
  },
  {
    href: "/page-pricing",
    alt: "Pricing",
    src: "/assets/images/demos/screenshots/page-pricing.jpg",
    title: "Pricing",
  },
  {
    href: "/page-integrations",
    alt: "Integrations",
    src: "/assets/images/demos/screenshots/page-integrations.jpg",
    title: "Integrations",
  },
  {
    href: "/page-about",
    alt: "About",
    src: "/assets/images/demos/screenshots/page-about.jpg",
    title: "About",
  },
];

export const othermenuItems = [
  { href: "/page-career", icon: "unicon-wikis", title: "Career" },
  { href: "/page-career-detail/2", icon: "unicon-wikis", title: "Job details" },
  { href: "/page-contact", icon: "unicon-wikis", title: "Contact" },
  { href: "/page-contact-2", icon: "unicon-wikis", title: "Contact v2" },
  { href: "/blog", icon: "unicon-course", title: "Blog" },
  { href: "/blog-details/1", icon: "unicon-course", title: "Blog details" },
  {
    href: "/blog-details-2/2",
    icon: "unicon-course",
    title: "Blog details v2",
  },
  {
    href: "/blog-details-3/2",
    icon: "unicon-course",
    title: "Blog details v3",
  },
  { href: "/home-2", icon: "unicon-unlocked", title: "Sign up" },
  { href: "/home-3", icon: "unicon-unlocked", title: "Sign in" },
  { href: "/home-4", icon: "unicon-unlocked", title: "Reset Password" },
  { href: "/shop", icon: "unicon-shopping-cart", title: "Shop" },
  { href: "/shop-cart", icon: "unicon-shopping-cart", title: "Cart" },
  { href: "/shop-checkout", icon: "unicon-shopping-cart", title: "Checkout" },
  {
    href: "/shop-product-detail/2",
    icon: "unicon-shopping-cart",
    title: "Product detail",
  },
  {
    href: "/shop-order",
    icon: "unicon-shopping-cart",
    title: "Order confirmation",
  },
];
export const icons = [
  { href: "#", iconClass: "unicon-logo-medium icon-2" },
  { href: "#", iconClass: "unicon-logo-x-filled icon-2" },
  { href: "#", iconClass: "unicon-logo-instagram icon-2" },
  { href: "#", iconClass: "unicon-logo-pinterest icon-2" },
];
export const features = [
  {
    id: 1,
    iconClass: "unicon-email",
    title: "Email Template Builder",
    description: "Design personalized emails that convert",
  },
  {
    id: 2,
    iconClass: "unicon-blog",
    title: "Landing Page Builder",
    description: "Deliver the right message to the right user",
  },
  {
    id: 3,
    iconClass: "unicon-increase-level",
    title: "Reporting & analytics",
    description: "Track sales & campaign performance",
  },
  {
    id: 4,
    iconClass: "unicon-magic-wand-filled",
    title: "AI-Powered Tools",
    description: "Say hello to your AI growth assistant",
  },
  {
    id: 5,
    iconClass: "unicon-store",
    title: "E-commerce and retail",
    description: "Amplify the conversation across multiple channels",
  },
  {
    id: 6,
    iconClass: "unicon-shopping-catalog",
    title: "See all products",
    description: "See all our product and services offerings",
  },
];
export const homeLinks = [
  {
    id: 1,
    href: "/",
    imgAlt: "Home - 01",
    imgSrc: "/assets/images/demos/screenshots/index.jpg",
    label: "SaaS",
  },
  {
    id: 2,
    href: "/home-2",
    imgAlt: "Home - 02",
    imgSrc: "/assets/images/demos/screenshots/index-2.jpg",
    label: "Startup",
  },
  {
    id: 3,
    href: "/home-3",
    imgAlt: "Home - 03",
    imgSrc: "/assets/images/demos/screenshots/index-3.jpg",
    label: "Software",
  },
  {
    id: 4,
    href: "/home-4",
    imgAlt: "Home - 04",
    imgSrc: "/assets/images/demos/screenshots/index-4.jpg",
    label: "Mobile Apps",
  },
  {
    id: 5,
    href: "/home-5",
    imgAlt: "Home - 05",
    imgSrc: "/assets/images/demos/screenshots/index-5.jpg",
    label: "Digital Agency",
  },
];
export const links = [
  {
    id: 1,
    href: "/page-career",
    label: "Hire an Expert",
    isInternal: true,
  },
  {
    id: 2,
    href: "#",
    label: "Customer stories",
    isInternal: false,
  },
  {
    id: 3,
    href: "#",
    label: "Ressources",
    isInternal: false,
  },
  {
    id: 4,
    href: "/blog",
    label: "Blog",
    isInternal: true,
  },
  {
    id: 5,
    href: "/page-career",
    label: "Career",
    isInternal: true,
  },
  {
    id: 6,
    href: "/page-team",
    label: "Team",
    isInternal: true,
  },
  {
    id: 7,
    href: "/page-contact",
    label: "Get in touch",
    isInternal: true,
  },
];
