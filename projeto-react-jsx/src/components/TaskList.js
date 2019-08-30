import React, { Component } from 'react';

import { Table } from 'reactstrap';

import TaskItem from './TaskItem';


export default class TaskList extends Component {

    renderTaskItem = task => {
        const { onTaskClick, highlight } = this.props;
        return (
            <TaskItem
                key={task.id}
                task={task}
                highlight={highlight}
                onTaskClick={onTaskClick}
            />
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
