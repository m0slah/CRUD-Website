import React from 'react'
import CreateForm from './CreateFrom';

function CreateItems(props) {

    const saveExpenseDataHandler = (entereddEmployeesData) => {
        const employeeData = {
          ...entereddEmployeesData,
          id: Math.random().toString(),
        };
        props.onAddItems(employeeData);
  };
  
  return (
    <div>
          <CreateForm onSaveItemsDataHandler={saveExpenseDataHandler}/> 
    </div>
  )
}

export default CreateItems