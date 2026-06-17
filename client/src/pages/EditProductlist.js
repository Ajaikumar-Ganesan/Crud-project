import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();
  // console.log("ID =",id);
  // console.log(window.location.pathname);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
useEffect(() => {
  const getProduct = async () => {
    const res = await axios.get(
      `http://localhost:5000/products/${id}`
    );

    setName(res.data.name);
    setEmail(res.data.email);
    setPassword(res.data.password);
  };

  getProduct();
}, [id]);

  const updateProduct = async () => {
    await axios.put(
      `http://localhost:5000/products/${id}`,
      {
        name,
        email,
        password
      }
    );

    alert("Updated Successfully");
    navigate("/list");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Student</h2>

      <input
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={updateProduct}
      >
        Update
      </button>
    </div>
  );
}

export default EditProduct;