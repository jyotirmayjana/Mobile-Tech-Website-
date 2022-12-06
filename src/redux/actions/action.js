export const ADD =(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }

}

export const DEL =(product)=>{
    return{
       type:"DELITEM" ,
       payload:product
    }
}