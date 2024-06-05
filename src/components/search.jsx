import { useState } from 'react';

export default function SearchComponent({ items }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <input type='text' placeholder='Search...' value={searchTerm} onChange={handleSearchChange} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
