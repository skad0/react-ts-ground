import * as React from 'react';
import * as renderer from 'react-test-renderer';

import VideoContainer from './index';

import {IVideo} from '../types';

const video: IVideo = {
    id: 1,
    url: 'https://www.youtube.com/watch?v=OkwplGEUhkM'
};

describe('VideoContainer', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<VideoContainer video={video} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

