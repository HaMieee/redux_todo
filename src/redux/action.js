export const addName = (data) => {
    return{
        type:'addName',
        payload:data
    }
}
export const delName = (payload) => {
    return{
        type:"delName",
        payload,
    }
}
export const updateName = (payload) => {
    return{
        type:"updateName",
        payload,
    }
}