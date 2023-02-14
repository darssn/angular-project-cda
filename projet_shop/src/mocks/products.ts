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
];
