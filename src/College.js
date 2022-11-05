import React from 'react'

export default function College(props) {
  const { college, city, province } = props

  return (
    <h5>{college}, {city}, {province}</h5>
  )
}
