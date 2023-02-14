import { PRODUCTSCART } from "src/mocks/productCart";
import { User } from "src/models/user";


export const userMock: User[] = [
    {
        id: 1 ,
        mail: 'user1@mail.fr' ,
        pwd: 'user1', 
        cart: {
            id: 1 ,
            products: PRODUCTSCART
        }
    },
    {
        id: 2 ,
        mail: 'user2@mail.fr' ,
        pwd: 'user2', 
        cart: {
            id: 1 ,
            products: PRODUCTSCART
        }
    },
    {
        id: 3 ,
        mail: 'user3@mail.fr' ,
        pwd: 'user3', 
        cart: {
            id: 1 ,
            products: PRODUCTSCART
        }
    },
    {
        id: 4 ,
        mail: 'user4@mail.fr' ,
        pwd: 'user4', 
        cart: {
            id: 1 ,
            products: PRODUCTSCART
        }
    },
];