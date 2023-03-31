import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { TiMessages } from 'react-icons/ti';
import ChatModal from '../chat/ChatModal';



export default function Message({seeChat}) {

    const [showChat, setShowChat] = useState(false)
    const handleCloseShowChat = () => setShowChat(false);



    function handleShowChat() {
        console.log(document.getElementById('chat').style.display)
        let display_chat  = document.getElementById('chat').style.display
        if (display_chat === 'none'){
            setShowChat(true)
        }

    }

    return (
        <Container style={{ marginTop: '.8rem', width: 'calc(18em + 15vw)', height: "calc(35em + 31vh)" }}>
            <div style={{ overflow: 'scroll', padding: '.8rem', backgroundColor: '#fff', height: '100%', borderRadius: '5px', scrollBehavior: 'auto', }}>
                <Card
                onClick={handleShowChat}
                style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
                <Card style={{
                    width: 'auto',
                    border: 'none'
                }}>
                    <Card.Body style={{ padding: '0' }}>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <img
                                width="30"
                                height="30"
                                src="https://avatars.githubusercontent.com/u/50676016?v=4" alt="person"
                                style={{ borderRadius: '2rem' }}
                            />
                            <div style={{ width: '80%' }}>
                                <div className='d-flex flex-wrap justify-content-evenly'
                                    style={{ width: '80%', height: '1.125rem' }}
                                >
                                    <p style={{ fontSize: "calc(.3em + .4vw)", marginRight: '.5rem' }}>Visitor</p>
                                    <p style={{ fontSize: "calc(.4em + .5vw)", marginRight: '.5rem' }}>Selina Meyer</p>
                                    <p style={{ fontSize: "calc(.3em + .4vw)" }}>4:23PM</p>
                                </div>
                                <div style={{ fontSize: "calc(.3em + .4vw)" }} className='p-1 m-1'><p><TiMessages /> Web</p></div>
                            </div>
                        </div>
                    </Card.Body>
                    <div style={{
                        borderBottom: '1px solid #EBF1F1', marginLeft: '.5rem',
                        width: '95%', marginBottom: '1px'
                    }}></div>
                </Card>
            </div>
            <ChatModal show={showChat} onHide={handleCloseShowChat}/>
        </Container>
    )
}
