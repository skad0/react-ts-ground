import * as React from 'react';
import './App.css';

import AddForm from './AddForm';
import VideoContainer from './VideoContainer';
import VideoList from './VideoList';

import {IApplicationState, IVideo} from './types';

function setCurrent(list: IVideo[], id: number): IVideo[] {
  return list.map((video) => {
    return Object.assign({}, video, {current: video.id === id});
  });
}

function processRemoval(videoList: IVideo[], removedVideo: IVideo) {
  const newVideoList: IVideo[] = [];
  const listLength: number = videoList.length;

  let nextVideoIndex: number = 0;

  for (let i = 0; i < listLength; i++) {
    const video = videoList[i];
    const isForRemoval = video.id === removedVideo.id;

    if (video.current) {
      if (isForRemoval) {
        nextVideoIndex = (i + 1) === listLength ?
          0 :
          i + 1;
      } else {
        nextVideoIndex = i;
      }
    }

    if (!isForRemoval) {
      newVideoList.push(video);
    }
  }

  const nextVideo: IVideo|null = newVideoList.length ?
    videoList[nextVideoIndex] :
    null;

  return { nextVideo, videoList: newVideoList };
}

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
    this.onVideoEnded = this.onVideoEnded.bind(this);
    this.onVideoRemove = this.onVideoRemove.bind(this);
  }

  public render() {
    const {videoList, currentVideo} = this.state;

    return (
      <div className="App">
        <div className="App-Sidebar">
          <AddForm handleAdd={this.onVideoAdd} />
          <VideoList
            list={videoList}
            handleChoose={this.onVideoChoosen}
            handleRemove={this.onVideoRemove} />
        </div>
        <div className="App-Content">
          {currentVideo ?
            <VideoContainer video={currentVideo} onEnded={this.onVideoEnded} /> :
            'Please choose video from the list'}
        </div>
      </div>
    );
  }

  private onVideoChoosen(curVideo: IVideo) {
    this.setState({
      currentVideo: curVideo,
      videoList: setCurrent(this.state.videoList, curVideo.id)
    });
  }

  private onVideoRemove(video: IVideo) {
    const {videoList} = this.state;
    const {videoList: newVideoList, nextVideo} = processRemoval(videoList, video);

    this.setState({
      currentVideo: nextVideo,
      videoList: nextVideo ? setCurrent(newVideoList, nextVideo.id) : newVideoList
    });
  }

  private onVideoAdd(value: string) {
    const {videoList} = this.state;

    this.setState({
      videoList: [...videoList, {id: videoList.length + 1, url: value}]
    });
  }

  private onVideoEnded() {
    const {videoList, currentVideo} = this.state;

    if (!currentVideo) {
      return;
    }

    const {videoList: newVideoList, nextVideo} = processRemoval(videoList, currentVideo);

    this.setState({
      currentVideo: nextVideo,
      videoList: nextVideo ? setCurrent(newVideoList, nextVideo.id) : newVideoList,
    });
  }
}

export default App;
