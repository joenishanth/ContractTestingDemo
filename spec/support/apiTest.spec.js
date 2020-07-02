var Axios = require('axios');
var { JSONPath } = require('jsonpath-plus')
require('jasmine');

describe('This is a POC for API Testiing Automation', () =>{
    it('This is GET Request', async () => {
        const reponse = await Axios.get('https://swapi.dev/api/species/5')
        console.log(reponse.data)

        const expData = await JSONPath({
            path: '$.films',
            json: reponse.data
        });

        console.log(expData)
        
        expect(expData[0][0]).toBe("http://swapi.dev/api/films/1/")
        expect(expData[0][1]).toBe("http://swapi.dev/api/films/3/")

    })
})