import React, { Component } from "react";
import PropTypes from "prop-types";

class ContestPreview extends Component {
  handleClick = () => {
    this.props.ClickIt(this.props.id);
  };
  render() {
    return (
      <div className=" link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">{this.props.categoryName}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}
ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  ClickIt: PropTypes.func.isRequired
};

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId => (
      <ContestPreview
        key={contestId}
        ClickIt={onContestClick}
        {...contests[contestId]}
      />
    ))}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
