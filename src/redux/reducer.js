const initState = {
  nameList: [
    {
      id: "1",
      name:'ha mi'
    },
  ],
};
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "addName": {
            return{
                ...state,
                nameList:[...state.nameList, action.payload]
            }
        }
        case"delName":{
            const del = state.nameList.filter((item) => item.id !== action.payload.id)
            return{
                ...state,
                nameList:del
            }
        }
        case "updateName": {
            return{
                ...state,
                nameList:action.payload
            }
        }
        default:{
            return state
        }
    }
};
export default rootReducer;
