import axios from "axios"


export const loadData = () => {
    return async function (dispatch) {
      const response = await axios.get(' https://shy-erin-panther-tux.cyclic.app');
      dispatch({
        type: 'LOAD_DATA',
        payload: response.data,
      });
    };
  };
  export const loadArt = () => {
    return async function (dispatch) {
      const response = await axios.get(' https://shy-erin-panther-tux.cyclic.app/art');
      dispatch({
        type: 'LOAD_ARTICLES',
        payload: response.data,
      });
    };
  };
  export const loadTexts = () =>{
    return async function (dispatch){
      const response = await axios.get('https://shy-erin-panther-tux.cyclic.app/texts');
      dispatch({
        type: 'LOAD_TEXTS',
        payload: response.data
      })
    }
  }
  export const loadCatalog = () =>{
    return async function(dispatch){
      const response = await axios.get('https://shy-erin-panther-tux.cyclic.app/catalog');
      dispatch({
        type: 'LOAD_CATALOG',
        payload: response.data
    })
  }}
 export const loadNotes = () => {
  return async function(dispatch){
    const response = await axios.get('https://shy-erin-panther-tux.cyclic.app/notes');
    dispatch({
      type: 'LOAD_NOTES',
      payload: response.data
  })
 }}
  export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    payload: language
  });