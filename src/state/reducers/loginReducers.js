const reducer = (name="Guest",action)=>{
    if(action.type === "userLogin"){
        return name = action.payload
    }
    
    else{
        return name
    }
}

export default reducer