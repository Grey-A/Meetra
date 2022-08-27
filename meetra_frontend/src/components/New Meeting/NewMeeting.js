import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'


const NewMeeting = () => {
  return (
    <main>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Password'  id="password" /* onChange={(e) => setPwd(e.target.value)} value={pwd} required aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)}*/ 
          />
        </Form.Group>

        vincentcode0@gmail.com
      </Form>
    </main>
  )
}

export default NewMeeting
