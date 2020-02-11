import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";

const pushState = (obj, url) => window.history.pushState(obj, "", url);

class App extends React.Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired
  };
  state = this.props.initialData;

  fetchContest = contestId => {
    var xyz = "/contest/" + contestId;
    pushState({ currentcontestId: contestId }, xyz);
    api.fetchingContest(contestId).then(contest => {
      this.setState({
        currentcontestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };

  currentContest() {
    return this.state.contests[this.state.currentcontestId];
  }
  currentContent() {
    if (this.state.currentcontestId) {
      return <Contest {...this.currentContest()} />;
    }
    return (
      <ContestList
        contests={this.state.contests}
        onContestClick={this.fetchContest}
      />
    );
  }
  pageHeader() {
    if (this.state.currentcontestId) {
      return this.currentContest().contestName;
    }
    return "Naming Contests";
  }

  componentDidMount() {
    //console.log("component did mounted");
    //debugger;
  }

  componentWillUnmount() {
    //debugger;
  }

  render() {
    //debugger;
    return (
      <div className="App">
        <div>
          <Header message={this.pageHeader()} />
          {this.currentContent()}
        </div>
      </div>
    );
  }
}

export default App;
