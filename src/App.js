import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const arr = [
  { title: 'Keeper of the Light', price: 2340, text: 'Somebody that i use to know', imageUrl: '../../img/noimage.jpg' },
  { title: 'Witch Doctor', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
  { title: 'Juggernaut', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
  { title: 'Kunkka', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
  { title: 'LoneDruid', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
  { title: 'ABCDEFGJ', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
  { title: 'ABCDEFGJ', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
  { title: 'ABCDEFGJ', price: 1240, text: 'Like you like a love song', imageUrl: '../../img/noimage.jpg' },
];

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
        <Sidebar />
          <section>
            <div className='title-section'>
              <p>Название категории</p>
            </div>
            <div className='card-section'>
              {arr.map((Object) => (
                <Card
                  title={Object.title}
                  text={Object.text}
                  price={Object.price}
                  imageUrl={Object.imageUrl}
                />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
