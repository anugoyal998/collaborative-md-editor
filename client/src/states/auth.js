import create from 'zustand'

const state = create((set)=> ({
    auth: {
        isAuth: false,
        user: null
    }
}))

export default state