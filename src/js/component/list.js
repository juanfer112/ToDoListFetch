/*import React from "react";*/
import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/index.scss";
//import Posts from "./Posts";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			userInput: ""
		};
	}
	styleCompleted() {
		return {
			fontSize: "20px",
			color: this.props.done ? "gray" : "black",
			textDecoration: this.props.done ? "line-through" : "none"
		};
	}

	render() {
		const { btnDeleteClicked, lista, checkDone } = this.props;
		return (
			<div>
				{lista.map((e, i) => (
					<li
						key={i}
						style={this.styleCompleted()}
						className="list-group-item text-capitalize d-flex justify-content-between my-2">
						{e}
						<input type="checkbox" onChange={() => checkDone(e)} />
						<button
							style={btnDelete}
							onClick={() => btnDeleteClicked(i)}>
							x
						</button>
					</li>
				))}
			</div>
		);
	}
}

const btnDelete = {
	fontSize: "18px",
	background: "#ea2027",
	color: "#fff",
	border: "none",
	padding: "10px 15px",
	borderRadius: "50%",
	cursor: "pointer",
	float: "rigth"
};

List.propTypes = {
	lista: PropTypes.any,
	btnDeleteClicked: PropTypes.any,
	checkDone: PropTypes.any,
	done: PropTypes.any
};

export default List;
