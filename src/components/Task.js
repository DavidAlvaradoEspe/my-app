import React from 'react';
import './Task.css'
class Task extends React.Component{
 
    render(){
        const {task} = this.props;
        return <div className="red">
            {task.title} -
            {task.description} -
            {task.done} - 
            {task.id}
            <input type="checkbox"/> 
                <button>
                x
                </button>
        </div>
    }
}
export default Task;