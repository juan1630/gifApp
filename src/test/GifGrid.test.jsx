import { render, screen } from "@testing-library/react";
import { GifGrid } from "../GifGrid";
import { UseFetchGif } from "../hooks/UseFetchGif";

jest.mock("../hooks/UseFetchGif");
//hacmeos le mock del hook

describe('Pruebas en el componente GifGrid', ()=> {
    
    const category = 'the seven dealy sins';

    test('Debe ', ()=> {

         UseFetchGif.mockReturnValue({
            images:[],
            isLoading: true
         });

        render( <GifGrid category={category} /> );
        // screen.debug();

        expect( screen.getByText('Carganding...') );
        expect( screen.getByText( category ) );

    });

    test('debe de retornar los elementos de los items', ()=> {
        const  gifs = [{
            id: 'ABC',
            title: 'una prueba',
            url: 'https:///juan.com'
        },{
            
                id: 'DEF',
                title: 'otra prueba',
                url: 'https:///juan.com'
            
        }];

        UseFetchGif.mockReturnValue({
            images:gifs,
            isLoading: false
         });


         render(<GifGrid category={category} />);
         //screen.debug();
         expect( screen.getAllByRole('img').length ).toBe(2)
    });

});