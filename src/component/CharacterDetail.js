import React from 'react'
import { useState } from 'react'
import { Accordion, Button, Form, Modal } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row,Container } from 'react-bootstrap'




export default  function CharacterDetail (){


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



    return (
       <Container >
           <Row>
               <Col className="mb-5" md={3}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mr._Vo_Nguyen_Giap.jpg/220px-Mr._Vo_Nguyen_Giap.jpg'/>
                
               </Col >
               <Col >
                <h1> Võ Nguyên Giáp</h1>
                <p>25/08/1991 - 04/10/2013</p>
                <p>Tên Khai Sinh: Võ Nguyên Giáp, cón được gọi là tướng Giáp hoặc anh Văn.</p>
                <p>Quê Quán: Lệ Thủy, Quảng Bình</p>
               </Col>

           </Row>

           <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Xuất Thân</h2></Accordion.Header>
                <Accordion.Body>
                Võ Nguyên Giáp sinh ngày 25 tháng 8 năm 1911 ở làng An Xá, xã Lộc Thủy, huyện Lệ Thủy, tỉnh Quảng Bình trong một gia đình nhà nho,
                con của ông Võ Quang Nghiêm (Võ Nguyên Thân), một nhà nho đức độ và mẹ là bà Nguyễn Thị Kiên.
                Về họ ngoại, ông ngoại Võ Nguyên Giáp quê ở thôn Mỹ Đức, xã Sơn Thủy, huyện Lệ Thủy, đầu nguồn sông Cẩm Ly, một vùng sơn cước, 
                dưới dãy Trường Sơn; từng tham gia Phong trào Văn Thân và Phong trào Cần Vương, làm đến chức Đề đốc coi đại đồn tiền vệ, sau bị quân Pháp bắt,
                 tra tấn dã man, nhưng một mực trung thành, không một lời khai báo.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Vai Trò/Chức Vụ</h2></Accordion.Header>
                        <Accordion.Body>
                            <Row className="m-3">
                                <Col className="border border-dark me-3" md={3}>1/1946 - 1978</Col>
                                <Col className="border border-dark">Tổng Tư Lệnh Quân Đội Nhân Dân Việt Nam</Col>
                            </Row>
                            <Row className="m-3">
                                <Col className="border border-dark me-3" md={3}>1945 - 27/03/1982</Col>
                                <Col className="border border-dark">Ủy Viên Bộ Chính Trị</Col>
                            </Row>
                            <Row className="m-3">
                                <Col className="border border-dark me-3" md={3}>7/1948 - 2/1980</Col>
                                <Col className="border border-dark">Bộ Trưởng Bộ Quốc Phòng</Col>
                            </Row>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Một vài hình ảnh</h2></Accordion.Header>
                        <Accordion.Body>
                            <Row className="mb-5">
                                <Row>
                                    <Col><img className="w-100 " src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5_%D0%B2%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B1%D0%BE%D0%B5%D0%B2%D1%8B%D1%85_%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B4_%D0%A0%D0%BE%D0%B4%D0%B8%D0%BD%D1%8B%2C_%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9%2C_%D1%8F%D0%BD%D0%B2%D0%B0%D1%80%D1%8C_1966.jpg/220px-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5_%D0%B2%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B1%D0%BE%D0%B5%D0%B2%D1%8B%D1%85_%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B4_%D0%A0%D0%BE%D0%B4%D0%B8%D0%BD%D1%8B%2C_%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9%2C_%D1%8F%D0%BD%D0%B2%D0%B0%D1%80%D1%8C_1966.jpg'></img></Col>
                                    <Col><img className="w-100" src='https://upload.wikimedia.org/wikipedia/vi/thumb/c/ca/Tuonggiapbaocao.jpg/220px-Tuonggiapbaocao.jpg'/></Col>
                                    <Col><img className="w-100" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Giap-Ho.jpg/200px-Giap-Ho.jpg'/></Col>
                                </Row>
                                <Row>
                                    <Col className="text-center"><p>Võ Nguyên Giáp cùng một số lãnh đạo Liên Xô sang Việt Nam năm 1966</p></Col>
                                    <Col className="text-center"><p>Tướng Giáp báo cáo kế hoạch tấn công Điện Biên Phủ</p></Col>
                                    <Col className="text-center"><p>Võ Nguyên Giáp và Hồ Chí Minh, chụp khoảng năm 1945</p></Col>
                                </Row>
                                
                               
                            </Row>
                            <Row>
                                <Row>
                                    <Col><img className="w-100" src='https://upload.wikimedia.org/wikipedia/vi/thumb/1/17/%C4%90%E1%BA%A1i_t%C6%B0%E1%BB%9Bng_V%C3%B5_Nguy%C3%AAn_Gi%C3%A1p_trong_tr%E1%BA%ADn_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7_%28h%C3%ACnh_ch%E1%BB%A5p_t%E1%BA%A1i_%C4%91%C6%B0%E1%BB%9Dng_s%C3%A1ch_Nguy%E1%BB%85n_Hu%E1%BB%87%2C_t%C3%AAt_Gi%C3%A1p_Ng%E1%BB%8D_2014%29_%28cropped%29_%282%29.JPG/220px-%C4%90%E1%BA%A1i_t%C6%B0%E1%BB%9Bng_V%C3%B5_Nguy%C3%AAn_Gi%C3%A1p_trong_tr%E1%BA%ADn_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7_%28h%C3%ACnh_ch%E1%BB%A5p_t%E1%BA%A1i_%C4%91%C6%B0%E1%BB%9Dng_s%C3%A1ch_Nguy%E1%BB%85n_Hu%E1%BB%87%2C_t%C3%AAt_Gi%C3%A1p_Ng%E1%BB%8D_2014%29_%28cropped%29_%282%29.JPG'/></Col>
                                    <Col><img className="w-100" src='https://upload.wikimedia.org/wikipedia/vi/thumb/b/b4/G72may15.jpg/220px-G72may15.jpg'/></Col>
                                    <Col><img className="w-100"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Vo_Nguyen_Giap_2008.jpg/160px-Vo_Nguyen_Giap_2008.jpg'/></Col>
                                </Row>
                                <Row>
                                    <Col className="text-center"><p>Tướng Giáp trong chiến dịch Điện Biên Phủ</p></Col>
                                    <Col className="text-center"><p>Hình vẽ Võ Nguyên Giáp trên bìa tạp chí Time, ngày 15 tháng 5 năm 1972</p></Col>
                                    <Col className="text-center"><p>Võ Nguyên Giáp năm 2008</p></Col>
                                </Row>
                                
                            </Row>
                        
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Tham Chiến</h2></Accordion.Header>
                <Accordion.Body>
                    
                        <Row>
                            <ul>
                                <li>Trận Hà Nội 1946</li>
                                <li>Chiến dịch Việt Bắc</li>
                                <li>Chiến dịch Biên giới</li>
                                <li>Chiến dịch Hòa Bình</li>
                                <li>Chiến cục đông-xuân 1953-1954</li>
                                <li>Chiến dịch Điện Biên Phủ</li>
                                <li>Chiến dịch Sấm Rền</li>
                                <li>Chiến dịch Mậu Thân 1968</li>
                                <li>Chiến dịch Đường 9 - Khe Sanh</li>
                                <li>Chiến dịch Đường 9 - Nam Lào</li>
                                <li>Chiến cục năm 1972</li>
                                <li>Chiến dịch Điện Biên Phủ trên không</li>
                                <li>Chiến dịch Mùa Xuân 1975</li>
                                <li>Chiến dịch Hồ Chí Minh</li>
                                <li>Chiến tranh biên giới Việt–Trung, 1979</li>
                            </ul>
                        </Row>
                    
                
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Đánh Giá</h2></Accordion.Header>
                    <Accordion.Body>
                        <p>Với hơn 50 năm tham gia hoạt động chính trị, trong đó có 30 năm là Tổng tư lệnh Quân đội, ông có uy tín lớn trong Đảng Cộng sản Việt Nam và trong Quân đội nhân dân Việt Nam.
                            Thông tin chính thống gần đây cho biết: "Tất cả các ý kiến của anh Văn đều được Bộ Chính trị tiếp thu và tán thành trong suốt thời kỳ chiến tranh".
                            Thượng tướng Trần Văn Trà đã từng gọi Đại tướng Võ Nguyễn Giáp là "tư lệnh của tư lệnh, chính uỷ của chính uỷ".
                            Thượng tướng Giáo sư Hoàng Minh Thảo khi được hỏi về trình độ đánh trận của các tướng lĩnh Việt Nam đã trả lời:

                        </p>
                        <Row className="mb-4">
                            <Row>
                                <h2>“Tất nhiên đầu tiên là Đại tướng Võ Nguyên Giáp. Thứ hai là tướng Lê Trọng Tấn. Thứ ba là tướng Hoàng Văn Thái và thứ tư là tướng Nguyễn Hữu An.”</h2>
                            </Row>
                            <Col className = "text-end" >
                                    — Thượng tướng, Giáo sư Hoàng Minh Thảo.
                            </Col>
                        </Row>
                        <Row>
                            <Row>
                                <h2>“Từ năm 1944-1975, cuộc đời của Võ Nguyên Giáp gắn liền với chiến đấu và chiến thắng, khiến ông trở thành một trong những thống soái lớn của mọi thời đại.
                                     Với 30 năm làm tổng tư lệnh và gần 50 năm tham gia chính sự ở cấp cao nhất, ông tỏ ra là người có phẩm chất phi thường trong mọi lĩnh vực của chiến tranh. 
                                     Khó có vị tướng nào có thể so sánh với ông trong việc kết hợp chiến tranh du kích với chiến tranh chính quy. Sự kết hợp đó xưa nay chưa từng có.”
                                </h2>
                            </Row>
                            <Col className = "text-end" >
                            — Đại tướng Peter MacDonald, nhà nghiên cứu khoa học lịch sử quân sự người Anh
                            </Col>
                        </Row>
                        
                    
                    </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion className="mb-5" defaultActiveKey="0" flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header><h2>Giải Thưởng & Vinh Danh</h2></Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <ul><h4>Huân Chương</h4>
                            <li>1 Huân chương Sao Vàng (1992)</li>
                            <li>2 Huân chương Hồ Chí Minh</li>
                            <li>Huân chương Quân công hạng Nhất</li>
                            <li>6 Huân chương Chiến thắng hạng Nhất.</li>
                        </ul>
                    </Row>
                    <Row>
                        <ul><h4>Huy Hiệu</h4>
                            <li>Huy Hiệu 70 Năm Tuổi Đảng</li>
                        </ul>
                    </Row>
                    <Row>
                        <ul><h4> Huy Hiệu Khác</h4>
                            <li>Chủ tịch danh dự Hội Sử học Việt Nam trong 4 kỳ đại hội, từ đại hội lần thứ II tháng 5 năm 1988 đến đại hội V năm 2005.</li>
                            <li>Chủ tịch danh dự Hội Cựu chiến binh Việt Nam</li>
                            <li>Chủ tịch danh dự Hội Khuyến học Việt Nam.</li>
                            <li>Chủ tịch danh dự Hội Khoa học Kỹ thuật Việt Nam.</li>
                            <li>Chủ tịch danh dự Hội Cựu giáo chức Việt Nam.</li>

                        </ul>
                    </Row>
                
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