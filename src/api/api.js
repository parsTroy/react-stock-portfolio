const basePath = 'https://finnhub.io/api/v1'

export const searchSymbols = async (query) => {
    const url = `${basePath}/search?q=${query}&token=ccfkge2ad3i2p1r027ag`;
    const response = await fetch(url);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=ccfkge2ad3i2p1r027ag`;
    const response = await fetch(url);

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
}

export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=ccfkge2ad3i2p1r027ag`
    const response = await fetch(url);

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
}

export const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=ccfkge2ad3i2p1r027ag`;
    const response = await fetch(url);

    if(!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
}