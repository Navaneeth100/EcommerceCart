import React from 'react'

const Footer = () => {
    return (
        <div className='container w-100'>
           <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Shopzy. All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer