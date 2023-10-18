import React from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill,  BsPeopleFill, 
    BsCurrencyRupee, BsShareFill, BsFillQuestionCircleFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCurrencyRupee className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsShareFill className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillQuestionCircleFill className='icon'/> Help
                </a>
            </li>
        </ul>
        <div className='loginid'>
            <div><img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-apj-img.png" className='img'/></div>
            <div className='profile'>
                <h3>A. P. J. Abdul Kalam</h3>
                <p>Project Manager</p>
            </div>
            <div>
                
            </div>

        </div>
    </aside>
  )
}

export default Sidebar
