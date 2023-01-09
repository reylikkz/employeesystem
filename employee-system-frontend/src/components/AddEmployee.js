import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    }); 

    // helps to navigate from a route to another one
    const navigate = useNavigate();

    // function to handle input change
    // e = event
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({... employee, [e.target.name] : value})
    }

    const saveEmployee = (e) => {
        // prevent the refresh after saving
        e.preventDefault();
        // saving the employee in the database
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response)
        // going to the list after saving the data
            navigate("/employeeList");
        })
        .catch((error) => {
            console.log(error);

            // error.response.status to identify each error
            if(error.response.data.firstName) {
            toast.error('First name should not be blank!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored",
                });
            }
            
            if(error.response.data.lastName) {
            toast.error('Last name should not be blank!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored",
                });
            }

            if(error.response.data.email === "must be a well-formed email address") {
            toast.error('Email is not well-formed!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored",
                });
            }

            if(error.response.data.email === "Email should not be blank!") {
            toast.error('Email should not be blank!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored",
                });
            }

            if(error.response.data.Cause) {
            toast.error('Email already in use!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored",
                });
            }
        })
    }

    // clear button function
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        });
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input 
                type="text" 
                name='firstName' 
                value={employee.firstName} 
                onChange={(e) => handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input 
                type="text" 
                name='lastName' 
                value={employee.lastName}
                onChange={(e) => handleChange(e)} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input 
                type="email" 
                name='email' 
                value={employee.email} 
                onChange={(e) => handleChange(e)}
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button
                // onclick function to save all the values handled through handleChange function
                onClick={saveEmployee} 
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                    Save
                </button>
                <button 
                onClick={reset}
                className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                    Clear
                </button>     
                <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />
            </div>
        </div>
    </div>
  )
}

export default AddEmployee