export const allProducts=(state={},action)=>{
    switch (action.type) {
        case 'REQUEST_ALL_PRODUCTS':
            return{...state,loading:true}
        
        case 'GET_ALL_PROCUCTS':
            return{...state,loading:false,products:action.payload}

        case 'GET_ALL_FAILED':
            return{...state,loading:false,error:action.payload}
    
        default:
            return state;
    }

}