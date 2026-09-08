# CurrencyConverter

## Development server

To start a local development server, run:

```bash
npm run dev
```

Once the server is running, open your browser and navigate to `http://localhost:3000/`. The application will automatically reload whenever you modify any of the source files.

## Add currency beacon env key

Create a folder called environments with a file called environment.development.ts and the following object (you'll need your own currency beacon api key):

```ts
export const environment = {
    apiKey: 'your-key-here'
}
```