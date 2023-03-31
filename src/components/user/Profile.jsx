import React, { useEffect } from 'react';
import { GoLocation } from 'react-icons/go';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function ProfileUser({ show, onHide }) {


    return (
        <>
            <Modal size="sm" show={show} onHide={onHide}>
                <Modal.Header style={{ paddingTop: '0px', paddingBottom: '0px' }} closeButton>
                    <Modal.Title>Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-wrap justify-content-evenly'>
                        <img
                            width="30"
                            height="30"
                            src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                            style={{ borderRadius: '2rem' }}
                        />
                        <div style={{ textAlign: 'center' }}>
                            <div className='d-flex flex-wrap justify-content-evenly'
                                style={{ height: '1.125rem' }}
                            >
                                <p style={{ fontSize: "calc(.3em + .4vw)" }}>Selina Meyer</p>
                            </div>
                            <div style={{ fontSize: "calc(.3em + .4vw)", marginLeft: '-.625rem' }}><p><GoLocation /> Jakarta, Jakarta raya, Indonesia</p></div>
                        </div>
                    </div>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                    <div style={{ fontSize: "calc(.3em + .4vw)", paddingRight: '1rem', paddingLeft: '1rem' }}>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <p>Email</p>
                            <p>raurcino@gmail.com</p>
                        </div>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <p>Phone</p>
                            <p>+52 33280404289</p>
                        </div>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <p>IP</p>
                            <p>192.168.1.92</p>
                        </div>
                    </div>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                    <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-3'>
                        <p style={{ margin: '0', marginBottom: '.2rem' }}>First initiated from</p>
                        <a style={{ marginBottom: '.2rem' }} href="#">brembo.com/lp</a>
                        <p style={{ margin: '0', marginBottom: '.2rem' }}>Last message from</p>
                        <a style={{ marginBottom: '.2rem' }} href="#">brembo.com/orders</a>
                    </div>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                    <div className='p-3' style={{ fontSize: "calc(.3em + .4vw)" }}>
                        <p style={{ marginBottom: '.6rem', fontWeight: 'bold' }}>Shopify</p>
                        <p style={{ margin: '0', fontWeight: 'bold' }}>Lifetime</p>
                        <p style={{ margin: '0', marginBottom: '.4rem' }}>$986</p>
                        <p style={{ margin: '0', fontWeight: 'bold' }}>Created at</p>
                        <p style={{ margin: '0', marginBottom: '.4rem' }}>09/10/2020</p>
                        <p style={{ margin: '0', fontWeight: 'bold' }}>Total order count</p>
                        <p style={{ margin: '0', marginBottom: '.4rem' }}>16</p>
                        <p style={{ margin: '0', fontWeight: 'bold' }}>Status</p>
                        <p style={{ margin: '0', marginBottom: '.4rem' }}>Paying</p>
                    </div>

                </Modal.Body>
                <Modal.Footer style={{ paddingTop: '0px', paddingBottom: '.3rem' }}>
                    <Button size="sm" onClick={onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

