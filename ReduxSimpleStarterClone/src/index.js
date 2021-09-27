import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//1. Create a new component. This component should produce some Html

const API_KEY = "AIzaSyCBIeAcETRmT-Gdk2O23mf7H_FwJCVVlEU";

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}
//2. Take this component's generated HTML and put it on the page in the DOM}
ReactDOM.render(<App />, document.querySelector('.container'))