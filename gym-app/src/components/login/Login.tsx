import React, { useState } from "react";
import { Button, FormGroup, Label, Input} from "reactstrap";
import {Link} from "react-router-dom";
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

  function myFunction() {
    var x : HTMLInputElement;
    x = document.getElementById("examplePassword") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="Login">
      <img src="../../../../logo192.png" alt="Logo"></img>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={e => setEmail(e.target.value)} />         
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={e => setPassword(e.target.value)}/>        
          <Input type="checkbox" onClick={myFunction}/>Show Password
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm} type="submit">
          Login
        </Button>
        <Link to="/restorePass">Restore Password</Link>
      </form>
    </div>
  );
}