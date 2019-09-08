import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Spinner, Form, Row, Col,
} from 'reactstrap';

import TaskList from '../components/TaskList';
import Input from '../components/Input';
import { validateTaskSearch } from '../utils/validations';
import { requestTasksThunk } from '../thunk/tasks';

class Tasks extends Component {

    state = {
        filteredTasks: [],
        searchValue: '',
    }

    componentDidMount() {
        const { requestTasks } = this.props;
        requestTasks();
    }

    componentDidUpdate(prevProps, prevState) {
        const { tasks } = this.props;
        if (prevProps.tasks.data !== tasks.data) {
            this.updateFilteredTasks();
        }
    }

    onTaskClick = task => {
        this.props.history.push(`/tarefas/${task.id}`)
    }

    updateFilteredTasks = () => {
        const { tasks } = this.props;
        const { searchValue } = this.state;

        const filteredTasks = tasks.data.filter(task => {
            return task.title.includes(searchValue);
        });

        this.setState({
            filteredTasks,
        });
    }

    onSearchChange = (event, valid) => {
        if (!valid) return

        const { value } = event.target;

        this.setState({
            searchValue: value,
        }, () => {
            this.updateFilteredTasks();
        });
    }

    renderTasks = () => {
        const { filteredTasks, searchValue } = this.state;
        const { tasks } = this.props;
        if (tasks.fetching) {
            return (
                <div>
                    <Spinner color="primary" />  <Spinner color="secondary" />
                    <Spinner color="success" /><Spinner color="danger" />
                    <Spinner color="warning" /><Spinner color="info" />
                    <Spinner color="light" />   <Spinner color="dark" />
                </div>
            )
        }
        return (
            <TaskList
                tasks={filteredTasks}
                onTaskClick={this.onTaskClick}
                highlight={searchValue}
            />
        )
    }

    renderTaskDatail = (routeProps) => {
        const { taskId } = routeProps.match.params;
        const { tasks } = this.props;
        const task = tasks.data.find(item => item.id === parseInt(taskId))
        if (!task) {
            return null;
        }
        return (
            <div>
                <div>Id: {task.id}</div>
                <div>Título: {task.title}</div>
                <div>Concluída: {task.completed ? 'Sim' : 'Não'}</div>
                <div>Usuário Id: {task.userId}</div>
            </div>
        );
    }

    // nested routes
    renderTaskRoute = () => (
        <Route
            path="/tarefas/:taskId"
            render={this.renderTaskDatail}
        />
    )

    renderFilter = () => {
        return (
            <Form>
                <Row form>
                    <Col md={6}>
                        <Input
                            id="todo-search"
                            label="Filtro"
                            type="text"
                            placeholder="Buscar tarefas"
                            onChange={this.onSearchChange}
                            validate={validateTaskSearch}
                        />
                    </Col>
                </Row>
            </Form>
        )
    }

    render() {
        return (
            <div>
                <h1>Página de Tarefas</h1>
                {this.renderFilter()}

                {this.renderTasks()}

                {this.renderTaskRoute()}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    tasks: state.tasks,
});
const mapDispatchToProps = {
    requestTasks: requestTasksThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
