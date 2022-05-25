import React from 'react'
import { Row } from 'react-bootstrap'

export default  function ListPrize({items}){
    return(
        <div>
            <Row>
                <ul>
                    <li>{items}</li>
                </ul>
            </Row>

        </div>
    )
}