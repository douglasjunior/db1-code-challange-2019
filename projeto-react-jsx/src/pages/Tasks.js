import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import TaskList from '../components/TaskList';

export default class Tasks extends Component {

    state = {
        tasks: [],
        fetching: false,
    }

    componentDidMount() {
        this.requestTasks();
    }

    requestTasks = () => {
        this.setState({ fetching: true });
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                // invocar quando a requisição terminar com status 2XX
                const { data } = response
                this.setState({
                    tasks: data
                })
            })
            .catch(error => {
                // invocar quando houver um erro 4XX, 5XX ou até mesmo falta de internet
                console.warn(error);
                if (error.response) {
                    // erro 4XX ou 5XX vindo do servidor
                    console.log('error status code', error.response.status)
                } else {
                    // provavelmente está sem internet
                    console.log('sem conexão')
                }
            })
            .finally(() => {
                this.setState({ fetching: false });
            });
    }

    onTaskClick = task => {
        this.props.history.push(`/tarefas/${task.id}`)
    }

    renderTasks = () => {
        const { fetching, tasks } = this.state;
        if (fetching) {
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
            <TaskList tasks={tasks} onTaskClick={this.onTaskClick} />
        )
    }

    renderTaskDatail = (routeProps) => {
        const { taskId } = routeProps.match.params;
        const task = this.state.tasks.find(item => item.id === parseInt(taskId))
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

    render() {
        return (
            <div>
                <h1>Página de Tarefas</h1>
                {this.renderTasks()}

                {this.renderTaskRoute()}
            </div>
        );
    }

}
