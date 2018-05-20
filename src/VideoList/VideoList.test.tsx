import * as enzyme from 'enzyme';
import * as React from 'react';

import VideoList from './index';

const list = [
    {
        id: 1,
        url: 'https://www.youtube.com/watch?v=OkwplGEUhkM',
    },
    {
        id: 2,
        url: 'https://www.youtube.com/watch?v=fCoJvrv87Tw',
    }
];

describe('VideoList', () => {
    it('should call handleChoose on element', () => {
        const handleChoose = jest.fn();
        const wrapper = enzyme.mount(<VideoList list={list} handleChoose={handleChoose} />);
        const firstElement = wrapper.find('.VideoList-Item').first();

        firstElement.simulate('click');

        expect(handleChoose).toBeCalled();
    });

    it('should call handleRemove on element', () => {
        const handleRemove = jest.fn();
        const wrapper = enzyme.mount(<VideoList list={list} handleRemove={handleRemove} />);
        const firstElement = wrapper.find('.VideoList-RemoveItem').first();

        firstElement.simulate('click');

        expect(handleRemove).toBeCalled();
    });

    it('should call handleRemove if handleChoose provided', () => {
        const handleRemove = jest.fn();
        const handleChoose = jest.fn();
        const wrapper = enzyme.mount(
            <VideoList list={list} handleRemove={handleRemove} handleChoose={handleChoose} />
        );
        const firstElement = wrapper.find('.VideoList-RemoveItem').first();

        firstElement.simulate('click');

        expect(handleChoose).not.toBeCalled();
        expect(handleRemove).toBeCalled();
    });
});
