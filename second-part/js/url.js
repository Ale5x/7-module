const urlHelper = {
    buildUrlParameter: function (parameter, value) {
        return parameter + '=' + value;
    },
    getParameterFromUrl: function (parameter, urlLine) {
        let url = new URLSearchParams(urlLine)
        return url.get(parameter);
    }
};
const charAnd = '&';
const charStartParameters = '?';
const remoteHost = "http://localhost:8080/";
const applicationName = "store/";
const sectionCertificate = "certificate/";
const pageConstant = "page";
const idConstant = "id";
const sizeConstant = "size";
const nameConstant = "name";
const getAllCertificates = "getAllCertificates";
const getCertificatesByName = "getCertificatesByPartName";

const getCertificate = "get";



export const getBuilderUrlParameter = urlHelper.buildUrlParameter;
export const getParameter = urlHelper.getParameterFromUrl;

export const getCharAnd = charAnd;
export const getCharStartParameter = charStartParameters;
export const getRemoteHost = remoteHost + applicationName;
export const getApplicationName = applicationName;
export const getSectionCertificate = sectionCertificate;
export const getNameConstant = nameConstant;
export const getPageConstant = pageConstant;
export const getSizeConstant = sizeConstant;
export const getIdConstant = idConstant;


export const getGetAllCertificates = getAllCertificates;
export const getGetCertificatesByName = getCertificatesByName;
export const getGetCertificate = getCertificate;

