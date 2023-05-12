'use strict'

import {InfoCookies} from "./modules/InfoCookies.js";
const infoCookie = new InfoCookies

const closeLink = document.querySelector('.close a')
closeLink.addEventListener('click',(event)=>{
    event.preventDefault()
    infoCookie.setCookie()
})
// closeLink.addEventListener('click', (e) => {
//         e.preventDefault()
//         infoCookie.setCookie()
// })