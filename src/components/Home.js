import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link,useNavigate } from 'react-router-dom'

function Home() {

  const history = useNavigate()

  const handleDelete = (id)=>{
   let index = Employee.map((item)=>item.id).indexOf(id)
   Employee.splice(index,1)
     console.log(Employee);
     history('/')
  }

  const handleEdit = (id,uname,age,desg,salary) =>{
    localStorage.setItem("id",id)
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",age)
    localStorage.setItem("desg",desg)
    localStorage.setItem("salary",JSON.stringify(salary))
    
  }
  return (
    <>
    <h1 className='text-primary mt-5 ms-3'>Employee Management System
    &nbsp;
    <Link to={'/add'}>
    <button className='btn btn-success'>Add Employee &nbsp;
    <i class="fa-solid fa-user-plus"></i>
    </button>
    </Link>
    </h1>
    <p className='ms-3 me-3'>
    Most applications have some form of CRUD functionality. In fact, every programmer has had to deal with CRUD at some point. Not to mention, a CRUD application is one that utilizes forms to retrieve and return data from a database.
    </p>
    <div style={{margin:"4rem"}}>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Username</th>
      <th>Designation</th>
      <th>Age</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   {
    Employee && Employee.length > 0 ?
    Employee.map((item)=>(
      <tr>
        <td>{item.uname}</td>
        <td>{item.age}</td>
        <td>{item.desg}</td>
        <td>{item.salary}</td>
        <td>
      <Link to={'/edit'}>
        <Button onClick={() => handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} variant='primary'>Edit</Button> &nbsp;
      </Link>

        <Button onClick={()=>handleDelete(item.id)} variant='danger'>Delete</Button>
        </td>
      </tr>
    ))
    :'no stable data available'
    
   }
  </tbody>
</Table>
</div>
    </>
  )
}

export default Home