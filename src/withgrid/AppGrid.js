import React from 'react'
import '../withgrid/AppGrid.scss';
import Header from './gridlayout/Header'
import Content from './gridlayout/Content'
import Footer from './gridlayout/Footer'

const App=()=>(
  <div>
    {/* <div class="header">头部</div>
    <div class="main clearfix">
      <div class="center">中间自适应</div> 
        <div class="left">左列定宽</div>
        <div class="right">右列定宽</div>
    </div>
    <div class="footer">底部</div> */}


    {/* <Normalize /> */}
    <Header />
    <Content />
    {/* <Footer/> */}
  </div>
)

export default App;