import React from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task( 'Ejemplo', 'Descripción por defecto', false, Levels.normal )

    return (
        <div>
            <div>
                Tus tareas:
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista de tareas */}
            <TaskComponent task={ defaultTask } ></TaskComponent>
        </div>
    );

};


export default TaskListComponent;
