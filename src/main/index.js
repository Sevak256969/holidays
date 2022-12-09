import { Component } from 'react';
import FindGift from './findGift/index';
import Holidays from './holidays/Holidays';
import HowToWork from './howToWork';
import Ready from './ready';
import Best from './best';

class Main extends Component{
    render(){
        return(
            <main>
                <FindGift/>
                <HowToWork/>
                <Holidays/>
                <Ready/>
                <Best/>
            </main>
        )
    }
};


export default Main;