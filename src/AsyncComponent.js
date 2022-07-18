import React, { Component } from "react"

export default function asyncComponent(importComponent) {
  console.log("asyncComponent")
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = { component: null }
    }
    async componentDidMount() {
      console.log("hello")
      const { default: component } = await importComponent()
      console.log(component)
      this.setState({ component: component })
    }
    render() {
      const Component = this.state.component
      return Component ? <Component {...this.props} /> : null
    }
  }
  return AsyncComponent
}
