// This function performs a cartesian product of any number of specified sets
// I suck at english 👀 so basically  give me this 
// cartesianProduct( [ ['W','D','L'], ['W','D','L'] ] ) 
// and I will give you this [ [ 'W', 'W' ], [ 'W', 'D' ], [ 'W', 'L' ], [ 'D', 'W' ], [ 'D', 'D' ], [ 'D', 'L' ], [ 'L', 'W' ], [ 'L', 'D' ], [ 'L', 'L' ] ]
function cartesianProduct(arr) {
    // allSlips just stored all generated outcome slips
    let allSlips = []

    // TheSecretN is just a placeholder for the number of games that will be played 
    let TheSecretN = arr.length - 1;


    function backTrack(arr, idx) {
        let numberOfOutcomes = arr[idx].length;
        for (let j = 0; j < numberOfOutcomes; j++) {
            let firstVal = arr.slice(0);
            firstVal[idx] = arr[idx][j];

            if (idx == TheSecretN) {
                allSlips.push(firstVal);
            } else {
                backTrack(firstVal, idx + 1);
            }
        }
    }

    backTrack(arr, 0);
    return allSlips;
}


// so this does basically the same thing as the function implemented above bute it is a bit more readable 😉
// To my code golfers 🏌️‍♀️ ⛳️ feat your eyes at functional goodeness 🤤
const cartesianProductGolf = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

// A example to run the codeGolf version
// cartesianProductGolf( [ ['W','D','L'], ['W','D','L'] ] ) .  -> [ [ 'W', 'W' ], [ 'W', 'D' ], [ 'W', 'L' ], [ 'D', 'W' ], [ 'D', 'D' ], [ 'D', 'L' ], [ 'L', 'W' ], [ 'L', 'D' ], [ 'L', 'L' ] ]



// This can be configured to be more generic
const baseArray = ['W', 'D', 'L'];


// Cartasian Product is quite computaitonal heavy so we cache it
let cache = {}

// A helper function to generate results for normal spotting events
function getAllOutcomeSlips(numberOfGames) {
    if (numberOfGames in cache) {
        return cache[numberOfGames];
    }

    let uniqueSets = []
    for (let i = 0; i < numberOfGames; i++) {
        uniqueSets.push(baseArray);
    }

    // MEMOIZATION at work 🤙 my humble reader
    let computed = cartesianProduct(uniqueSets);
    cache[numberOfGames] = computed

    return computed;
}