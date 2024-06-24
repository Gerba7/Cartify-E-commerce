'use server'

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from 'zod';


const productSchema = z.object({
    name: z.string(),
    category: z.string(),
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
    user: z.string()
});


const userSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" })
});


export async function fetchProducts(page, limit, query, sort, filter, brand, model, condition, category, minPrice, maxPrice, minMileage, maxMileage, minYear, maxYear, cache) {
    
    try {
        
        const data = await fetch(`${process.env.BASE_URL}/products?page=${page}&limit=${limit}&inStock=true${query ? `&search=${query}` : ``}${sort ? `&sort=${sort}` : ``}${filter ? `&filter=${filter}` : ``}${brand ? `&brand=${brand}` : ``}${model ? `&model=${model}` : ``}${condition ? `&condition=${condition}` : ``}${category ? `&category=${category}` : ``}${minPrice ? `&minPrice=${minPrice}` : ``}${maxPrice ? `&maxPrice=${maxPrice}` : ``}${minMileage ? `&minMileage=${minMileage}` : ``}${maxMileage ? `&maxMileage=${maxMileage}` : ``}${minYear ? `&minYear=${minYear}` : ``}${maxYear ? `&maxYear=${maxYear}` : ``}`, cache);
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Products: ${err}`);
        throw new Error('Failed to fetch products data.');

    }
}



export async function getProduct(id) {
    
    try {

        const response = await fetch(`${process.env.BASE_URL}/products/${id}`, {
            cache: 'no-store',
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



export async function createProduct(formData) {

    const productId = [];

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
                `${process.env.BASE_URL}/products/upload`, 
                images,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )

            productData.img = uploadedImageKeys.data;

            const response = await fetch(`${process.env.BASE_URL}/products`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify(productData),
            });

            const createdProduct = await response.json();

            productId.push(createdProduct._id)

        }

    } catch (err) {

        console.log(`Error creating Product: ${err}`)

    }

    console.log(productId)
    redirect(`/sell/${productId}/published`)

}



export async function fetchBrands() {

    try {
        
        const data = await fetch(`${process.env.BASE_URL}/brands`, { 
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




export async function fetchCategories() {

    try {
        
        const data = await fetch(`${process.env.BASE_URL}/categories`, { 
            cache: 'no-store',
            next: {
                tags: ['catagories']  
            } 
        });
        
        return data.json();

    } catch(err) {

        console.log(`Error fetching Products: ${err}`);
        throw new Error('Failed to fetch products data.');

    }
}



export async function signUp(prevState, formData) {

    
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    
    const validateUser = userSchema.safeParse(user);

    if(!validateUser.success) {
        const errorMessage = validateUser.error.flatten().fieldErrors;
        return { 
            success: false,
            message:  errorMessage.password || errorMessage.email
        }
    }

    
    try {

        const res = await fetch(`${process.env.BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user),
        });

        const data = await res.json();
        
        cookies().set('accessToken', data?.accessToken, {
            //domain: '.bookit.com',
            httpOnly: true, // accesible only by web server
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 45 
        })
    
        cookies().set('refreshToken', data?.refreshToken, {
            //domain: '.bookit.com',
            httpOnly: true, // accesible only by web server
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 50 * 60 
        })
    
        cookies().set('li', 'true', {
            //domain: '.bookit.com',
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 50 * 60
        })
    
        if (data?.savedUser?.isAdmin) {
            cookies().set('ia', 'true', {
                //domain: '.bookit.com',
                //secure: true, // when implementing https
                //sameSite: 'strict', // cross-site cookie
                maxAge: 50 * 60 
            })
        }

        const {isAdmin, ...userData} = data?.savedUser;

        cookies().set('user', JSON.stringify(userData), {
            //domain: '.bookit.com',
            httpOnly: true, // accesible only by web server
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 50 * 60 
        })
        
        return userData;


    } catch(err) {

        console.log(err)

    }

    if(formData.get('path') === '/login') {
        redirect('/sell')
    }

}



export async function login(prevState, formData) {

    if(formData.get('action') === 'register') {
        return signUp(prevState, formData)
    }
    
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    const validateUser = userSchema.safeParse(user);

    if(!validateUser.success) {
        const errorMessage = validateUser.error.flatten().fieldErrors;
        return { 
            success: false,
            message:  errorMessage.password || errorMessage.email
        }
    }

    try {

        const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user),
        });

        const data = await res.json();
        
        cookies().set('accessToken', data?.accessToken, {
            //domain: '.bookit.com',
            httpOnly: true, // accesible only by web server
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 45 
        })
    
        cookies().set('refreshToken', data?.refreshToken, {
            //domain: '.bookit.com',
            httpOnly: true, // accesible only by web server
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 50 * 60 
        })
    
        cookies().set('li', 'true', {
            //domain: '.bookit.com',
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 50 * 60
        })
    
        if (data?.userData?.isAdmin) {
            cookies().set('ia', 'true', {
                //domain: '.bookit.com',
                //secure: true, // when implementing https
                //sameSite: 'strict', // cross-site cookie
                maxAge: 50 * 60 
            })
        }

        const {isAdmin, ...userData} = data.userData;

        cookies().set('user', JSON.stringify(userData), {
            //domain: '.bookit.com',
            httpOnly: true, // accesible only by web server
            //secure: true, // when implementing https
            //sameSite: 'strict', // cross-site cookie
            maxAge: 50 * 60 
        })


    } catch(err) {

        return console.log(err)

    }

    if(formData.get('path') === '/login') {
        redirect('/sell')
    }

}




export async function logout() {
    
    const cookieStore = cookies()
    
    cookieStore.getAll().forEach((cookie) => {
        cookieStore.delete(cookie.name);
    });

    redirect('/')

}