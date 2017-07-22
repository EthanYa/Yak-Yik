import React, { Component } from 'react'
import { Comment , CreateComment } from '../presentation'
import superagent from 'superagent'
import styles from '../styles'
import { APIManager } from '../../utils'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            // comment:{
            //     username:'',
            //     body:''
            // },
            list:[]
        }
    }   

	componentDidMount(){
        APIManager.get('/api/comment',null,(err,response)=>{
            if(err){
                alert('ERROR '+err.message)
            }
            this.setState({
				list:response.results
			})
        })
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

    // updateTimestamp(event){
    //     let updatedComment = Object.assign({},this.state.comment)
    //     updatedComment['timestamp'] = event.target.value    

    //     this.setState({
    //         comment:updatedComment 
    //     })
    // }

    submitComment(comment){
        // console.log("submit" ,comment)
        // let updatedComment = Object.assign({},this.state.comment)
        let updatedComment = Object.assign({},comment)
        APIManager.post('/api/comment',updatedComment,(err,response)=>{
          if(err){
            alert(err)
            return
          }
          let updatedList = [...this.state.list]
          updatedList.push(response.result)
          this.setState({
              list:updatedList
          })
        })

        // let updatedList = [...this.state.list]
        // updatedList.push(this.state.comment)
        // this.setState({
        //     list:updatedList
        // })
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
                    <CreateComment onCreate={this.submitComment.bind(this)}/>
                </div>
            </div>
        )
	}
}

export default Comments