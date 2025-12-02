import React from 'react';
import Link from 'next/link';

const FirebaseStudioLogoIcon = () => (
    <svg width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="paint0_linear_fs_logo" x1="8.65833" y1="2.5" x2="8.65833" y2="35.8" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC248" />
                <stop offset="1" stopColor="#FFA000" />
            </linearGradient>
            <linearGradient id="paint1_linear_fs_logo" x1="21.3197" y1="10.5" x2="21.3197" y2="29.1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5511E" />
                <stop offset="1" stopColor="#F44336" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_fs_logo" x1="13.209" y1="2.5" x2="13.209" y2="35.8" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC928" />
                <stop offset="1" stopColor="#FFA000" />
            </linearGradient>
        </defs>
        <path d="M4.14833 35.8C2.65625 34.0533 1.99618 31.9167 2.18951 29.4L5.05944 2.7C5.09631 2.56667 5.2366 2.5 5.39003 2.5H11.9678C12.1212 2.5 12.2615 2.56667 12.2984 2.7L15.1683 29.4C15.3616 31.9167 14.7015 34.0533 13.2094 35.8L4.14833 35.8Z" fill="url(#paint0_linear_fs_logo)" />
        <path d="M18.0668 29.1L24.4716 14.9C25.2671 13.5833 25.3802 12.1 24.8015 10.5L21.3197 20.3L18.0668 29.1Z" fill="url(#paint1_linear_fs_logo)" />
        <path d="M5.05951 2.7L2.18958 29.4C1.99625 31.9167 2.65631 34.0533 4.14839 35.8L13.2095 35.8C14.7015 34.0533 15.3616 31.9167 15.1683 29.4L18.0668 29.1L21.3198 20.3L24.8016 10.5C25.3803 12.1 25.2671 13.5833 24.4716 14.9L18.0668 29.1L15.1683 29.4L12.2984 2.7C12.2616 2.56667 12.1212 2.5 11.9678 2.5H5.39009C5.23666 2.5 5.09638 2.56667 5.05951 2.7Z" fill="url(#paint2_linear_fs_logo)" />
    </svg>
);

const footerLinkData = {
    learn: {
        title: 'Learn',
        links: [
            { name: 'Developer guides', href: '#' },
            { name: 'SDK & API reference', href: '#' },
            { name: 'Samples', href: '#' },
            { name: 'Libraries', href: '#' },
            { name: 'GitHub', href: '#' },
        ],
    },
    connected: {
        title: 'Stay connected',
        links: [
            { name: 'Check out the blog', href: '#' },
            { name: 'Find us on Reddit', href: '#' },
            { name: 'Follow on X', href: '#' },
            { name: 'Subscribe on YouTube', href: '#' },
            { name: 'Attend an event', href: '#' },
        ],
    },
    support: {
        title: 'Support',
        links: [
            { name: 'Contact support', href: '#' },
            { name: 'Stack Overflow', href: '#' },
            { name: 'Slack community', href: '#' },
            { name: 'Release notes', href: '#' },
            { name: 'Brand guidelines', href: '#' },
            { name: 'FAQs', href: '#' },
        ],
    },
    tools: {
        title: 'Tools for developers',
        links: [
            { name: 'Android', href: '#' },
            { name: 'Chrome', href: '#' },
            { name: 'Firebase', href: '#' },
            { name: 'Google Cloud Platform', href: '#' },
            { name: 'All products', href: '#' },
        ],
    },
};

const Footer = () => {
    return (
        <footer className="bg-black text-white/80 rounded-t-[40px] -mt-16 md:-mt-24 relative z-10">
            <div className="max-w-screen-xl mx-auto px-10 py-16 sm:py-20">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16">
                    <Link href="/" className="flex items-center gap-3 group">
                        <FirebaseStudioLogoIcon />
                        <span className="font-display text-2xl font-medium text-white group-hover:text-white/90 transition-colors">Firebase Studio</span>
                    </Link>
                    <a href="#" className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#999999] hover:text-white transition-colors">
                        Current Status
                        <span className="w-2 h-2 bg-[#FFD600] rounded-full"></span>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {Object.values(footerLinkData).map((column) => (
                        <div key={column.title}>
                            <h3 className="font-medium text-white mb-4 text-base">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm text-[#999999] hover:text-white hover:underline transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-8 border-t border-white/10">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
                        <span className="text-sm text-[#999999]">
                            Google for Developers
                        </span>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                            <a href="#" className="text-[#999999] hover:text-white transition-colors">Terms</a>
                            <a href="#" className="text-[#999999] hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="text-[#999999] hover:text-white transition-colors">Manage Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;