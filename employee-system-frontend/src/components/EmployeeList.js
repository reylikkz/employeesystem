import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';
import Employees from './Employees';

const EmployeeList = () => {

    // helps to route to another page
    const navigate = useNavigate();
    
    // check if the data is loaded or not
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchAPI = async() => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log(error)
            }
            // once everything is completed we set the loading to false because we have loaded the data
            setLoading(false);
        };
        fetchAPI();
    }, []);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
            // checking if the employee is there
            if(employees) {
                setEmployees((prevElement) => {
                    // filtering out the elements which have been deleted
                    return prevElement.filter((employees) => employees.id !== id)
                })
            }
        })
    };
    

  return (
    <div className='container mx-auto my-8'>
     <div className='h-12'>
        <button
        onClick={() => navigate("/addEmployee")} 
        className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add Employee</button>
     </div>
     <div className='shadow border-b'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th 
                    className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'
                    >First Name</th> 
                    <th
                    className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'
                    >Last Name</th> 
                    <th
                    className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'
                    >Email</th> 
                    <th
                    className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'
                    >Actions</th> 
                </tr>
            </thead>
            {/* if not loading the entire table body is true and loading should be completed to display */}
            {!loading && (
            <tbody className='bg-white'>
                {/* map all the employees and get the employee object to dynamically get each piece of data */}
                {employees.map((employees) => (
               <Employees 
               employees={employees} 
               deleteEmployee={deleteEmployee}
               key={employees.id} />
                ))}
            </tbody>
            )}
        </table>
     </div>
    </div>
  )
}

export default EmployeeList