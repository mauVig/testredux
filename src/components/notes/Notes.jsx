import React from 'react'

export default function Notes({note}) {
  return (
    <>
        <div className='p-4 m-4'>
            <p>{note}</p>
        </div>
    </>
  )
}
