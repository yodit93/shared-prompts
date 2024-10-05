import Nav from '@components/Nav'
import '@styles/global.css'
import Provider from '@components/Provider'


export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <Nav />
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
