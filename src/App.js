
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Forms } from './components/Form'
import { Todo } from './components/Todolist'
import { useDispatch } from 'react-redux';
import { deleteAll } from './redux/action'


function App() {
  const dispatch = useDispatch();
  const [editFormVisibility, setEditFormVisibility] = useState(true);
  const [editTodo, setEditTodo] = useState('');

  const handleEditClick = (todo) => {
    setEditTodo(todo)
    setEditFormVisibility(false)
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (

    <Container>
      <Row className='flex justify-content-center'>
        <Col xs={5}>
          <h2>Todo List</h2>
          <Forms editTodo={editTodo} editFormVisibility={editFormVisibility}
            setEditFormVisibility={setEditFormVisibility} cancelUpdate={cancelUpdate} />
          <Todo handleEditClick={handleEditClick} />
          <div className='top-btn' >
            <Button variant="outline-primary" onClick={() => dispatch(deleteAll())}>Delete All</Button>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
