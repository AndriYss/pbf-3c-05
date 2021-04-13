import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from "redux";
import aboutData from './database/dataAbout.json'



//Our reducer
let aboutReducer = function(state={
  data: aboutData
}, action) {

  switch(action.type) {
    
    default:
      return state;
  }
}


//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers ({
  about: aboutReducer,
});

//create the store
let store = createStore(rootReducer);
const Redux = props => {
    return (
      <Provider store={ store }>
          {props.children}
      </Provider>
    );
  };

export{
    Redux
}