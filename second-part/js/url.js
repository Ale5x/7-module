const urlHelper = {
    buildUrlParameter: function (parameter, value) {
        return parameter + '=' + value;
    },
    getParameter: function (parameter, urlLine) {
        let url = new URLSearchParams(urlLine)
        return url.get(parameter);
    }
};
const charAnd = '&';
const charStartParameters = '?';
const remoteHost = "http://localhost:8080/";
const applicationName = "store/";



export const getBuilderUrlParameter = urlHelper.buildUrlParameter;
export const getParameter = urlHelper.getParameter;

export const getCharAnd = charAnd;
export const getCharStartParameter = charStartParameters;
export const getRemoteHost = remoteHost;
export const getApplicationName = applicationName;

