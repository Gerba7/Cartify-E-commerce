export const BASE_URL = 'http://localhost:5000/v1';


export async function fetchProducts(page, limit, query, sort, filter, cache) {
    
    try {
        
        const data = await fetch(`${BASE_URL}/products?page=${page}&limit=${limit}${query ? `&searchAdm=${query}` : ``}${sort ? `&sort=${sort}` : ``}${filter ? `&filter=${filter}` : ``}`, cache);
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Products: ${err}`);
        throw new Error('Failed to fetch products data.');

    }
}