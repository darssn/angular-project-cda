import { Product } from 'src/models/product';
import { CATEGORIES } from './categories';
//mock of products guitars
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Gibson Les Paul',
    price: 2000,
    description: 'Gibson Les Paul Standard 2019 T',
    category: CATEGORIES[0],
    imageUrl:
      'https://p.turbosquid.com/ts-thumb/St/o4oiW9/MtEwDG2r/guitar_signature_01/jpg/1448090030/600x600/fit_q87/ac87b79bae3375306ed27a879bdf753793fd7b5e/guitar_signature_01.jpg',
    note: 5,
  },
  {
    id: 2,
    name: 'Fender Stratocaster',
    price: 1500,
    description: 'Fender Stratocaster American Professional II',
    category: CATEGORIES[0],
    imageUrl:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71EknBNNdbL._AC_SL1500_.jpg',
    note: 5,
  },
  {
    id: 3,
    name: 'Gibson SG',
    price: 1800,
    description: 'Gibson SG Standard 2019 T',
    category: CATEGORIES[0],
    imageUrl:
      'https://img.audiofanzine.com/images/u/product/normal/gibson-sg-standard-1001.jpg',
    note: 2,
  },
  {
    id: 4,
    name: 'Gibson Les Paul',
    price: 2000,
    description: 'Gibson Les Paul Standard 2019 T',
    category: CATEGORIES[0],
    imageUrl:
      'https://p.turbosquid.com/ts-thumb/St/o4oiW9/MtEwDG2r/guitar_signature_01/jpg/1448090030/600x600/fit_q87/ac87b79bae3375306ed27a879bdf753793fd7b5e/guitar_signature_01.jpg',
    note: 5,
  },
  {
    id: 5,
    name: 'Yamaha PSR-E473',
    price: 300,
    description: 'Yamaha PSR-E473 61-Key Portable Keyboard',
    category: CATEGORIES[3],
    imageUrl: 'https://bdbo1.thomann.de/thumb/bdb3000/pics/bdbo/17446146.jpg',
    note: 5,
  },
  {
    id: 6,
    name: 'Yamaha PSR-E463',
    price: 250,
    description: 'Yamaha PSR-E463 61-Key Portable Keyboard',
    category: CATEGORIES[3],
    imageUrl: 'https://bdbo1.thomann.de/thumb/bdb3000/pics/bdbo/17446146.jpg',
    note: 5,
  },
  {
    id: 7,
    name: 'Startone Star Drum Set Standard -BK',
    price: 300,
    description: 'Startone Star Drum Set Standard -BK',
    category: CATEGORIES[2],
    imageUrl: 'https://bdbo1.thomann.de/thumb/bdb3000/pics/bdbo/16429821.jpg',
    note: 5,
  },
  {
    id: 8,
    name: 'Shure SM58S',
    price: 100,
    description: 'Shure SM58S Vocal Microphone',
    category: CATEGORIES[5],
    imageUrl: 'https://i.ebayimg.com/images/g/bpwAAOSw6qBfcsgx/s-l500.jpg',
    note: 5,
  },
  {
    id: 9,
    name: 'Shure SM57',
    price: 100,
    description: 'Shure SM57 Vocal Microphone',
    category: CATEGORIES[5],
    imageUrl: 'https://i.ebayimg.com/images/g/bpwAAOSw6qBfcsgx/s-l500.jpg',
    note: 5,
  },
];
