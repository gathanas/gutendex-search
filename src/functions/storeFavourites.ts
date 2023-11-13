import { FAVOURITES_LOCALSTORAGE_VAR } from "../variabels";

const storeFavourites = (ids:string[]) => {


    localStorage.setItem(FAVOURITES_LOCALSTORAGE_VAR, ids.join(','));


}

export default storeFavourites;