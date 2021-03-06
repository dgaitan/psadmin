"use strict";

var React = require('react');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorsList');
var Router = require('react-router');
var Link = Router.Link;

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()  
		};
	},

	// componentWillMount, componentWillUnmount will Tell the store that we make a change using _onChange
	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	// Clean up when this component is unmounted
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	},

	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage;