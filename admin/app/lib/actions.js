'use server'

import z from 'zod';
import { BASE_URL } from './httpRequests';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import axios from 'axios';


const productSchema = z.object({
    name: z.string(),
    category: z.string(),
    stock: z.coerce.number(),
    price: z.coerce.number(),
    year: z.coerce.number(),
    description: z.string(),
    condition: z.string(),
    transmission: z.string(),
    brand: z.string(),
    model: z.string(),
    location: z.string(),
    mileage: z.coerce.number(),
    type: z.string(),
});

const imageSchema = z.array(z.object({
    size: z.number().refine(size => size <= 5 * 1024 * 1024, {
        message: 'Image file size exceeds 5MB limit',
    }),
    type: z.string().refine(type => ['image/jpeg', 'image/png'].includes(type), {
        message: 'Invalid image file type. Only JPEG and PNG allowed.',
    }),
}));

const categorySchema = z.object({
    name: z.string(),
});




export async function createProduct(formData) {

    const productData = {};
    
    const images = new FormData();

    let hasFiles = false;
    
    for (const [key, value] of formData.entries()) {
        if (key.startsWith('file')) {
            if(value.size > 0) {
                images.append('file', value);
                hasFiles = true;
            }
        } else {
          productData[key] = value;
        }
    }
    
    try {

        await productSchema.parseAsync(productData);

        if (!hasFiles) {
            throw new Error('At least one image is required for product creation.');
        }

        // await imageSchema.parseAsync(images);
        
        if(hasFiles) {
            
            const uploadedImageKeys = await axios.post(
                `${BASE_URL}/products/upload`, 
                images,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )

            productData.img = uploadedImageKeys.data;

            const response = await fetch(`${BASE_URL}/products`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify(productData),
            });

            const createdProduct = await response.json();

        }

    } catch (err) {

        console.log('Error creating Product')

    }

    
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')

}



export async function deleteProduct(id) {
    
    try {

        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', 
            },
        });

        revalidatePath('/dashboard/products')

    } catch(err) {

        console.log('Error deleteing Product')

    }

}



export async function getProduct(id) {
    
    try {

        const response = await fetch(`${BASE_URL}/products/${id}`, {
            headers: {
              'Content-Type': 'application/json', 
            },
        });

        return response.json();

        // revalidatePath('/dashboard/products')

    } catch(err) {

        console.log('Error getting Product')

    }

}



export async function updateProduct(formData) {
    
    const productData = {};
    
    const images = new FormData();

    let hasNewFiles = false;

    const newFilesIndex = [];

    for (const [key, value] of formData.entries()) {
        if (key.startsWith('file') && typeof value !== 'string') {
            if(value.size > 0) {
                images.append('file', value);
                newFilesIndex.push((key.charAt(key.length - 1)) - 1)
                hasNewFiles = true;
            }
        } else {
          productData[key] = value;
        }
    }
    console.log(productData)
    
    try {
        
        await productSchema.parseAsync(productData);

        // await imageSchema.parseAsync(images);
        
        if(hasNewFiles) {
            
            const uploadedImageKeys = await axios.post(
                `${BASE_URL}/products/upload`, 
                images,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )

            productData.img = uploadedImageKeys.data;

        }

        productData.newFilesIndex = newFilesIndex;

        const response = await fetch(`${BASE_URL}/products/${productData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(productData),
        });

        const updatedProduct = await response.json();

    } catch (err) {

        console.log('Error updating Product')

    }

    
    revalidatePath(`/dashboard/products/${productData.id}`)

}




export async function toggleProduct(id, bool, type, amount) {     // Modifies inSotck value and discount amount and active state
    
    const productData = {};
    
    try {

        if(type === 'inStock') {
            productData.inStock = bool;
        } else {
            productData.discount = bool;
            productData.discountAmount = amount;
        }
        console.log(productData)
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(productData),
        });

        const updatedProduct = await response.json();

    } catch (err) {

        console.log('Error updating Product')

    }

    
    revalidatePath(`/dashboard/products`)

}




export async function fetchCategories() {

    try {
        
        const data = await fetch(`${BASE_URL}/categories`, { 
            cache: 'no-store',
            next: {
                tags: ['catagories']   // for revalidating tag when creating category
            } 
        });
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Products: ${err}`);
        throw new Error('Failed to fetch products data.');

    }
}




export async function createCategory(formData) {

    const categoryName = formData.get('name');

    try {

        const res = await fetch(`${BASE_URL}/categories`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ name: categoryName.toLowerCase()}),
        });

        revalidateTag('categories')

    } catch(err) {

        console.log(err)

    }

}




export async function deleteCategory(id) {
    
    try {

        const response = await fetch(`${BASE_URL}/categories/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', 
            },
        });

        revalidateTag('categories')

    } catch(err) {

        console.log('Error deleteing Category')

    }

}




export async function fetchUsers(page, limit, query, sort, filter, cache) {
    
    try {
        
        const data = await fetch(`${BASE_URL}/users?page=${page}&limit=${limit}${query ? `&search=${query}` : ``}${sort ? `&sort=${sort}` : ``}${filter ? `&filter=${filter}` : ``}`, cache);
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Users: ${err}`);
        throw new Error('Failed to fetch users data.');

    }
}




export async function fetchOrders(page, limit, query, sort, filter, cache) {
    
    try {
        
        const data = await fetch(`${BASE_URL}/orders?page=${page}&limit=${limit}${query ? `&search=${query}` : ``}${sort ? `&sort=${sort}` : ``}${filter ? `&filter=${filter}` : ``}`, cache);
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Orders: ${err}`);
        throw new Error('Failed to fetch orders data.');

    }
}




export async function createBrand(formData) {

    const brandName = formData.get('name');

    try {

        const res = await fetch(`${BASE_URL}/brands`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ name: brandName.toLowerCase()}),
        });

        revalidateTag('brands')

    } catch(err) {

        console.log(err)

    }

}




export async function deleteBrand(id) {
    
    try {

        const response = await fetch(`${BASE_URL}/brands/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', 
            },
        });

        revalidateTag('brands')

    } catch(err) {

        console.log('Error deleteing Brand')

    }

}



export async function fetchBrands() {

    try {
        
        const data = await fetch(`${BASE_URL}/brands`, { 
            cache: 'no-store',
            next: {
                tags: ['brands']   // for revalidating tag when creating category
            } 
        });
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Brands: ${err}`);
        throw new Error('Failed to fetch brands data.');

    }
}



export async function createModel(formData) {

    const modelName = formData.get('name');
    const brandId = formData.get('brandId'); 

    try {

        const res = await fetch(`${BASE_URL}/models/${brandId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ name: modelName.toLowerCase()}),
        });

        revalidateTag('models')

    } catch(err) {

        console.log(err)

    }

}




export async function deleteModel(id) {
    
    try {

        const response = await fetch(`${BASE_URL}/models/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json', 
            },
        });

        revalidateTag('models')

    } catch(err) {

        console.log('Error deleteing Model')

    }

}



export async function fetchModels(brandId) {

    try {
        
        const res = await fetch(`${BASE_URL}/model/${brandId}`, { 
            cache: 'no-store',
            next: {
                tags: ['models']   // for revalidating tag when creating category
            } 
        });
        
        return res.data

    } catch(err) {

        console.log(`Error fetching Models: ${err}`);
        throw new Error('Failed to fetch models data.');

    }
}





