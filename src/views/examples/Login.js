import api from "api/api";
import React, { Component } from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  onEmailChange = email => {
    this.setState({email})
  }
  onPasswordChange = password => {
    this.setState({password})
  }
  handleLogin = () => {
    const {email, password} = this.state
    const users = {email, password}
    api.post('employees/login', users)
    .then(res => {
      console.log(res)
    })
  }
  render(){
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-3">
              <div className="text-left text-muted">
                  <h1 style={{}}>Login to Admin Portal</h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
             
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      onChange={this.onEmailChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={this.onChange}
                    />
                  </InputGroup>
                </FormGroup>
               
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={this.handleLogin}>
                    <Link to="/admin/EmployeeRegistration" style={{color:"white"}}>Log In</Link>
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
         
        </Col>
      </>
    );
  };
  }

 

export default Login;
