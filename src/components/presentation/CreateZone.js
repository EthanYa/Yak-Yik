import React, { Component } from 'react'

class CreateZone extends Component{

    constructor(){
        super()
        this.state = {
            zone:{
                name:'',
                zipCodes:''
            }
        }
    }

    updateZone(event){
        let { id ,value } = event.target
		let updatedZone = Object.assign({},this.state.zone)
		updatedZone[id] = value
		this.setState({
			zone:updatedZone
		})
    }

    submitZone(){
        let updatedZone = Object.assign({},this.state.zone)
        updatedZone['zipCodes'] = updatedZone.zipCodes.split(',')
        this.props.onCreate(updatedZone)
    }

    render(){
        return(
            <div>
                <h3>Create Zone</h3>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control"type="text" placeholder="Name" />
                <input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control"type="text" placeholder="ZipCode" />
                <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Comment</button>
            </div>
        )
    }
}

export default CreateZone