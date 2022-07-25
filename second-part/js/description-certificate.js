import {getCharStartParameter, getBuilderUrlParameter, getRemoteHost, getApplicationName,
    getSectionCertificste, getIdConstant, getParameter, getGetCertificate} from "./url.js";
import {getDao} from './dao.js';

let id = 1;
const idConstant = "id";
const container = document.querySelector('.certificate-description-form');

init()

function init() {
    let url = new URLSearchParams(window.location.search);
    id = getParameter(getIdConstant, window.location.search);
    getCertificate(buildUrl(id));
}

async function getCertificate(urlLine) {
    const data = await getDao(urlLine, 'GET');
    loadItem(data);
}

function buildUrl(id) {
    return  getRemoteHost + getSectionCertificste + getGetCertificate + getCharStartParameter + getBuilderUrlParameter(idConstant, id);
}

function loadItem(certificate) {
    if (certificate !== null){
        const div = document.createElement('div')
        div.innerHTML = `
             <img src="../image/icon-certificate.png">
             <br>
             <b>ID:</b> ${certificate.giftCertificateDtoId}
             <br>
             <b>Name:</b> ${certificate.name}
             <br>
             <b>Create date:</b> ${certificate.createDate}
             <br>
             <b>Duration:</b> ${certificate.duration} days
             <br>
             <b>Tags:</b> ${certificate.tags}
             <br>
             <p><b>Description:</b> ${certificate.description}</p>
             
             <input type="submit" value="Add to basket" class="button-add-to-basket">
          `
        container.appendChild(div);
    }
}


/**
 {
    "giftCertificateDtoId": 115,
    "name": "Women's massage studio WomanSPA Studio & Khinkalnya Titan",
    "description": "[6] and as though the inhabitants had been made prisoners by their own defenders, they were subjected",
    "price": 6.00,
    "duration": 206,
    "createDate": "2006-11-08T07:27",
    "lastUpdateDate": "2006-11-08T07:27",
    "tags": "#Tag 4, #Tag 5, #Tag 2, #Tag 3"
}
 */