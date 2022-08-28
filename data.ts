import { RiTeamLine } from 'react-icons/ri';
import { TbLayoutDashboard, TbApiApp } from 'react-icons/tb';
import { FaServer, FaLaptopCode } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';

import { IProject, Service, Skill } from './types';

import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: FaLaptopCode,
    title: 'Convert Design into Code',
    about:
      'I am able to convert Figma/XD Design into code by following coding best practices',
  },
  {
    Icon: TbLayoutDashboard,
    title: 'Create User Interfaces',
    about:
      'I can build a beautiful and scalable UI using <strong> HTML</strong>,<strong>CSS</strong> and <b>React.js</b>',
  },
  {
    Icon: TbApiApp,
    title: 'Develop APIs/REST APIs',
    about:
      'I can develop robust API/REST API using <b>Node.js</b>, its ecosystem',
  },
  {
    Icon: AiOutlineApi,
    title: 'APIs Integration',
    about: 'I can Integrate External APIs by following Security best practice',
  },
  {
    Icon: FaServer,
    title: 'Model Databases',
    about: 'I am able to model databases using NoSQL/SQL Databases',
  },
  {
    Icon: RiTeamLine,
    title: 'Work in Cross functional teams',
    about: 'I like working with different kind of cross functional teams',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'React.js',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Node.js',
    level: '75',
  },
  {
    Icon: BsCircleFill,
    name: 'Express.js',
    level: '85',
  },
  {
    Icon: BsCircleFill,
    name: 'Next.js',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Mongoose',
    level: '75',
  },
  {
    Icon: BsCircleFill,
    name: 'MongoDB',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '75',
  },

  {
    Icon: BsCircleFill,
    name: 'Tailwind CSS',
    level: '70',
  },

  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '85',
  },

  {
    Icon: BsCircleFill,
    name: 'CSS3',
    level: '60',
  },

  {
    Icon: BsCircleFill,
    name: 'HTML5',
    level: '90',
  },

  {
    Icon: BsCircleFill,
    name: 'Git',
    level: '70',
  },
];

export const projects: IProject[] = [
  {
    name: 'COVID Tracker',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/covid.jpg',
    deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['frontend'],
    key_techs: ['React', 'Chart.js', 'Material UI'],
  },
  {
    name: 'Algorithm Visualizer',
    image_path: '/images/algoVisual.png',
    deployed_url: 'https://visual-algorithm.web.app/',
    github_url: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['frontend'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    key_techs: ['React', 'firebase', 'Framer Motion'],
  },

  {
    name: 'Dev Talks',
    image_path: '/images/dev.jpg',
    deployed_url: 'https://dev-talks.herokuapp.com/',
    github_url: 'https://github.com/Dey-Sumit/Dev-talks',
    category: ['backend', 'frontend', 'fullstack'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    key_techs: [
      'React',
      'Redux',
      'Node',
      'Express',
      'Mongo',
      'REST API',
      'Bootstrap',
    ],
  },

  {
    name: 'Realtime Chat App',
    image_path: '/images/chatapp.jpg',
    deployed_url: 'https://sumit-chat.netlify.app/',
    github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['backend', 'frontend'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
    key_techs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    name: 'Tweeter Clone',
    image_path: '/images/tweetme.jpg',
    deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
    github_url: 'https://github.com/Dey-Sumit/tweetme',
    category: ['backend', 'fullstack'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    key_techs: ['React', 'Django', 'Django REST API'],
  },
];
