import '@/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/provider'
import type {AppProps} from 'next/app'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <ToastContainer
            />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
