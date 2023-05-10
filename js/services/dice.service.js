'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDiceResult() {
    const prob = Math.random()
    const twoOrSix = prob > 0.5 ? 6 : 2
    return twoOrSix
}