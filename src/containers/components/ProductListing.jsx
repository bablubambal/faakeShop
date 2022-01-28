import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import {setProducts} from "../redux/Actions/productActions"

const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()
    const fetchProducts  = async()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Error is ",err)
        })
        console.log(response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
      
    fetchProducts();
    console.log(products)
      
    }, []);
    
  return <div >
      <div className="ui grid container ">
      <ProductComponent/>

      </div>
  </div>;
};

export default ProductListing;
