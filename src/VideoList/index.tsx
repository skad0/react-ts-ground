import * as React from 'react';

import {HTMLUListEvent, IVideo} from '../types';

import './VideoList.css';

interface IProps {
    list: IVideo[];
    handleChoose?: (video: IVideo) => void;
    handleRemove?: (video: IVideo) => void;
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
        const {handleRemove} = this.props;

        return list.map((video, index) => {
            return <li key={index}
                    onClick={this.onVideoClick.bind(this, video)}
                    className={`VideoList-Item ${video.current ? 'VideoList-Item_current' : ''}`}>
                {handleRemove && <button className="VideoList-RemoveItem">X</button>}
                {video.url}
            </li>;
        });
    }

    private onVideoClick(video: IVideo, e: HTMLUListEvent):void {
        const {handleChoose, handleRemove} = this.props;
        const target: HTMLUListElement|null = e.target;

        if (!target) {
            return;
        }

        if (target.classList.contains('VideoList-RemoveItem') && handleRemove) {
            handleRemove(video);
        } else if (handleChoose) {
            handleChoose(video);
        }
    }
}

export default VideoList;
