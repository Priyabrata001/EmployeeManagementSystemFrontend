// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// function Employee() {
//   const [data, setData] = useState([])

//   useEffect(()=> {
//     axios.get('https://localhost:7036/api/Employee')
//     .then(res => {
//       if(res.data.Status === "Success") {
//         setData(res.data);
//         console.log(data)
//       } else {
//         alert("Error")
//       }
//     })
//     .catch(err => console.log(err));
//   }, [])

//   const handleDelete = (id) => {
//     axios.delete('https://localhost:7036/api/delete/'+id)
//     .then(res => {
//       if(res.data.Status === "Success") {
//         window.location.reload(true);
//       } else {
//         alert("Error")
//       }
//     })
//     .catch(err => console.log(err));
//   }

//   return (
//     <div className='px-5 py-3'>
//       <div className='d-flex justify-content-center mt-2'>
//         <h3>Employee List</h3>
//       </div>
//       <Link to="/create" className='btn btn-success'>Add Employee</Link>
//       <div className='mt-3'>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Salary</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((employee) => {
//               return <tr key={employee.employeeId}>
//                   <td>{employee.employeeName}</td>
//                   <td>{
//                     <img src={`http://localhost:8081/images/`+employee.image} alt="" className='employee_image'/>
//                     }</td>
//                   <td>{employee.email}</td>
//                   <td>{employee.address}</td>
//                   <td>{employee.salary}</td>
//                   <td>
//                     <Link to={`/employeeEdit/`+employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
//                     <button onClick={()=> handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
//                   </td>
//               </tr>
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Employee
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7036/api/Employee')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data);
          console.log(datas); // Log the response data directly
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, [datas]);

  const handleDelete = (id) => {
    axios.delete('https://localhost:7036/api/delete/' + id)
      .then(res => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Image</th> */}
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((employee) => {
              return (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeName}</td>
                  {/* <td>
                    <img src={`http://localhost:8081/images/` + employee.image} alt="" className='employee_image' />
                  </td> */}
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link to={`/employeeEdit/` + employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={() => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
