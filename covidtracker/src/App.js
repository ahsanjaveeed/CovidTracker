import styles from './App.module.css';
import {Charts, Cards, CountryPicker} from './Components'
import { fetchData } from './api'
import React from 'react';

class App extends React.Component {

  async componentDidMount(){
    const data = await fetchData();
    console.log(data)
  }

render(){
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Charts />
    </div>
  );
}

}

export default App;
