import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ProfileUser from '../user/Profile';
import { FaPaperclip } from 'react-icons/fa';
import { BiImage } from 'react-icons/bi';
import Tooltip from 'react-bootstrap/Tooltip';



export default function Chat() {

    const [modalShow, setModalShow] = React.useState(false);
    const handleCloseProfile = () => setModalShow(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate')
        }
    }


    return (
        <>
            <Container style={{ paddingTop: 'calc(.9em + .6vw)', marginTop: '.8rem', width: 'calc(18em + 15vw)', height: "calc(35em + 31vh)"}}>
                <Card style={{
                    backgroundColor: '#FAFBFF',
                    borderRadius: '3px',
                    height: "calc(32em + 28vh)",
                    width: 'calc(18em + 15vw)',
                }}>
                    <Card.Body className='' style={{ height: "calc(25em + 21vh)", paddingBottom:"0", margin: '0 auto', fontSize: "calc(.4em + .3vw)" }}>
                        <div style={{ height: '80%' }}>
                            <div style={{ textAlign: 'center' }}>
                                <a href="#" style={{ fontSize: "calc(.5em + .6vw)" }}
                                    size='sm' onClick={() => setModalShow(true)}>Ver perfil</a>
                            </div>
                            <hr style={{ margin: '0px' }} />
                            <div style={{ width: '80%' }}>
                                <p className='p-2' style={{
                                    width: 'auto',
                                    borderRadius: '3px', fontFamily: 'Roboto', backgroundColor: '#F5F6F7',
                                    color: '#4f4f4f'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            </div>
                            <div className='d-flex justify-content-end' style={{
                                backgroundColor: '#3B71CA',
                                borderRadius: '3px', fontFamily: 'Roboto',
                                color: 'white', width: '80%',
                                marginLeft:'6rem'
                                }}>
                            <p className='p-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div style={{ width: 'auto', marginLeft: '7rem' }}>
                            </div>
                        </div>
                        <Card.Footer style={{ width: 'calc(20em + 18vw)', marginTop: '0' }}>
                            <Form className='d-flex justify-content-start' style={{ textAlign: 'center', borderRadius: '5px' }}>
                                <Form.Group>
                                    <textarea onKeyDown={handleKeyDown} name="" id="" cols="40" style={{ borderRadius: '5px' }} rows="3"></textarea>
                                </Form.Group>
                            </Form>
                            <div className='d-flex align-items-center justify-content-between mt-1'>
                                <div className='d-flex justify-content-start align-items-start'>
                                    <OverlayTrigger
                                        key={'top'}
                                        placement={"top"}
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip>
                                                carga archivos para compartir
                                            </Tooltip>
                                        }
                                    >
                                        <label style={{ cursor: 'pointer' }} for="fileInput">
                                            <FaPaperclip size={20} />
                                        </label>
                                    </OverlayTrigger>

                                    <input style={{ display: 'none' }} id="fileInput" type="file" size="sm" />
                                    <OverlayTrigger
                                        key={'top'}
                                        placement={"top"}
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip>
                                                carga imagenes para compartir
                                            </Tooltip>
                                        }>
                                        <label style={{ cursor: 'pointer', marginLeft: '.3rem' }} for="imageInput">
                                            <BiImage size={20} />
                                        </label>
                                    </OverlayTrigger>
                                    <input accept="image/png, image/gif, image/jpeg" style={{ display: 'none' }} id="imageInput" type="file" size="sm" />
                                </div>
                                <p style={{color:'gray'}}>Pulsa Intro (Enter) para enviar </p>
                            </div></Card.Footer>
                    </Card.Body>
                </Card>
            </Container>
            <ProfileUser show={modalShow} onHide={handleCloseProfile} />
        </>
    )
}

