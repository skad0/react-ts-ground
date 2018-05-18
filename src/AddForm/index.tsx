import * as React from 'react';

import {usedRegExp} from '../helpers';

import './AddForm.css';

interface IProps {
    handleAdd: (value: string) => void;
};

class AddForm extends React.Component<IProps> {
    private input: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);

        this.input = React.createRef();

        this.onAdd = this.onAdd.bind(this);
    }

    public render() {
        return (
            <div className="AddForm">
                <form onSubmit={this.onAdd} className="AddForm-Form">
                    <input type="text"
                        className="AddForm-Input"
                        ref={this.input}
                        placeholder="Enter Youtube's url" />
                    <button className="AddForm-Button">+</button>
                </form>
            </div>
        );
    }

    private onAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const input: HTMLInputElement|null = this.input.current;

        if (!input) {
            return;
        }

        const value: string = input.value.trim();

        if (!validateInput(value)) {
            return;
        }

        input.value = '';

        this.props.handleAdd(value);

        function validateInput(url: string):boolean {
            const matchRegexp: RegExp = usedRegExp.YOUTUBE_VIDEO_URL;

            return matchRegexp.test(url);
        }
    }
}

export default AddForm;
