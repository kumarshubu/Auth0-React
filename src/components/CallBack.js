import React from "react";
import Auth from "../Auth";

export default class CallBack extends React.Component{
	componentDidMount(){
		const auth = new Auth();
		auth.handleAuthentication();
	}
	render(){
		return(
			<div>
			Loading...
			</div> 
			)
	}
}