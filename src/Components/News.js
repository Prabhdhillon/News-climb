import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "What have England learned this summer?",
      description:
        "At the end of the busiest summer for women's cricket, BBC Sport looks at the positives and negatives from a season like no other.",
      url: "http://www.bbc.co.uk/sport/cricket/58612626",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/C1B5/production/_120698594_knight_getty.jpg",
      publishedAt: "2021-09-27T14:52:27.2661384Z",
      content:
        "This has been a summer like no other for women's cricket in England.\r\nEngland finish their home summer having drawn a Test match, won six of their eight one-day internationals and lost only two of th… [+5516 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Moeen retires from Test cricket",
      description:
        "England all-rounder Moeen Ali announces his retirement from Test cricket.",
      url: "http://www.bbc.co.uk/sport/cricket/58701999",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16EE0/production/_120702939_whatsubject.jpg",
      publishedAt: "2021-09-27T07:22:27.1010183Z",
      content:
        "Moeen Ali took the third most Test wickets by a spinner for England\r\nEngland all-rounder Moeen Ali has announced his retirement from Test cricket, but will continue to play in limited-overs internati… [+330 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">
          <b>News Climb</b> -Latest News
        </h1>
        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
