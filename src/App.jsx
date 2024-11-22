import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import  "./App.module.scss"
function Button(props) {
  return <button className={props.variant}>{props.children}</button>
}

  function App()  {
  return (
    <>
      <Header />
      <Button variant="btn btn-primary">Click me</Button>
      <Button variant="btn btn-secondary">Secondary Button</Button>
      <Button variant="btn btn-warning">Warning</Button>
      <Button variant="btn btn-danger">Danger</Button>
      <Button variant="btn btn-link">Click me</Button>
      <Footer />
    </>
  )
}

export default App;