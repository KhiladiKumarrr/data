// import React, { useEffect, useState } from 'react';
// // import '../Style/Employee.css';
// import "../Style/EmployeeForm.css"
// import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';
// const initialState = {
//     name: '',
//     department: '',
//     experience: '',
//     startDate: '',
//     manager: '',
//     skills: '',
//     remarks: ''
// };
// const AddEdit = () => {
//   const [formData, setFormData] = useState(initialState)

//   const {name,department,experience,startDate,manager,skills,remarks}=formData;
   
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };



// const navigate=useNavigate()

// const {id}=useParams();

// useEffect(()=>{
//   axios.get(`http://localhost:5000/api/get/${id}`)
//   .then((resp)=>setFormData({...resp.data[0]}));
// },[id]);

// // Inside your React component
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     if( !name || !department || !experience || !startDate || !manager || !skills || !remarks){
// // toast.error("enter details")
//     }
//     else{
//       if(!id){

//         axios.post("http://localhost:5000/api/post",{
//           name,
//           department,
//           experience,
//           startDate,
//           manager,
//           skills,
//           remarks

//       })
//       .then(()=>{setFormData({
//           name:"",
//           department: '',
//           experience: '',
//           startDate: '',
//           manager: '',
//           skills: '',
//           remarks: ''
//         });
//       })
//       .catch((err)=>toast.error(err.response.data));

//       }

//       else{
         
//       axios.put(`http://localhost:5000/api/update/${id}`,{
//         name,
//         department,
//         experience,
//         startDate,
//         manager,
//         skills,
//         remarks
//     })
//     .then(()=>{
//       setFormData({
//         name:"",
//         department: '',
//         experience: '',
//         startDate: '',
//         manager: '',
//         skills: '',
//         remarks: ''
//       });
//     })
//     .catch((err)=>toast.error(err.response.data));
    
//       }
     
//     setTimeout(()=>{
//       // toast.success("added successfully");
//       navigate("/")
//     },500)
//     }
      
    
//   };
  

//   return (


//     <div className="form-container">  
//       <h1>Employee Details</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={name || ""} onChange={handleInputChange} required />

//         <label htmlFor="department">Department:</label>
//         <input type="text" id="department" name="department" value={department || ""} onChange={handleInputChange} required />

//         <label htmlFor="experience">Total Experience:</label>
//         <input type="number" id="experience" name="experience" value={experience || ""} onChange={handleInputChange} required />

//         <label htmlFor="start-date">Starting Date:</label>
//         <input type="date" id="start-date" name="startDate" value={startDate || ""} onChange={handleInputChange} required />

//         <label htmlFor="manager">Manager:</label>
//         <input type="text" id="manager" name="manager" value={manager || ""} onChange={handleInputChange} required />

//         <label htmlFor="skills">Skills:</label>
//         <textarea id="skills" name="skills" rows="4" value={skills || ""} onChange={handleInputChange} required></textarea>

//         <label htmlFor="remarks">Remarks:</label>
//         <textarea id="remarks" name="remarks" rows="4" value={remarks || ""} onChange={handleInputChange}></textarea>

        

//         {/* <Link to='/'> */}
//         <input type="submit" value={id ? "Update" : "Save"} />
// {/* </Link> */}
//         <Link to='/'>

//         <button>back </button>
        
//         </Link>

//       </form>
//     </div>
//   );
// };

// export default AddEdit;




import React, { useEffect, useState } from 'react';
// import '../Style/Employee.css';
import "../Style/EmployeeForm.css"
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const initialState = {
  name: '',
  department: '',
  experience: '',
  startDate: '',
  manager: '',
  skills: '',
  remarks: ''
};

const AddEdit = () => {
  const [formData, setFormData] = useState(initialState)

  const { name, department, experience, startDate, manager, skills, remarks } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(formData);
  //     // You can add your submission logic here
  //   };

  const navigate = useNavigate()

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/get/${id}`).then((resp)=>setFormData({...resp.data[0]}));
  },[id]);

  // Inside your React component
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name, !department, !experience, !startDate, !manager, !skills, !remarks) {
    }
    else {
      if (!id) {
        axios.post("http://localhost:5000/api/post", {
          name,
          department,
          experience,
          startDate,
          manager,
          skills,
          remarks
        })
          .then(() => {
            setFormData({
              name: "",
              department: '',
              experience: '',
              startDate: '',
              manager: '',
              skills: '',
              remarks: ''
            });
          })
          .catch((err) => toast.error(err.response.data));
        }
        setTimeout(()=>{
                // toast.success("added successfully");
                navigate("/")
              },500)
              }
                
              
            };
            
  
  
    return (
      <div className="rootContainer">
      <div className="bData-form-container">
            <h1>Employee Details</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:<span className='bData-star'>*</span></label>
              <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />
      
              <label htmlFor="department">Department:<span className='bData-star'>*</span></label>
              <input type="text" id="department" name="department" value={department} onChange={handleInputChange} required />
           <div className='bDatat-d-flex bData-space-btw'>
            <div className='bData-w-50'>
            <label htmlFor="experience">Total Experience:<span className='bData-star'>*</span></label>
              <input type="number" id="experience" name="experience" value={experience} onChange={handleInputChange}  className='bData-experience' required />
            </div>
            <div className='bData-w-50'>
            <label htmlFor="start-date">Starting Date:<span className='bData-star'>*</span></label>
              <input type="date" id="start-date" name="startDate" value={startDate} onChange={handleInputChange} required className='bData-data' />
            </div>
           </div>
           <label htmlFor="manager">Manager:<span className='bData-star'>*</span></label>
        <input type="text" id="manager" name="manager" value={manager} onChange={handleInputChange} required />

        <label htmlFor="skills">Skills:<span className='bData-star'>*</span></label>
        <textarea id="skills" name="skills" rows="4" value={skills} onChange={handleInputChange} required></textarea>

        <label htmlFor="remarks">Remarks:</label>
        <textarea id="remarks" name="remarks" rows="4" value={remarks} onChange={handleInputChange}></textarea>
        <div className='bDatat-d-flex bData-space-btw '>
          <Link to='/' className='bData-backBtn'>

            <button>Back </button>

          </Link>
          <button type="submit" value={id ? "Update" : "Save"} className='bData-saveBtn'>Save</button>

          </div>


</form>
</div>
</div>

);
};

export default AddEdit;
