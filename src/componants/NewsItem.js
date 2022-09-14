import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { source, title, description, url, urlToImage, date } = this.props
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}    <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={urlToImage?urlToImage:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{(title?title:'unlnown').slice(0,20)}</h5>
                        <p className="card-text">{(description?description:'unknown').slice(0,50)}</p>
                        <p className="card-text">{new Date(date).toDateString()} </p>
                        <a href={url} className="btn btn-dark btn-sm">read more</a>
                    </div>
                </div>

            </div>
        )
    }
}
