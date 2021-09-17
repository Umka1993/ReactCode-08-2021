const SEND_MESSAGE= 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name:'Dimych', img:'data:image/jpeg;base64,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'},
        {id: 2, name:'Andrey', img: 'https://sun9-4.userapi.com/impg/c858036/v858036575/237924/1tdNALQQ0Sc.jpg?size=1074x480&quality=96&sign=5e817ece1972e6730a4bc01f2b316edf&type=share'},
        {id: 3, name:'Sveta', img: 'https://sun1-84.userapi.com/s/v1/if1/KVh-ar91NhOi7L02157lLwCRxvF4Db3G5Jq_md5eZS3txkQoivO3w_FrKsVKs6u_gUE3bHBU.jpg?size=400x0&quality=96&crop=214,2,850,850&ava=1'},
    ],

    messages:[
        {id:1, message: 'Hi'},
        {id:2, message: 'Hi is you it'},
        {id:3, message: 'Yo'}
    ],


}

const dialogsReducer = (state = initialState, action) =>{
    // debugger;
    switch (action.type) {
        case SEND_MESSAGE: {
            // debugger
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages,{id: 6, message: body}]
            }
        }
        default:
            return state
    }




}



//создаем  экшен крейтер
export const sendMessageCreator = (newMessageBody) =>({type:  SEND_MESSAGE, newMessageBody})

export default dialogsReducer