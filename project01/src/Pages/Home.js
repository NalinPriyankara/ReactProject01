import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/About">Go to the about page</Link>
      <Link to="/contact">Go to the contact page</Link>
    </div>
  )
}
