import React, { Component } from 'react'
import "./BookDetails.css"
import ReactStars from "react-rating-stars-component";

class BookDetails extends Component {
    onClickHandler = (id) => {
        console.log("id",id)
    }
    render() {
        if(this.props.item){
            console.log("bookdetails")
            console.log(this.props)

        }
        const starRating = {
            size: 30,
            value: this.props.item.average_rating,
            edit: false,
            activeColor: "yellow",
            color: "grey",
        }

        console.log(this.props.average_rating)
        return (
            <div className="book-details" >
                <div>
                    <div>
                        <img src="https://source.unsplash.com/1600x900/?book,books" />
                        <button onClick={this.onClickHandler(this.props.item.bookID)}>view</button>
                    </div>
                    <div>
                        <p><span>Title:</span> {this.props.item.title}</p>
                        <p><span>Author:</span> {this.props.item.authors}</p>
                        <p><span>Price:</span> {this.props.item.price} <i class="fas fa-rupee-sign"></i> </p>
                        <p><span>Avg Rating:</span> {this.props.item.average_rating}</p>
                        <p><ReactStars {...starRating} /></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookDetails
