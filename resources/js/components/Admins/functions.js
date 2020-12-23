import axios from 'axios'

const url='http://127.0.0.1:8000/api/';

export const login=(adminsData) => {
    return axios.post(
        url + "admins/login",
        {
            email: adminsData.email,
            password: adminsData.password
        },
        {
            headers: {
                "content-type": "application/json"
            }
        }
    ).then(res=>{
        localStorage.setItem('adminsToken', res.data.token);
        return res.data.token
    }).catch(err=> {
        console.log(err);
    });
};

