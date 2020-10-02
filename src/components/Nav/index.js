import React from 'react';
import { capitalizeFirstLetter} from '../../utils/helpers';

const Nav = () => {
    // must have a key attribute when map over JSX
    // after map() return only a single JSX element
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={capitalizeFirstLetter(category.name)}
                        >
                            <span onClick={() => categorySelected(capitalizeFirstLetter(category.name))}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

const categorySelected = name => {
    console.log(`${name} clicked`)
}

const categories = [
    {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
];

export default Nav;