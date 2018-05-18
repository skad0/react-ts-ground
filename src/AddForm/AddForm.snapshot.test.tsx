import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AddForm from './index';

// tslint:disable-next-line
function addHandler() {};

describe('AddForm', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<AddForm handleAdd={addHandler} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

