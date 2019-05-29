import React from "react";

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<p>Hello, {this.props.name}<br/>
				Do you want to see the secret area? <a href="/secret">Click Here</a>
				</p>
				{!this.props.auth.isAuthenticated()&&
				<div>
				<hr/>
				Please login first
				<hr/>
				<button onClick={this.props.auth.login}>Login</button>
				</div>
			}
			</div>
			)
	}
}