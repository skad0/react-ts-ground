import * as React from 'react';
import * as YouTube from 'react-youtube';

import {usedRegExp} from '../helpers';
import {IVideo} from '../types';

interface IProps {
    video: IVideo|null;
};

class VideoContainer extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const {video} = this.props;

        if (!video) {
            return null;
        }

        const videoId: string|null = this.getVideoId(video);

        if (!videoId) {
            return null;
        }

        const opts = {
            height: '390',
            playerVars: {
                autoplay: 1
            },
            width: '640'
        };

        return (
            <div className="VideoContainer">
                <YouTube videoId={videoId} opts={opts} />
            </div>
        );
    }

    private getVideoId(video: IVideo):string|null {
        const matchRegexp: RegExp = usedRegExp.YOUTUBE_VIDEO_ID;
        const result: RegExpExecArray|null = matchRegexp.exec(video.url);

        return (result && result[1]) ? result[1] : null;
    }
}

export default VideoContainer;
