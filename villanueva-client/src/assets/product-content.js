import slingImg from './img/nuslingbag.png';
import notesImg from './img/nunotepad.png';
import mugImg from './img/numug.png';
import fanImg from './img/nufan.png';
import sweaterImg from './img/nusweat.png';
import penImg from './img/nupen.png';
import wristImg from './img/nuwrist.png';
import summerImg from './img/nusummer.png';

const products = [
  {
    name: 'campus-sling-bag',
    title: 'Campus Sling Bag',
    thumbnail: slingImg,
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    content: [
      'This practical navy blue sling bag, crafted from durable canvas, is perfect for carrying your daily essentials across campus.',
      'It features a bold, embroidered patch of the NU Bulldog mascot on the front pocket and a subtle "NU" script logo at the top.',
      'The adjustable single strap allows for comfortable, hands-free carrying, keeping your gear secure and accessible.',
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
      'Jot down notes and ideas in these professional-looking notepads, featuring navy blue covers.',
      'The covers are adorned with a small, gold-foil stamped version of the NU Bulldog logo',
      'The top pad is slightly open, revealing clean white pages with a subtle, stylized bulldog watermark, ready for your thoughts.',
    ],
  },
  {
    name: 'nu-Mug',
    title: 'NU Mug',
    thumbnail: mugImg,
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    content: [
      'Start your day with a sip of school spirit from this sturdy, deep navy blue ceramic mug.',
      'A vibrant, snarling NU Bulldog logo is proudly displayed on the side, complete with a spiked collar and sharp teeth.',
      'The mug’s glossy finish and classic C-handle make it a comfortable and stylish way to enjoy your coffee or tea.',
    ],
  },
  {
    name: 'nu-mini-fan',
    title: 'NU Mini Fan',
    thumbnail: fanImg,
    category: 'Tech',
    price: 'PHP 899',
    stock: 'In stock',
    content: [
      'Keep cool on the go with this compact, rechargeable mini fan, perfect for those humid Philippine days',
      'It features the fierce NU Bulldogs logo on the central hub and subtle "NU TECH" branding on the handle.',
      'Its portable design makes it an essential tech accessory for students moving between classes.',
    ],
  },
  {
    name: 'nu-sweatshirt',
    title: 'NU Sweatshirt',
    thumbnail: sweaterImg,
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    content: [
      'Show your school pride in comfort with this classic heather grey sweatshirt.',
      'A large, stylized illustration of the NU Bulldog is screen-printed across the chest, featuring its characteristic yellow body and blue spiked collar.',
      'Below the mascot, "NU BULLDOGS" is prominently displayed, followed by the university\'s establishment year, "EST. 1900."',
    ],
  },
  {
    name: 'nu-pen-holder',
    title: 'NU Pen Holder',
    thumbnail: penImg,
    category: 'Workspace',
    price: 'PHP 349',
    stock: 'In stock',
    content: [
      'Organize your desk with a touch of collegiate elegance using this refined pen holder.',
      'The holder is sculpted into a small, gold-finished architectural plinth and features an engraved and color-filled NU Bulldog logo on its front face.',
      'It’s an ideal way to display your favorite writing tools while celebrating your university connection.',
    ],
  },
  {
    name: 'nu-wristband',
    title: 'NU Wristband',
    thumbnail: wristImg,
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    content: [
      'Rep your team in casual style with this set of elastic athletic wristbands.',
      'The set includes two bands, one in navy blue and one in gold, each featuring a miniature version of the aggressive NU Bulldog logo.',
      'They are soft, comfortable, and perfect for showing your support at games or during your own workouts.',
    ],
  },
  {
    name: 'nu-summer-bundle',
    title: 'Summer Bundle',
    thumbnail: summerImg,
    category: 'Bundles',
    price: 'PHP 399',
    stock: 'In stock',
    content: [
      'Prepare for sunshine and sudden showers with this practical NU Summer Bundle.',
      'The compact navy blue umbrella features a repeating pattern of the NU Bulldog and a large "NU" logo, ensuring you stay dry and stylish.',
      'Paired with it is a beautiful, collapsible hand fan, decorated with smaller bulldog motifs, perfect for keeping cool and showcasing your school spirit.',
    ],
  },
];

export default products;
