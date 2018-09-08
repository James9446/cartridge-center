const igdb = require('igdb-api-node').default;

const client = igdb('6cc4d326021a2f7daf51bb674cd1ec46');

let gameData = (func) => {
    client.games({
        fields: '*', // Return all fields
        limit: 5, // Limit to 5 results
        // offset: 15 // Index offset for results
    }).then(response => {
        func(response.body);
    }).catch(error => {
        throw error;
    });
};

module.exports.gameData = gameData;







// const client = igdb('6cc4d326021a2f7daf51bb674cd1ec46');
// const gameData = {
//     client: igdb('6cc4d326021a2f7daf51bb674cd1ec46'),
//     getGames: () => {
//         client.games({
//             fields: '*', // Return all fields
//             limit: 1, // Limit to 5 results
//             // offset: 15 // Index offset for results
//         }).then(response => {
//             // response.body contains the parsed JSON response to this query
//             let games = response.body.map(item => [
//                 item.name,
//                 item.cover.cloudinary_id
//             ])
//             console.log(names);
//             // console.log(response.body);
//         }).catch(error => {
//             throw error;
//         });
//     }
// }

// const client = igdb('6cc4d326021a2f7daf51bb674cd1ec46'),
//     log = response => {
//         console.log(response.url, JSON.stringify(response.body, null, 2));
//     };

// client.games({
//     fields: '*', // Return all fields
//     limit: 1, // Limit to 5 results
//     // offset: 15 // Index offset for results
// }).then(response => {
//     // response.body contains the parsed JSON response to this query
//     let games = response.body.map(item => [
//         item.name, 
//         item.cover.cloudinary_id
//     ])
//         // console.log(names);
//         // console.log(response.body);
// }).catch(error => {
//     throw error;
// });