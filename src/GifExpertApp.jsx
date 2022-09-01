import { useState } from 'react';
import { AddCategory } from './components';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['One punch']);
    //por defecto viene en undefined

    const addCategory = (event) => {
        // console.log(event);
        // const newCategory = [ ...categories, 'Attack on titan' ]
        // console.log(newCategory)
        // setCategories( newCategory) i did this way
        if(categories.includes(event)) return;
        setCategories( cat => [...cat, event] )
    }

    return (
        <>
            <h1> Gif Expert App </h1>
            <AddCategory  onAddCategory={ value => addCategory(value) } />
            
       
                {
                    categories.map( category =>  (  <GifGrid key={category} category={category}  />  ))
                }
       
        </>
    );
}