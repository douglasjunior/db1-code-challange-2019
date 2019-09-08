import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';
import { Form as FinalForm } from 'react-final-form';
import {
    Form, Button,
    Spinner,
} from 'reactstrap';
import axios from 'axios';

import { addPostAction, clearPostsAction } from '../redux/posts'
import { validatePostDescription } from '../utils/validations';
import InputField from './InputField';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.inputDescription = createRef();
    }

    onSubmit = (values, form) => {
        return axios.get('https://viacep.com.br/ws/01001000/json/')
            .then(() => {
                const { addPost } = this.props;
                const { description } = values;
                addPost(description);
                this.inputDescription.current.focus();
                setTimeout(form.reset);
            });
    }

    onClearClick = () => {
        const { clearPosts } = this.props;
        clearPosts();
    }

    renderForm = (renderProps) => {
        const { handleSubmit, form } = renderProps;
        const { submitting, pristine } = form.getState();
        return (
            <Form onSubmit={handleSubmit} className="mb-3">
                <h1>Postagens</h1>

                <InputField
                    rows={3}
                    type="textarea"
                    name="description"
                    id="input-description"
                    label="Descrição"
                    innerRef={this.inputDescription}
                    validate={validatePostDescription}
                />

                <Button
                    color="primary"
                    disabled={submitting || pristine}
                    type="submit">
                    {submitting ? <Spinner size="sm" /> : null}
                    Postar
                </Button>
                {' '}
                <Button onClick={this.onClearClick} type="button">Limpar</Button>
            </Form>
        )
    }

    render() {
        return (
            <FinalForm
                onSubmit={this.onSubmit}
                render={this.renderForm}
            />
        );
    }

}

const mapDispatchToProps = {
    addPost: addPostAction,
    clearPosts: clearPostsAction,
};
// const mapDispatchToProps = dispatch => {
//     return {
//         addPost(description) {
//             dispatch({addPostAction(description)})
//         },
//     }
// };
export default connect(null, mapDispatchToProps)(PostForm);
