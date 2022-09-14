import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

import Spiner from './Spiner'

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20a18327653a41c280c08193bb16ce4c&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        let data = await fetch(url);
        let passDate = await data.json();
        this.setState({
            articles: passDate.articles,
            totalResults: passDate.totalResults,
            // loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData=async()=>{
        this.setState({ page: this.state.page + 1 })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20a18327653a41c280c08193bb16ce4c&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let passDate = await data.json();
        this.setState({
            articles: this.state.articles.concat(passDate.articles),
            totalResults: passDate.totalResults,
            loading: false
        })



    }
    // previous = async () => {
    //     this.updateNews();
    //     this.setState({ page: this.state.page - 1 })
    // }
    // next = async () => {
    //     this.updateNews();
    //     this.setState({ page: this.state.page + 1 })
    // }

    render() {
        return (
            <div className='container my-2'>
                <h2 className='my-3 text-center' >My-news</h2>
                {this.state.loading && <Spiner />}

                <hr />
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spiner/>}
                >
                <div className="row container">
                    {!this.setState.loading && this.state.articles.map((e) => {
                        return <div className="col-md-4 my-3" key={e.url} >
                            <NewsItem title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} date={e.publishedAt} source={e.source.name} />
                        </div>
                    })}
                </div>
                {/* <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={this.previous}>previous</button>
                    <button className="btn btn-primary" onClick={this.next}>next</button>
                </div> */}
                </InfiniteScroll>
            </div>
        )
    }
}
