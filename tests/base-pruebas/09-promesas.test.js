import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Heroes', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)

            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done()
            })

    })

    test('getHeroeByIdAsync debe de retornar un error si heroe 100 no existe', (done) => {

        const id = 100;

        getHeroeByIdAsync(id)

            .catch(err => {
                console.log(err);
                done()
            })
    })

})
