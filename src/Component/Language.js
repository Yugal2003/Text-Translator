import React from 'react'

const Language = (prop) => {
  return (
    <>
    <option value={prop.dataObj.code}>{prop.dataObj.name}</option>
    </>
  )
}

export default Language