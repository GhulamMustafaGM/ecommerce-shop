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
        console.log(err);
    });
};

