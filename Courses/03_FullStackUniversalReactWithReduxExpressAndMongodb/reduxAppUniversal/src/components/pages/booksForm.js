'use strict';

import React, { Component } from 'react';
import {
    InputGroup, DropdownButton, Image, Col, Row, MenuItem,
    Well, Panel, FormControl, FormGroup, ControlLabel, Button
} from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import axios from 'axios';
import { postBooks, deleteBooks } from '../../actions/booksActions';

class BooksForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            images: [{}],
            img: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDeleteBook = this.onDeleteBook.bind(this);
    }

    componentDidMount() {
        // axios.get('/api/images')
        //     .then(function (response) {
        //         console.log('response: ', response);
        //         this.setState({
        //             images: response.data
        //         })
        //     }.bind(this))
        //     .catch(function (err) {
        //         this.setState({
        //             images: 'error loading image files from server',
        //             img: null
        //         })
        //     }.bind(this));

        axios.get('/api/images')
            .then(response => {
                this.setState({
                    images: response.data
                });
                
            })
            .catch(err => {
                this.setState({
                    images: 'error loading image files from server',
                    img: null
                })
            });
    }

    handleSubmit() {
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];

        this.props.postBooks(book);
    }

    onDeleteBook() {
        let bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBooks(bookId);
    }

    render() {
        const { books } = this.props;
        const booksList = books.map((item, key) => (
            <option key={key}>
                {item._id}
            </option>
        ));

        const { images } = this.state;
        const imagesList = images.map((item, key) => (
            <MenuItem key={key}>{item.name}</MenuItem>
        ));
        
        return (
            <Well>
                <Row>
                    <Col xs={12} sm={6}>
                        <Panel>
                            <InputGroup>
                                <FormControl type="text" ref="image" value="" />
                                <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title="Select an image"
                                bsStyle="primary"    
                                >
                                    {imagesList}
                                </DropdownButton>
                            </InputGroup>
                            <Image src="" responsive />
                        </Panel>    
                    </Col>
                    <Col xs={12} sm={6}>
                        <Panel>
                            <FormGroup controlId="title">
                                <ControlLabel>Title</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter title"
                                    ref="title"
                                >
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="description">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Description"
                                    ref="description"
                                >
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="price">
                                <ControlLabel>Price</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Price"
                                    ref="price"
                                >
                                </FormControl>
                            </FormGroup>
                            <Button onClick={this.handleSubmit} bsStyle="primary">
                                Save book
                            </Button>
                        </Panel>
                    </Col>
                </Row>
                
                <Panel style={{marginTop: '20px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            {booksList}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.onDeleteBook} bsStyle="danger">
                        Delete book
                    </Button>
                </Panel>
            </Well>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        postBooks,
        deleteBooks
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);