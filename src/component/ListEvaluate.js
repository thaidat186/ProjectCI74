import React from 'react'
import { Row, Col} from 'react-bootstrap'

export default  function ListEvaluate ({items}){
    return(
        <div>
            <Row className="mb-4">
                   <li>{items.content}</li>
                <Col className = "text-end" >
                    —{items.author}
                    
                </Col>
            </Row>

        </div>
    )
}