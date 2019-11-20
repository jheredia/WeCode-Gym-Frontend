import React, { useState } from "react";
import { Button, FormGroup, Label, Input} from "reactstrap";
import "./RestorePass.css";

export default function RestorePass(props:any) {
  const [email, setEmail] = useState("");

  function validateForm() {
    return email.length > 0;
  }

  function handleSubmit(event:any) {
    event.preventDefault();
  }

  return (
    <div className="RestorePass">
      <img src="../../../../logo192.png" alt="Logo"></img>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={e => setEmail(e.target.value)} />         
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}