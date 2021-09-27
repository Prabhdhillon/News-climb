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
        <div className="row ">
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="Cricket got bannedd"
              imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/C1B5/production/_120698594_knight_getty.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Cricket got bannedd" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Cricket got bannedd" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
