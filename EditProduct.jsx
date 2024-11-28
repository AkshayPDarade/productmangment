import React, { useEffect, useState } from 'react'
 import productServices from '../services/productServices';
import { useNavigate, useParams } from 'react-router-dom';
const EditProduct = () => {
 
  const [product , setProduct] = useState({
    id:"",
    productName:"",
    desription:"",
    price:"",
    status:""
 });

 const navigate = useNavigate();
const{id}= useParams();
console.log(id);

 const [msg , setMsg]=useState("");



 useEffect(()=>{
  productServices.getallProductById(id).then((res)=>{
    setProduct(res.data);

  }).catch((error)=>{
    console.log(error);
  })
},[]);
  const handleChange =(e) =>{
    const value = e.target.value;
    setProduct({...product,[e.target.name]:value});

  };

  const ProductUpdate = (e) =>{
    e.preventDefault();
    productServices.editProduct(product).then((res)=>{

      setMsg("Edit Product Sucessfully!!!");
      navigate("/");
    }).catch((error) =>{
        console.log(error);
    });
    
 
  };

  
  return (
    <>
     <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow">
            <div className="card-header fs-3 text-center bg-dark text-white">
              Edit Product Details
            </div>
            <div className="card-body ">
              {
                msg && 
                <p className='fs-4 text-center text-dark'>{msg}</p>
              }
              <form onSubmit={(e)=>ProductUpdate(e)}>
                <div className="mb-3">
                  <label >Enter Product Name</label>
                  <input type='text' name='productName' className='form-control' onChange={(e)=>handleChange(e)} value={product.productName}/>
                </div>
                <div className="mb-3">
                  <label >Enter Product Desription</label>
                  <input type='text' name='desription' className='form-control' onChange={(e)=>handleChange(e)} value={product.desription}/>
                </div>
                <div className="mb-3">
                  <label >Enter Product Price</label>
                  <input type='text' name='price' className='form-control' onChange={(e)=>handleChange(e)} value={product.price}/>
                </div>
                <div className="mb-3">
                  <label >Enter Product Status</label>
                  <input type='text' name='status' className='form-control' onChange={(e)=>handleChange(e)} value={product.status}/>
                </div>
                <button className='btn bg-dark text-white col-md-12'> Update Prosuct</button>

              </form>
            </div>
          </div>
        </div>
      </div>
     </div>
    </ >
  )
}

export default EditProduct
