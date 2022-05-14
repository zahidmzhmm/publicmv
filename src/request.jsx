import axios from "axios";
import {apiUri} from "./config";


const headers = (token = null) => {
    let headers = {
        'Accept': 'application/json'
    }
    if (token !== null) {
        headers = {
            'Authorization': "Bearer " + token
        }
    }
    return headers;
};

export const ReqCRUD = async (page, method = "get", token = null, formData = null, apiUrl = apiUri) => {
    let headers2 = headers(token);
    let fData = "";
    if (formData !== null) {
        fData = formData;
    }
    return await axios({
        headers: headers2,
        url: apiUrl + page,
        method: method,
        data: fData
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return JSON.parse(JSON.stringify(error));
    });
}

export const blobFD = async (token, page, name) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/pdf");
    myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    fetch(apiUri + page, requestOptions)
        .then(response => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                name,
            );
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }).catch(error => console.log('error', error));
}