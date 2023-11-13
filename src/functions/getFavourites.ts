import { FAVOURITES_LOCALSTORAGE_VAR } from "../variabels";

interface GetFavouritesHandlerProps {

    ():string;

}

const getFavourites:GetFavouritesHandlerProps = () => {

    
    const favourites = localStorage.getItem(FAVOURITES_LOCALSTORAGE_VAR);

    if(!favourites) return '';

    return favourites;

}

export default getFavourites;