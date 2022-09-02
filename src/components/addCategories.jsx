import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory  }) => {
    
    const [inputValue, setInputValue ] = useState("");

    const onChangeInputValue = (event) => {
        // console.log(event);
        setInputValue(event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 2) return; 
        // setCategories((categories) => [inputValue, ...categories] );
        onAddCategory(inputValue.trim());
        //emitimos el newCategory
        setInputValue('');
    }

    return ( 
        <>
            <form  onSubmit={ (event)=> onSubmit(event) }  aria-label="form" > 
                <h2> Add category </h2> 
                <input 
                    type="text" 
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={ (event)=> onChangeInputValue(event)}
                    />
            </form>
        </>
    )
}


AddCategory.propTypes  = {
    onAddCategory: PropTypes.func.isRequired
}