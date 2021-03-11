// ----- index.js
import { createStore } from 'redux'

const reduer = (state=0, action={}) => {
  switch(action.type){
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

// import { combineReducers } from 'redux';
// const rootReducer = combineReducers();
// export default rootReducer;
const store = createStore(reducer)

<App
  value={store.getState()}
  onInc={ ()=>store.dispatch({type: 'INC'}) }
  onDec={ ()=>store.dispatch({type: 'DEC'}) }
/>

store.subscribe();


// ----- App.js
this.props.value
this.props.onInc
this.props.onDec




