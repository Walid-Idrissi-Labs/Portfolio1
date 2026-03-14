'use client';
import React from 'react';
import { FacebookIcon, FrameIcon, GithubIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

import {RevealLinks} from "../ui/reveallinks-bit"
import { AnimatedContainer } from '../utilities/animated-container';

interface FooterLink {
	title: string;
	href: string;
	target?: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	// {
	// 	label: 'Social Links',
	// 	links: [
	// 		{ title: 'Features', href: '#features' },
	// 		{ title: 'Pricing', href: '#pricing' },
	// 		{ title: 'Testimonials', href: '#testimonials' },
	// 		{ title: 'Integration', href: '/' },
	// 	],
	// },
	// {
	// 	label: 'Company',
	// 	links: [
	// 		{ title: 'FAQs', href: '/faqs' },
	// 		{ title: 'About Us', href: '/about' },
	// 		{ title: 'Privacy Policy', href: '/privacy' },
	// 		{ title: 'Terms of Services', href: '/terms' },
	// 	],
	// },
	{
		label: 'Navigation Links',
		links: [
			{ title: 'Home', href: '#' },
			{ title: 'About', href: '#about' },
			{ title: 'Projects', href: '#projects' },
			{ title: 'Contact', href: '#contact' },
			{ title: 'Skills', href: '#skills' },
		],
	},
	{
		label: 'Social Links',
		links: [


			{ title: 'GitHub', href: 'https://github.com/walid-idrissi-labs', target: '_blank', icon: GithubIcon },
			{ title: 'LinkedIn', href: 'https://linkedin.com/in/walid-idrissi-labkhati', target: '_blank', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		// <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
		<footer className="md:rounded-t-6xl relative w-full l mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] bg-[#F2E6D8]/5 px-10 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="flex w-full flex-col gap-8 pl-10 xl:flex-row xl:items-start xl:gap-0">
				{/* Left: copyright + links */}
				<div className="flex flex-col gap-4 xl:flex-row xl:gap-8 xl:shrink-0">
					<AnimatedContainer className="space-y-4" initialY={-8}>
						{/* <FrameIcon className="size-8" /> */}
						<p className="text-muted-foreground mt-8 text-sm md:mt-0">
							© {new Date().getFullYear()} Walid IDRISSI
						</p>
					</AnimatedContainer>

					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1} initialY={-8}>
								<div className="mb-10 md:mb-0">
									<h2 className="text-md">{section.label}</h2>
									<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													target={link.target}
													rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
													className="hover:text-foreground inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-1 size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* Right: RevealLinks — beside links on xl, below on mobile */}
				<AnimatedContainer className="min-w-0 overflow-hidden xl:flex-1" initialY={-8}>
					<RevealLinks />
				</AnimatedContainer>
			</div>
		</footer>
	);
};