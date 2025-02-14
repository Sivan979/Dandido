import React from 'react';
import './SecondHeader.css';


const menuItems = [
  {
    title: "Men",
    links: [
      { name: "NIKE", url: "./nike-page/nike-page.html" },
      { name: "ADIDAS", url: "#" },
      { name: "PUMA", url: "#" },
      { name: "VANS", url: "#" }
    ]
  },
  {
    title: "Women",
    links: [
      { name: "NIKE", url: "./nike-page/nike-page.html" },
      { name: "ADIDAS", url: "#" },
      { name: "PUMA", url: "#" },
      { name: "VANS", url: "#" }
    ]
  },
  {
    title: "Kids",
    links: [
      { name: "NIKE", url: "./nike-page/nike-page.html" },
      { name: "ADIDAS", url: "#" },
      { name: "PUMA", url: "#" },
      { name: "VANS", url: "#" }
    ]
  }
];

function DropdownMenu() {
  return (
    <div className="second-header">
        <div className="dropdown">
            <ul className="main-menu">
                {menuItems.map((item) => (
                    <li className="main-item" key={item.title}>
                        <a href="#">{item.title}</a>
                        <div className="dropdown-second-menu">
                            <ul className="second-menu">
                                {item.links.map(link => (
                                    <li className="second-item" key={link.name}>
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default DropdownMenu;
