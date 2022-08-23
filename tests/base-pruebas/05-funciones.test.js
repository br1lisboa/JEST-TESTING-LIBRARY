import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => {
    test('getuser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(testUser).toEqual(user)
    })

    test('getUsuario debe retornar un objeto con usuario e id', () => {
        const nombre = 'Pedro'
        const user = getUsuarioActivo(nombre)
        const testUser = {
            uid: 'ABC567',
            username: nombre
        }
        expect(testUser).toEqual(user)
    })
})