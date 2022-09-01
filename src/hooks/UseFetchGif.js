import { useState, useEffect } from "react";
import { getGifs } from "../helpers/fetchApi";

export const UseFetchGif = (category) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImages = async() => {
        
       const imagesResp = await getGifs(category);
        setImages(  imagesResp );
        setIsLoading(false);

    }

    useEffect( ()=> {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
};