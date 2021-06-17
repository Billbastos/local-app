import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import styled from '@emotion/styled'

const App = () => {
  return (
    <StyledApp>
      <Router basename="/local-app">
       
        <Nav>
          <Ul>
            <Li>
              <Link to="/" className='App-link'>Home</Link>
            </Li>
            <Li>
              <Link to="/about" className='App-link'>About</Link>
            </Li>
            <Li>
              <Link to="/contact" className='App-link'>Contact</Link>
            </Li>
          </Ul>
        </Nav>
        
        <Main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </Router>
      </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`
const Main = styled.main`
  margin: 20px 0;
`

const Nav = styled.nav`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Ul = styled.ul`
  display: inline;
  list-style: none;
  padding: 0;
`

const Li = styled.li`
  display: inline;
  margin: 0 10px;
  a {
    color: #61dafb;
    text-decoration: none;
  }
`

export default App;
