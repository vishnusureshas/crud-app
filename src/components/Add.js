import React,{ useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import  Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Employee from './Employee';


function Add() {
    // state

    const [uname,setUname] = useState('')
    const [age,setAge] = useState('')
    const [desg,setDesg] = useState('')
    const [salary,setSalary] = useState(0)

    let history = useNavigate()

   const handleAdd=(e) =>{
    e.preventDefault()
    let ids = uuid()
    let uniqueId = ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary
    })
    history('/')
   }
   
  return (
    <>
    <h1 className='text-primary mt-5 ms-3'>Add Employee Details</h1>
<p className='ms-3 me-3'>
Most applications have some form of CRUD functionality. In fact, every programmer has had to deal with CRUD at some point. Not to mention, a CRUD application is one that utilizes forms to retrieve and return data from a database.
</p>
<Row className='m-5'>
  <Col md={4}>
    <img style={{width:"200px",height:"400px"}} src='https://simg.nicepng.com/png/small/136-1368406_clipart-resolution-842980-person-calling-icon.png'alt='no image'/>
  </Col>

  <Col md={8}>
  <Form className='border p-2'>
{/* <Form.Group className='mb-3' controlId="formBasicEmail">
<Form.Label>Id</Form.Label>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group> */}

<Form.Group >
<Form.Label>Username</Form.Label>
<Form.Control style={{color:"red"}}  type="text" required
onChange={(e)=>setUname(e.target.value)}
/>
</Form.Group>
<Form.Group >
<Form.Label>Age</Form.Label>
<Form.Control style={{color:"red"}}  type="text" required 
onChange={(e) =>setAge(e.target.value)}
/>
</Form.Group>
<Form.Group >
<Form.Label>Designation</Form.Label>
<Form.Control style={{color:"red"}}  type="text" required
onChange={(e)=>setDesg(e.target.value)}
/>
</Form.Group>
<Form.Group >
<Form.Label>Salary</Form.Label>
<Form.Control style={{color:"red"}}  type="text" required
onChange={(e)=>setSalary(e.target.value)}
/>
</Form.Group>

<Button onClick={(e) => handleAdd(e)}  className='mt-2' variant="primary" type="Add">
Add Employee
</Button>
</Form>
  </Col>
</Row>
</>
  )
}

export default Add