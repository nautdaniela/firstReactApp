// import React from 'react';
// // import ReactDOM from 'react-dom'
// // import logo from './logo.svg';
// import Sumoning from "./components/Sumoning";
// import Invocation from "./components/Invocation";
// import Hogwartsletter from './components/h'

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Sumoning name='noneee' potion='poison' />
//       <Invocation name='invocation1' potion='foc' />
//       <Invocation name='invocation2' potion='apa' />
//       <Invocation name='invocation3' potion='pamant' />
//       <Sumoning name='tibi' potion='fire' />
//       <Sumoning name='test' potion='ice' />
//     </div>
//   );
// }


// /* Diferente intre class and funtion components:
//   1. syntax
//   2. has state (class base), manage state through useState HOOK
//   3. 'this' present only in class

//   class -> className


//   Differecene between props and state 

//   1. props get passed to the component and state is managed to within the component
//   2. props is immutable, state is mutable
//   3. syntax: - functional components => props
//              - class base components => this.props

//              - functional components => HOOK - useState
//              - class base components => this.state
// */


// export default App;


import Hogwartsletter from './components/Hogwartsletter.js'
function App() {
  return (
    <div>
    {/* <Summoning />;
    <Magic />;
    <Magic1 /> */}
    {/* <Summoning name='name1' potions='ab1'/>
    <Summoning name='name2' potions='ab2'/>
    <Summoning name='name3' potions='ab3'/>
    <Toggle /> */}
    {/* <Clock date={new Date()} /> */}
    <Hogwartsletter />
    </div>
    )
}
export default App;