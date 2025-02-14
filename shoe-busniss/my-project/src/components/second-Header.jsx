import React from 'react';
import './SecondHeader.css';
import { Link } from "react-router-dom";


const menuItems = [
  {
    title: "Men",
    links: [
      { name: "NIKE", url: "/brand/nike" },
      { name: "ADIDAS", url: "/brand/adidas" },
      { name: "PUMA", url: "/brand/puma" },
      { name: "VANS", url: "/brand/vains" }
    ]
  },
  {
    title: "Women",
    links: [
      { name: "NIKE", url: "/brand/nike" },
      { name: "ADIDAS", url: "/brand/adidas" },
      { name: "PUMA", url: "/brand/puma" },
      { name: "VANS", url: "/brand/vains" }
    ]
  },
  {
    title: "Kids",
    links: [
      { name: "NIKE", url: "/brand/nike"},
      { name: "ADIDAS", url: "/brand/adidas" },
      { name: "PUMA", url: "/brand/puma" },
      { name: "VANS", url: "/brand/vains" }
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
                        <a href="">{item.title}</a>
                        <div className="dropdown-second-menu">
                            <ul className="second-menu">
                                {item.links.map(link => (
                                    <li className="second-item" key={link.name}>
                                        <Link to={link.url}>{link.name}</Link>
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
