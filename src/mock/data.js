import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Harshvardhan', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Harshvardhan',
  subtitle: 'I am a Web Developer & an Electronics Engineer',
  cta: 'React - JavaScript - Node - MongoDB - HTML - CSS - Bootstrap',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileImg.jpg',
  paragraphOne: 'I love applying responsive design principles and watching my web pages shrink into mobile screens and still look amazing. My specialities include quickly learning new skills and programming languages.',
  paragraphTwo: 'I play guitar and I find a beautiful crossover between my software and my music which pursuits the challenge of intellect, creativity, organization, sequential processing and problem solving.',
  paragraphThree: 'This is what keeps me up at night , a never ending thirst to create beautiful, powerful things and share them with the world.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tetris.png',
    title: 'Tetris App',
    info: 'An application made by using JavaScript, CSS, HTML',
    info2: 'It has on-display controls that pop when used on mobile devices',
    url: 'https://tetristetris.netlify.app/',
    repo: 'https://github.com/HarshVardhan22/Tetris.git', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: 'tic-tac-toe.png',
    title: 'Tic-Tac-Toe App',
    info: 'An application made by using React.js',
    info2: 'It emphasizes the use of "props" and "states" in React.js',
    url: 'https://kattamkutti.netlify.app/',
    repo: 'https://github.com/HarshVardhan22/tic-tac-toe.git', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'movie_book.png',
    title: 'Movie Seat Booking App',
    info: 'An application made by using JavaScript, CSS, HTML',
    info2: '',
    url: '',
    repo: 'https://github.com/HarshVardhan22/Moive-ticket-booking.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todoList.png',
    title: 'To-Do App',
    info: 'An application made by using React.js',
    info2: 'The app has an option to switch themes and it is implemented by using the concept of Context.api',
    url: 'https://themed-todo.netlify.app/',
    repo: 'https://github.com/HarshVardhan22/Moive-ticket-booking.git',
  }
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hsinha31@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/harshvardhan-5a64a8148',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/HarshVardhan22',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/harsh.vardhan_',
    },

    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/harsh.sinha.7146/',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
