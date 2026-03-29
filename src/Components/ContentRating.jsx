
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    // Initialize the states for the likes and dislikes count
    // within the constuctor of the current component.

    this.state = { // Creation of this.state object
      likes: 0, // initialize the values
      dislikes: 0,
      totalRatings: 0,
      //create two event handlers
      handleLike: () => {
        // code logit to increase likes value
        // The arrow function utilized the setState method to update
        // the component's state.
        // Inside the setState, the previous state (prevState) is 
        // accessed, which holds the previous state of the component
        // before the update.
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        // code logic to increase dislikes value
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
      }
    };
  
  render() {
    return (
    <div className='content-rating'> // This div acts as a parent div for other tags
      <p>
        Text
      </p>
      <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className="dislike-button" onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
        <button className="total-rating">
          Calculate Total ({this.state.totalRatings})
        </button>
      </div>
      <div>
          <p>Total Ratings: {this.state.totalRatings}</p>
      </div>
    </div>
    );
  }
}

export default ContentRating;
