import { default_API_url } from '../config/index';

//Get Data From API With out token
function* GetDataFromAPI_WithOutToken(url, GetParams) {
    const response = yield fetch(default_API_url + url + '?' + GetParams, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Post Data To API With out token
function* PostDataToAPI_WithOutToken(url, PostParams) {
    const response = yield fetch(default_API_url + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(PostParams)
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Put Data To API With out token
function* PutDataToAPI_WithOutToken(url, PostParams) {
    const response = yield fetch(default_API_url + url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(PostParams)
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Delete Data To API With out token
function* DeleteDataToAPI_WithOutToken(url, PostParams) {
    const response = yield fetch(default_API_url + url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(PostParams)
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Get Data From API With token
function* GetDataFromAPI_WithToken(url, token, GetParams) {
    const response = yield fetch(default_API_url + url + '?' + GetParams, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Post Data To API With out token
function* PostDataToAPI_WithToken(url, token, PostParams) {
    const response = yield fetch(default_API_url + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(PostParams)
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Put Data To API With out token
function* PutDataToAPI_WithToken(url, token, PostParams) {
    const response = yield fetch(default_API_url + url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(PostParams)
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

//Delete Data To API With out token
function* DeleteDataToAPI_WithToken(url, token, PostParams) {
    const response = yield fetch(default_API_url + url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(PostParams)
    });

    const responseJson = yield response.status ? JSON.parse(response._bodyInit) : {};
    return responseJson;
}

export const HttpAPI = {
    GetDataFromAPI_WithOutToken,
    GetDataFromAPI_WithToken,
    PostDataToAPI_WithOutToken,
    PostDataToAPI_WithToken,
    PutDataToAPI_WithOutToken,
    PutDataToAPI_WithToken,
    DeleteDataToAPI_WithOutToken,
    DeleteDataToAPI_WithToken
}