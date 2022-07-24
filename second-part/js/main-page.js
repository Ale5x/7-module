import {scrollToTop} from "./functions.js";
import {getDao, getMapperDate} from './dao.js';
import {getCharStartParameter, getCharAnd, getBuilderUrlParameter, getRemoteHost, getApplicationName,
    getSectionCertificste, getPageConstant, getSizeConstant, getGetAllCertificates, getGetCertificatesByName,
    getGetCertificatesByTag, getNameConstant, getParameter} from './url.js';

const container = document.querySelector('.list-certificates');
const nextPage = document.getElementById('next-page');
let scrollPositionY;
let page = 1;
let form = document.getElementById('form');
let tagName = document.getElementById('tag-name');
let certificateName = document.getElementById('certificate-name');


function getUrlFromLink(parameter, urlLine) {
    let url = new URL(urlLine);
    let urlPageParams = new URLSearchParams(url.search);

    return getParameter(parameter, urlPageParams);
}

function loadItems(certificates) {
    let countCertificates = 9;
    let i = 0;

    let numberNextPage = getUrlFromLink(getPageConstant, certificates._links.Next.href);
    let numberPreviousPage = getUrlFromLink(getPageConstant, certificates._links.Previous.href);

    if (certificates._embedded != null) {
        while (i < countCertificates) {
            const div = document.createElement('div')
            div.innerHTML = `
             <a href="description-certificate.html?id=${certificates._embedded.giftCertificateDtoList[i].giftCertificateDtoId}"><img src="../image/icon-certificate.png"></a>
             <h4>ID: ${certificates._embedded.giftCertificateDtoList[i].giftCertificateDtoId}</h4>
             <h2>${certificates._embedded.giftCertificateDtoList[i].name}</h2>
             <h1>${certificates._embedded.giftCertificateDtoList[i].price}$</h1>
        
             <input type="submit" value="Add to basket" class="button-add-to-basket">
          `
            container.appendChild(div);
            i++;
        }
    } else if (certificates._embedded != null && numberNextPage >= 3){
        nextPage.style.display = "none";
    } else if (certificates._embedded == null && numberNextPage == 2){
        const div = document.createElement('div')
        div.innerHTML = `<h1 class="align-text-center">Not found</h1>`;
        container.appendChild(div);
        nextPage.style.display = "none";
        page = 1;
        count++;
    }
}

init()

async function getData(url) {
    const data = await getDao(url, "GET");
    loadItems(data)
}

function initUrlCertificateByTag(name) {
    let countItemInPage = 9;

    let buildUrl = getRemoteHost + getSectionCertificste + getGetCertificatesByTag
        + getCharStartParameter + getBuilderUrlParameter(getPageConstant, page)
        + getCharAnd + getBuilderUrlParameter(getSizeConstant, countItemInPage)
        + getCharAnd + getBuilderUrlParameter(getNameConstant, name);


    getData(buildUrl);
}

function initUrlCertificateByName(name) {
    let countItemInPage = 9;

    let buildUrl = getRemoteHost + getSectionCertificste + getGetCertificatesByName
        + getCharStartParameter + getBuilderUrlParameter(getPageConstant, page)
        + getCharAnd + getBuilderUrlParameter(getSizeConstant, countItemInPage)
        + getCharAnd + getBuilderUrlParameter(getNameConstant, name);
    getData(buildUrl);
}

function initUrlCertificates() {
    let countItemInPage = 9;

    // let buildUrl = "http://localhost:8080/store/user/get?page=2&size=10s
    let buildUrl = getRemoteHost + getSectionCertificste + getGetAllCertificates
        + getCharStartParameter + getBuilderUrlParameter(getPageConstant, page)
        + getCharAnd + getBuilderUrlParameter(getSizeConstant, countItemInPage);

    getData(buildUrl)
}

function init() {
    if (certificateName.value != null && certificateName.value !== "") {
        initUrlCertificateByName(certificateName.value)
    } else if (tagName.value != null && tagName.value !== "") {
        initUrlCertificateByTag(tagName.value)
    } else {
        initUrlCertificates();
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        page++;
        init()
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = "";
    page = 1;
    init();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = "";
    page = 1;
});

function scrollToTopF() {
    scrollPositionY = scrollToTop();
    console.log("PositionY", scrollPositionY)
}

function scrollToBackF() {
    window.scrollTo(0,scrollPositionY)
}

document.querySelector('#scrollToTop').addEventListener('click', scrollToTopF);
document.querySelector('#scrollBack').addEventListener('click', scrollToBackF);

window.addEventListener('scroll', checkHeight);

const goTopBtn = document.getElementById('scrollToTop');
const goDownBtn = document.getElementById('scrollBack');

function checkHeight() {
    if (window.scrollY < 200) {
        if (scrollPositionY > 200) {
            goDownBtn.style.display = "flex";
        }
        goTopBtn.style.display = "none";
    } else {
        goTopBtn.style.display = 'flex';
        goDownBtn.style.display = "none";
    }
}