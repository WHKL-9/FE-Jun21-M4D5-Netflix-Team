import React from 'react'
import './MyFooter.css'
import { Container, Row, Col, Button } from "react-bootstrap"
export default function MyFooter(){

    return (
      <Container className= "Footer d-flex justify-content-center mx-auto">
        
         
          <Row>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Audio and Subtitles</a>
                </li>
                <li>
                  <a href="#home">Media Centrer</a>
                </li>
                <li>
                  <a href="#home">Privacy</a>
                </li>
                <li>
                  <a href="#home">Contact Us</a>
                </li>
              </ul>
              <Button variant="outline-dark">Service Code</Button>

              <p>Ⓒ 1997-2019 Netflix, Inc. 23448755</p>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Audio Description</a>
                </li>
                <li>
                  <a href="#home">Investor Relaions</a>
                </li>
                <li>
                  <a href="#home">Legal Notices</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Help Center</a>
                </li>
                <li>
                  <a href="#home">Jobs</a>
                </li>
                <li>
                  <a href="#home">Cookie Preferences</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Gift Cards</a>
                </li>
                <li>
                  <a href="#home">Terms of Use</a>
                </li>
                <li>
                  <a href="#home">Corporate Information</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        
      
    )
  }
