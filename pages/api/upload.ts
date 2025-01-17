import { v2 as cloudinary } from 'cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { file } = req.body; // Base64 từ client gửi lên

        if (!file) {
            return res.status(400).json({ message: 'File is required' });
        }

        const uploadResponse = await cloudinary.uploader.upload(file, {
            upload_preset: 'blog-app',
        });

        return res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).json({ message: 'Upload failed' });
    }
}
