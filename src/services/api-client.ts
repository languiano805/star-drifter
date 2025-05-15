import axios from 'axios';


export default axios.create({
    baseURL:'https://api.nasa.gov',
    params: {
        api_key: 'L1psXPrFj0AEhBPPjCOnJxNZRHZhSudzVaBbwJuS',
    }
})




