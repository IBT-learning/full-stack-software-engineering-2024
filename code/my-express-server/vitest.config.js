import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // Enable global functions like describe, it, expect
        environment: 'node', // Use the Node.js environment
    },
});
