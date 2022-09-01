import { GifItem } from "./components/GifItem";
import { UseFetchGif } from "./hooks/UseFetchGif";

export const GifGrid = ({category}) => {

   const { images, isLoading } = UseFetchGif(category);

    return (
        <>
            <h3> { category } </h3>
            {
                isLoading && (<h2> Carganding... </h2>)
            }
            <div className="container-grid">
                { 
                    images.map( (image) => <GifItem key={image.id} { ...image } /> )
                }
            </div>
        </>
    )
} 