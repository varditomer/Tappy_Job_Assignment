'use strict'

function rollDice() {
    const elDiceImg = document.querySelector('.dice')
    let elRollingBtn = document.querySelector('.btn-txt')
    const rollingBtnDefaultTxt = elRollingBtn.innerText
    document.querySelector('.loader').classList.remove('hide')
    elRollingBtn.innerText = 'Rolling...'
    
    const rollInterval = setInterval(() => {
        elDiceImg.src = `./assets/imgs/dice_${getRandomIntInclusive(1, 6)}.jpeg`
        
    }, 150)
    setTimeout(() => {
        clearInterval(rollInterval)
        const twoOrSix = getRandomDiceResult()
        elDiceImg.src = `./assets/imgs/dice_${twoOrSix}.jpeg`
        elRollingBtn.innerText = rollingBtnDefaultTxt
        document.querySelector('.loader').classList.add('hide')
    }, 3000);

}