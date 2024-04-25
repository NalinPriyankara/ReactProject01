import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <TopicBox food= "Rice" price= "Rs.300">
        <span>This is a description</span>
      </TopicBox>
      <TopicBox food= "Kottu" price= "Rs.400">
        <button>This is a button</button>
      </TopicBox>
      <TopicBox food= "Noodles" price= "Rs.250"/>
    </div>
  )
}
