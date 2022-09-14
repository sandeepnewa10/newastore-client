import React from 'react'
import { Card } from 'react-bootstrap'
import './customCard.css'

const CustomCard = ({count, title}) => {
  return (
   <Card>
      <Card.Body className="py-3 text-light">
            <Card.Title>{count}</Card.Title>
            <Card.Text>{title}</Card.Text>
      </Card.Body>
   </Card>
  )
}

export default CustomCard