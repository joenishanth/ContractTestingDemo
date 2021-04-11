// var Axios = require('axios');
// var { JSONPath } = require('jsonpath-plus')
// require('jasmine');

// describe('This is a POC for API Testiing Automation', () => {
//     it('This is GET Request', async () => {
//         const reponse = await Axios.get('https://www.swapi.tech/api/species/3', { headers: { 'Authorization': AUTH_TOKEN } })
//         console.log(reponse.data)

//         const expData = await JSONPath({
//             path: '$..name',
//             json: reponse.data
//         });

//         console.log('expData :', expData)

//         // expect(expData[0][0]).toBe("http://www.swapi.tech/api/films/1/")
//         // expect(expData[0][1]).toBe("http://www.swapi.tech/api/films/3/")

//     })
// })