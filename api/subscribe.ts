import { put } from '@vercel/blob';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { email } = request.body;

        if (!email || !email.includes('@')) {
            return response.status(400).json({ error: 'Invalid email address' });
        }

        // Store the subscription as a unique file to avoid race conditions
        // File structure: subscribers/email@example.com.json
        const filename = `subscribers/${email}.json`;
        const data = {
            email,
            signedUpAt: new Date().toISOString(),
            source: 'web'
        };

        await put(filename, JSON.stringify(data), {
            access: 'public',
            contentType: 'application/json',
            // Automatic token usage from environment variables (BLOB_READ_WRITE_TOKEN)
        });

        return response.status(200).json({ success: true });
    } catch (error) {
        console.error('Subscription error:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
