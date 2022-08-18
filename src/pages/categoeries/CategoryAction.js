import { toast } from "react-toastify"
import { fetchCategory, postCategory } from "../../helpers/axiosHelper"
import { setCategories } from "./categorySlice"


export const getCategoriesAction = () =>async(dispatch) =>{
    const {status,categories} = await fetchCategory()
    status = 'success' && dispatch(setCategories(categories))
}


export const postCategoriesAction = (data) =>async(dispatch) =>{

    const promisePending = postCategory(data);

    // if(name === "status"){
    //     value
    // }

    toast.promise(promisePending, { pending: "Please wait..."})
    const {status,message} = await promisePending
    toast[ status] (message)
    status = 'success' && dispatch(getCategoriesAction())
}
