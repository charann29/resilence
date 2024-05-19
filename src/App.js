import React, { useState } from 'react';
import Card from './Card';
import './App.css';
import data from './data.json'; // Import the structured data

const App = () => {
    const [filter, setFilter] = useState('Agriculture');

    const filteredCompanies = data.find(domainData => domainData.domain === filter).companies;

    return (
        <div className="app">
            <header>
                <h1>Company Directory</h1>
                <nav>
                    {data.map(domainData => (
                        <button key={domainData.domain} onClick={() => setFilter(domainData.domain)}>
                            {domainData.domain}
                        </button>
                    ))}
                </nav>
            </header>
            <main>
                <div className="card-container">
                    {filteredCompanies.map((company, index) => (
                        <Card key={index} company={company} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default App;
