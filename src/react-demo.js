import React from 'react'

export default function Demo(props) {
  console.log(props, props, React)
  // test jsx component
  return <div>
    <h1
      title="this is title"
      onClick={() => {}}
      data-test="1"
      data-test="2"
    >title</h1>
    <span title="this is desc">desc</span>
  </div>
}
