import { Outlet } from 'react-router-dom'
import Nav from './Header/Nav'
import Footer from './Footer/footer';


const Layout = () => {
  

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout