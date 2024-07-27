import axios from "axios";
export const GETDATA = 'GETDATA';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// export const getdata = () => {
//     return {
//         type: GETDATA
//     }
// }
// export const success = (data) => {
//     return {
//         type: SUCCESS,
//         payload: data
//     }
// }
// export const failure = (error) => {
//     return {
//         type: FAILURE,
//         payload: error
//     }
// }


export const fetchData=()=>{
    return async(dispatch,getState)=>{
         dispatch(fetchData())
         try {
            const res = await axios.get("https://fakestoreapi.com/products")
            dispatch({ type: SUCCESS, payload: res.data });
         } catch (error) {
            console.log(error);
            dispatch({ type: FAILURE, payload: error.message });
         }
    }
}