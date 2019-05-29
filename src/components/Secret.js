import React from "react";

export default class Secret extends React.Component{
	render(){
		return(
			<div>
				<p>This is a Secret Page</p>
				<button onClick={this.props.auth.logout}>Logout</button>
			</div>
			)
	}
}