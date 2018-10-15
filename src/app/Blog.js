import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

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
        <PageHeader color="is-info" title="Contentful Blog">
          This <strong>blog</strong> is a chronological mix of random posts on my perception.
        </PageHeader>
        <PageContent>
          { this.state.posts.map(({fields}, i) =>
            <BlogItem key={i} {...fields} />
          )}
        </PageContent>
      </div>
    )
  }
}
export default Blog