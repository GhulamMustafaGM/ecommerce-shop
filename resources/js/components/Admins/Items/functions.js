import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/admins/';
const token = { Authorization:`bearer ${localStorage.addminsToken}` }

export const additems = async (admins_id, formData) => {
    return await axios.post(
        url + "add/items" + admins_id, formData, 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};

export const getitems = async () => {
    return await axios.get(
        url + "get/items" , 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};

export const edititems = async (id) => {
    return await axios.get(
        url + "edit/items" + id, 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};

export const updateitems = async (id, formData) => {
    return await axios.delete(
        url + "update/items" + id, formData, 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};

export const deleteitems = async (id) => {
    return await axios.post(
        url + "delete/items" + id,  
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};

export const handlePage = async (pageNumber) => {
    return await axios.get(
        url + "get/items?page=" +pageNumber , 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};

