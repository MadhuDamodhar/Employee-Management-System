import React, { useEffect, useState } from 'react';
import Service from './service/Emp.Service';
import { Link } from 'react-router-dom';
import './index.css'
function Home() {
  const [empList, setEmpList] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
   init()
  }, []); 
  const init=()=>{
    Service.getAllEmp()
    .then((res) => {
      console.log(res.data);
      setEmpList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const deleteEmp=(id)=>{
    Service.deleteEmpById(id).then((res)=>{
  setStatus("Deleted successfully!");
  init();
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='container'>
      <h1 className='text-center  mt-3'>Employees Details</h1>
      { status&&<p className='text-center text-danger'>{status}</p>}
      <table className='table table-hover mt-4'>
        <thead>
          <tr className='record'>
            <th className='heading' scope='col'>Name</th>
            <th className='heading' scope='col'>Address</th>
            <th className='heading' scope='col'>Email</th>
            <th className='heading' scope='col'>JobRole</th>
            <th className='heading' scope='col'>Salary</th>
            <th className='heading' scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody className='record'>
  {empList ? empList.map((employee) => (
    <tr key={employee.id}>
      <td className='data' data-label="Name">{employee.empName}</td>
      <td className='data' data-label="Address">{employee.address}</td>
      <td className='data' data-label="Email" style={{ wordWrap: 'break-word' }}>{employee.email}</td>
      <td className='data' data-label="JobRole">{employee.jobRole}</td>
      <td className='data' data-label="Salary">{employee.salary}</td>
      <td className='actionBtns' data-label="Actions">
        <Link className='btn btn-warning text-light' to={"/editEmp/"+employee.id}>Update</Link>
        <Link onClick={()=>{deleteEmp(employee.id)}} className='btn btn-danger ms-2' >Delete</Link>
      </td>
    </tr>
  )):<p>No Records</p>}
</tbody>

      </table>
    </div>
  );
}

export default Home;
