import * as React from 'react';
import './App.css';

import AddForm from './AddForm';
import VideoContainer from './VideoContainer';
import VideoList from './VideoList';

import {IApplicationState, IVideo} from './types';

class App extends React.Component<any> {
  public state: IApplicationState

  constructor(props: any) {
    super(props);

    this.state = {
      currentVideo: null,
      videoList: []
    };

    this.onVideoAdd = this.onVideoAdd.bind(this);
    this.onVideoChoosen = this.onVideoChoosen.bind(this);
  }

  public render() {
    const {videoList, currentVideo} = this.state;

    return (
      <div className="App">
        <div className="App-Sidebar">
          <AddForm handleAdd={this.onVideoAdd} />
          <VideoList list={videoList} handleChoose={this.onVideoChoosen} />
        </div>
        <div className="App-Content">
          <VideoContainer video={currentVideo}/>
        </div>
      </div>
    );
  }

  private onVideoChoosen(video: IVideo) {
    this.setState({
      currentVideo: video
    });
  }

  private onVideoAdd(value: string) {
    this.setState({
      videoList: [...this.state.videoList, {url: value}]
    });
  }
}

export default App;
