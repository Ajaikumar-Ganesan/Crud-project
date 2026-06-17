import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import landing from "../crud-img/girls-landing.png"



function AddProduct() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [course,setCourse] = useState("")

const navigate = useNavigate();  
    
 const saveRegister = async () => {
  try {
    await axios.post("http://localhost:5000/products", {
      name,
      email,
      course
      
    });
      console.log(name,email,course);

    alert("Product Added");

    navigate("/list");

  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
    <div >
 
 
         
            

 
  <section className="py-5  " >
    <div className="container " >
      <div className="row justify-content-center">
        
        <div className="col-lg-5 col-md-7 col-sm-10">
          
          <div className="card shadow p-4 pt-5 col-lg-12 col-md-12 "  style={{height:"500px"}}>
            
            <h3 className="text-center mb-4">
              Create <span className="text-primary  ">Student Data</span>
            </h3>

            <input
              className="form-control w-75 mb-3 ps-4 ms-5 mt-4"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-3 w-75 ps-4  ms-5 mt-2"
              placeholder="Email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              className="form-select mb-3 w-75 ms-5 mt-2 "
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              <option value="Node JS">Node JS</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Python">Python</option>
              <option value="Full Stack">Full Stack</option>
            </select>

            <div className="d-flex justify-content-around me-4 align-items-center mb-3 flex-wrap mt-3">
              <div className="form-check">
                <input
                  className="form-check-input ms-5"
                  type="checkbox"
                />
                <label className="form-check-label ms-1">
                  Remember Me
                </label>
              </div>

              <span  className="text-primary text-decoration-none me-5">
                Forgot Password?
              </span>
            </div>

            <button
              className="btn btn-primary w-25 mx-auto mt-4"
              onClick={saveRegister}
            >
              Register
            </button>

          </div>

        </div>

      </div>
    </div>
  </section>
</div>
     
    </>
  );
}

export default AddProduct;