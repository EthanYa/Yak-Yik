import React, { Component } from 'react'
import { Zone ,CreateZone} from '../presentation'
import superagent from 'superagent'
import { APIManager } from '../../utils'

class Zones extends Component {

	constructor(){
		super()
		this.state = {
			list:[]
		}
	}

	componentDidMount(){
		console.log("hihihihihi")
		APIManager.get('/api/zone',null,(err,response)=>{
			if(err){
				alert('ERROR ' + err.message)
			}
			this.setState({
				list:response.results
			})
		})
	}

	//聰明寫法
	// updateZone(event){
	// 	let { id ,value } = event.target
	// 	let updatedZone = Object.assign({},this.state.zone)
	// 	updatedZone[id] = value
	// 	this.setState({
	// 		zone:updatedZone
	// 	})

	// }

	addZone(zone){
		let updatedZone = Object.assign({},zone)

		APIManager.post('/api/zone',updatedZone,(err,response)=>{
			if(err){
				alert('ERROR '+err.message)
				return
			}
			let updatedList = [...this.state.list]
			updatedList.push(response.result)
			this.setState({
				list: updatedList
			})
		})

		// console.log(this.state.zone)
		// let updatedList = [...this.state.list]
		// updatedList.push(this.state.zone)
		// this.setState({
		// 	list:updatedList
		// })
	}

	render(){
		const { list } = this.state
		return(
			<div>
				<ol>
					{
						list.map((zone,i)=>{
							return (
								<li key={i}>
									<Zone currentZone={zone} key={i}/>
								</li>
								)
						})
					}
				</ol> 
				<CreateZone onCreate={this.addZone.bind(this)}/>
			</div>
		)
	}
}

export default Zones