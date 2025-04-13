import React from 'react';
import Button from './Button';
import ModelForm from './ModelForm';

function Tablelist({ client, isOpen,onClose, handleOpen }) {

  return (
    <div className="overflow-x-auto mt-10 hover">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {client && client.map((item, index) => (
            <tr key={index} className="mt-5">
              <td>{item.name}</td>
              <td>{item.occupation}</td>
              <td>{item.email}</td>
              <td>{item.salary}</td>
            <td><ModelForm isOpen={isOpen} onClose={onClose}/></td>
              <td><Button status={"Delete"}/></td>
            <td><Button status={item.status} handleOpen={()=>handleOpen("Edit")}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablelist;
