'use strict'

let gElLinksSection

function initLinks() {
    const links = getLinks()
    links.then(renderLinks)


}

function renderLinks(links) {
    console.log(`links:`, links)
    gElLinksSection = document.querySelector('.links-section')
    let strHTML = ''
    links.forEach(link => {
        strHTML += `<a class="link" href="${link.href}">${link.text}</a>`
    })
    gElLinksSection.innerHTML = `<div class="links">${strHTML}</div>`
}