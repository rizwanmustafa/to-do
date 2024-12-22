import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { SxProps } from '@mui/material';

// TODO: https://mui.com/material-ui/react-list/#simple-list

// TODO: Use Material UI's list to display the tasks

export interface Task {
  title: string;
  completed: boolean;
};

export interface Props {
  tasks: Task[];
}

export const TaskList = (props: Props): JSX.Element => {
  const [tasks, setTasks] = useState(props.tasks);

  const handleCheckboxChange = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const completedStyle: React.CSSProperties = {
    color: 'green',
    textDecoration: 'line-through',
    transition: 'all 0.3s ease-in-out',
  };

  const checkboxStyle: SxProps= 
    {
      color: 'green',
      '&.Mui-checked': {
        color: 'green',
      },
    }  ;

  return (
    <>
      {tasks.map((task, index) => (
        <div key={index} style={{display: 'flex', alignItems: 'center'}}>
          <Checkbox
            checked={task.completed}
            onChange={() => handleCheckboxChange(index)}
            sx={checkboxStyle}
          />
          <p style={task.completed ? completedStyle : { transition: 'all 0.3s ease-in-out' }}>{task.title}</p>
        </div>
      ))}
    </>
  )
};

export default TaskList;