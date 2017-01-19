import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.makeReviewText();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeReviewText() {
    let currentReview = this.props.reviews[this.props.reviewId];
    let body = (currentReview ? currentReview.body : "" );

    return {
      user_id: this.props.userId,
      course_id: this.props.courseId,
      body
    };
  }

  handleChange(e) {
    this.props.clearReviewErrors();
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault(e);
    let review = Object.assign({}, this.state);
    if (review.body === "") {
      return this.props.receiveReviewErrors(
        { [this.props.formType]: ["Body cannot be blank"]}
      );
    }

    if (this.props.formType === 'new') {
      this.props.createReview(review)
      .then(() => this.setState({body: ""}));
    }
    else {
      review.id = this.props.reviewId;
      this.props.updateReview(review).then(() => this.props.closeModal());
    }
  }

  render() {
    const { formType, gravatarUrl, allErrors } = this.props;
    let buttonText, errors;
    let errorStatus = "hidden-errors";

    if ( formType === 'new') {
      buttonText = "Leave a Review";
    }
    else {
      buttonText = "Update Review";
    }

    if (allErrors[formType].length > 0) {
      errors = allErrors[formType].map(
        (message, i) => <li key={i}>{message}</li>);
      errorStatus = "errors";
    }

    return (
      <section className="review-form">
        <form>
            <div className="rev-form-gravatar">
              <span className="rev-form-gravatar-letter">{this.props.firstLetter}</span>
              <img src={this.props.gravatarUrl}/>
            </div>
          <section className="rev-form-body">
            <textarea onChange={this.handleChange}
              value={this.state.body} />
            <ul className={errorStatus}>
              {errors}
            </ul>
            <button onClick={this.handleSubmit}>{buttonText}</button>
          </section>
        </form>
      </section>
  );
  }
}

export default ReviewForm;
