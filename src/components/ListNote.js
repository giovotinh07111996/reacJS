import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ListNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            note:"",
            showUpdate:false,
            indexEdit:null,
        }
    }
    renderNote = () => {
        return this.props.notes.map((element,index)=>{
            return <>
                <li>
                    <a onClick={()=>this.EditNote(index,element)}>{element}</a>
                    <a onClick={()=>this.props.DeleteNote(index)}>X</a>
                </li>
            </>
        })
    }
    editNote = (index,note) =>{
        this.setState({note:note});
        this.setState({indexEdit:index});
    }
    handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    render() {
        console.log("props",this.props)
        return (
            <>  
                <br />
                <div className="row">
                    <div className="col">
                        {this.renderNote()}
                    </div>
                    <div className="col">
                        { this.showUpdate === false &&
                            <>
                                <textarea className="form-control" value={this.state.note} onInput={this.handleInput} name="note"></textarea>
                                <button className="btn btn-primary" onClick={()=>this.props.AddNote(this.state.note)}>Save</button>  
                            </>
                        } 
                        { this.showUpdate === true &&
                            <>
                                <textarea className="form-control" value={this.state.note} onInput={this.handleInput} name="note"></textarea>
                                <button className="btn btn-primary" onClick={()=>this.props.EditNote(this.state.indexEdit,this.state.note)}>Update</button>   
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      notes: state.note
    }
  }

const mapDispatchToProps = dispatch => {
    return { 
        AddNote: (note) => dispatch({ type: 'ADD_NOTE',value:note}),
        DeleteNote: (index) => dispatch({type:"DELETE_NOTE",index:index}),
        EditNote: (index,note) => dispatch({type:"EDIT_NOTE",index:index,value:note}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNote)
