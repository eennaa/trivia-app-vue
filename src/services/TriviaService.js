import axios from 'axios'

export default class Trivia {
    constructor() {
        axios.defaults.baseURL ='http://localhost:?'
    }
}

export const triviaService = new Trivia()