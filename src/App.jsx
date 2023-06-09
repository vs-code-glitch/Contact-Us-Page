import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import Contact from './components/ContactHeader/Contact'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <div>
      <NavBar />
      <main className='main-container'>
        <Contact />
        <ContactForm />
      </main>
    </div>
  );
}

export default App
