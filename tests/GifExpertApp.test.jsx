import { render, screen } from "@testing-library/react"


describe('test de <GifExpertApp />', () => {
    test('debe de', () => {
        render(<GifExpertApp />)
        screen.debug();
    })
})