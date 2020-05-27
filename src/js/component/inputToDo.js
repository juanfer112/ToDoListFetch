import React from "react";
import List from "./list.js";

import "../../styles/index.scss";

export class InputToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			userInput: "",
			done: false
		};
		this.createUserApi = this.createUserApi.bind(this);
	}

	createUserApi() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify([]);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/juanfer112",
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	/* getList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/juanfer112", {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				setList(
					response.map((item, i) => {
						return item; //
					})
				);
			});
    };*/

	/* createList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/juanfer112", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: []
		})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
    };
    
        updateList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/juanfer112", {
			method: "PUT",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(list)
		})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

         deleteList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/juanfer112", {
			method: "DELETE",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};*/

	isEmpty(str) {
		console.log(str.replace(/^\s+|\s+$/gm, "").length);
		return str.replace(/^\s+|\s+$/gm, "").length == 0;
	}

	addToList(e) {
		if (e.which == 13 || e.keyCode == 13) {
			if (!this.isEmpty(this.state.userInput)) {
				let listArray = this.state.list.concat(this.state.userInput);
				this.setState({
					list: listArray,
					userInput: ""
				});
			}
		}
	}
	btnToList() {
		if (!this.isEmpty(this.state.userInput)) {
			let listArray = this.state.list.concat(this.state.userInput);
			this.setState({
				list: listArray,
				userInput: ""
			});
		}
	}
	btnDeleteClicked = id => {
		this.setState({
			list: this.state.list.filter((item, pos) => pos !== id)
		});
	};

	checkDone = e => {
		this.setState({
			done: !this.state.done
		});
	};

	/*checkBox = id => {
		const checkElement = this.state.list.map(element => {
			if (element.id == id) {
				element.done = !element.done;
			}
			return element;
		});
		this.setState({
			task: checkElement
		});
	};*/

	render() {
		return (
			<div className="container">
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => this.createUserApi()}>
					Pincha2
				</button>
				<div clasName="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h1 className="text-center">LIST TO DO</h1>
						<div className=" card card-body my-3">
							<div className=" input-group">
								<div className=" input-group-prepend">
									<div className="input-group-text bg-primary text-white">
										<i className="fas fa-book" />
									</div>
								</div>

								<input
									className="form-control text-capitalize"
									type="text"
									placeholder="TASK TO DO?"
									onChange={e => {
										this.setState({
											...this.state,
											userInput: e.target.value
										});
									}}
									value={this.state.userInput}
									onKeyPress={e => this.addToList(e)}
								/>
								<div className="input-group-addon">
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => this.btnToList()}>
										Pincha
									</button>
								</div>
							</div>
						</div>

						<ul className="list-group my-5">
							<List
								lista={this.state.list}
								btnDeleteClicked={this.btnDeleteClicked}
								done={this.state.done}
								checkDone={this.checkDone}
							/>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
