import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';



export default function ListStatus() {

  return (
    <Container className="mt-2">
      <div className='d-flex w-75 mt-4'>
        <div className='d-flex flex-wrap justify-content-between w-100'>
          <h6>Agent status</h6>
          <Button style={{ backgroundColor: "#e43641", border: "#e43641" }} size="sm">New agent status</Button>
        </div>
      </div>
      <div className="w-75 text-justify mt-3">
        <p className="w-75" style={{ fontSize: "calc(.3em + .5vw)"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas pharetra arcu vitae vehicula tristique.
          Sed eu suscipit nisl, nec tincidunt metus.
          Donec ac erat tellus. Ut imperdiet sit amet urna non facilisis.
        </p>
        <Alert key={"info"} variant={"info"} style={{ fontSize: '.7rem' }}>
          Default Status will always available for phone channel.
        </Alert>
        <Table size="sm" responsive striped style={{ fontSize: '.7rem' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Available</td>
              <td>Active</td>
              <td><Form.Check
                checked
                disabled
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>Unavailable</td>
              <td>Inactive</td>
              <td><Form.Check
                checked
                disabled
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>On going call</td>
              <td>Active</td>
              <td><Form.Check
                checked
                disabled
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>After call work</td>
              <td>Active</td>
              <td><Form.Check
                checked
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>Training</td>
              <td>Active</td>
              <td><Form.Check
                checked
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Inactive</td>
              <td><Form.Check
                checked
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>Break</td>
              <td>Inactive</td>
              <td><Form.Check
                checked
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
            <tr>
              <td>Meeting</td>
              <td>Active</td>
              <td><Form.Check
                type="switch"
                id="disabled-custom-switch"
              /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

