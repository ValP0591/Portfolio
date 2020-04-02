import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'


const BlogPage = () => {
  const data = useStaticQuery (graphql `
    query {
      allContentfulBlogPost (sort: { fields: publishedDate,order: DESC } ) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow:true)
          }
        }
      }
    }
  `)
    return (

        <Layout>
          <Head title="Blog"/>
          <h1>My blog</h1>
          <p>Here is my posts</p>
            <ol className={blogStyles.posts}>
              {data.allContentfulBlogPost.edges.map((edge) => {
                  return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                        <h3>{edge.node.title}</h3>
                        <p>{edge.node.publishedDate}</p>
                        <p>Time to read is about {edge.node.timeToRead} min.</p>
                        </Link>
                    </li>
                  )
              })}
            </ol>
          
        </Layout>
    )
}

export default BlogPage 