import React from 'react'
import {Row} from 'react-bootstrap'

export default  function ListCareer({items}){
    return (
        <div>
            <Row>
                <ul>
                    <li>{items}</li>
                </ul>
            </Row>
        </div>
    )
}