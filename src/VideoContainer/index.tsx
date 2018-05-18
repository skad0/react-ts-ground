import * as React from 'react';
import ReactPlayer from 'react-player'

import {IVideo} from '../types';

import './VideoContainer.css';

interface IProps {
    video: IVideo;
    onEnded?: () => void
};

class VideoContainer extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const {video, onEnded} = this.props;

        return (
            <div className="VideoContainer">
                <ReactPlayer
                    url={video.url}
                    controls={true}
                    playing={true}
                    onEnded={onEnded} />
            </div>
        );
    }
}

export default VideoContainer;
