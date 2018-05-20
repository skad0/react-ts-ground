import * as enzyme from 'enzyme';
import * as React from 'react';

import AddForm from './index';

describe('AddForm', () => {
    it('should not call handle add if empty input', () => {
        const handleAdd = jest.fn();
        const wrapper = enzyme.shallow(<AddForm handleAdd={handleAdd} />);

        wrapper.find('.AddForm-Button').simulate('click');

        expect(handleAdd).not.toBeCalled();
    });

    it('should not call handle add if invalid input', () => {
        const handleAdd = jest.fn();
        const wrapper = enzyme.shallow(<AddForm handleAdd={handleAdd} />);

        wrapper.find('.AddForm-Input').simulate('change', {
            target: {value: 'https://google.com/'}
        });
        wrapper.find('.AddForm-Button').simulate('click');

        expect(handleAdd).not.toBeCalled();
    });

    it('should call handle add if validated input', () => {
        const handleAdd = jest.fn();
        const wrapper = enzyme.shallow(<AddForm handleAdd={handleAdd} />);

        wrapper.find('.AddForm-Input').simulate('change', {
            target: {value: 'https://www.youtube.com/watch?v=OkwplGEUhkM'}
        });
        wrapper.find('.AddForm-Button').simulate('click');

        expect(handleAdd).not.toBeCalled();
    });
});
