// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import achieve1 from '../../assets/images/selectel-hack.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import achieve2 from '../../assets/images/2 место-1.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import donor1 from '../../assets/images/projecte/donor/1.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import donor2 from '../../assets/images/projecte/donor/2.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import donor3 from '../../assets/images/projecte/donor/3.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import donor4 from '../../assets/images/projecte/donor/4.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import donor5 from '../../assets/images/projecte/donor/5.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import donor6 from '../../assets/images/projecte/donor/6.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import industry1 from '../../assets/images/projecte/industry/1.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import industry2 from '../../assets/images/projecte/industry/2.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import industry3 from '../../assets/images/projecte/industry/3.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import industry4 from '../../assets/images/projecte/industry/4.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import industry5 from '../../assets/images/projecte/industry/5.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tasktracker1 from '../../assets/images/projecte/task-tracker/1.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tasktracker2 from '../../assets/images/projecte/task-tracker/2.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tasktracker3 from '../../assets/images/projecte/task-tracker/3.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tasktracker4 from '../../assets/images/projecte/task-tracker/4.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tasktracker5 from '../../assets/images/projecte/task-tracker/5.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tasktracker6 from '../../assets/images/projecte/task-tracker/6.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import neobank1 from '../../assets/images/projecte/neobank/1.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import neobank2 from '../../assets/images/projecte/neobank/2.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import neobank3 from '../../assets/images/projecte/neobank/3.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import neobank4 from '../../assets/images/projecte/neobank/4.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import diploma1 from '../../assets/images/projecte/diploma/1.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import diploma2 from '../../assets/images/projecte/diploma/2.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import diploma3 from '../../assets/images/projecte/diploma/3.PNG';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import diploma4 from '../../assets/images/projecte/diploma/4.PNG';
export const achieve = [
  {
    id: 0,
    name: 'Selectel Hackathon',
    img: achieve1,
    place: 3,
  },
  {
    id: 1,
    name: 'Онлайн-хакатон Neo hack ',
    img: achieve2,
    place: 2,
  },
];

export const projects = [
  {
    id: 0,
    name: 'Telegramm web-app для donor search',
    skills: 'React, Typescript, Tailwind, Shadcn',
    git: 'https://github.com/End-rey/DonorSearch-Module',
    img: [
      {
        id: 0,
        path: donor6,
      },
      {
        id: 1,
        path: donor1,
      },
      {
        id: 2,
        path: donor2,
      },
      {
        id: 3,
        path: donor4,
      },
      {
        id: 4,
        path: donor5,
      },
      {
        id: 2,
        path: donor3,
      },
    ],
  },
  {
    id: 1,
    name: 'Industry Game',
    skills: 'Vue, Vuex, JavaScript, Css, Bootstrap',
    git: 'https://github.com/The-Galley/industry_game',
    img: [
      {
        id: 0,
        path: industry1,
      },
      {
        id: 1,
        path: industry2,
      },
      {
        id: 2,
        path: industry3,
      },
      {
        id: 3,
        path: industry4,
      },
      {
        id: 4,
        path: industry5,
      },
    ],
  },
  {
    id: 2,
    name: 'Онлайн-хакатон Neo hack ',
    skills: 'React, Typescript, Scss',
    git: 'https://github.com/Raznex/todoshechka',
    img: [
      {
        id: 0,
        path: tasktracker1,
      },
      {
        id: 1,
        path: tasktracker2,
      },
      {
        id: 2,
        path: tasktracker3,
      },
      {
        id: 3,
        path: tasktracker4,
      },
      {
        id: 4,
        path: tasktracker5,
      },
      {
        id: 5,
        path: tasktracker6,
      },
    ],
  },
  {
    id: 3,
    name: 'Учебный проект NeoBank',
    skills: 'React, Typescript, Scss',
    git: 'https://github.com/Raznex/NeoBank',
    img: [
      {
        id: 0,
        path: neobank1,
      },
      {
        id: 1,
        path: neobank2,
      },
      {
        id: 2,
        path: neobank3,
      },
      {
        id: 3,
        path: neobank4,
      },
    ],
  },
  {
    id: 4,
    name: 'Дипломный проект Yandex.Практикум',
    skills: 'React, Typescript, Css, node.js, express.js',
    git: 'https://github.com/Raznex/movies-explorer-frontend',
    img: [
      {
        id: 0,
        path: diploma1,
      },
      {
        id: 1,
        path: diploma2,
      },
      {
        id: 2,
        path: diploma3,
      },
      {
        id: 3,
        path: diploma4,
      },
    ],
  },
];

export interface achieve {
  id: number;
  name: string;
  img: string;
  place: number;
}

export interface IProjects {
  id: number;
  name: string;
  skills: string;
  git: string;
  img: ImageProjects[];
}

export interface ImageProjects {
  id: number;
  path: string;
}
