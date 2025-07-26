// Updated main.js to use bun-compatible native compilation
import { electronCompat } from './bun-native-compat.js';

console.log('Using bun-compatible electron replacement');

// Use the bun-compatible version instead of real electron
const { app, BrowserWindow, protocol } = electronCompat;

// Simplified version that doesn't require native compilation
console.log('Lynx-js app running in bun-compatible mode');

// In development, just log the setup
if (typeof window === 'undefined') {
  console.log('Server environment - native functionality stubbed for bun compatibility');
  
  // Simulate the electron app lifecycle without native dependencies
  app.whenReady().then(() => {
    console.log('App ready (simulated)');
  });
}