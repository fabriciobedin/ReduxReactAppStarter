import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBXNHjCiTlR6XGwrCBvkzxzMQSbjW-VC8g';
// const API_KEY = 'AIzaSyBIBsWyxLyqMiWO4nyVaAwrrqQNa_QXj3U';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // se o nome da chave for igual ao valor, pode deixar apenas o valor.
      // this.setState({ videos: videos });
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={ selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos
          }/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
