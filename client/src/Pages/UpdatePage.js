import React from 'react'
import AppNabar from '../Components/Common/AppNabar';
import UpdateForm from '../Components/Update/UpdateForm';
import { useParams } from 'react-router-dom'

function UpdatePage() {
  const params = useParams()
  return (
    <div>
        <AppNabar />
        <UpdateForm id={params['id']}/>
    </div>
  )
}

export default UpdatePage