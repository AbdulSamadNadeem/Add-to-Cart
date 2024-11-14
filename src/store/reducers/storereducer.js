export const initialstate = []

export const productsReducer = (state=initialstate , {type,payload})=>{

    const currentState = Array.isArray(state) ? state : initialstate
    switch(type){
        case 'add':            
            return [...currentState,payload]
        case 'remove':
            return currentState.filter((item)=> item.id !== payload.id)
        default:
            return currentState       
    }
}