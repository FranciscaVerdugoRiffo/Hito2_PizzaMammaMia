import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login'


function App() {
    return (
        <section>
            <Navbar />
              <main >
                {/*<Home />*/}
                {/*<Register /> */}
                <Login />
              </main>
            <Footer />
        </section>
    );
}

export default App;

