import React from 'react'
import { useState } from 'react'
import { Accordion, Button, Form, Modal } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row,Container } from 'react-bootstrap'
import ListRole from './ListRole'
import ListCareer from './ListCareer'
import ListPrize from './ListPrize'
import ListEvaluate from './ListEvaluate'
import ListPicture from './ListPicture'




export default  function CharacterDetail ({item}){

    // const [newData,setNewData] = useState(item)
    const [show,setShow] = useState(false)
    const [send,setSend] = useState()

    const showModal = ()=>setShow(true)
    const close = ()=>setShow(false)
    const onChange =(event)=>{
        event.preventDefault()
        
        if(!send ==""){
            alert('Bạn đã nhập thành công')
            setShow(false)
        }
        else{
            alert('Bạn phải nhập vào cảm nghĩ của mình chứ')
            
            
        }
    }
    // const newItem =()=>{
    //     setNewData(item)
    // }
    


    return (
       <Container >
           <Row>
               <Col className="mb-5" md={3}>
                <img style={{width:250, height:318}} src={item.image}/>
               </Col >
               <Col >
                <h1> Tên: {item.name}</h1>
                <p>Năm Sinh: {item.dob}</p>
                {/* <p>Tên Khai Sinh: Võ Nguyên Giáp, cón được gọi là tướng Giáp hoặc anh Văn.</p> */}
                <p>Quê Quán: {item.pob}</p>
               </Col>

           </Row>

           <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Xuất Thân</h2></Accordion.Header>
                <Accordion.Body>
                    {item.description}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Vai Trò/Chức Vụ</h2></Accordion.Header>
                        <Accordion.Body>
                                {item.role.map((items,idx) =>{return <ListRole key={idx} items={items}/>})}
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Một vài hình ảnh</h2></Accordion.Header>
                        <Accordion.Body>
                           {item.picture.map((items,idx)=>{return <ListPicture key={idx} items={items}/>})}
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Sự Nghiệp</h2></Accordion.Header>
                <Accordion.Body>
                   
                    {item.career.map((items,idx)=>{ return <ListCareer key={idx} items={items}/>})}
                  
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Đánh Giá</h2></Accordion.Header>
                    <Accordion.Body>
                       
                    {item.evaluate.map((items,idx)=>{return <ListEvaluate key={idx} items={items}/>})}
                        
                    </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Giải Thưởng & Vinh Danh</h2></Accordion.Header>
                <Accordion.Body>
                    {item.prize.map((items,idx)=>{return <ListPrize key={idx} items={items}/>})}
                    
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            
            <Button className="btn btn-secondary btn-md mb-5" onClick={showModal}>Cảm Nghĩ Của Bạn</Button>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Hãy viết cảm nghĩ của bạn về vị tương này</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} onChange ={(event)=>setSend(event.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onChange}>Gửi</Button>
                </Modal.Footer>
            </Modal>

           

       </Container>
      
    )
}