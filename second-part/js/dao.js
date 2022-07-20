const daoHelper = {
    getData: function (url) {

        // const url = "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9";

        const getResource = async (url) => {
            const response = await fetch(url)
            if (response.ok) {
                console.log("Status ok")
                return await response.json()
            } else {
                console.log("Status not ok")
            }
            console.log(response)
        }

        return getResource(url)
    },
    mapData: function (data) {
        return data._embedded;
    },

    testExport: function (message) {
        console.log("Message", message);
        return "Successful"
    }

}

export const getDao = daoHelper.getData;
export const getTestExport = daoHelper.testExport;
export const getMapperDate = daoHelper.mapData;



// export function getData(url) {
//
//     // const url = "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9";
//
//     const getResource = async (url) => {
//         const response = await fetch(url)
//         if (response.ok) {
//             console.log("Status ok")
//             return await response.json()
//         } else {
//             console.log("Status not ok")
//         }
//         console.log(response)
//     }
//
//     return getResource(url)
// }


// export function testExport(message) {
//     console.log("Message", message);
//     return "Successful"
// }

// export default testExport, getData;