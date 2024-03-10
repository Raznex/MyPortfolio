// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import achieve1 from '../../assets/images/selectel-hack.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import achieve2 from '../../assets/images/2 место-1.png';

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

export interface achieve {
  id: number;
  name: string;
  img: string;
  place: number;
}
