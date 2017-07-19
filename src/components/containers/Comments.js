import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from '../styles'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            comment:{
                username:'',
                body:'',
                timestamp:''
            },
            list:[]
        }
    }   

    updateUsername(event){
        let updatedUsername = Object.assign({},this.state.comment)
        // let updatedUsername = {...this.state.comment} 有空試
        updatedUsername['username'] = event.target.value

        this.setState({
            //注意修改方式
            comment:updatedUsername
        })
    }

    updateBody(event){
        let updatedComment = Object.assign({},this.state.comment)
        updatedComment['body'] = event.target.value

        this.setState({
            comment:updatedComment 
        })
    }

    updateTimestamp(event){
        let updatedComment = Object.assign({},this.state.comment)
        updatedComment['timestamp'] = event.target.value    

        this.setState({
            comment:updatedComment 
        })
    }

    submitComment(){
        // console.log(JSON.stringify(this.state.comment))
        let updatedList = [...this.state.list]
        updatedList.push(this.state.comment)
        this.setState({
            list:updatedList
        })
    }

	render(){
        const { comment } = styles

        const commentList = this.state.list.map((comment,i)=>{
            return(
                <li key={i}><Comment currentComment={comment}/></li>
            )
        })

		return(
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={comment.commentsBox}>
                    <ul style={comment.commenstList}>
                        { commentList }
                    </ul>
                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" />
                    <input onChange={this.updateBody.bind(this)} className="form-control"type="text" placeholder="Comment" />
                    <input onChange={this.updateTimestamp.bind(this)} className="form-control"type="text" placeholder="Timestamp" />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
	}
}

export default Comments