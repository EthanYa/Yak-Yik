import React, { Component } from 'react'

class CreateComment extends Component{
    constructor(){
        super()
        this.state = {
            comment: {
                username:'',
                body:''
            }
        }
    }
    updateComment(event){
        let updateComment = Object.assign({},this.state.comment)
        updateComment[event.target.id] = event.target.value
        this.setState({
            comment: updateComment
        })
    }
    submitComment(){
        this.props.onCreate(this.state.comment)
    }
    render(){
        return(
            <div>
                <h3>Create Comment</h3>
                <input onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text" placeholder="Username" />
                <input onChange={this.updateComment.bind(this)} id="body" className="form-control"type="text" placeholder="Comment" />
                <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
            </div>
        )
    }
}

export default CreateComment