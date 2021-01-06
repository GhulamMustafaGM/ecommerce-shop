import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/admins/';
const token = { Authorization:`bearer ${localStorage.addminsToken}` }

export const AddCategories = async ( formData) => {
    return await axios.post(
        url + "add/category" , formData, 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err.response);
        throw err
    });
};

export const GetCategories = async ( ) => {
    return await axios.get(
        url + "get/category" ,  
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err.response);
        throw err
    });
};

export const editCategories = async (id) => {
    return await axios.get(
        url + "edit/category/" +id ,  
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err.response);
        throw err
    });
};

export const updateCategories = async (id, formData ) => {
    return await axios.post(
        url + "update/category/" +id, formData,  
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err.response);
        throw err
    });
};


export const updatePhoto = async (id, formData ) => {
    return await axios.post(
        url + "update/photo/" +id, formData,  
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err.response);
        throw err
    });
};

export const deleteCategories = async ( ) => {
    return await axios.delete(
        url + "delete/category" +id,   
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err.response);
        throw err
    });
};

export const handlePage = async (pageNumber) => {
    return await axios.get(
        url + "get/category?page=" +pageNumber , 
        {
            headers: token
        }
    ).then(res=>{
        return res;
    }).catch(err=> {
        console.log(err);
    });
};
