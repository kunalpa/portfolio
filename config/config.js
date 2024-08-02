
import profile from './boston_headshot.JPEG';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Kunal",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Kunal!",
	description: "A Computer Science graduate student interested in backend engineering.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1fRq1apiTb5LCXV2bZxzIvifqu-NH0C606o0Hew-g3Gg/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a Masters student studying Computer Science at UNC-Chapel Hill",
		"I have taken a special interest in development processes that leverage distributed systems and computer science fundamentals",
		"Projects that I typically enjoy include developing code to automate Kubernetes deployments resulting in highly-available SaaS offerings",
		"When I’m not programming, I enjoy weightlifting, playing basketball, and cooking",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Backend Development",
			description: "I work on backend projects ranging from short-term stock price predictors to modeling and training models for cancer detection",
			icons: null,
		},
		{
			title: "Numerical Methods",
			description: "I use differential equations, physics theory, and statistics to model real-world problems",
			icons: null,
		},
		{
			title: "Infrastructure Engineering",
			description: "I have a strong understanding of Kubernetes and have been a sole or key contributor to three large-scale projects.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Peer2Peer Lending Insights",
			description: "Developed a Peer-2-Peer investment strategy employing a precision-maximizing random forest model.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/kunalpa/Peer2Peer_lending_insights",
				},
			]
		},
		{
			title: "Covid-19 Effects Dashboard",
			description: "A dashboard built to track the effects of Covid-19 at a global scale",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/comp426-2022-spring/a99-atlas",
				},
			]
		},
		{
			title: "Compressible Fluid Dynamics",
			description: "Solving the Compressible Fluid Equations Numerically",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/kunalpa/Compressible-Fluid-Equations",
				},
			]
		}
	],
}

export const contact = {
	title: "Get in touch",
	description: "If you have any questions, comments, or just want to say hi, feel free to email me!",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:kunal.pathak@unc.edu",
			isPrimary: true,
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Kunal Pathak | Computer Scientist | Software Engineer",
	description: "I am interested in software engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@kunalpa",
	description: "Software Engineer | Computer Scientist | Physics Enthusiast",
	cards: [
		{
			title: "My website",
			link: "https://kunalpa.github.io/portfolio/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/kunalpa/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/kunalhpathak/",
		},
	]
}