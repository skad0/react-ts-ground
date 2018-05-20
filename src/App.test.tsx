import * as enzyme from 'enzyme';
import * as React from 'react';

import App from './App';

describe('App', () => {
    it('renders message if no video', () => {
        const wrapper = enzyme.shallow(<App />);

        expect(wrapper.find('.App-Content').text()).toEqual('Please choose video from the list');
    });
});
