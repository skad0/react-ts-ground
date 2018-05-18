import * as React from 'react';
import * as renderer from 'react-test-renderer';

import VideoList from './index';

import {IVideo} from '../types';

const video: IVideo = {
    id: 1,
    url: 'https://www.youtube.com/watch?v=OkwplGEUhkM'
};

describe('VideoList', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<VideoList list={[video]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with active video', () => {
        const tree = renderer
            .create(<VideoList list={[Object.assign({current: true}, video)]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('render message if empty list provided', () => {
        const tree = renderer
            .create(<VideoList list={[]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

