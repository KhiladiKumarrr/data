// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// // import { Toast } from 'react-toastify';
// import axios from "axios";
// import { toast } from 'react-toastify';
// // import  axios  from 'axios';

// const Home = () => {
//     const [data, setData] = useState([]);

//     const loadData = async () => {
//         const response = await axios.get("http://localhost:5000/api/get");
//         setData(response.data);
//     }

//     useEffect(() => {
//         loadData();
//     }, []);

//     const deleteDetails = (id) => {
//         if (
//             window.confirm("are you sure")
//         ) {
//             axios.delete(`http://localhost:5000/api/remove/${id}`);
//             // toast.success("success")

//             setTimeout(() => loadData(), 500);
//         }
//     }
//     return (
//         <div style={{ marginTop: "150px" }}>
//             <Link to="/addContact">
//                 {/* <Link to='/employeeform'> */}
//                 <button>Add Contact</button>
//             </Link>
//             <table>
//                 <thead>
//                     <tr>
//                         <th style={{ textAlign: "center" }}>No.</th>
//                         <th style={{ textAlign: "center" }}>Name</th>
//                         <th style={{ textAlign: "center" }}>Department</th>
//                         <th style={{ textAlign: "center" }}>Experience</th>
//                         <th style={{ textAlign: "center" }}>Starting Date</th>
//                         <th style={{ textAlign: "center" }}>Manager</th>
//                         <th style={{ textAlign: "center" }}>Skills</th>
//                         <th style={{ textAlign: "center" }}>Remarks</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => {
//                         return (
//                             <tr key={item.id}>
//                                 <th scope='row'> {index + 1}</th>
//                                 <td>{item.name}</td>
//                                 <td>{item.department}</td>
//                                 <td>{item.experience}</td>
//                                 <td>{item.starting_date}</td>
//                                 <td>{item.manager}</td>
//                                 <td>{item.skills}</td>
//                                 <td>{item.remarks}</td>

//                                 <td>
//                                     <Link to={`/update/${item.id}`}>
//                                         <button> Edit</button>
//                                     </Link>



//                                     <button onClick={() => deleteDetails(item.id)}>
//                                         Delete
//                                     </button>
//                                 </td>

//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Home



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { Toast } from 'react-toastify';
import axios from "axios";
import { toast } from 'react-toastify';
// import  axios  from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteDetails = (id) => {
        if (
            window.confirm("are you sure")
        ) {
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            // toast.success("success")

            setTimeout(() => loadData(), 500);
        }
    }
    return (
        <div className='bData-tableContainer' >
<div >
            <Link to="/addContact" className='bdata-dBlock'>
                {/* <Link to='/employeeform'> */}
                <button className='addContactBTn'>Add Contact</button>
            </Link>
            <div className='bDatatableResponsive'>
            <table>
                <thead>
                    <tr>
                        <th  className='bData-th bData-min50'>No.</th>
                        <th  className='bData-th'>Name</th>
                        <th  className='bData-th'>Department</th>
                        <th  className='bData-th'>Experience</th>
                        <th  className='bData-th'>Starting Date</th>
                        <th  className='bData-th'>Manager</th>
                        <th  className='bData-th'>Skills</th>
                        <th  className='bData-th'>Remarks</th>
                        <th  className='bData-th'>Action</th>
                        

                    </tr>
                    </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope='row'> {index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.department}</td>
                                <td>{item.experience}</td>
                                <td>{item.starting_date}</td>
                                <td>{item.manager}</td>
                                <td>{item.skills}</td>
                                <td>{item.remarks}</td>
                                {/* <td className='bDatat-d-flex bData-space-btw'> */}
                                    {/* <Link to={`/update/${item.id}`}>
                                        <button> Edit</button>
                                    </Link>
                                    <button 
                                    onClick={() => deleteDetails(item.id)}
                                    >
                                        Delete
                                    </button> */}

<td>
    <span class="bDatat-d-flex">
        <a href={`/update/${item.id}`}>
            <button class="bdata-editBtn"> Edit</button>
        </a>
            <button class="bdata-delBtn" onClick={() => deleteDetails(item.id)}>
                Delete
            </button>
     </span>
 </td>



                                {/* </td> */}

                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            
            </div>
            </div>
            
        )
    }
    
    export default Home


    
