// Web-only version for Lovable environment
// This removes Electron dependencies that cause bun installation issues

console.log('Running in web-only mode for Lovable compatibility');

// In a real environment, this would be handled by the proper Electron setup
// For now, just log that we're in development mode
if (typeof window !== 'undefined') {
  console.log('Web environment detected');
} else {
  console.log('Node environment - Electron functionality disabled for Lovable compatibility');
}
