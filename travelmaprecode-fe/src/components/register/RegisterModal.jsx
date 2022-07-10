import React from 'react';
import {Modal, Button, Form, Container} from "react-bootstrap";

import './RegisterModal.css'

const RegisterModal = ({show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>닉네임</Form.Label>
                            <Form.Control placeholder="Nickname"/>
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <Form.Label>이메일</Form.Label>
                            <Form.Control type="email" placeholder="Email"/>
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password"/>
                        </Form.Group>
                        <br/>
                        <Button block variant="info" type="button" className="my-3">
                            회원가입
                        </Button>
                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};

export default RegisterModal;