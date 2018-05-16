import * as React from 'react';
import './App.css';

import AddForm from './AddForm';
import Player from './Player';
import VideoList from './VideoList';

import {IApplicationState} from './types';

class App extends React.Component {
  public state: IApplicationState

  constructor(props: any) {
    super(props);

    this.state = {
      currentVideo: {},
      videoList: []
    };

    this.onVideoAdd = this.onVideoAdd.bind(this);
    this.onVideoChoosen = this.onVideoChoosen.bind(this);
  }

  public render() {
    const {videoList} = this.state;

    return (
      <div className="App">
        <div className="App-Sidebar">
          <AddForm handleAdd={this.onVideoAdd} />
          <VideoList list={videoList} handleChoose={this.onVideoChoosen} />
        </div>
        <div className="App-Content">
          <Player/>
        </div>
      </div>
    );
  }

  private onVideoChoosen(url: string) {
    console.log(url);
  }

  private onVideoAdd(value: string) {
    this.setState({
      videoList: [...this.state.videoList, {url: value}]
    });
  }
}

export default App;
