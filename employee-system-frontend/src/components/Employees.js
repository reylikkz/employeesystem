import React from 'react'
import { useNavigate } from 'react-router-dom';

// calling employees from parent (EmployeeList)
const Employees = ( {employees, deleteEmployee} ) => {

    const navigate = useNavigate();

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }

  return (
    <tr key={employees.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employees.firstName}</div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employees.lastName}</div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employees.email}</div>
    </td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
        <a 
        onClick={(e, id) => editEmployee(e, employees.id)}
        className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>    
        <a
        onClick={(e, id) => deleteEmployee(e, employees.id)}
        
        className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>    
    </td>
</tr>
  )
}

export default Employees