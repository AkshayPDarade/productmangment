import React, { useEffect, useState } from 'react'
import productServices from '../services/productServices';
import { Link } from 'react-router-dom';
 
const Home = () => {

  const[productList , setProductList] = useState([]);
  const [msg , setMsg]=useState("");
  useEffect(()=>{
    init();
  },[]);

  const init=()=>{
    productServices.getallProduct().then((res)=>{
      setProductList(res.data);

    }).catch((error)=>{
      console.log(error);
    })
  }

  const deleteProduct=(id)=>{
  productServices.deleteProduct(id).then((res)=>{
    setMsg("Deleted Product Sucessfully!!!");
    init();
    }).catch((error)=>{
    console.log(error);
    });
  };
  
  return (
    <>
     <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-header fs-4 text-center bg-dark text-white">
              All Product
              
            </div>
            <div className="card-body">
            {
                msg && 
                <p className='fs-4 text-center text-danger'>{msg}</p>
              }
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Peice</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {productList.map((p , num)=>(
      <tr>
    <td>{num+1}</td>
    <td>{p.productName}</td>
    <td>{p.desription}</td>
    <td>{p.price}</td>
    <td>{p.status}</td>
    <td>
      <Link to={'editProduct/'+p.id}   className='btn btn-sm btn-success'>edit</Link>
      <button onClick={()=>deleteProduct(p.id)}  className='btn btn-sm btn-danger ms-1'>Delete</button>
    </td>
   </tr>
    ))}
   
  </tbody>
</table>
            </div>
          </div>
        </div>
      </div>
     </div>
    </ >
  )
}

export default Home
