import React from 'react'

export default function Student(props) {
  const { studId, studName } = props

  return (
    <>
      <h3>{studId}</h3>
      <h4>{studName}</h4>
    </>
  )
}
