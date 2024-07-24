import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {


  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center my-2'>News Headlines</h1>
        <hr className='my-4'/>
        <div className="row ">
            <div className="colItem col-md-4">
                <NewsItem imgSrc="" title="" desc="" newsSrc="/"/>
            </div>
            
            <div className="colItem col-md-4">
                <NewsItem imgSrc="" title="" desc="" newsSrc="/"/>
            </div>
            
            <div className="colItem col-md-4">
                <NewsItem imgSrc="" title="" desc="" newsSrc="/"/>
            </div>
            
        </div>
    </div>
    )
  }
}
