import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import ProfileUser from '../user/Profile';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaPaperclip } from 'react-icons/fa';
import { BiImage } from 'react-icons/bi';
import Tooltip from 'react-bootstrap/Tooltip';



export default function ChatModal({ show, onHide }) {

    const [modalShow, setModalShow] = React.useState(false);
    const handleCloseProfile = () => setModalShow(false);


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate')
        }
    }

    return (
        <>
            <Modal id='chatmodal' show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title><a href="#" style={{ fontSize: "calc(.5em + .6vw)" }}
                        size='sm' onClick={() => setModalShow(true)}>Ver perfil</a></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div style={{ height: '80%' }}>
                        <hr style={{ margin: '0px' }} />
                        <div style={{ width: '80%' }}>
                            <p className='p-2' style={{
                                width: 'auto',
                                borderRadius: '3px', fontFamily: 'Roboto', backgroundColor: '#F5F6F7',
                                color: '#4f4f4f', fontSize:'calc(.5em+.5vh)'
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        </div>
                        <div className='d-flex justify-content-end' style={{
                            backgroundColor: '#3B71CA',
                            borderRadius: '3px', fontFamily: 'Roboto',
                            color: 'white', width: 'auto',
                            marginLeft: '6rem'
                        }}>
                            <p className='p-2'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div style={{ width: 'auto', marginLeft: '7rem' }}>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Form className='d-flex justify-content-start' style={{ textAlign: 'center', borderRadius: '5px' }}>
                        <Form.Group>
                            <textarea onKeyDown={handleKeyDown} name="" id="" cols="30" style={{ borderRadius: '5px' }} rows="3"></textarea>
                        </Form.Group>
                    </Form>
                    <div className='d-flex align-items-start justify-content-between mt-1'>
                        <div className='d-flex justify-content-start align-items-center'>
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
                    </div>
                </Modal.Footer>
            </Modal>
            <ProfileUser show={modalShow} onHide={handleCloseProfile} />
        </>
    )
}

