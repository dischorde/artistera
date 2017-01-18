import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.makeReviewText();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeReviewText() {
    let body = (this.props.reviewText ? this.props.reviewText : "" );
    return {
      user_id: this.props.userId,
      course_id: this.props.courseId,
      body
    };
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault(e);
    let review = Object.assign({}, this.state);
    if (this.props.formType === 'new') {
      this.props.createReview(review);
    }
    else {
      review.id = this.props.reviewId;
      this.props.updateReview(review).then(() => this.props.closeModal());
    }
  }

  render() {
    let buttonText  =
    (this.props.formType === 'new' ? "Leave a Review" : "Update Review" );

    return (
      <div className="review-form">
        <form>
            <div className="rev-form-gravatar">
              <span className="rev-form-gravatar-letter">A</span>
              <img src={this.props.gravatarUrl}/>
            </div>

          <textarea onChange={this.handleChange}
            value={this.state.body} />
          <button onClick={this.handleSubmit}>{buttonText}</button>
        </form>
      </div>
  );
  }
}

export default ReviewForm;
