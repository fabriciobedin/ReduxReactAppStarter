import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBXNHjCiTlR6XGwrCBvkzxzMQSbjW-VC8g';
// const API_KEY = 'AIzaSyBIBsWyxLyqMiWO4nyVaAwrrqQNa_QXj3U';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // se o nome da chave for igual ao valor, pode deixar apenas o valor.
      // this.setState({ videos: videos });
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
