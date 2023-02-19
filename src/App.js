import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  // const title = "Hoşgeldiniz "
  // const likes = 50
  // const person = {name:"Furkan", age:"26"}
  // const link = "https://www.google.com"
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/create">
          <Create />
          </Route>
          <Route path="/blogs/:id">

          <BlogDetails></BlogDetails>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        {/* <h1> { title} ReactApp Component</h1>
        <p>Beğeniler: {likes} tane.</p>
        <p>Adı: {person.name} - Yaşı: {person.age}</p>
        <p>{1}</p>
        <p>{"String"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link} target="_blank">Google</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
