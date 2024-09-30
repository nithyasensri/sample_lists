

import { Row, Col, Button, Form } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/action';


export const Forms = ({ editTodo, editFormVisibility, setEditFormVisibility, cancelUpdate }) => {

    console.log(editTodo)
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo])

    const addName = (e) => {
        setName(e.target.value);
    }

    const subItem = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let addName = {
            id: time,
            todo: name,
            completed: false
        }
        setName('');
        dispatch(addTodo(addName))

    }

    const editSubmit = (e) => {
        e.preventDefault();
        let update = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(update))
        setEditFormVisibility(true)
    }

    console.log(editValue)

    return (
        <div className='d-flex justify-content-center'>
            {editFormVisibility ? (<Form onSubmit={subItem}>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={9} style={{ 'padding': '0px' }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter Name" onChange={addName} value={name} />
                                </Form.Group>
                            </Col>
                            <Col xs={3} style={{ 'padding': '0.5px' }}>
                                <Button variant="primary" type="submit" style={{ 'padding': '6px 21px' }}>
                                    Add
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>) :
                (<Form onSubmit={editSubmit}>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={9} style={{ 'padding': '0px' }}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter Name"
                                            onChange={(e) => setEditValue(e.target.value)} value={editValue || ""} />
                                    </Form.Group>
                                </Col>
                                <Col xs={3} style={{ 'padding': '0.5px' }}>
                                    <Button variant="primary" type="submit" style={{ 'padding': '6px 21px' }}>
                                        Update
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Button variant="primary" type="button" style={{ 'padding': '6px 21px' }}  onClick={cancelUpdate}>
                                    Back 
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Form>)
            }
        </div>
    );
}

