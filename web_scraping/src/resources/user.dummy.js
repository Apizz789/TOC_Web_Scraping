import cart from './cart.dummy'

const users = [
    {
        username: "anonymous",
        password: "123",
        name: "Guest",
        cart: null
    },
    {
        username: "admin1",
        password: "12345",
        name: "คุณเค",
        cart: cart[0]
    },
    {
        username: "admin2",
        password: "12345",
        name: "คุณพี",
        cart: cart[1]
    }
]

export default users