import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"


describe('Probando CounterApp ', () => {

    const value = 1

    test('CounterApp debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={value} />)
        //console.log(container);
        expect(container).toMatchSnapshot()

    })

    test('Debe de mostrar el valor inicial de 100', () => {

        render(<CounterApp value={100} />)

        expect(screen.getByText(100)).toBeTruthy

    })

    test('Debe de incrementar con el boton +1', () => {

        render(<CounterApp value={value} />)

        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('2')).toBeTruthy()

    })

    test('Debe de decrementar con el boton de -1', () => {

        render(<CounterApp value={value} />)

        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('0')).toBeTruthy()

    })

    test('Debe de funcionar el boton de RESET', () => {

        render(<CounterApp value={value} />)

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText(1)).toBeTruthy()

    })

})