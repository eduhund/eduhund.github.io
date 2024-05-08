import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'About us',
        href: getPermalink('/about'),
    },
    {
        text: 'Contact',
        href: getPermalink('/contact'),
    },
    {
      text: 'Products',
      links: [
        {
          text: 'All Products',
          href: getBlogPermalink(),
        },
        {
          text: 'Tabunn',
          href: getPermalink('tabunn', 'post'),
        },
        {
          text: 'Textile',
          href: getPermalink('textile', 'post'),
        },
        {
          text: 'Digital Mentor',
          href: getPermalink('digital-mentor', 'post'),
        },
        {
          text: 'Digital Mentor Promo',
          href: getPermalink('digital-mentor-promo', 'post'),
        },
        {
          text: 'ChaCha',
          href: getPermalink('chacha', 'post'),
        }
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://script.google.com/macros/library/d/1zvbXSUJNskKse8GiWSUskfUc1hI4q4Z-7oU0Oe-doWyUywwNuCLPlg9i/1', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'All Products', href: getBlogPermalink() },
        { text: 'Tabunn', href: getPermalink('tabunn', 'post') },
        { text: 'Textile', href: getPermalink('textile', 'post') },
        { text: 'Digital Mentor', href: getPermalink('digital-mentor', 'post') },
        { text: 'Digital Mentor Promo', href: getPermalink('digital-mentor-promo', 'post') },
        { text: 'ChaCha', href: getPermalink('chacha', 'post'}
      ],
    },
    {
      title: 'eduHund team',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Contacts', href: getPermalink('/contact') }
      ],
    },
    {
      title: 'Neverhund',
      links: [
        { text: 'Neverhund', href: 'https://neverhund.com' },
        { text: 'Services', href: 'https://neverhund.com/services' },
        { text: 'Work', href: 'https://neverhund.com/work' },
        { text: 'About', href: 'https://neverhund.com/about' },
        { text: 'Contacts', href: 'https://neverhund.com/contacts' }
      ],
    },
    {
      title: 'Social Links',
      links: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/company/eduhund/' },
        { text: 'Behance', href: 'https://www.behance.net/Neverhund' },
        { text: 'Github', href: 'https://github.com/eduhund' },
        { text: 'Instagram', href: 'https://www.instagram.com/neverhund' }
      ],
    }
  ],
  secondaryLinks: [
    { text: 'About us', href: getPermalink('/about') },
    { text: 'Contacts', href: getPermalink('/contact') },
  ],
  socialLinks: [
  //  { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/neverhund' },
  //  { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //  { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/eduhund' },
  ],
  //footNote: `
  //  <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //  Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  //`,
};
