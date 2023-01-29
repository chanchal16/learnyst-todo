import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_TODO } from './todoSlice';
import { v4 as uuidv4 } from 'uuid';
 class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = ({
        todo: "",
    });
  }
  // add todo
  addTodo = () =>{
    const todoObj = {
      id:uuidv4(),
      todo:this.state.todo,
      isCompleted:false
    }
    this.props.ADD_TODO(todoObj);
    this.setState({todo:''})
  }
  
  render() {
    return (
      <form onSubmit={(e)=>e.preventDefault()} >
        <input type={'text'} className='input-field' value={this.state.todo} onChange={(e)=>this.setState({todo:e.target.value})} />
        <button onClick={this.addTodo} className='form-btn'>Add</button>
      </form>
    )
  }
}
export default connect(null,{ADD_TODO})(TodoForm);