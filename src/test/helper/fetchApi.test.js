import { getGifs } from "../../helpers/fetchApi"

describe('Pruebas en el helper de getGifs', ()=> {
    test('Debe de regresar unarreglo con los gifs',async ()=>{
        const gifs = await getGifs('Attack on titan');
        

        expect( gifs.length ).toBeGreaterThan( 0  );
        // le decmimos que almenos sea mayor a 0
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
})