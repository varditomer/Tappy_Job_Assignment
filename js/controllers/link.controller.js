'use strict'

let gElLinksSection

function initLinks() {
    const links = getLinks()
    links.then(renderLinks)
}

function renderLinks(links) {
    gElLinksSection = document.querySelector('.links-section')
    let strHTML = ''
    links.forEach(link => {
        strHTML += `<a class="link" style="color: ${link.color}" title="${link.text}" href="${link.href}">${link.text}</a>`
    })
    gElLinksSection.innerHTML = `<div class="links">${strHTML}</div>`
}