import React, { useState } from "react";
import { Button, FormGroup, FormText, Label, Input } from "reactstrap";
import "./Login.css";

export default function Login(props:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event:any) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={e => setEmail(e.target.value)} />         
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={e => setPassword(e.target.value)}/>        
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}