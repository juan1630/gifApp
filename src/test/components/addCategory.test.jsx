import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/addCategories"

describe('Pruebas en el componente AddCategory', ()=> {
    test('Debe de cambiar el valor en la caja de texto', () => { 
    
        render( <AddCategory onAddCategory={ () => {} }/>  );
        const input  =screen.getByRole('textbox');
        //buscamos el elemnto como si fuera por un getElementById
        
        fireEvent.input(input, { target: { value: "Attack on titan" } })
        // con el fireEvent hace el disparo de algun envento, recibe el target para que podamos agegar el value 
        expect(  input.value ).toBe('Attack on titan')
    });

    test('Debe de llamar el onAddCategory si el input tiene algun valor', () => {
        
        const inputValue = 'Attack on titan';
        const onAddCategory = jest.fn();
        // es un mock de la funcion
        render( <AddCategory onAddCategory={ onAddCategory }  />  );

        const input  =screen.getByRole('textbox');
        const  form = screen.getByRole('form');

        //cambiamos el valor del formulario
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit( form );
        
        expect( input.value ).toBe('');
        //evaluamos que la funcion alla sido llamada
        expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toBeCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('No debe de llamar el onAddCategory si es un String vacio', ()=> {

        const inputValue = '';
        const onAddCategory = jest.fn();
        // es un mock de la funcion
        render( <AddCategory onAddCategory={ onAddCategory }  />  );

        const  form = screen.getByRole('form');

        //cambiamos el valor del formulario
        fireEvent.submit( form );

        expect(onAddCategory).toHaveBeenCalledTimes(0);
        //evaluamos que no haya sido llamada la funcion
        expect( onAddCategory ).not.toHaveBeenCalled();

    });

})