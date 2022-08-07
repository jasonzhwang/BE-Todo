import React from 'react'
import '../withgrid/AppGrid.scss';
import Header from './components/Header/index'
import Content from './components/Content/index'
import Footer from './components/Footer/index'

const App=()=>(
  <div className="container-page">
    {/* <div class="header">头部</div>
    <div class="main clearfix">
      <div class="center">中间自适应</div> 
        <div class="left">左列定宽</div>
        <div class="right">右列定宽</div>
    </div>
    <div class="footer">底部</div> */}


    {/* <Normalize /> */}
    <Header />
    <aside className="aside-left"></aside>
    <Content className="main"/>
    {/* <aside className="aside-right"></aside>
    <Footer/> */}
  </div>
)

export default App;