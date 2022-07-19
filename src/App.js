import React, { Suspense } from "react"

import "./App.css"
import Page1 from "./components/Page1"
// Part 1 No Code splitting
//import Page2 from "./components/Page2"
//import Page3 from "./components/Page3"

//Part 2 Clean code splitting
//import AsyncComponent from "./AsyncComponent"

//Part 3 React.lazy
const Page2Lazy = React.lazy(() => import("./components/Page2"))
const Page3Lazy = React.lazy(() => import("./components/Page3"))

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: "page1",
      // Part 2 Code splitting - manual
      // component: null
    }
  }
  onRouteChange = async (route) => {
    // Part 1 No Code splitting

    this.setState({ route })

    //Part 2 Clean code splitting
    //if (route === "page1") {
    //  this.setState({ route })
    //} else if (route === "page2") {
    //  import("./components/Page2").then((page2) => {
    //    console.log(page2)
    //    this.setState({ route, component: page2.default })
    //  })
    //} else if (route === "page3") {
    //  const page3 = await import("./components/Page3")
    //  console.log(page3)
    //  this.setState({ route, component: page3.default })
    //}
  }
  render() {
    // Part 1 No Code splitting
    //if (this.state.route === "page1") {
    //  return <Page1 onRouteChange={this.onRouteChange} />
    //} else if (this.state.route === "page2") {
    //  return <Page2 onRouteChange={this.onRouteChange} />
    //} else if (this.state.route === "page3") {
    //  return <Page3 onRouteChange={this.onRouteChange} />
    //}
    // Part 2 Code splitting - manual , Part 3
    //if (this.state.route === "page1") {
    //  return <Page1 onRouteChange={this.onRouteChange} />
    //} else if (this.state.route === "page2") {
    //  const AsyncPage2 = AsyncComponent(() => import("./components/Page2"))
    //  return <AsyncPage2 onRouteChange={this.onRouteChange} />
    //} else if (this.state.route === "page3") {
    //  const AsyncPage3 = AsyncComponent(() => import("./components/Page3"))
    //  return <AsyncPage3 onRouteChange={this.onRouteChange} />
    //}
    // Part 4 - Ract .lazy
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === "page2") {
      return (
        <Suspense fallback={<div>Loading</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    } else if (this.state.route === "page3") {
      return (
        <Suspense fallback={<div>Loading</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    }
  }
}
export default App
