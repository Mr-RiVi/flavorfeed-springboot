import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout