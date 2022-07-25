const daoHelper = {
    getData: function (url, method) {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(method, url)

            xhr.responseType = 'json'
            xhr.setRequestHeader('Content-Type', 'application/json')

            xhr.onload = () => {
                if (xhr.status >= 400) {
                    console.log("status", xhr.status);
                    reject(xhr.response)
                } else {
                    resolve(xhr.response)
                }
            }

            xhr.onerror = () => {
                reject(xhr.response)
            }
            xhr.send();
        })
    }
}

export const getDao = daoHelper.getData;
