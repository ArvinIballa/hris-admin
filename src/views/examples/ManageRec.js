
import React, {useState} from "react";

// reactstrap components
import 'bootstrap';
import Line42 from '../../assets/img/brand/Line42.png';
import Ellipse10 from '../../assets/img/brand/Ellipse10.png';
import AddTimeline from '../../assets/img/brand/AddTimeline.png';


import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
// core components
import UserHeader from "components/Headers/UserHeader.js";
import HeaderMR from "components/Headers/HeaderMR";

function ManageRecords  ( props )  {
  

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

// ------------------- FOR ADD ROW BTTN
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Name: '' , dateTaken: '', score: ''},
  ]);

  const [inputFields2, setInputFields2] = useState([
    { id: uuidv4(), Name2: '' , dateTaken2: ''},
  ]);

  const [inputFields3, setInputFields3] = useState([
    { id: uuidv4(), empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' },
  ]);

  const [inputFields4, setInputFields4] = useState([
    { id: uuidv4(), Name4: '' , occupation: '', age: '', emp:''},
  ]);

  const [inputFields5, setInputFields5] = useState([
    {id: uuidv4(),  Namechld: '' ,  agechld: ''},
  ]);

  const [inputFields6, setInputFields6] = useState([
    {id: uuidv4(),  Nameref: '' ,  occref: '', empref:''},
  ]);

  const [inputFields7, setInputFields7] = useState([
    {id: uuidv4(),  NameOrg: '' ,  descOrg: '',},
  ]);

  const [inputFields8, setInputFields8] = useState([
    {id: uuidv4(),  NatureOff: '' ,  courtJuri: '', dateFiled: ''}
  ]);


  // const handleAddFields = () => {
  //   setInputFields([...inputFields, { Name: '', dateTaken: '', score: ''}])
  // }
 
  // const handleAddFields2 = () => {
  //   setInputFields2([...inputFields2, { Name2: '', dateTaken2: '',}])
  // }

  // const handleAddFields3 = () => {
  //   setInputFields3([...inputFields3, { empName: '' , empAdd: '',  empTelNo: '', empSuVisor: '', empTitle: '', empStartIncome: '', empLastIncone: '', empRFL: '', empYoN: '', empReason: '' }])
  // }

  // const handleAddFields4 = () => {
  //   setInputFields4([...inputFields4, { Name4: '', occupation: '', age: '', emp:''}])
  // }

  // const handleAddFields5 = () => {
  //   setInputFields5([...inputFields5, { Namechld: '', agechld: ''}])
  // }

  // const handleAddFields6 = () => {
  //   setInputFields6([...inputFields6, { Nameref: '' ,  occref: '', empref:''}])
  // }

  // const handleAddFields7 = () => {
  //   setInputFields7([...inputFields7, { NameOrg: '' ,  descOrg: '',}])
  // }

  // const handleAddFields8 = () => {
  //   setInputFields8([...inputFields8, {NatureOff: '' ,  courtJuri: '', dateFiled: ''}])
  // }


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleChangeInput2 = (id, event) => {
    const newInputFields2 = inputFields2.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields2(newInputFields2);
  }

  const handleChangeInput3 = (id, event) => {
    const newInputFields3 = inputFields3.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields3(newInputFields3);
  }

  const handleChangeInput4 = (id, event) => {
    const newInputFields4 = inputFields4.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields4(newInputFields4);
  }

  const handleChangeInput5 = (id, event) => {
    const newInputFields5 = inputFields5.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields5(newInputFields5);
  }

  const handleChangeInput6 = (id, event) => {
    const newInputFields6 = inputFields6.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields6(newInputFields6);
  }

  const handleChangeInput7 = (id, event) => {
    const newInputFields7 = inputFields7.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields7(newInputFields7);
  }

  const handleChangeInput8 = (id, event) => {
    const newInputFields8 = inputFields8.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields8(newInputFields8);
  }

  

// ---------------------------------

//-------FOR SALARY-----------------
const [inputFields9, setInputFields9] = useState([
    {id: uuidv4(),  prevSal: '' ,  amountInc: '', DOI: '', descSal:''}
  ]);


const handleAddFields9 = () => {
    setInputFields9([...inputFields9, { prevSal: '' ,  amountInc: '', DOI: '', descSal:''}])
  }

  const handleChangeInput9 = (id, event) => {
    const newInputFields9 = inputFields9.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields9(newInputFields9);
  }


  return (
    <>
      <HeaderMR />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">A. PERSONAL INFORMATION</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-sa"
                          >
                            S.A. Number:
                          </label>
                          <Col sm="8">
                          <Input
                           class="form-control"
                           id="input-sa"
                           type="text"
                           placeholder="123ABC"
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empNo"
                          >
                           Employee Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empNo"
                            type="text"
                            placeholder="2021-ABC"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-dateemp"
                          >
                              Date Employed:
                          </label>
                          <Col sm="5">
                    
                            <Input
                            
                              type="date"
                              name="date"
                              id="input-dateemp"
                              placeholder="date placeholder"
                            />
                        
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-othName"
                          >
                              <span style={{display: "inline-flex"}}>Other<br/>Names:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-othName"
                            type="text"
                            placeholder="Aliases"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-name"
                          >
                            Name (LN,FN,MN):
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-name"
                            type="text"
                            placeholder="DOE, JOHN, JAMES"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-DoB"
                          >
                            <span style={{display: "inline-flex"}}>Date of<br/>Birth:</span>
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-DoB"
                            type="date"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nickName"
                          >
                            Nickname:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nickName"
                            type="text"
                            placeholder="JOHN"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-landNo"
                          >
                            Landline Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-landNo"
                            type="text"
                            placeholder="123-4567"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Weight"
                          >
                            Weight:
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-Weight"
                            type="text"
                            placeholder="kg"
                          />
                          </Col >
                          
                          <label
                            class="col-sm-2 col-form-label"
                            htmlFor="input-Height"
                          >
                            <span style={{display: "inline-flex"}}>Height:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-first-Height"
                            type="text"
                            placeholder="cm"
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-cpNo"
                          >
                            Cellphone Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="text"
                            placeholder="09123456789"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Religion"
                          >
                            Religion:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            placeholder="Iglesia Ni Cristo"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="gender"
                          >
                            Gender:
                          </label>
                          <Col sm='3 '>
                          <FormGroup>
                            <Input type="select" name="select" id="gender">
                            <option >Select</option>
                              <option selected>Male</option>
                              <option>Female</option>
                         
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-cityAdd"
                          >
                           <span style={{display: "inline-flex"}}>City<br/>Address:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-Religion"
                            type="text"
                            placeholder="123 Street, Block 1, Brgy. Avenue, Syudad City"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-provAdd"
                          >
                            Provincial Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-cpNo"
                            type="text"
                            placeholder="--"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* Need Ayusin */}
              

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-civStatus"
                          >
                            Civil Status:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="input-civStatus">
                            <option >Select</option>
                              <option selected>Single</option>
                              <option>Married</option>
                              <option>Widow</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                
                    </Row>
                    <span class="d-flex flex-row-reverse mx-6" >
                        <button type="button" class="btn btn-success" >Save</button>
                    </span>
                 
                  </div>

  {/* EDUCATIONAL BG */}
               
                    <Row >
                      <Col xs="8">
                        <h1 className="mb-5 mt-5" >B. EDUCATIONAL BACKGROUND</h1>
                      </Col>
                    </Row>
             
                  
                
                  <div className="pl-lg-0">
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-primSchool"
                          >
                           Primary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primSchool"
                            type="text"
                            placeholder="Junior School Academy"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-secondSchool"
                          >
                           Secondary School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondSchool"
                            type="text"
                            placeholder="Senior School Academy"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-primAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-primAddSchool"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-secondAddSchool"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-secondAddSchool"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled

                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGradPrim"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearGradPrim" placeholder="select"   disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGradSecond"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearGradSecond" placeholder="select"   disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
          {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-4"></h1>
                      </Col>
                   </Row>
         {/* ---------------------------------------------------- */}

                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-college"
                          >
                          College:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-college"
                            type="text"
                            placeholder="Senior University"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-gradSch"
                          >
                           Graduate School:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-gradSch"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addCollSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addCollSch"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addGradSch"
                          >
                           Address:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-addGradSch"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degColl"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degColl"
                            type="text"
                            placeholder="Lorem Street, Ipsum City"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Degree:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearColl"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearColl" placeholder="select" disabled>
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="yearGrad"
                          >
                            Year Graduated:
                          </label>
                          <Col sm='3'>
                          <FormGroup>
                            <Input type="select" name="select" id="yearGrad" placeholder="select" disabled> 
                            <option selected disabled>Select</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                              <option>2001</option>
                              <option>2002</option>
                              <option>2003</option>
                              <option>2004</option>
                              <option>2005</option>
                              <option>2006</option>
                              <option>2007</option>
                              <option>2008</option>
                              <option>2009</option>
                              <option>2010</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                            </Input>
                          </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-degGrad"
                          >
                           Others:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-degGrad"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">EXAMINATIONS TAKEN</h1>
                      </Col>
                   </Row>

                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-examName"
                          >
                            Name:
                          </label>
                          <Col sm="8">
                              <Input
                                  class="form-control"
                                  id="input-examName"
                                  name="Name"
                                  label="Name"
                   
                                  placeholder="Lorem Exam"
                               
                                />
                            </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-examTaken"
                          >
                            Date Taken:
                          </label>
                            <Col sm="5" >
                                <Input
                                  type="date"
                                  class="form-control"
                                  id="input-examTaken"
                                  name="dateTaken"
                                  label="Name"
                         
                                  
                                  
                                />
                             </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                              
                    <Row style={{display: "inline-flex", width: "100%"}}>
                        <Col  sm="6" >
                          <FormGroup row>
                              <label
                            
                                class="col-sm-3 col-form-label"
                                htmlFor="input-scoreExam"
                              >
                                Score:
                              </label>
                             <Col sm="5">
                                <Input
                                    class="form-control"
                                    id="input-scoreExam"
                                    name="score"
                                    variant="filled"
                                    placeholder="98%"
                                />
                             </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <span class="d-flex flex-row-reverse mx-6"  >
                           <button type="button" class="btn btn-success" >Save</button>
                      </span>
                   {/* <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-examName"
                          >
                            Name:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-examName"
                            type="text"
                            placeholder="Lorem Exam"
                    
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                       
                   <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-examTaken"
                          >
                            Date Taken:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="3" >
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-examTaken"
                            type="date"
                  
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col  md="1" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-scoreExam"
                          >
                            Score:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="2">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-scoreExam"
                            type="text"
                            placeholder="98%"
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>    */}
                         
 
                     
                      

                      
                   
                

                

                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">OTHER SKILLS / MACHINES OPERATED</h1>
                      </Col>
                   </Row>
                   
                   <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-skills"
                            
                          >
                            Skills:
                          </label>
                          <Col  >
                          <Input
                            class="form-control"
                            id="input-skills"
                            type="text"
                            placeholder="Autocad,Autodesk, MAYA"
                            disabled
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>
                  
                   
                             <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6" >
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-nameSeminar"
                          >
                            Name:
                          </label>
                     
                        
                      <Col md="9">
                    
                          <Input
                                class="form-control"
                                id="nameSeminar"
                                name="Name2"
                                label="Name"
                                placeholder="Lorem Exam"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-seminarTaken"
                          >
                            Date Taken:
                          </label>
                     
                      
                      <Col sm="5">
                     
                          <Input
                            
                                  type="date"
                                  class="form-control"
                                  id="dateTaken"
                                  name="dateTaken2"
                                  label="Name"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <span class="d-flex flex-row-reverse mx-6"  >
                            <button type="button" class="btn btn-success" >Save</button>
                    </span>

                   
                   {/* <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-1 col-form-label mr-6 "
                            htmlFor="input-skills"
                          >
                            Skills:
                          </label>
                          <Col sm="10" >
                          <Input
                            class="form-control"
                            id="input-skills"
                            type="text"
                            placeholder="Autocad, Autodesk, MAYA"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">SEMINARS / TRAININGS ATTENDED</h1>
                      </Col>
                   </Row>
                   <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-nameSeminar"
                          >
                            Name:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-nameSeminar"
                            type="text"
                            placeholder="Lorem Exam"
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-seminarTaken"
                          >
                            Date Taken:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="3" >
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-seminarTaken"
                            type="date"
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row> */}
                  
                   
                      
                       
                     
 
                   

                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">C. EMPLOYMENT HISTORY</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}
                      <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3"
                            htmlFor="input-empName"
                          >
                            Employer Name:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                                class="form-control"
                                id="empName"
                                name="empName"
                                label="empName"
                                placeholder="Lorem Exam"
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empAdd"
                          >
                            Address:
                          </label>
                     
                     
                      <Col sm="9">
                     
                          <Input
                             class="form-control"
                             id="empAdd"
                             name="empAdd"
                             label="empAdd"
                             placeholder="Lorem Street, Ipsum city"
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empTelNo"
                          >
                           Telephone No.:
                          </label>
                          <Col sm="9">
                          <Input
                             class="form-control"
                             id="input-empTelNo"
                             name="empTelNo"
                             label="empTelNo"
                             placeholder="1234567"
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empVisor"
                          >
                           Supervisor:
                          </label>
                          <Col sm="9">
                          <Input
                                class="form-control"
                                id="input-empVisor"
                                name="empSuVisor"
                                label="empSuVisor"
                                placeholder="Chad Wick"
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="empTitle"
                          >
                           Job Title:
                          </label>
                          <Col sm="9">
                          <Input
                               class="form-control"
                               id="empTitle"
                               name="empTitle"
                               label="empTitle"
                               placeholder="Lorem Engineer"
                               disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-empStartingIncome"
                          >
                           Starting Income:
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empStartingIncome"
                              name="empStartIncome"
                              label="empStartIncome"
                              placeholder="12,000"
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empLastIncome"
                          >
                           Last Income:
                          </label>
                          <Col sm="9">
                          <Input
                              class="form-control"
                              id="input-empLastIncome"
                              name="empLastIncone"
                              label="empLastIncone"
                              placeholder="12,000"
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="empRFL"
                          >
                            Reason for Leaving:
                          </label>
                     
                       
                      <Col md="9">
                     
                          <Input
                                class="form-control"
                                id="empRFL"
                                name="empRFL"
                                label="empRFL"
                                placeholder="Lorem "
                                disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
               
                    <Row >
                      <Col sm="12" >
                        <FormGroup row >
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            Have you ever terminated in a job?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline" >
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio1" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio2" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio2" >NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                             If yes, state the reason:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    className="form-control-alternative"
                                    id="details"
                                    rows="5"
                                    placeholder="--"
                                    disabled
                                    type="textarea"
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                   
{/*                         
                      <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-empName"
                          >
                            Employer Name:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-empName"
                            type="text"
                            placeholder="Lorem Exam"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-empAdd"
                          >
                            Address:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-empAdd"
                            type="text"
                            placeholder="Lorem Exam"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empTelNo"
                          >
                           Telephone No.:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empTelNo"
                            type="text"
                            placeholder="123-4567"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empVisor"
                          >
                           Supervisor:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empVisor"
                            type="text"
                            placeholder="Chad Wick"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empJO"
                          >
                           Job Title:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empJO"
                            type="text"
                            placeholder="Lorem Engineer"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empStartingIncome"
                          >
                           Starting Income:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empStartingIncome"
                            type="text"
                            placeholder="12,000"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empLastIncome"
                          >
                           Last Income:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empLastIncome"
                            type="text"
                            placeholder="12,000"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col  md="1" style={{marginRight:65}}>
                        <FormGroup row>
                          <label
                         
                            class="col-sm-auto col-form-label "
                            htmlFor="input-empAdd"
                          >
                            Reason for Leaving:
                          </label>
                     
                        </FormGroup>
                      </Col>
                      <Col md="6">
                      <FormGroup row>
                          <Col >
                          <Input
                            class="form-control "
                            id="input-empAdd"
                            type="text"
                            placeholder="Lorem Exam"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name" >
                            Have you ever terminated in a job?
                    </label>

                    <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio1" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio1">YES</label>
                    </div>
                    <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="terminated" id="inlineRadio2" value="option2" checked disabled/>
                            <label class="form-check-label" for="inlineRadio2">NO</label>
                    </div>

                    </Row>
                         
                          
                      <Row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-first-name">
                            If yes, state the reason:
                          </label>
                           <Col sm="10">
                                <FormGroup row>
                                
                                  <Col>
                                      <div className="pl-lg-0">
                                            <FormGroup>
                                            
                                              <Input
                                                className="form-control-alternative"
                                                rows="6"
                                                type="textarea"
                                                placeholder="--"
                                                disabled
                                              />
                                            </FormGroup>
                                      </div>
                                  </Col >
                                </FormGroup>
                           </Col>
                       </Row> */}
                       

                       {/* ---------------------------------------------------- */}
                       <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">D. FAMILY BACKGROUND</h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}
                      <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-nameFather"
                          >
                          <span style={{display: "inline-flex"}}>Father's<br/>Name:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameFather"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuFather"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-last-occuFather"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                   
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-bdayFather"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-bdayFather"
                            type="date"
                            disabled
                        
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageFather"
                            
                          >
                            <span style={{display: "flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageFather"
                            type="text"
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empFather"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empFather"
                            type="text"
                            placeholder="Lorem Inc."
                            disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                      {/* ---------------------------------------------------- */}
                      <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                     {/* ---------------------------------------------------- */}

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-nameMother"
                          >
                          <span style={{display: "inline-flex"}}>Mother's<br/>Name:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-nameMother"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-occuMother"
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-occuMother"
                            type="text"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdayMother"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-birthdayMother"
                            type="date"
                            disabled
                           
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageMother"
                            
                          >
                            <span style={{display: "flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageMother"
                            type="text"
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empMother"
                          >
                            Employer:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empMother"
                            type="text"
                            placeholder="--"
                            disabled
                      
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-addMother"
                          >
                            Address:
                          </label>
                     
                     
                      <Col md="8">
                   
                          <Input
                            class="form-control "
                            id="input-addMother"
                            type="text"
                            placeholder="Lorem Steet"
                            disabled
                            
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row >
                          <label
                            class="col-sm-3"
                            htmlFor="input-telMother"
                          >
                            Telephone No.:
                          </label>
                          <Col sm="8" >
                          <Input
                            class="form-control"
                            id="input-telMother"
                            type="text"
                            placeholder="1234567"
                            disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">BROTHERS & SISTERS</h1>
                      </Col>
                    </Row>

                                
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="nameBrother"
                          >
                            Name:
                          </label>
                     
                     
                      <Col md="9">
                     
                          <Input
                              class="form-control"
                              id="nameBrother"
                              name="Name4"
                              label="Name"
                              placeholder="Lorem Ipsum"
                              disabled
                         
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-3 col-form-label"
                            htmlFor="occuBrother"
                          >
                            Occupation:
                          </label>
                     
                      
                      <Col sm="4" >
                          <Input
                              class="form-control"
                              id="occuBrother"
                              name="occupation"
                              label="Name"
                              placeholder="--"
                              disabled
                        
                          />
                        </Col>
                                <label
                                  class="col-sm-2 col-form-label"
                                  htmlFor="ageBrother"
                                >
                                  Age:
                                </label>
                        
                          <Col sm="3">
                              <Input
                                  class="form-control"
                                  id="ageBrother"
                                  name="age"
                                  placeholder="15"
                                  disabled
                              />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>



                    <Row style={{display: "inline-flex", width: "100%"}}> 
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="empBrother"
                          >
                            Employer:
                          </label>
                     
                        
                      <Col md="9">
                    
                          <Input
                              class="form-control"
                              id="empBrother"
                              name="emp"
                              label="Name"
                              placeholder="Lorem Ipsum"
                              disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                 


                    
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IF MARRIED</h1>
                      </Col>
                     </Row>

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="nameSpouse"
                         
                          >
                            Name of Spouse:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="nameSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="occuSpouse"
                          
                          >
                           Occupation:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="occuSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-birthdaySpouse"
                          >
                            Birthday:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="input-birthdaySpouse"
                            type="date"
                            placeholder="--"
                            disabled
                     
                          />
                          </Col >
                          
                          <label
                            class="col-sm-1 col-form-label"
                            htmlFor="input-ageSpouse"
                            
                          >
                            <span style={{display: "flex"}}>Age:</span>
                          </label>
                          <Col sm="2">
                          <Input
                            class="form-control"
                            id="input-first-ageSpouse"
                            type="text"
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>


                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-empSpouse"
                          >
                            Employer Name:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-empSpouse"
                            type="text"
                            placeholder="--"
                            disabled
                          
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-spouseAdd"
                          >
                            Address:
                          </label>
                     
                     
                      <Col md="8">
                    
                          <Input
                            class="form-control "
                            id="input-spouseAdd"
                            type="text"
                            placeholder="--"
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
 
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 "
                            htmlFor="input-nameChild"
                          >
                            <span style={{display: "Flex"}}>Name of<br/>Child:</span>
                          </label>
                     
                      
                      <Col sm="8" >
                     
                          <Input
                              class="form-control"
                              id="input-nameChild"
                              name="Namechld"
                              label="Name"
                              placeholder="--"
                               disabled
                          />
                          </Col>
                          </FormGroup>
                      </Col>

                      <Col sm="6">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label "
                            htmlFor="input-ageChild"
                          >
                            Age:
                          </label>
                     
                       
                     
                      <Col sm="2">
                      
                          <Input
                           class="form-control"
                           name="input-agechld"
                           id="ageChild"
                           placeholder="--"
                           disabled
                          />
                         
                      </Col>
                      </FormGroup>
                      </Col>
                    </Row>

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">E. MEDICAL HISTORY</h1>
                      </Col>
                     </Row>
                     <Row >
                      <Col sm="12" >
                        <FormGroup row >
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            1. Have you had or do you have illnesses?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline" >
                            <input class="form-check-input" type="radio" name="illnesses" id="inlineRadio3" value="option1" disabled />
                            <label class="form-check-label" for="inlineRadio3">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="illnesses" id="inlineRadio4" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio4">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details"
                                    rows="5"
                                    disabled
                                
                                    type="textarea"
                                
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            2. Have you been hospitalized or under a doctor's care within the past 5 years?
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="hospitalized" id="inlineRadio5" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio5">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="hospitalized" id="inlineRadio6" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio6">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="11">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="details2"
                          >
                            If yes, give details:
                          </label>
                          <Col>
                          <div className="pl-lg-0">
                                <FormGroup>
                                
                                  <Input
                                    class="form-control"
                                    id="details2"

                                    rows="5"
                                    placeholder=""
                                    disabled
                                    type="textarea"
                                   
                                  />
                                </FormGroup>
                          </div>
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-5 col-form-label"
                            htmlFor="input-first-name"
                          >
                            3. Last Medical Checkup
                          </label>
                      
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="purpose"
                         
                          >
                           Purpose:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="purpose"
                            type="text"
                            placeholder="--"
                            disabled
                       
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="place"
                         
                          >
                           Place:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="place"
                            type="text"
                            placeholder="--"
                            disabled
                        
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6" >
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="date"
                         
                          >
                           Date:
                          </label>
                          <Col sm="5">
                          <Input
                            class="form-control"
                            id="date"
                            type="date"
                            placeholder="--"
                            disabled
                           
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                   

                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>

                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-distMarks"
                          >
                            4. Distinguishing Marks:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-distMarks"
                            placeholder="--"
                            disabled
                            type="text"
                          
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">F. References</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}

                    
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label  "
                            htmlFor="input-Nameref"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                           class="form-control"
                           id="nameRef"
                           name="Nameref"
                           label="Name"
                           placeholder="Lorem ipsum"
                           disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-Occuref"
                          >
                            Occupation:
                          </label>
                          <Col sm="9">
                          <Input
                        id="occRef"
                        class="form-control"
                        name="occref"
                        label="Name"
                        placeholder="Lorem ipsum"
                        disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-empref"
                          >
                            Employer:
                          </label>
                          <Col sm="9">
                          <Input
                           id="empRef"
                           class="form-control"
                           name="empref"
                           label="Name"
                           placeholder="Lorem ipsum"
                           disabled
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>



                    {/* -------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">G. ORGANIZATIONS</h1>
                      </Col>
                     </Row>
                     {/* -------------------------------------------- */}
                   
                     <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-NameOrg"
                          >
                            Organization Name:
                          </label>
                     
                        
                      <Col sm="9">
                    
                          <Input
                                   id="nameOrg"
                                   class="form-control"
                                   name="NameOrg"
                                   label="Name"
                                   placeholder="--"
                                   disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Namedesc"
                          >
                          Descriptions:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                            id="descOrg"
                            class="form-control"
                            name="descOrg"
                            label="Name"
                            placeholder="--"
                            disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>




                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-10"
                            htmlFor="input-first-name"
                          >
                            1. Have you ever been convicted, judicially or administratively of an offense or judicially declared 
                              insolvent, spendthrift, or incapacitated to contract? 
                          </label>
                          <Row sm="10" style={{display: "inline-flex"}}>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="convicted" id="inlineRadio7" value="option1" disabled />
                            <label class="form-check-label" for="inlineRadio7">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="convicted" id="inlineRadio8" value="option2" disabled checked />
                            <label class="form-check-label" for="inlineRadio8">NO</label>
                          </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>
                     
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col  sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-NameOrg"
                          >
                            Nature of Offense:
                          </label>
                      <Col sm="9">
                    
                          <Input
                                 class="form-control"
                                 name="NatureOff"
                                 label="Name"
                                  placeholder="--"
                                  disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                          <label
                         
                            class="col-sm-3 col-form-label"
                            htmlFor="input-Namedesc"
                          >
                          Court of Jurisdiction:
                          </label>
                     
                       
                      <Col sm="9">
                      
                          <Input
                             class="form-control"
                             name="courtJuri"
                             label="Name"
                             placeholder="--"
                             disabled
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="8">
                        <FormGroup row>
                              <label
                                      class="col-sm-3 col-form-label"
                                    >
                                    Date Filed :
                              </label>
                       
                      <Col sm="5">
                      
                          <Input
                              class="form-control"
                              name="dateFiled"
                              label="Name"
                              variant="filled"
                              type='date'
                              placeholder="--"
                              disabled
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                  
                    <Row >
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6"
                            htmlFor="input-first-name"
                            
                          >
                          2. Have you had a record of any denial of registration, or termination for cause, and of any disciplinary 
                            action taken,  or sanction imposed, upon by agency,  or by any exchange including any finding that
                            you were a cause of any disciplinary action or had violated any law?
                          </label>
                          <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="termination" id="inlineRadio9" value="option1" disabled />
                              <label class="form-check-label" for="inlineRadio9">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="termination" id="inlineRadio10" value="option2" checked disabled />
                              <label class="form-check-label" for="inlineRadio10">NO</label>
                            </div>

                          </Row >
                        </FormGroup>
                       </Col>
                    </Row>

                    

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 "
                            htmlFor="input-first-name"
                          >
                            3. Have you had a record of any denial, suspension, expulsion or revocation of any registration of a 
                            broker or dealer with which you were associated in any capacity when such action was taken?
                          </label>
                         <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="denial" id="inlineRadio11" value="option1" disabled />
                            <label class="form-check-label" for="inlineRadio11">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="denial" id="inlineRadio12" value="option2" disabled checked />
                            <label class="form-check-label" for="inlineRadio12">NO</label>
                          </div>

                           </Row>
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 "
                            htmlFor="input-first-name"
                          >
                            4. Have you had a record of any permanent or temporary injunction entered against you or any broker 
                            or dealer with which you were associated in any capacity at the time such injunction was entered?
                          </label>
                   <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="injunction" id="inlineRadio13" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio13">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="injunction" id="inlineRadio14" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio14">NO</label>
                          </div>

                           </Row>
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                            5. Have you had a record of any arrest or indictment for any felony, or any misdemeanor pertaining to 
                            securities, commodities, banking, insurance or real estate, fraud, false statements or omissions, 
                            wrongful taking of property or bribery, forgery, counterfeiting or extortion, and the disposition of the 
                            foregoing?
                          </label>
                        <Row sm="10" style={{display: "inline-flex", marginLeft: "100px"}}>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="indictment" id="inlineRadio15" value="option1" disabled/>
                            <label class="form-check-label" for="inlineRadio15">YES</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="indictment" id="inlineRadio16" value="option2" disabled checked/>
                            <label class="form-check-label" for="inlineRadio16">NO</label>
                          </div>

                          </Row>
                        </FormGroup>
                       </Col>
                    </Row>
{/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IN CASE OF EMERGENCY, PLEASE NOTIFY:</h1>
                      </Col>
                     </Row>
{/* --------------------------------------------------- */}

                    <Row style={{display: "inline-flex", width: "100%"}} >
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label "
                            htmlFor="input-emerName"
                          >
                            Name:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            placeholder="Lorem Ipsum"
                            disabled
                     
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerRelation"
                          >
                            <span style={{display: "flex"}}>Relationship:</span>
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerRelation"
                            type="text"
                            placeholder="Father"
                            disabled
                       
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  col-form-label"
                            htmlFor="input-emerAdd"
                          >
                            Address:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerAdd"
                            type="text"
                            placeholder="Lorem Ipsum City"
                            disabled
                     
                            
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>

                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-emerNum"
                          >
                            Phone Number:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerNumv"
                            type="text"
                            placeholder="1234-5678"
                            disabled
                         
                            
                          />
                          </Col >
                        </FormGroup>
                       </Col>
                    </Row>
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5">IMPORTANT NOTICE:</h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}


                    <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="12">
                        <FormGroup row>
                          <label
                            class="col-sm-6 col-form-label"
                            htmlFor="input-first-name"
                          >
                           I hereby certify that all information given above are true and correct to the best of my knowledge and belief and fully 
                           understand that any false statement herein, upon discovery thereof, will be sufficient cause for my immediate 
                           separation from the service of the Company.
                          </label>
                        </FormGroup>
                       </Col>
                    </Row>


                    
                    {/* ---------------------------------------------------- */}
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                     </Row>
                    {/* --------------------------------------------------- */}

                  
                    
                 

                   
                  </div>
              
                </Form>
              </CardBody>
            </Card>



        
          </Col>
        </Row>


        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mt-5">
              <CardHeader className="bg-white border-0" >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Work Information</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">

                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Position:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            placeholder="UI / UX Designer"
                          />
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-emerName"
                          >
                            Supervisor:
                          </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="text"
                            placeholder="JOHN JOSHUA DOE"
                          />
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>

                
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                              <label
                               
                              class="col-sm-3 col-form-label"
                              htmlFor="details"
                            >
                               <span style={{display: "flex"}}>Responsibility:</span>
                            </label>
                          <Col sm="9">
                          <Input
                            class="form-control"
                            id="details"
                            rows="6"
                            
                            
                        
                            type="textarea"
                            placeholder=" - Create user-friendly interfaces 
                            - Conduct user research
                            - Create user personas"
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                 
                  {/* <div class="form-group row">
                          <label
                            class="col-sm-auto col-form-label  "
                            htmlFor="input-first-name"
                          >
                            Responsibilities:
                          </label>
                          <Col sm="10">
                       
                        
                          <Col>
                          <div >
                                  <Input
                                    style={{marginLeft:30}}
                                    class="form-control " 
                                    rows="6"
                                    type="textarea"
                                    placeholder=" - Create user-friendly interfaces
                                                 - Conduct user research
                                                 - Create user personas"
                                  />
                               
                          </div>
                          </Col >
                        
                       </Col>
                  </div> */}
                  <Row style={{display: "inline-flex", width: "100%"}}>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3  "
                            htmlFor="input-emerName"
                          >
                            <span style={{display: "flex"}}>Leave<br/>Counts:</span>
                          </label>
                          <Col sm="3">
                          <Input
                            class="form-control"
                            id="input-emerName"
                            type="number"
                            placeholder="15"
                          />
                           {/* <MDBInput class="form-control"  type="number" /> */}
                          </Col >
                        </FormGroup>
                     </Col>
                  </Row>
                  <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" >Save</button>
                  </span>
                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow mt-5">
              <CardHeader className="bg-white border-0" >
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Payroll Information</h2>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                
                  <div className="pl-lg-0">
                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 "
                            htmlFor="input-tin"
                          >
                           <span style={{display: "flex"}}>Current<br/>Salary</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            placeholder="PHP18,000.00"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                  <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-tin"
                          >
                            TIN:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-tin"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-pagibig"
                          >
                          <span style={{display: "flex"}}>Pag-Ibig Fund No.:</span>
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-pagibig"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3 col-form-label"
                            htmlFor="input-sss"
                          >
                            SSS Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-sss"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-3"
                            htmlFor="input-philHealth"
                          >
                            PhilHealth Number:
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="input-philHealth"
                            type="text"
                            placeholder="1234567879"
                          />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>


                         {/* ---------------------------------------------------- */}
                         <Row className="align-items-center">
                      <Col xs="8">
                        <h1 className="mb-5 mt-5"></h1>
                      </Col>
                   </Row>
                      {/* ---------------------------------------------------- */}


                      { inputFields9.map(inputField9 => (
                            <div>
                                
                          
                        
                           <div>
                           <img src={Line42} alt="Line42" style={{position:'absolute', height:275, top:380}} />
                           <img src={Ellipse10} alt="Ellipse10" style={{position:'absolute', right:1528,marginTop:12, }} />
                           <button type="button"  data-toggle="modal" data-target="#exampleModalCenter"><img src={AddTimeline}  style={{position:'absolute',marginTop:270, right:1529  }}/></button>
                


                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Increase Salary</h5>
                              
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                              
                                <Row>
                                            <Col sm="12">
                                                <FormGroup row>
                                                <label
                                                    class="col-sm-auto col-form-label"
                                                    htmlFor="input-tin"
                                                >
                                                    Increase Amount:
                                                </label>
                                                <Col sm="9">
                                                <Input
                                                     name="amountInc"
                                                     label="amountInc"
                                                     variant="filled"
                                                    
                                                   
                                                />
                                                </Col>
                                                </FormGroup>
                                            </Col>
                              </Row>
                              <div class="form-group row">
                                            <label
                                                class="col-sm-auto col-form-label mr-5"
                                                htmlFor="input-first-name"
                                            >
                                                Description:
                                            </label>
                                        <Col sm="9">
                                            <FormGroup row>
                                            
                                            <Col>
                                                <div className="pl-lg-0">
                                               
                                                    
                                                    <Input
                                                        class="form-control mx-5"
                                                        rows="6"
                                                        type="textarea"
                                                       
                                                   
                                                    />
                                                   
                                                </div>
                                            </Col >
                                            </FormGroup>
                                        </Col>
                             </div>
                          
                                </div>
                                <div class="modal-footer">
                                   
                                    <button type="button" class="btn btn-success" data-dismiss="modal" onClick={handleAddFields9}>INCREASE SALARY</button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div> 
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45}}
                          >
                          Previous Salary:
                          
                          </label>
                          <Col sm="8">
                          <Input
                            class="form-control"
                            id="prevSal"
                            name="prevSal"
                            label="prevSal"
                            variant="filled"
                            placeholder="PHP15,000.00"
                            value={inputField9.prevSal}
                            disabled
                            onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>
                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45, marginRight:-15}}
                          >
                          Increase Amount:
                          
                          </label>
                          <Col sm="8">
                          <Input
                           class="form-control"
                           id="amountInc"
                           name="amountInc"
                           label="amountInc"
                           variant="filled"
                           placeholder="PHP3,000.00"
                           value={inputField9.amountInc}
                           disabled
                           onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45, marginRight:-10}}
                          >
                          Date of Increase:
                          
                          </label>
                          <Col sm="8">
                          <Input
                             class="form-control"
                             id="DOI"
                             name="DOI"
                             label="DOI"
                             variant="filled"
                             placeholder="03/07/2021"
                             value={inputField9.DOI}
                             disabled
                             onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>

                    <Row>
                      <Col sm="6">
                        <FormGroup row>
                          <label
                            class="col-sm-auto col-form-label"
                            htmlFor="input-empTelNo"
                            style={{marginLeft:45 ,marginRight:27}}
                          >
                          Description:
                          
                          </label>
                          <Col sm="8">
                          <Input
                                    class="form-control"
                                    id="descSal"
                                    name="descSal"
                                    label="descSal"
                                    variant="filled"
                                    placeholder="Promoted to Level 2 Position"
                                    value={inputField9.descSal}
                                    disabled
                                    onChange={event => handleChangeInput9(inputField9.id, event)}
                          />
                          </Col>
                        </FormGroup>
                      </Col>
              
                    </Row>
                           

                            </div>
                      )) }
                   
                    
                

                    <span class="d-flex flex-row-reverse mx-7"  >
                        <button type="button" class="btn btn-success" >Save</button>
                    </span>



                  </div>
              
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default ManageRecords;
