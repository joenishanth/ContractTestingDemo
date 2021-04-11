import Axios from 'axios';
import { JSONPath } from "jsonpath-plus";

describe('Api Tests', () => {
    it('GET Api Test', async () => {
        const reponse = await Axios.get('https://www.swapi.tech/api/species/3', 
        // { headers: { 'Authorization': AUTH_TOKEN } }
        )
        console.log(reponse.data)

        const expData = await JSONPath({
            path: '$..name',
            json: reponse.data
        });

        console.log('expData :', expData)
    })
})