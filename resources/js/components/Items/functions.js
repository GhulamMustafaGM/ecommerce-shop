import axios from 'axios'

const url='http://127.0.0.1:8000/api/admins/';

export const additems = async (admins_id, formData) => {
    return await axios.post(
        url + "add/items" + admins_id, formData, {
            email: adminsData.email,
            password: adminsData.password
        },
        {
            headers: {
                Authorization:`bearer ${localStorage.addminsToken}`
            }
        }
    ).then(res=>{
        localStorage.setItem('adminsToken', res.data.token);
        return res.data.token
    }).catch(err=> {
        console.log(err);
    });
};
