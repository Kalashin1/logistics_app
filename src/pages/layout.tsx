import React from "react"
import Spinner from "./components/spinner"
import Navabr from "./components/navbar"
import Footer from "./components/footer";

const Layout = ({
  children
}) => {
  return (
    <>
      {/* <Spinner /> */}
      <Navabr />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

export default Layout;