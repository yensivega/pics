import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Symbol from './Symbol';

class App extends React.Component {
    state = {images: [] };

    onSearchSubmit = async term => {
        
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        
        this.setState({ images : response.data.results });
    }

    render(){
        return(
            <div className = "ui container" style = {{ marginTop: '10px'}}>
                <SearchBar  onSubmit = {this.onSearchSubmit} />
                <Symbol />
                <ImageList images = { this.state.images}/>
            </div>
        );
    }
        
}

export default App;

//access key
// 0890a34f123e6ef6f70c1c87d0b9f4a043b4a33e0a63bb755e096f4a702af30f
//secret key
// dea22b6e3678813f7dbfc38606711021cb455c0dba7cfb41cdd66f0c63dc151c
