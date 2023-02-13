import { User } from "src/models/user";


export const Connexion_User: Connexion = {

   USER_CONNECT : false,

}

interface Connexion {
    USER?: User,
    USER_CONNECT: boolean
}