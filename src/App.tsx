import * as React from 'react';
// import { Counter } from './features/counter/Counter';
import { GlobalStyle } from './components/GlobalStyle';
import SignUp from './features/singup/SignUp';

function App() {
  return (
    <div>
      {/*<Counter />*/}
      <SignUp />
      <GlobalStyle />
    </div>
  );
}

export default App;
