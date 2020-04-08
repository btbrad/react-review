import React, { Component } from 'react'

export default class CommentList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setInterval(() => {
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
            <Comment key={index} {...item} />
          )
        }
      </div>
    )
  }
}

// class Comment extends React.PureComponent {

//   render() {
//     const { content, author } = this.props
//     console.log('组件重新渲染了')
//     return (
//       <div>
//         <p>{content}</p>
//         <p>----{author}</p>
//       </div>
//     )
//   }

// }


// function Comment({data}) {
//   console.log('组件重新渲染了')
//   return <div>
//     <p>{data.content}</p>
//     <p>----{data.author}</p>
//   </div>
// }


const Comment = React.memo((props) => {
  const { content, author } = props
  console.log('组件重新渲染了')
  return <div>
    <p>{content}</p>
    <p>----{author}</p>
  </div>
})
