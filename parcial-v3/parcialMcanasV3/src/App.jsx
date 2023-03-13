import React, { useState } from 'react'
import RunnerForm from './components/RunnerForm'
import Runner from './components/Runner'
import { Container } from './styles/StyledComponent'

function App() {

  const [view, setView] = useState("runnerForm");
  const [values, setValues] = useState(null);

  const handleView = (page) => {
    setView(page);
  };

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
    setView("runner");
  };

  return (
    <Container className='App' content="evenly">
        {
          view === "runnerForm" && (<RunnerForm handleFetchValues={handleFetchValues} />)
        }
        {
          view === "runner" && (<Runner {...values} />)
        }
      </Container>
  )
}

export default App