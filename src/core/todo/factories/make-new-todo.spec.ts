import { makeNewTodo } from "./make-new-todo"


describe('makeNewTodo (unit)', () => {
    test('deve retorna um novo todo válido', () => {

        // Arrange
        const expectedTodo = {
            id: expect.any(String),
            description: 'meu novo todo',
            createdAt: expect.any(String),
        }

        // Act
        const newTodo = makeNewTodo('meu novo todo')


        // Assert
        expect(newTodo.description).toBe(expectedTodo.description)
        expect(newTodo).toStrictEqual(expectedTodo)
    })
})
