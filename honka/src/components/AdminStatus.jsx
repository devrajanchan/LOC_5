import React from 'react'

const AdminStatus = () => {
  return (
    <div style={{margin:'50px'}}>
      <table class="table">
  <thead className='table-primary'>
    <tr>
      <th scope="col" >#</th>
      <th scope="col">First</th>
      <th scope="col">Years Of Experience</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td>Mark</td>
      <td>3</td>
      <td className="text-success">ACCEPTED</td>
      <br/>
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>1</td>
      <td className="text-secondary">WAITING</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
       <td>1</td>
      <td className="text-danger">REJECTED</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default AdminStatus
