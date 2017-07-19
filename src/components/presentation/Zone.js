import React, { Component } from 'react'
import styles from '../styles'

class Zone extends Component {

	render(){
		const { zone } = styles
		const { currentZone } = this.props
		return(
				<div style={zone.container}>
					<h2 style={zone.header}>
						<a style={zone.tittle} href="#">{currentZone.name}</a>
					</h2>
					<span className="detail">{currentZone.zipCodes[0]}</span><br/>
					<span className="detail">{currentZone.numComments} comments</span>
				</div>
		)
	}
}

export default Zone