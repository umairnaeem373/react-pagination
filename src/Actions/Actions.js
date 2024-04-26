import axios from "axios";

export const getAllProducts=()=> async dispatch=>{
    try {
        dispatch({type:'REQUEST_ALL_PRODUCTS'})

        let {data} = await axios.get('https://fakestoreapi.com/products')
        dispatch({type:'GET_ALL_PROCUCTS', payload:data})
    
    } catch (error) {
        dispatch({type:'GET_ALL_FAILED' , payload:error.message})
    }

}