import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListItem from './ListItem';

class App extends Component {

  constructor(){

    super();

    this.state = {
      
      newTodo:'Wash the dishes',

      editing:false,

      editingIndex: null,

      notification : null,

      todos: [{
        id:null,
        name_product:null,
        description:null
      }],

      loading:true
    };
    this.apiUrl = 'http://127.0.0.1:8000';
   
    this.login   = this.login.bind(this);
  }

    componentWillMount(){
        console.log('I will mount');
    }

    async componentDidMount(){

        var config = {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',}
        };

        
        const response = await axios.get(`${this.apiUrl}/api/product_list` , config);
        console.log("------------", response.data);
        this.setState({
          todos: response.data,
          loading:false
        });        
    }

    async login(){
        /*
        const todo = this.state.todos[this.state.editingIndex];

        const response = await axios.post(`${this.apiUrl}/api/login/${todo.id}`,{name: this.state.newTodo});

        todo.name = this.state.newTodo;

        const todos = this.state.todos;
        todos[this.state.editingIndex] = response.data;

        
        this.setState({ todos , editing:false , editingIndex:null, newTodo:'' });

        this.alert('Todo updating successfully');
        */
    }

  render(){

    return (
        <div className="App">


            <div className="row">

                <div className="col-lg-3 col-md-3 mb-3"></div>
                
                
                <div className="col-lg-8 col-md-8 mb-8">
                <div className="row">
                {this.state.todos.map((item, index)=> {
                    //console.log(item.id);
                    return <ListItem
                      key={item.id}
                      item={item.name_product}
                      price={item.price_product}
                      description={item.description_product}
                      editTodo={() => {this.editTodo(index);}}
                      deleteTodo={() => {this.deleteTodo(index);}} />;
                })}
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
