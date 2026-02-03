import React from 'react'
import siteConfig from '../../../data/siteConfig'

import Header from '../header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header headerLinks={siteConfig.headerLinks} />
    <div>{children}</div>
  </>
)

export default Layout
