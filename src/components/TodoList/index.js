import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { todoRemainingSelector } from '../../redux/selectors';
import todosSlice from './todosSlice';

export default function TodoList() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const todoList = useSelector(todoRemainingSelector);

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            priority={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(e) => setPriority(e)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            onClick={() => {
              dispatch(
                // addTodo({ id: uuidv4(), name, priority, completed: false })
                todosSlice.actions.addTodo({
                  id: uuidv4(),
                  name,
                  priority,
                  completed: false,
                })
              );
              setName('');
              setPriority('Medium');
            }}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
