import {render, screen} from '@testing-library/react'
import { GifItem } from '../../components/GifItem';

describe('Pruebas en el componente GifItem' , () => {

    const title="Attack on titan";
    const url = 'https://www.attack.com/';

    test('Debe de hacer match con el  snapshot', ()=> {

        

        const {container} = render(<GifItem title={title} url={url} />);
        

        expect( container ).toMatchSnapshot();
        //compramos que el componente este igual a como esta la foto del componente 
    });

     test('Debe de realizar una prueba y devolver una imagen con el url y el alt indicado ', () => {

        render(<GifItem title={title} url={url} />);
        // srive para poder ver en la cosnola el componente al que se le hacen las pruebas
        // screen.debug();
        // console.log( screen.getByRole('img').src );

        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);

        const  { src, alt  } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    
    });


    test('debe de mostrar el titulo en el componente', ()=> {
        render( <GifItem  title={title} url={url} /> );
        expect( screen.getByText ).toBeTruthy();
    });
});