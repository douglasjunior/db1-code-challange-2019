import React, { Component } from 'react';

import { Table } from 'reactstrap';

export default class TaskList extends Component {

    renderTaskItem = (task, index) => {
        const { onTaskClick } = this.props;
        return (
            <tr
                style={{ cursor: 'pointer' }}
                key={task.id}
                onClick={() => onTaskClick(task)}
            >
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed ? 'Sim' : 'Não'}</td>
                <td>{task.userId}</td>
            </tr>
        );
    }

    render() {
        const { tasks } = this.props;
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Concluída</th>
                        <th>Usuário Id</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(this.renderTaskItem)}
                </tbody>
            </Table>
        );
    }
}
