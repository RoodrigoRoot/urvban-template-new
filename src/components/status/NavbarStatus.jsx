import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsDisplay, BsFillMegaphoneFill,
     BsFillDashCircleFill, BsFillCheckCircleFill,
     BsFillPhoneFill } from 'react-icons/bs';
import { FaUserCircle, FaDumbbell, FaCoffee } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { GrSchedules, GrSchedule } from 'react-icons/gr';



export default function NavbarStatus() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand style={{ fontSize: "calc(.8em + .5vw)"}}>Agent Statuses</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '6.25rem', maxWidth:'100vh'}}
                        navbarScroll
                    >
                    </Nav>
                    <div className="d-flex">
                        <Form
                            className="w-50"
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 "
                                aria-label="Search"
                            />
                        </Form>

                        <Dropdown direction={'start'}>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <BsDisplay />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ fontSize: "calc(.4em + .5vw)"}}>
                                <Dropdown.ItemText>Your status: </Dropdown.ItemText>
                                <Dropdown.Item> <BsFillCheckCircleFill /> Available</Dropdown.Item>
                                <Dropdown.Item> <BsFillDashCircleFill /> Unavailable</Dropdown.Item>
                                <Dropdown.Item> <FaDumbbell />Training</Dropdown.Item>
                                <Dropdown.Item><GiMeal /> Lunch</Dropdown.Item>
                                <Dropdown.Item><FaCoffee />Break</Dropdown.Item>
                                <Dropdown.Item><GrSchedule />Meeting</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item><BsFillPhoneFill />Forward call to phone</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item><GrSchedules />Schedule out office</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="light">
                            <BsFillMegaphoneFill />
                        </Button>
                        <Button variant="light">
                            <FaUserCircle />
                        </Button>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
