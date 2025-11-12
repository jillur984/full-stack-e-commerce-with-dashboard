import React from 'react'

const Context = ({setData,data}) => {

    console.log(data)
  return (
    <div>
        <p>{data}</p>
    </div>
  )
}

export default Context