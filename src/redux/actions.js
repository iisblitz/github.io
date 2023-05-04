import axios from "axios"


export const loadData = () => {
    return async function (dispatch) {
      const response = await axios.get('http://localhost:3001');
      dispatch({
        type: 'LOAD_DATA',
        payload: response.data,
      });
    };
  };


  export const loadArt = () => {
    return async function (dispatch) {
      const response = await axios.get('http://localhost:3001/art');
      dispatch({
        type: 'LOAD_ARTICLES',
        payload: response.data,
      });
    };
  };
