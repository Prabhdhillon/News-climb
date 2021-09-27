import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">
          <b>News Climb</b> -Latest News
        </h1>
        <NewsItem title="Cricket" description="Cricket got bannedd" />
      </div>
    );
  }
}

export default News;
