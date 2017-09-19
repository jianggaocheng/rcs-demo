import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getRoomList = params => { return axios.get(`${base}/room/list`, { params: params }); };

export const getRoomListPage = params => { return axios.get(`${base}/room/listpage`, { params: params }); };

export const removeRoom = params => { return axios.get(`${base}/room/remove`, { params: params }); };

export const batchRemoveRoom = params => { return axios.get(`${base}/room/batchremove`, { params: params }); };

export const editRoom = params => { return axios.get(`${base}/room/edit`, { params: params }); };

export const addRoom = params => { return axios.get(`${base}/room/add`, { params: params }); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };