import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import  {fetchData} from './api';
import imagePng from './image/image.png';

class App extends Component{
    state={
        data:{},
        country:''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    countryHandle= async(country)=>{
        // console.log(country)
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country:country})
    }
    render(){
        const {data, country} = this.state
        return(
            <div className={styles.container}>
                <img src={imagePng} alt="covid pic" className={styles.image} />
                <Cards data={data} country={country} />
                <CountryPicker countryHandle={this.countryHandle} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;