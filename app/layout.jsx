import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and Share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" /> // This is the gradient background
        </div>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}
