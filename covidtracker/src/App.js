import styles from './App.module.css';
import {Charts, Cards, CountryPicker} from './Components'
import { fetchData } from './api'
import React from 'react';


class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const responce = await fetchData();
    this.setState({data: responce})
  }

  handleCountryChange = async (country) =>{
    const responce = await fetchData(country);
    this.setState({data: responce, country: country})
  }

render(){
  return (
    <div className={styles.container}>
      <img src="https://i.ibb.co/7QpKsCX/image.png" />
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={this.state.data} country={this.state.country}/>
    </div>
  );
}

}

export default App;
