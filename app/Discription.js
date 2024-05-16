import React from 'react'

function Discription() {
  return (
    <div className='containerdisc' >
        <div className='BB'>
            <label className='text-lg font-medium mr-2'>Description</label>
        <input  type='radio' id='discription' name='common'/>

        </div>

        <div className='BB'>
            <label className='text-lg font-medium mr-2'>Review</label>
        <input type='radio' id='review' name='common'/>

        </div>
        <hr/>

    </div>
  )
}

export default Discription