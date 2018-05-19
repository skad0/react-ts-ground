import * as React from 'react';

import {IVideo} from '../types';

import './VideoList.css';

interface IProps {
    list: IVideo[];
    handleChoose?: (video: IVideo) => void;
}

class VideoList extends React.Component<IProps> {
    public render() {
        const {list} = this.props;

        return (
            <div className="VideoList">
                {
                    list.length > 0 ?
                        <ul className="VideoList-List">
                            {this.renderListOptions.call(this, list)}
                        </ul> :
                        'No videos provided yet'
                }
            </div>
        );
    }

    private renderListOptions(list: IVideo[]):JSX.Element[] {
        return list.map((video, index) => {
            return <li key={index}
                    onClick={this.onVideoClick.bind(this, video)}
                    className={`VideoList-Item ${video.current ? 'VideoList-Item_current' : ''}`}>
                {video.url}
            </li>;
        });
    }

    private onVideoClick(video: IVideo):void {
        const {handleChoose} = this.props;

        if (!handleChoose) {
            return;
        }

        handleChoose(video);
    }
}

export default VideoList;
