import * as React from 'react';

import {IVideo} from '../types';

interface IProps {
    list: IVideo[];
    handleChoose: (video: IVideo) => void;
}

class VideoList extends React.Component<IProps> {
    public render() {
        const {list} = this.props;

        return (
            <div className="VideoList">
                {
                    list.length > 0 ?
                        <ul>
                            {list.map((video, index) => {
                                return <li key={index}
                                        onClick={this.onVideoClick.bind(this, video)}>
                                    {video.url}
                                </li>;
                            })}
                        </ul> :
                        'No videos provided yet'
                }
            </div>
        );
    }

    private onVideoClick(video: IVideo):void {
        this.props.handleChoose(video);
    }
}

export default VideoList;
