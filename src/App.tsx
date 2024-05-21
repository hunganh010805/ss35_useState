import React from 'react'
// import Hook from './components/Hook'
// import UseState from './components/UseState'
import Bt1 from './components/Bt1'
import Bt2 from './components/Bt2'
import ChangeColor from './components/Bt3'
import Toggle from './components/Bt4'
import Form from './components/Bt5'
import Count from './components/Bt6'
export default function App() {
  return (
    <div>
      <Hook></Hook>
      <UseState></UseState>
      <p>--------------------------------------------------------------------------------------------------------</p>
     <Bt1></Bt1>
     <Bt2></Bt2>
     <ChangeColor></ChangeColor>
     <Toggle></Toggle>
     <Form></Form>
     <Count></Count>
    </div>
  )
}