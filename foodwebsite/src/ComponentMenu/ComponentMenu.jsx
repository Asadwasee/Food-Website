// Menu.js
import React from 'react';
import './ComponentMenu.css'; // Create a CSS file for styling

const menuItems = [
    {
        category: 'BREAKFAST',
        items: [
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/breakfast-1.jpg' },
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/breakfast-2.jpg' },
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/breakfast-3.jpg' }
        ],
    },
    {
        category: 'LUNCH',
        items: [
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/lunch-1.jpg ' },
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/lunch-2.jpg ' },
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/lunch-3.jpg' }
        ],
    },
    {
        category: 'DINNER',
        items: [
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/dinner-1.jpg' },
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/dinner-2.jpg' },
            { name: 'Beef Roast Source', price: '$29', description: 'Meat, Potatoes, Rice, Tomatoe', image: 'https://themewagon.github.io/tasteit/images/dinner-3.jpg' }
        ],
    },
];

const Menu = () => {
    return (
        <div className="menu-container">
            <h2 className="menu-heading">Our Menu</h2>
            <div className="menu-grid">
                {menuItems.map((category, index) => (
                    <div key={index} className="menu-category">
                        <h3>{category.category}</h3>
                        {category.items.map((item, idx) => (
                            <div key={idx} className="menu-item">
                                <img src={item.image} alt={item.name} className="menu-item-image" />
                                <div className="menu-item-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                    <span className="menu-item-price">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
