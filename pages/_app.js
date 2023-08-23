// Import Stripe.js and Elements at the top of your App.js
// Importing ChakraProvider component from "@chakra-ui/react".
import { ChakraProvider } from "@chakra-ui/react";
// Exporting default function MyApp to create a custom Next.js App component.
export default function MyApp({ Component, pageProps }) {
  // Rendering a ChakraProvider component with children (Component and pageProps).
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
