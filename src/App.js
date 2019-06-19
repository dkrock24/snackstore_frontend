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

      searchTodo: null,

      todos: [{
        id:null,
        name_product:null,
        description:null
      }],

      loading:true
    };
    this.apiUrl = 'http://127.0.0.1:8000';


   
//    this.login   = this.login.bind(this);
  }

    componentWillMount(){
        console.log('I will mount');
    }

    async componentDidMount(){

          const { handle } = this.props.match.params;
          var response=null ;
          var info = null;

        var config = {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',}
        };
        
        
        if( handle == null ){
          
           response = await axios.get(`${this.apiUrl}/api/product_list` , config);
           info = response.data;
        }
        else{
          
           response = await axios.get(`${this.apiUrl}/api/product?name=${handle}`, config); 
           info = response.data.data;
        }
        
        this.setState({
          todos: info,
          loading:false
        });
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
                      likes={item.total}
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
