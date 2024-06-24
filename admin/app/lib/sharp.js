import sharp from 'sharp';



export default async function compressImage(file) {

    try {
        const image = await sharp(file)
            .resize({ width: 800, height: 600, fit: 'inside' }) // Adjust dimensions as needed
            .jpeg({ quality: 80 }) // Adjust compression quality as needed
            .toBuffer();
        return image;
    } catch (error) {
        console.error('Error validating or transforming image:', error.message);
        throw new Error('Invalid image format or size'); // Or handle differently
    }

}