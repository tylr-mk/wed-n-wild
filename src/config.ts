import type { Site, SocialObjects } from './types';

export const SITE: Site = {
	website: 'https://wednwild.com',
	author: 'Mike Taylor',
	desc: 'Wedding Days',
	title: 'Yooooo',
	lightAndDarkMode: true,
	postPerPage: 5,
};

export const LOCALE = ['en-EN']; // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/tylr-mk',
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: 'Facebook',
		href: 'https://facebook.com/michaeljtaylor87',
		linkTitle: `${SITE.title} on Facebook`,
		active: true,
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com/michaeljtaylor87',
		linkTitle: `${SITE.title} on Instagram`,
		active: true,
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/michaeljtaylor87/',
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: 'Mail',
		href: 'mailto:tylr.mk@gmail.com',
		linkTitle: `Send an email to ${SITE.title}`,
		active: false,
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/tylr-mk',
		linkTitle: `${SITE.title} on Twitter`,
		active: false,
	},
];
