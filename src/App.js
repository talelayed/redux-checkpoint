import * as React from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import taskList from './components/taskList';

function App() {

  return (
    <div style={{margin:"auto",width:"30%",paddingTop:"50px"}}>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;