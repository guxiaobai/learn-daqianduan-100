// ----- index.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore()

<Provider store = { store }>
  <App />
</Provider>


// ----- App.js
// console.dir(this.props)
this.props.store.getState()
this.props.dispatch

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
