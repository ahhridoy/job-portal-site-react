import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Jobdetails.css';

const JobDetails = () => {

    const {productId}=useParams();
    const [details,setDetails]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/jobDetails/${productId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[]);

    return (
        <Container>
            <div className="d-flex align-items-center text-start p-5 shadow-lg rounded-3 mt-4">
                <div className="thumb">
                    <img className="w-100 companyLogo" src={details.logo} alt="Company Logo"/>
                </div>
                <div className="ms-4">
                    <h4>{details.title}</h4>
                    <div className="d-flex">
                        <div className="me-2 text-secondary">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <span>{details.location}</span>
                        </div>
                        <div className="me-2 text-secondary">
                            <i className="far fa-clock me-2"></i>
                            <span>{details.job}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start p-5 shadow-lg rounded-3 mb-5">
                <h4>Job Description</h4>
                <h6>Company: {details.company}</h6>
                <p>Posting Date: {details.postingDate}</p>
                <p className="jobDescription text-secondary mt-4">{details.desc}</p>
                <p className="text-secondary">Deadline: {details.deadline}</p>
                <div className="mt-5">
                    <Row>
                        <Col lg={6} md={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="name" placeholder="Your Name" className="py-3" />
                            </Form.Group>
                        </Col>
                        <Col lg={6} md={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"className="py-3"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Resume</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Form.Control type="text" placeholder="Your Portfolio Link" className="py-3"/>
                    <FloatingLabel controlId="floatingTextarea2" label="Cover Letter" className="mt-3">
                        <Form.Control as="textarea" style={{ height: '200px'}}/>
                    </FloatingLabel>
                </div>
                <Button variant="success mt-3 w-25 py-3">Apply Now</Button>
            </div>
        </Container>
    );
};

export default JobDetails;