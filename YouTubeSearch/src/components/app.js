import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';


const API_KEY = 'AIzaSyAij_oMiRTp9rA6KoqLtJ6Mfk1vrWEW2Nw';


const App = () => {
    return (
           <div>
            <SearchBar />
           </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'))

//export default class App extends Component {
//  render() {
//    return (
//      <div>Hello There!</div>
//    );
//  }
//}
