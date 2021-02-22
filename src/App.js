import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";

function App() {

  const errorOut = () => {
    throw new Error("Testing Sentry")
  }


  const loginJohn = () => {
    Sentry.setUser({ email: "john.doe@example.com", id: "1" });
    // Sentry.setTag("", "");
  }

  const loginRob = () => {
    Sentry.setUser({ email: "rob.small@example.com", id: "2" });
    // Sentry.setTag("", "");
  }

  const addContext = () => {
    const bodyRequest = {
      donorName: "Rogger Laso",
      caseId: 241415,
      active: false,
    }
    Sentry.setContext("body", JSON.stringify(bodyRequest))
    // Sentry.setTag("", "");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <button onClick={() => errorOut()} type='button'>ERROR</button>
       <button onClick={() => loginJohn()} type='button'>LOGIN JOHN</button>
       <button onClick={() => loginRob()} type='button'>LOGIN ROB</button>
       <button onClick={() => addContext()} type='button'>ADD BODY CONTEXT</button>
      </header>
    </div>
  );
}

export default Sentry.withProfiler(App);
