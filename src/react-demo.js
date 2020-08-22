import React from 'react'

export default function Demo(props) {
  console.log(props, props, React)
  const prop = {
    name: 'body name',
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3',
  }
  // test jsx component
  return <div>
    <h1
      title="this is title"
      onClick={() => {}}
      data-test="1"
      data-test="2"
    >title</h1>
    <span title="this is desc">desc</span>
    <span {...prop} ></span>
  </div>
}
