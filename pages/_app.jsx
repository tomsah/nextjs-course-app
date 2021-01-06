/** @jsxRuntime classic /
 /* @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'
import {useEffect, useState} from "react"

export default function App({ Component, pageProps }) {
    const [message, setMessage] = useState()
    const fetchMessage = async () => {
        const data = await fetch('http://localhost:3000/api', {method: 'GET'})
            .then(response => response.json())
       setMessage(data?.message)
    }

    useEffect(() => {
        fetchMessage()

    },[])

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>Message: {message}</h1>
                <Nav />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}