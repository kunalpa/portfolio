
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
	description: "A Computer Science and Computational Physics student interested in computer vision.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1mr0YNYw-Ab3Ijo0LJTuXfBBO7ldJdQlN8zc4dLAViqA/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a rising Junior studying Computer Science and Computational Physics at UNC-Chapel Hill.",
		"I am currently working for Fidelity Investments as a Full Stack Intern. I have taken special interest in computer vision and hope to complete projects utilizing pretrained tensorflow models for object detection.",
		"When I’m not programming, I enjoy weightlifting, gaming, and playing basketball with friends.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Backend Development",
			description: "I work on backend projects ranging from tracking the stock market to automating deployment using Kubernetes.",
			icons: null,
		},
		{
			title: "Numerical Methods",
			description: "I use differential equations to model immerging physics and mathematics problems.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Covid-19 Effects Dashboard",
			description: "A dashboard built to track the effects of Covid-19 at a global scale.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/comp426-2022-spring/a99-atlas",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A collection of projects I completed before understanding how Git and GitHub worked",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/kunalpa/Portfolio",
				},
			]
		},
		{
			title: "___FIX___",
			description: "",
			icons: [
				{
					icon: faGithub,
					link: "",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "If you have any questions, comments, or just want to say hi, feel free to email or call me.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:kunal.pathak@unc.edu",
			isPrimary: true,
		},
		{
			title: "Call Me",
			link: "(919)448-1227",
			isPrimary: false,
		},
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
			link: "",
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