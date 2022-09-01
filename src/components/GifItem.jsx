export const GifItem = ({title, url})=> {
    return(
        <div className="card-gifs" >
            <img src={url} alt={title} />
            <p> { title } </p>
        </div>
    )
}