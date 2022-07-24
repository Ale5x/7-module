const daoHelper = {
    getData: function (url, method) {

        const getResource = async (url) => {
            const response = await fetch(url)
            if (response.ok) {
                console.log("Status ok")
                return await response.json()
            } else {
                console.log("Status not ok")
                console.log("response status - ", response.status)
                console.log("response status.toString() - ", response.status.toString())
            }
            console.log(response)
        }

        return getResource(url)

    },
    mapData: function (data) {
        return data._embedded;
    }
}

export const getDao = daoHelper.getData;
export const getMapperDate = daoHelper.mapData;
