import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, OPTIONS, POST, PUT';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = "X-Token";
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = "true";

const apiClient = axios.create({
    baseURL: "http://localhost:3004",
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getUser(userId){
        return apiClient.get(`/users/?uniqueId=${userId}`);
    },
    getProjects(userId){
        return apiClient.get(`/users/${userId}/projects`);
    },
    getTransmittalList(projectId){
        return apiClient.get(`/projects/${projectId}/transmittals`);
    },
    getTransmittalDetailsById(id){
        return apiClient.get(`/transmittals/${id}`);
    },
    getTransmittalDetailsByMagicLink(id){
        return apiClient.get(`/transmittals/${id}`);
    },
    getFileToDownload(url, fileName){
        return fetch(url, {
            mode: 'no-cors' 
            // mode: 'cors' //Production
        }).then((transfer) => {
            return transfer.blob();
        }).then((bytes) => {
            let elm = document.createElement('a');
            elm.href = URL.createObjectURL(bytes);
            elm.setAttribute('download', fileName);
            elm.click() 
            elm.remove();

            return true;
        }).catch((error) => {
            return error;
        })
    }
}