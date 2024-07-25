import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    category:"general"
  }

  articles=[]
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false,
      page : 1,
      totalResults : null

    }
  }
  async componentDidMount(){
    this.setState({loading:true})
    
    let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=8ec5b19c791b464bb10d0098311baee3&page=1&pageSize=18&language=en`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults ,loading:false})
  }
  
  handlePrevClick = async ()=>{
    this.setState({loading:true})
    if(this.state.page<=1){
    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=8ec5b19c791b464bb10d0098311baee3&page=${this.state.page-1}&pageSize=18&language=en`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults ,page: this.state.page -1,loading:false})
    }
  }
  
  handleNextClick = async ()=>{
    this.setState({loading:true})
    if (this.state.page>=Math.ceil(this.state.totalResults/18)){

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=8ec5b19c791b464bb10d0098311baee3&page=${this.state.page + 1}&pageSize=18&language=en`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults ,page: this.state.page + 1,loading:false})
    }

  }
  render() {
    return (
      <div className='container my-4'>
        <h2 className='text-center my-2' style={{fontWeight:"bold"}}>News Headlines</h2>
        <hr className='my-1'/>
        {this.state.loading && <Loading/>}
        <div className="row ">
          {!this.state.loading && this.state.articles.map((element)=>{

            return <div className="colItem col-md-4 my-2" key={element.url}>
                <NewsItem imgSrc={element.urlToImage?element.urlToImage:"https://i.pinimg.com/736x/bb/7d/05/bb7d05db99d92ca96fb9c4d3092fb006.jpg"} title={element.title?element.title:""} desc={element.description?element.description:""} newsSrc={element.url}/>
            </div>
          })}
          <div className="container d-flex justify-content-between my-4">
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}><i className="ri-arrow-left-line"></i></button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page>=Math.ceil(this.state.totalResults/18)}><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
    </div>
    )
  }
}
