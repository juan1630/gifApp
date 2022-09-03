import { renderHook, waitFor } from "@testing-library/react";
import { UseFetchGif } from "../../hooks/UseFetchGif";

describe('Pruebas en el useFetchGifs', () => {
    test('Debe de regresa el estado inicial', ()=> {
       const { result }= renderHook( ()=>  UseFetchGif( 'Attack on titan') );
        //para mandar a llamar el hook

        const { images, isLoading  } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de regresar un arreglo y el isLoading en false', async ()=> {
        const { result }= renderHook( ()=>  UseFetchGif( 'Attack on titan') );
        
        await waitFor(
            ()=> expect( result.current.images.length ).toBeGreaterThan(0)
        )
         const { images, isLoading  } = result.current;
 
         expect( images.length ).toBe(10);
         expect( isLoading ).toBeFalsy();
     });

});