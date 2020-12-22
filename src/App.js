import {connect} from 'react-redux'
import * as action from './actions'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
       note:""
    }
    this.renderListNote = this.renderListNote.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  renderListNote(){
    return this.props.notes.map(item => {
      return <li>{item}</li>
    }) 
  }
  addNote(){
    this.props.addNote(this.state.note);
  }
  handleChangeInput(event){
    let name  = event.target.name;
    let value  = event.target.value;
    this.setState({ [name]: value })
  }
  render() { 
    console.log("props",this.props)
    return ( 
      <div> 
          {this.renderListNote()}
          <textarea value={this.state.note} name="note" onInput={(event) => this.handleChangeInput(event)}>

          </textarea>
          <button onClick={this.addNote}>Send</button>
         {/* <Router>
          <Link to="/danhsachsanpham">Danh sach san pham</Link>
          <Link to="/chitietsanpham/2" >Chi tiet san pham</Link>
           <Switch>
              <Route path="/danhsachsanpham">
                    <ProductList />
              </Route>
              <Route exact path="/chitietsanpham">
                    <ProductList />
              </Route>
              <Route path="/chitietsanpham/:id">
                    <ProductDetail />
              </Route>
           </Switch>
           </Router> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.note.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (note) => dispatch(action.addNote(note))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)