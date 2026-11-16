import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Single-page site: in-page sections (#about, #programs, ...) are not
    // separate URLs for search engines, so only the root route is listed.
    return [
        {
            url: 'https://www.restorasibumi.org',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
