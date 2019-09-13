import {
    FETCH_SMURFS_DATA_START,
    FETCH_SMURFS_DATA_SUCCESS,
    FETCH_SMURFS_DATA_ERROR,
    POST_SMURFS_DATA_START,
    POST_SMURFS_DATA_SUCCESS,
    POST_SMURFS_DATA_ERROR,
    } from "../actions";
    
    const initialState = {
        smurfs : [],
        title : "HELLOO",
        isLoading: false,
        error: '',
        isPosting: false,
        };
    
    export const reducer = (state = initialState, action) => {
      console.log("ACTION", action.type);
      switch (action.type) {
        default:
          return state;
      }
    };
    
    