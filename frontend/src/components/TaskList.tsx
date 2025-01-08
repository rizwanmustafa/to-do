import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { SxProps } from '@mui/material';

// TODO: https://mui.com/material-ui/react-list/#simple-list

// TODO: Use Material UI's list to display the tasks

export interface Props {
  tasks: MyTypes.Task[];
  setTask: (index: number, newTask: MyTypes.Task) => void;
}

const completedStyle: React.CSSProperties = {
  color: 'green',
  textDecoration: 'line-through',
  transition: 'all 0.3s ease-in-out',
};

const checkboxStyle: SxProps = {
  color: 'green',
  '&.Mui-checked': {
    color: 'green',
  },
};

export const TaskList = (props: Props): JSX.Element => {
  const { tasks, setTask } = props;

  const handleCheckboxChange = (index: number) => {
    const newTask = { ...tasks[index], completed: !tasks[index].completed };
    setTask(index, newTask);
  };

  return (
    <>
      {tasks.map((task, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            checked={task.completed}
            onChange={() => handleCheckboxChange(index)}
            sx={checkboxStyle}
          />
          <p style={task.completed ? completedStyle : { transition: 'all 0.3s ease-in-out' }}>{task.description}</p>
        </div>
      ))}
    </>
  );
};

export default TaskList;