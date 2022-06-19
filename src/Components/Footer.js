
 import React from 'react'
 import StickyFooter from 'react-sticky-footer';
 
 
 export const Footer = () => {
     return (
         <div className="text-center">
       
<StickyFooter
    bottomThreshold={0}
    
    stickyStyles={{
        backgroundColor: "black",
        padding: "2rem",
        width:"100%",
        height:"50px",
        color:"white"
    }}
>Courseoⓒ</StickyFooter></div> 
    
         
     )
 }
 export default Footer;