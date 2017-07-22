import React, { Component } from 'react'
import styles from '../styles'

class Zone extends Component {

	onSelectTitle(event){
		event.preventDefault()
		this.props.select(this.props.index)
	}

	render(){
		const { zone } = styles
		const { currentZone, isSelected } = this.props
		const title = isSelected ? <a style={zone.title} href="#">{currentZone.name}</a> : 
								   <a href="#">{currentZone.name}</a>
		return(
				<div style={zone.container}>
					<h2 onClick={this.onSelectTitle.bind(this)} style={zone.header}>
						{/* <a style={zone.tittle} href="#">{currentZone.name}</a> */}
						{title}
					</h2>
					<span className="detail">{currentZone.zipCodes[0]}</span><br/>
					<span className="detail">{currentZone.numComments} comments</span>
				</div>
		)
	}
}

export default Zone