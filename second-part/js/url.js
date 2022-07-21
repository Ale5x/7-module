const urlHelper = {
    buildUrl: function (parameter, value) {
        return parameter + '=' + value;
    },
    getParameter: function (parameter, url) {
        return url.get(parameter);
    }
};
const charAnd = '&';
const charStartParameters = '?';
const remoteHost = "http://localhost:8080/";



export const getBuilderUrl = urlHelper.buildUrl;
export const getParameter = urlHelper.getParameter;

export const getCharAnd = charAnd;
export const getCharStartParameter = charStartParameters;
export const getRemoteHost = remoteHost;

