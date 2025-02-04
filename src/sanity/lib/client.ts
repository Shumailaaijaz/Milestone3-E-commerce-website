// Example configuration for Sanity client
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'gos8stz4',
  dataset: 'production',
  apiVersion: '2023-05-03', // Use a recent date
  useCdn: true, // Enable CDN for faster responses
});