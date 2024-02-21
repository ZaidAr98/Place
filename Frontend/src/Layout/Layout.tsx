import Header from "../Components/Header";

import Footer from "../Components/Footer";
import React from "react";

interface Props {
    children:React.ReactNode
}

const Layout = ({children}:Props)=>{
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
       
        <div className="container mx-auto py-10 flex-1">{children}</div>
        <Footer />
      </div>
    );
}

export default Layout