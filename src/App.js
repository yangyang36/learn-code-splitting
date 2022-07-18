import React from "react"

import "./App.css"
import Page1 from "./components/Page1"
//import Page2 from "./components/Page2"
//import Page3 from "./components/Page3"
import AsyncComponent from "./AsyncComponent"

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

class App extends React.Component {
  constructor() {
    super()
    this.state = { route: "page1" }
  }
  onRouteChange = async (route) => {
    // No code splitting
    this.setState({ route })
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
    // No code splitting
    //if (this.state.route === "page1") {
    //  return <Page1 onRouteChange={this.onRouteChange} />
    //} else if (this.state.route === "page2") {
    //  return <Page2 onRouteChange={this.onRouteChange} />
    //} else if (this.state.route === "page3") {
    //  return <Page3 onRouteChange={this.onRouteChange} />
    //}

    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === "page2") {
      const AsyncPage2 = AsyncComponent(() => import("./components/Page2"))
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === "page3") {
      const AsyncPage3 = AsyncComponent(() => import("./components/Page3"))
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
    }
  }
}
export default App
