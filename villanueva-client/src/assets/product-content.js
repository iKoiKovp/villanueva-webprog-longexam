import totImg from './img/nutote.jpeg';
import notesImg from './img/notes.webp';
import tumblerImg from './img/nutumbler.jpeg';
import lampImg from './img/nulamp.webp';
import hoodieImg from './img/nuhoodie.jpeg';
import deskImg from './img/desk.jpg';
import idImg from './img/nuid.jpg';
import examImg from './img/nuexam.jpg';

const products = [
  {
    name: 'campus-sling-bag',
    title: 'Campus Sling Bag',
    thumbnail: totImg,
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    content: [
      'A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.',
      'Made with thick canvas, reinforced handles, and a clean monochrome print.',
      'Best for students who want one simple carry-all bag for class and after-class plans.',
    ],
  },
  {
    name: 'notepads-pack',
    title: 'Notepads Pack',
    thumbnail: notesImg,
    category: 'Stationery',
    price: 'PHP 249',
    stock: 'In stock',
    content: [
      'A practical bundle of notebooks, sticky notes, and quick-label tabs for daily class work.',
      'The set is light, compact, and easy to keep inside a backpack or locker.',
      'Useful for lectures, reminders, project lists, and exam review schedules.',
    ],
  },
  {
    name: 'nu-Mug',
    title: 'NU Mug',
    thumbnail: tumblerImg,
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    content: [
      'A double-wall tumbler built for water, coffee, or tea during long school days.',
      'The matte finish keeps the look simple while the lid helps reduce spills in your bag.',
      'Fits most side pockets and keeps drinks ready between classes.',
    ],
  },
  {
    name: 'nu-mini-fan',
    title: 'NU Mini Fan',
    thumbnail: lampImg,
    category: 'Tech',
    price: 'PHP 899',
    stock: 'In stock',
    content: [
      'A compact rechargeable lamp for dorm desks, night study sessions, and small workspaces.',
      'It has three brightness levels and a foldable body that stores neatly after use.',
      'Good for reading, writing, and focused desk work without taking too much space.',
    ],
  },
  {
    name: 'nu-sweatshirt',
    title: 'NU Sweatshirt',
    thumbnail: hoodieImg,
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    content: [
      'A soft everyday hoodie with a relaxed fit for classrooms, commute days, and weekends.',
      'The heavy cotton blend keeps structure while staying comfortable for regular wear.',
      'Available through preorder so sizes can be reserved before release.',
    ],
  },
  {
    name: 'nu-pen-holder',
    title: 'NU Pen Holder',
    thumbnail: deskImg,
    category: 'Workspace',
    price: 'PHP 349',
    stock: 'In stock',
    content: [
      'A small organizer set for pens, clips, cables, cards, and other desk essentials.',
      'The modular pieces can be arranged based on your study area or dorm table.',
      'Keeps daily tools visible without adding clutter.',
    ],
  },
  {
    name: 'nu-wristband',
    title: 'NU Wristband',
    thumbnail: idImg,
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    content: [
      'A durable lanyard and card holder set for IDs, access cards, and small passes.',
      'The clip is easy to detach when scanning or presenting credentials.',
      'Simple enough for daily use and sturdy enough for a full semester.',
    ],
  },
  {
    name: 'nu-summer-bundle',
    title: 'Summer Bundle',
    thumbnail: examImg,
    category: 'Bundles',
    price: 'PHP 399',
    stock: 'In stock',
    content: [
      'A compact bundle with snacks, tabs, pens, and quick notes for busy review weeks.',
      'Packed for convenience so students can grab one kit and focus on studying.',
      'Ideal as a personal prep item or a small gift for classmates.',
    ],
  },
];

export default products;
