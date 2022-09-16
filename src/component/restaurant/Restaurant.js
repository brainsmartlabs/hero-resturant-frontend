import React from 'react';
import { useState, useEffect } from 'react';

function Restaurant(props) {
    const [menuData, setMenuData] = useState({ flag: false, foodData: null, drinkData: null });
    //const [temp, setTemp] = useState(10);

    async function getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);
        let responseData = await response.json();
        console.log(responseData[0]); //Debug
        await setMenuData({ flag: true, foodData: responseData[0], drinkData: responseData[1] });
        console.log(menuData); //Debug
    }

    useEffect(() => { getData() }, []);

    return (
        <div>
            <h1>Menu</h1>
        </div>
    );
}
export default Restaurant;





/*
menuData.flag == true ?
                    <h2>Loading</h2> :
                    <div className='food-items'>
                        {
                            menuData.foodData.map(item => {
                                return <li>Food Name is {item.foodName},
                                    Price is {item.price},
                                    Catogory is {item.catogory}</li>
                            })
                        }
                    </div>*/


