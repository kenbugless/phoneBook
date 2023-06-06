let initialState = {
   contactList : []
}



function reducer(state=initialState, action) {
    //action을 안쓰는 방법 : const {type,payload} =action이라고 적어준 후, action을 제거하면 된다.
    const {type,payload} =action
    switch(type) {
        case "ADD_CONTACT" :
           return { ...state,contactList:[...state.contactList,{name: payload.name, phoneNumber: payload.phoneNumber}]
        }
    default :
    return {...state} ; 
}
}

export default reducer;