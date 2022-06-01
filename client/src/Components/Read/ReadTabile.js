import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Delete, Read } from '../../APIServices/CRUDServices';
import FullScreenLoader from '../Common/FullScreenLoader';
import { ErrorToast, SuccessToast } from '../Helper/ValidationHelper';


function ReadTabile() {
  
  let navigate = useNavigate();
  const [DataList,SetDataList] = useState([])

  useEffect(()=>{
    Read().then((res) => {
      SetDataList(res)
    })

  },[])

  const DeleteItem = (id) =>{
      Delete(id).then( (res)=>{
        if (res===true) {
          SuccessToast("Delete Success")
        
        } else {
          ErrorToast("Request Fail Try Aging")
        }
      })
  }
 
  const UpdateItem = (id) => {
      navigate('/update/'+id)
    
 }

  if (DataList.length>0) {
    return (
      <div className='container'>
        <table className='table table-bordered'>
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Image</th> 
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
          </thead>
           <tbody>
               {
                 DataList.map( (item,i) => {
                   return (
                     <tr>
                       <td>
                         {item.ProductName}
                       </td>
                       <td>
                         {item.ProductCode}
                       </td>
                       <td>
                          <img className='list-img' src={item.Img} alt="" />
                       </td>
                       <td>
                         {item.UnitPrice}
                       </td>
                       <td>
                         {item.Qty}
                       </td>
                       <td>
                         {item.TotalPrice}
                       </td>

                       <td><button className='btn btn-success mx-4' onClick={UpdateItem.bind(this,item._id)}>Update</button>
                       <button className='btn btn-danger mx-4' onClick={DeleteItem.bind(this,item._id)}>Delete</button></td>
                      
                     </tr>
                   )
                 })
               }
           </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <dir>
        <FullScreenLoader />
      </dir>
    )
  }
}

export default ReadTabile;