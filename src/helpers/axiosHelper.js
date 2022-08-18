import axios from "axios"

const rootUrl= process.env.REACT_APP_API_ENDPOINT
const adminUserEP= rootUrl + "/admin-user";
const categoryEP= rootUrl + "/category";



const apiProcesser =  async({method, url, data}) =>{
    try{
        const response = await axios({
            method,
            url,
            data,
        })
        return response.data;
    } catch(error){
           return{
            status: 'error' ,
             message: error.message
           }
    }
}

// post new admin user
export const postUser = (data) =>{
    const option = {
        method:"post",
        url:adminUserEP,
        data,
    }
    return apiProcesser(option)
}

// vertify admin user account
export const emailVerifyAdminUser = (data) =>{
    const option = {
        method:"patch",
        url:adminUserEP + "/verify-email",
        data,
    }
    return apiProcesser(option)
}



// login admin user
export const loginAdminUser = (data) =>{
    const option = {
        method:"post",
        url:adminUserEP + "/login",
        data,
    }
    return apiProcesser(option)
}


// ======================= category api calls
export const fetchCategory = (_id) =>{
    const option = {
        method:"get",
        url: _id ? categoryEP + "/" + _id : categoryEP,       
    }
    return apiProcesser(option)
}



// post new category added
export const postCategory = (data) =>{
    const option = {
        method:"post",
        url: categoryEP, 
        data      
    }
    return apiProcesser(option)
}