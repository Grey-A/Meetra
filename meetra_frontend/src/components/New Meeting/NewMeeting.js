import React, { useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'

/* onChange={(e) => setPwd(e.target.value)} value={pwd} required aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)}*/ 

const NewMeeting = () => {
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [milestones, setMilestones] = useState([{milestones: "boy"}])

  const totalMilestones = () => {

  }
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Password'  id="Enter Title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Password'  id="Enter Description" />
        </Form.Group>

        <Row className="flex space-between mb-3">
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Password'  id="Enter Description" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Time</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Password'  id="Enter Description" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Duration <span style={{fontSize: '.7rem'}}>Max:2hrs</span></Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Password'  id="Enter Description" />
          </Form.Group>
          <Form.Text>
            <i className="fa fa-check-circle"></i>{" "}
            This meeting will hold on {setDate} by {setTime}.
          </Form.Text>
        </Row>
        <Row className="flex margin-b-3">
          <Form.Group as={Col}>
            <h4 >Set Reminder</h4>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Select size='md' as={Col}>
            <option value="1">1 hr</option>
            <option value="1">30 Minutes</option>
            <option value="1">45 Minutes</option>
            <option value="1">1 hr</option>
            <option value="1">75 Minutes</option>
            <option value="1">100 Minutes</option>
            <option value="1">115 Minutes</option>
            <option value="1">2 hrs</option>
          </Form.Select>
          </Form.Group>     
        </Row>

        <h3 className="modal-title margin-bottom-3">
          Meeting Milestones<span style={{fontSize: '.7rem'}}>
             (meeting topics and time allocated)
          </span>
        </h3>
        <div className="milestones-section">
          {milestones.map(( index) => {
            <div key={index}>
              <Row className="flex space-between mb-3" >
                <Form.Group as={Col}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Password'  id="Enter Description" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Password'  id="Enter Description" />
                </Form.Group>
            </Row>  
            <div>

            {milestones.length - 1 === index && milestones.length  < 4 && (
              <><Button><i className="fa fa-plus-circle"></i></Button> " Add Milestones " </>
            )}
            
            {milestones.length > 1 && <><Button><i className="fa fa-minus-circle"></i> </Button> 'Remove Milestone' </>}

          </div>
            </div>

          })}


          
          
          
          <Form.Text classNAme='margin-t-3'>This meeting will last for {totalMilestones}</Form.Text>
        </div>

        <div className="guest-section margin-b-3">
        <Form.Group>
          <Form.Label>Add Guest</Form.Label>
          <Form.Control type='email' placeholder='Guest's Email/>
          <Button><i className="fa fa-add"></i>{" "} Add Guest</Button>
        </Form.Group>
        </div>

        
      </Form>
    </Container>
  )
}

export default NewMeeting
