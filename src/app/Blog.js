import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem'

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: '3cagkig24agh',
    accessToken: '5450e577c55109cb7076e901b6cecfd97567c8a4f2fc735b101ebcc5370f3876'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render () {
    return (
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </div>
    )
  }
}
export default Blog