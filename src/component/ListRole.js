import React from 'react'
import { Col,Row } from 'react-bootstrap'

export default  function ListRole({items}){
    return (<div>
         <Row className="m-3" >
            <Col  className="border border-dark me-3 text-center" md={3}>{items.date}</Col>
            <Col className="border border-dark text-center">{items.position}</Col>
        </Row>
    </div>
        

    )
}