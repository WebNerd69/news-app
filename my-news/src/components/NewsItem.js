import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {imgSrc,title,desc,newsSrc} = this.props
    return (
        <div className="card my-3 h-100" >
            <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}...</h5>
              <p className="card-text">{this.props.desc}...Read more</p>
              <a href={this.props.newsSrc} target='_blank' rel="noreferrer" className="btn btn-primary">Read more <i class="ri-arrow-right-circle-line"></i></a>
            </div>
        </div>
    )
  }
}
