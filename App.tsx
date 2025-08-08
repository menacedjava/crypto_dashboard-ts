import React, { useState, useEffect } from 'react';

const App = () => {
    const [prices, setPrices] = useState<any>(null);

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => setPrices(data.bpi));
    }, []);

    return (
        <div>
            <h1>Crypto Prices</h1>
            {prices ? Object.keys(prices).map(k => (
                <p key={k}>{k}: {prices[k].rate}</p>
            )) : <p>Loading...</p>}
        </div>
    );
}

export default App;
