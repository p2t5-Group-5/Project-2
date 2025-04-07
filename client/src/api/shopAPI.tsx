


const addToCart = async () => {
    try{
        const response = await fetch('/api/shop', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        console.log("Added to cart!", data)

        if (!response.ok) {
            throw new Error('invalid cart API response!');
        }

        return data;
    } catch(err) {
        console.log('Error from data retrieval:', err);
        return[];
    }
};

 export { addToCart };



