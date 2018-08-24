const Chuck  = require('chucknorris-io')
      

export default class ChuckService {
    constructor() {
        this.client = new Chuck();
    }

    getRandomJoke() {
        this.client.getRandomJoke('dev')
    }
}

export const chuckService = new ChuckService()