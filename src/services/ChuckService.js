import axios from 'axios'

export default class Chuck {
    constructor() {
        axios.defaults.baseURL ='http://localhost:?'
    }
}

export const chuckService = new Chuck()