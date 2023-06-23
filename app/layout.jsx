import '@styles/globals.css'
import Navbar from '@components/navbar'
import Provider from '@components/provider'

export const metadata = {
    title: 'Impulse',
    description: 'Discover & Share AI Prompts'
}


const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <Provider>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Navbar />
                        {children}

                    </main>
                </body>
            </Provider>
        </html>
    )
}

export default RootLayout 
