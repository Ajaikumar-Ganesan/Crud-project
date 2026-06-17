import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
    // console.log((res.data));
    
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container mt-5">
      <h2>Student List</h2>

      <table className="table table-bordered">
        <thead className="text-center">
          <tr>
            <th style={{backgroundColor:"blue"}}className="text-white">Name</th>
            <th style={{backgroundColor:"blue"}} className="text-white" >Email</th>
            <th style={{backgroundColor:"blue"}} className="text-white" >Course</th>
            <th style={{backgroundColor:"blue"}} className="text-white" >Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {products.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.course}</td>

              <td>
                <Link
                  to={`/edit/${item._id}`}
                  className="btn btn-primary me-2 w-25"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger w-25 "
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;