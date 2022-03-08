import React from "react";

/*-------------------------
APPLICATION PAGES
--------------------------*/

const Accounting = React.lazy(() => import('./views/pages/AppPages/accounting-page'));
const Wallet = React.lazy(() => import('./views/pages/AppPages/wallet-page'));
const Setting = React.lazy(() => import('./views/pages/AppPages/setting-page'));
const TripHistory = React.lazy(() => import('./views/pages/AppPages/trip-history-page'));
const Reporting = React.lazy(() => import('./views/pages/AppPages/reporting-page'));
const Trip = React.lazy(() => import('./views/pages/AppPages/trip-page'));
const Invoice = React.lazy(() => import('./views/pages/AppPages/invoice-page'));
const Profile = React.lazy(() => import('./views/pages/AppPages/profile-page'));

/*-------------------------
LANDING PAGES
--------------------------*/

const Blog = React.lazy(() => import('./views/pages/LandingPages/blog-page'));
const Webinar = React.lazy(() => import('./views/pages/LandingPages/webinar-page'));
const Vendor = React.lazy(() => import('./views/pages/LandingPages/vendor-page'));
const Travel = React.lazy(() => import('./views/pages/LandingPages/travel-page'));
const Team = React.lazy(() => import('./views/pages/LandingPages/team-page'));
const Pricing = React.lazy(() => import('./views/pages/LandingPages/pricing-page'));
const KCare = React.lazy(() => import('./views/pages/LandingPages/k-care-page'));
const Hotel = React.lazy(() => import('./views/pages/LandingPages/hotel-page'));
const Guide = React.lazy(() => import('./views/pages/LandingPages/guide-page'));
const Ebook = React.lazy(() => import('./views/pages/LandingPages/ebook-page'));
const Demo = React.lazy(() => import('./views/pages/LandingPages/demo-page'));
const Customer = React.lazy(() => import('./views/pages/LandingPages/customer-page'));
const Corporate = React.lazy(() => import('./views/pages/LandingPages/corporate-page'));
const Contact = React.lazy(() => import('./views/pages/LandingPages/contact-page'));
const Company = React.lazy(() => import('./views/pages/LandingPages/company-page'));
const Career = React.lazy(() => import('./views/pages/LandingPages/career-page'));
const CarRental = React.lazy(() => import('./views/pages/LandingPages/car-rental-page'));


export const landingRoutes = [
  { exact: true, path: '/blog', name: 'blog', component: Blog },
  { exact: true, path: '/career', name: 'career', component: Career },
  { exact: true, path: '/car-rental', name: 'car-rental', component: CarRental },
  { exact: true, path: '/company', name: 'company', component: Company },
  { exact: true, path: '/contact', name: 'contact', component: Contact },
  { exact: true, path: '/corporate', name: 'corporate', component: Corporate },
  { exact: true, path: '/customer', name: 'customer', component: Customer },
  { exact: true, path: '/demo', name: 'demo', component: Demo },
  { exact: true, path: '/ebook', name: 'ebook', component: Ebook},
  { exact: true, path: '/guide', name: 'guide', component: Guide },
  { exact: true, path: '/hotel', name: 'hotel', component: Hotel },
  { exact: true, path: '/k-care', name: 'k-care', component: KCare },
  { exact: true, path: '/pricing', name: 'pricing', component: Pricing },
  { exact: true, path: '/team', name: 'team', component: Team },
  { exact: true, path: '/travel', name: 'travel', component: Travel },
  { exact: true, path: '/vendor', name: 'vendor', component: Vendor },
  { exact: true, path: '/webinar', name: 'webinar', component: Webinar },
];
export const appRoutes = [
  { exact: true, path: '/accounting', name: 'accounting', component: Accounting },
  { exact: true, path: '/invoice', name: 'invoice', component: Invoice },
  { exact: true, path: '/profile', name: 'profile', component: Profile },
  { exact: true, path: '/reporting', name: 'reporting', component: Reporting },
  { exact: true, path: '/setting', name: 'setting', component: Setting },
  { exact: true, path: '/trip-history', name: 'trip-history', component: TripHistory },
  { exact: true, path: '/trip', name: 'trip', component: Trip },
  { exact: true, path: '/wallet', name: 'wallet', component: Wallet },
];