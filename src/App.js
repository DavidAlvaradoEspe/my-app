import React from 'react';
import './App.css';
import tasks from './Sample/tasks.json'
import Tasks from './components/Tasks'

class App extends React.Component{
    state ={
        tasks: tasks
    }
    render(){
        return <Tasks tasks={this.state.tasks}/>
    }
}
export default App;