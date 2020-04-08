import React, { Component } from 'react'

export default class CommentList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        comments: [
          { content: 'react is so fucking good', author: 'FACEBOOK' },
          { content: 'vue is so fucking good', author: 'ALL Chinese FE' },
        ]
      })
    }, 2000);
  }
  
  render() {
    return (
      <div>
        {
          this.state.comments.map((item, index) => 
            <Comment key={index} data={item} />
          )
        }
      </div>
    )
  }
}

function Comment({data}) {
  return <div>
    <p>{data.content}</p>
    <p>----{data.author}</p>
  </div>
}