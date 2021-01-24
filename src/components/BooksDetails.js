import React, { Component } from 'react'
import axios from 'axios'
import BookDetails from './BookDetails'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BookDetails.css"
import { computeHeadingLevel } from '@testing-library/react';
import { motion } from 'framer-motion'

export class BooksDetails extends Component {
    state = {
        datas: [],
        search: "",
        isLoading: true
    }

    componentDidMount(){
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
        .then(res => this.setState({
            datas: res.data
        }))
        .catch(err => console.log(err))
    }

    onChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state.search)

    }

    render() {
        const loader = {
            animationOne: {
                x: [-20, 20],
                y: [30, -30],
                transition: {
                    x: {
                        yoyo: Infinity,
                        duration: 0.5
                    },
                    y: {
                        yoyo: Infinity,
                        duration: 0.25
                    }
                }
            }
        }
        console.log(this.state.datas)

        const data = [];

        if(this.state.datas.length){
            for(let i = 0; i < 50; i++){
                data.push(this.state.datas[i])
                console.log(this.state.datas[i].bookID)
            }
        }

        let book;

        if(data.length){
            console.log("data-length",data.length)
            console.log("data filter 50", data);


            book = data.map(item => {
                    console.log(item)
                        return(
                            <BookDetails key={item.bookID} item={item}/>
                        )
                }
            )
        }

        else{
            book = (
                    <motion.div 
                        className="loading"
                        variants={loader}
                        animate="animationOne"
                    ></motion.div>
                
            )
        }

        return (
            <div className="books-details">
                <div>
                    <Form onSubmit={this.onSubmitHandler}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="search"
                                value={this.state.search}
                                onChange={this.onChangeHandler} 
                            />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
                <div className="book-box">
                    {book}
                </div>
            </div>
        )
    }
}

export default BooksDetails
