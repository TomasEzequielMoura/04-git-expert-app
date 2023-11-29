import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const alt = 'Hola';
    const title = 'Hola';
    const url = 'https://hola.com.ar/';

    test('debe de hacer match con el snapshot', () => {
        
        const {container} = render(<GifItem title={alt} url={url}/>); 
        expect(container).toMatchSnapshot();
    }) 

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url}/>);
        // console.log(screen.getByRole('img').alt) 

        // forma basica
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        // desestructuramos
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    }) 

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={alt} url={url}/>)  

        expect(screen.getByText(title)).toBeTruthy()
        // expect(screen.getByText(title).innerHTML).toContain(title)
    }) 
})