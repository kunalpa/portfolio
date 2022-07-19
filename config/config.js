
import profile from './profile.png';
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
	description: "A Computer Science and Computational Physics student interested in numerical methods, mathematical predictive modeling, and machine learning.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1-uxhPJRDCmdihjPes10ZoK1UaDzidJMeyRBFMO8usj0/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a rising Junior studying Computer Science and Computational Physics at UNC-Chapel Hill",
		"I am currently working for Fidelity Investments as a Full Stack Intern. During late high school and throughout college, I have taken a special interest in developing predictive models utilizing mathematical and computer science fundamentals",
		"Math models that interest me the most include Monte Carlo Integration, Kalman Filters, and varying ordered Runge-Kutta",
		"When I’m not programming, I enjoy weightlifting, playing basketball, and building rc cars",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Backend Development",
			description: "I work on backend projects ranging from tracking the stock market to modeling linear algebraic operations",
			icons: null,
		},
		{
			title: "Numerical Methods",
			description: "I use differential equations to model immerging physics and mathematics problems",
			icons: null,
		},
		{
			title: "DevOps",
			description: "I set up an automatic PR manager in GitHub using Kubernetes, AWS, and Prow to reduce merge and rebasing conflicts",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
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
			title: "Portfolio",
			description: "A collection of projects displaying a variety of skills added after development",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/kunalpa/collection",
				},
			]
		}
		// {
		// 	title: "Car",
		// 	description: "",
		// 	icons: [
		// 		{
		// 			icon: faGithub,
		// 			link: "",
		// 		},
		// 	]
		// },
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
	title: "Kunal Pathak | Computer Scientist | Python and Java developer",
	description: "I am interested in software engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@kunalpa",
	description: "Software Engineer | Computer Scientist | Python and Java Developer",
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