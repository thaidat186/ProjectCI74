import React from 'react'
import { Row , Col } from 'react-bootstrap'

export default  function ListPicture({items}){
    
    return(
        <div>
        <Row className="mb-5">
            <Row>
                <Col className="text-center" >
                   <img style={{ height:200}} src={items.img}/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">{items.description}</Col>
            </Row>
        </Row>

        </div>
    )
}