const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

// Save data to the cache
export const saveDataToCache = (data, key) => {
    const cacheData = {
        data,
        timestamp: new Date().getTime(),
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
};

// Get data from the cache if it is still valid
export const getDataFromCache = (key) => {
    //localStorage.removeItem('cart');
    const cacheData = localStorage.getItem(key);
    if (cacheData) {
        const parsedCacheData = JSON.parse(cacheData);
        const { data, timestamp } = parsedCacheData;
        const currentTime = new Date().getTime();
        if (currentTime - timestamp < EXPIRATION_TIME) {
            return data;
        } else {
            localStorage.removeItem(key);
        }
    }
    return null;
};