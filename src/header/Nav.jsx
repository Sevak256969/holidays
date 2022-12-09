import { Component } from "react";
import menuItems from './header.json'
import {MenuItem } from '../MainTags';
import styles from './Header.module.css';

class Nav extends Component{   
    render(){
        return(
           <nav>
               <ul className={styles.menu__parent}>
                    {menuItems.map(item=>(
                    <MenuItem key={item.id}>{item.name}</MenuItem>
                ))}
               </ul>
           </nav>
        )
    }
};

export default Nav;