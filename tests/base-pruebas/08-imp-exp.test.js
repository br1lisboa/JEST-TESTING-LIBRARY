import getHeroeById from "../../src/base-pruebas/base-pruebas/08-imp-exp.js"
import { getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp.js"


describe('Probando 08-imp', () => {
    test('should be heroe por id', () => {
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('should be undefined si no exite el id', () => {
        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
    })

    test('Debe retornar un arreglo con los heroes de DC', () => {

        const owner = "DC"
        const heroDC = getHeroesByOwner(owner)
        
        expect(heroDC.length).toEqual(3)
    })

    test('Debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = "Marvel"
        const heroDC = getHeroesByOwner(owner)
        
        expect(heroDC.length).toEqual(2)
    })
})
