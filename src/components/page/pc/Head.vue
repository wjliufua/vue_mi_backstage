<template>
  <div>
    <div class="header" style="position:relative;">
      <!-- 顶部横幅广告 -->
      <div class="TopBannerPosters"></div>
      <!-- 顶部导航条 -->
      <div class="site_topbar">
        <div class="container">
          <!-- 顶部导航条左 -->
          <div class="topbar_nav">
            <a href="#">小米商城</a>
            <span>|</span>
            <a href="#">MIUI</a>
            <span>|</span>
            <a href="#">IoT</a>
            <span>|</span>
            <a href="#">云服务</a>
            <span>|</span>
            <a href="#">天星数科</a>
            <span>|</span>
            <a href="#">有品</a>
            <span>|</span>
            <a href="#">小爱开放平台</a>
            <span>|</span>
            <a href="#">企业团购</a>
            <span>|</span>
            <a href="#">资质证照</a>
            <span>|</span>
            <a href="#">协议规则</a>
            <span>|</span>
            <a href="#" class="downloadApp">
              下载app
              <span class="appcode">
                <img
                  src="//i1.mifile.cn/f/i/17/appdownload/download.png?1"
                  alt=""
                />
                小米商城App
              </span>
            </a>
            <span>|</span>
            <a href="#">智能生活</a>
            <span>|</span>
            <a href="#">Select Location</a>
          </div>
          <div class="miniCartTrigger">
            <a href="#" class="cart_button">
              <em class="iconfont_cart"></em>
              <em class="cart_text">购物车</em>
              <span>(0)</span>
            </a>
            <div class="cart_list">
              <div class="cart_menu">
                <div class="cart_loading">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="navUserInfo">
            <a href="#">登录</a>
            <span>|</span>
            <a href="#">注册</a>
            <span>|</span>
            <a href="#">消息通知</a>
          </div>
        </div>
      </div>
      <!-- 头部搜索分类 -->
      <div class="site_header">
        <div class="container">
          <div class="header_logo">
            <a href="#"></a>
          </div>
          <!-- 头部分类导航 -->
          <div class="header_nav">
            <ul>
              <!-- 侧边分类导航 -->
              <li class="nav_category">
                <a
                  :href="(index = true ? 'javascript:;' : '#')"
                  class="link_category"
                  :class="(index = true ? 'mouse_default' : '')"
                >
                  <span class="category_text" v-show="index">全部商品分类</span>
                  <div class="side_category">
                    <ul>
                      <li>
                        <a href="#">
                          手机 电话卡
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                        <div class="category_box">
                          <!-- list1 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米MIX FOLD"
                                />
                                <span>小米MIX FOLD</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11 Ultra"
                                />
                                <span>小米11 Ultra</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11 Pro"
                                />
                                <span>小米11 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11 青春"
                                />
                                <span>小米11 青春</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米10S"
                                />
                                <span>小米10S</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米11"
                                />
                                <span>小米11</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list2 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米10"
                                />
                                <span>小米10</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="黑鲨4 Pro"
                                />
                                <span>黑鲨4 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="黑鲨4"
                                />
                                <span>黑鲨4</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K30S 至尊纪念版"
                                />
                                <span>Redmi K30S 至尊纪念版</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=40&h=40"
                                  alt="小米云服务"
                                />
                                <span>小米云服务</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="K40 Pro 系列"
                                />
                                <span>K40 Pro 系列</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list3 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K40"
                                />
                                <span>Redmi K40</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K30 至尊纪念版"
                                />
                                <span>Redmi K30 至尊纪念版</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f774ef8332f2204a7c8fbf1b92f29e8a.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 10X 5G"
                                />
                                <span>Redmi 10X 5G</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9 Pro"
                                />
                                <span>Redmi Note 9 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9 5G"
                                />
                                <span>Redmi Note 9 5G</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9  4G"
                                />
                                <span>Redmi Note 9 4G</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list4 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 8 Pro"
                                />
                                <span>Redmi Note 8 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&w=40&h=40"
                                  alt="手机上门维修"
                                />
                                <span>手机上门维修</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 9"
                                />
                                <span>Redmi 9</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 9A"
                                />
                                <span>Redmi 9A</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 8"
                                />
                                <span>Redmi 8</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 8A"
                                />
                                <span>Redmi 8A</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          电视 盒子
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                        <div class="category_box">
                          <!-- list1 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9074723edc522839834f7fcd12b6f558.png"
                                  alt="Redmi MAX 86” 超大屏电视"
                                />
                                <span>Redmi MAX 86” 超大屏电视</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png"
                                  alt="小米透明电视"
                                />
                                <span>小米透明电视</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png"
                                  alt="小米电视5 Pro 55英寸"
                                />
                                <span>小米电视5 Pro 55英寸</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png"
                                  alt="小米电视5 65英寸"
                                />
                                <span>小米电视5 65英寸</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/93b55d27cd6e2100c25611eb828396ae.png"
                                  alt="Redmi 智能电视 A系列"
                                />
                                <span>Redmi 智能电视 A系列</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png"
                                  alt="量子点电视"
                                />
                                <span>量子点电视</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list2 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="小米10"
                                />
                                <span>小米10</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="黑鲨4 Pro"
                                />
                                <span>黑鲨4 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="黑鲨4"
                                />
                                <span>黑鲨4</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K30S 至尊纪念版"
                                />
                                <span>Redmi K30S 至尊纪念版</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=40&h=40"
                                  alt="小米云服务"
                                />
                                <span>小米云服务</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="K40 Pro 系列"
                                />
                                <span>K40 Pro 系列</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list3 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K40"
                                />
                                <span>Redmi K40</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi K30 至尊纪念版"
                                />
                                <span>Redmi K30 至尊纪念版</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f774ef8332f2204a7c8fbf1b92f29e8a.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 10X 5G"
                                />
                                <span>Redmi 10X 5G</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9 Pro"
                                />
                                <span>Redmi Note 9 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9 5G"
                                />
                                <span>Redmi Note 9 5G</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 9  4G"
                                />
                                <span>Redmi Note 9 4G</span>
                              </a>
                            </li>
                          </ul>
                          <!-- list4 -->
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi Note 8 Pro"
                                />
                                <span>Redmi Note 8 Pro</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&w=40&h=40"
                                  alt="手机上门维修"
                                />
                                <span>手机上门维修</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 9"
                                />
                                <span>Redmi 9</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 9A"
                                />
                                <span>Redmi 9A</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 8"
                                />
                                <span>Redmi 8</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&w=40&h=40&f=webp&q=90"
                                  alt="Redmi 8A"
                                />
                                <span>Redmi 8A</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          笔记本 显示器
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          家电 插线板
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          出行 穿戴
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          智能 路由器
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          电源 配件
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          健康 儿童
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          耳机 音箱
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          生活 箱包
                          <em class="iconfont icon-youjiantou1"></em>
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <!-- 头部分类导航子项 -->
              <li class="nav_item">
                <a
                  href="#"
                  class="link_category"
                  @mouseenter.self="navGoodsDropDownList(true)"
                  @mouseleave.self="navGoodsDropDownList(false)"
                >
                  <span class="category_text">小米手机</span>
                </a>
                <!-- 分类商品推荐列表 -->
                <div class="item_children">
                  <div class="container">
                    <ul>
                      <li>
                        <a href="#">
                          <div class="nav_item_goodsBox">
                            <img
                              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                              alt="小米11 Ultra"
                            />
                          </div>
                          <div class="title">小米11 Ultra</div>
                          <div class="price">5999起</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">Redmi 红米</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">电视</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">笔记本</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">家电</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">路由器</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">智能硬件</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">服务</span>
                </a>
              </li>
              <li class="nav_item">
                <a href="#" class="link_category">
                  <span class="category_text">社区</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 头部商品搜索框 -->
          <div class="header_search">
            <form action="#" class="search_form">
              <a href="#" class="search_input">
                <input type="text" placeholder="手机" />
              </a>
              <a href="#" class="search_submit">
                <!-- <input type="submit" class="iconfont icon-youjiantou1" value="" /> -->
                <button type="submit" class="iconfont"></button>
              </a>
            </form>
          </div>
        </div>
        <div class="navMenu">
          <div class="container">
            <ul>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米MIX FOLD</div>
                  <p class="price">9999元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11 Ultra</div>
                  <p class="price">5999元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1c45eadcedeb27b1cafca0359422da9.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11 Pro</div>
                  <p class="price">4999元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56e3379b5422cb06e5c8a0c546445606.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11 青春版</div>
                  <p class="price">2299元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9149ef3ba2c9025a4a21c98ae793808.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米10S</div>
                  <p class="price">3299元起</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu_img">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/963679eaf3937351e154600ab3448460.png?thumb=1&w=160&h=110&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <div class="text">小米11</div>
                  <p class="price">3999元起</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="header-nav-menu"
        @mouseenter.self="navGoodsDropDownList(true)"
        @mouseleave.self="navGoodsDropDownList(false)"
        ref="navHeaderMenu"
      >
        <div class="container">
          <ul>
            <li>
              <a href="#">
                <div class="nav_item_goodsBox">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                    alt="小米11 Ultra"
                  />
                </div>
                <div class="title">小米11 Ultra</div>
                <div class="price">5999起</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="nav_item_goodsBox">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                    alt="小米11 Ultra"
                  />
                </div>
                <div class="title">小米11 Ultra</div>
                <div class="price">5999起</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="nav_item_goodsBox">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                    alt="小米11 Ultra"
                  />
                </div>
                <div class="title">小米11 Ultra</div>
                <div class="price">5999起</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="nav_item_goodsBox">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                    alt="小米11 Ultra"
                  />
                </div>
                <div class="title">小米11 Ultra</div>
                <div class="price">5999起</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="nav_item_goodsBox">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                    alt="小米11 Ultra"
                  />
                </div>
                <div class="title">小米11 Ultra</div>
                <div class="price">5999起</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="nav_item_goodsBox">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=160&h=110&f=webp&q=90"
                    alt="小米11 Ultra"
                  />
                </div>
                <div class="title">小米11 Ultra</div>
                <div class="price">5999起</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 页面是否处于首页
      index: false
    }
  },
  created() {
    this.navCategoryShow()
  },
  methods: {
    // 全部分类商品文本是否显示
    navCategoryShow() {
      this.$route.path === '/' ? (this.index = true) : (this.index = false)
    },
    logVueCliThis() {
      console.log(this)
    },
    // 中间导航栏推荐商品下拉框
    navGoodsDropDownList(isNavHeaderMenuShow) {
      // this.isHeaderNavMenuShow = isNavHeaderMenuShow
      console.log(this.navMenuStyle)
      if (isNavHeaderMenuShow) {
        this.$refs.navHeaderMenu.style.height = '230px'
        this.$refs.navHeaderMenu.style.opacity = 1
      } else {
        this.$refs.navHeaderMenu.style.height = '0px'
        this.$refs.navHeaderMenu.style.opacity = 0
      }
    },
    // 控制侧边商品分类盒子展开
    changeSideBox() {
      console.log(123)
    }
  },
  mounted() {
    this.logVueCliThis()
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>

<style lang="less" scoped>
.headerNavMenuShow {
  height: 230px;
  opacity: 1;
}

.loader,
.loader::before,
.loader::after {
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation-name: loader;
  animation-name: loader;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

@keyframes loader {
  0% {
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    opacity: 0.2;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.headerNavMenuShow {
  display: block;
  height: 230px;
}

// 顶部导航条
.site_topbar {
  font-size: 12px;
  height: 40px;
  background-color: #333;
  a {
    color: #b0b0b0;
  }

  a:hover {
    color: #fff;
  }
  .topbar_nav {
    float: left;

    a {
      display: inline-block;
      position: relative;
      line-height: 40px;
      height: 40px;
      color: #b0b0b0;

      .appcode {
        position: absolute;
        top: 40px;
        left: 50%;
        z-index: 9;
        width: 124px;
        height: 0;
        background: #fff;
        margin-left: -55px;
        box-shadow: 0 1px 5px #aaa;
        text-align: center;
        font-size: 14px;
        color: #333;
        line-height: 1;
        overflow: hidden;
        transition: height 0.3s;
        img {
          display: block;
          width: 90px;
          height: 90px;
          margin: 18px 17px 12px;
        }
      }
    }

    .downloadApp {
      &::before {
        content: '';
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 7px solid;
        border-color: transparent transparent #fff;
      }
    }
    .downloadApp:hover {
      &::before {
        display: block;
      }
    }

    a:hover {
      color: #fff;
    }

    a:hover .appcode {
      height: 150px;
    }

    span {
      display: inline-block;
      color: #424242;
      margin: 0 0.6em;
    }
  }

  .miniCartTrigger {
    float: right;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    text-align: center;
    transition: all 0.2s;
    position: relative;

    a {
      display: inline-block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      transition: all 0.2s;
      background-color: rgb(66, 66, 66);

      em {
        font-style: normal;
      }

      span {
        margin-left: 3px;
      }

      .iconfont_cart {
        line-height: 20px;
        font-size: 20px;
      }

      .iconfont_cart::before {
        content: '\e612';
        vertical-align: middle;
        // margin-right: 5px;
        font-family: 'iconfont' !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .cart_text {
        margin-left: 5px;
      }
    }

    a:hover {
      background-color: #fff;
      color: rgb(255, 86, 0);
    }

    .cart_button:hover + .cart_list {
      height: 100px;
    }

    .cart_list {
      position: absolute;
      top: 40px;
      right: 0;
      z-index: 31;
      width: 316px;
      height: 0;
      color: #424242;
      background: #fff;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: height 0.3s;
      .cart_menu {
        padding: 20px 0 0;
        .cart_loading {
          margin: 0 20px 20px;
          padding: 20px 0;
          text-align: center;
          .loader {
            position: relative;
            margin: 0 auto;
            width: 4px;
            height: 20px;
            background: #ff6700;
            overflow: visible;
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
          }
          .loader::before {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 4px;
            height: 20px;
            content: '';
            background: #ff6700;
            margin: -10px 0 0 -10px;
            -webkit-animation-delay: 0.25s;
            animation-delay: 0.25s;
            -webkit-transform: scaleY(0.3);
            -ms-transform: scaleY(0.3);
            transform: scaleY(0.3);
          }
          .loader::after {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 4px;
            height: 20px;
            content: '';
            background: #ff6700;
            margin: -10px 0 0 6px;
            -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
            -webkit-transform: scaleY(0.5);
            -ms-transform: scaleY(0.5);
            transform: scaleY(0.5);
          }
        }
      }
    }

    .cart_list:hover {
      height: 100px;
    }

    .cart_list:hover + .cart_button {
      background-color: #fff;
      color: rgb(255, 86, 0);
    }
  }

  .navUserInfo {
    float: right;
    height: 40px;
    line-height: 40px;

    a {
      float: left;
      display: block;
    }

    span {
      float: left;
      display: block;
      color: #424242;
      margin: 0 0.6em;
    }
  }

  // }

  .container::before {
    content: '';
    display: table;
  }

  .container::after {
    content: '';
    display: table;
    clear: both;
  }
}

// 头部搜索分类
.site_header {
  position: relative;
  // .container {
  //     width: 1226px;
  //     margin: 0 auto;

  .header_logo {
    float: left;
    width: 62px;
    margin-top: 22px;

    a {
      display: block;
      position: relative;
      width: 55px;
      height: 55px;
      border-radius: 19px;
      overflow: hidden;
      color: #fff;
      background-color: #ff6700;
    }

    a::before {
      content: '';
      position: absolute;
      z-index: 1;
      width: 55px;
      height: 55px;
      opacity: 1;
      transform-origin: 50% 50%;
      transition: all 0.2s;
      background: url('../../../assets/image/mi_logo.png') no-repeat 50% 50%;
    }

    a::after {
      content: '';
      position: absolute;
      z-index: 1;
      width: 55px;
      height: 55px;
      opacity: 1;
      margin-left: -55px;
      transform-origin: 50% 50%;
      transition: all 0.2s;
      background: url('../../../assets/image/mi_home.png') no-repeat 50% 50%;
    }
  }

  // 头部商品分类导航栏
  .header_nav {
    float: left;
    width: 850px;

    & > ul {
      position: relative;
      width: 1100px;
      height: 88px;
      font-size: 16px;
      padding: 12px 0 0 30px;

      li {
        float: left;

        .link_category {
          display: inline-block;
          color: #333;
          transition: color 0.2s;
          padding: 26px 10px 38px;
        }

        .link_category:hover {
          color: #ff6700;
        }
      }

      .nav_category {
        height: 88px;
        width: 127px;
        padding-right: 15px;
        position: relative;

        .link_category {
          // display: none;
          width: 127px;
          height: 22px;
          text-align: right;
          padding: 26px 0px 38px;

          span {
            display: none;
          }
        }

        .link_category:hover {
          color: #333;
        }

        // 侧边分类导航栏
        .side_category {
          position: absolute;
          display: block;
          z-index: 9;
          top: 88px;
          left: -92px;
          width: 234px;
          height: 460px;
          font-size: 14px;

          & > ul {
            height: 420px;
            border: 0;
            color: #fff;
            padding: 20px 0;
            cursor: default;
            background-color: rgba(105, 101, 101, 0.6);

            & > li {
              float: none;

              & > a {
                position: relative;
                text-align: left;
                color: #fff;
                display: block;
                padding-left: 30px;
                height: 42px;
                line-height: 42px;

                em {
                  position: absolute;
                  top: 12px;
                  right: 20px;
                  font-size: 16px;
                  line-height: 16px;
                  font-style: normal;
                }

                // em::before {
                //     content: "\e605";
                // }
              }

              // & > a:hover {
              //   background-color: #ff6700;
              // }

              & > a:hover + .category_box {
                display: block;
              }

              .category_box {
                display: none;
                width: 992px;
                position: absolute;
                z-index: 1;
                left: 234px;
                top: 0;
                height: 458px;
                border: 1px solid #e0e0e0;
                background-color: #fff;

                ul {
                  float: left;
                  width: 248px;
                  height: 458px;
                  padding: 2px 0;

                  li {
                    width: 265px;
                    a {
                      // overflow: hidden;
                      display: block;
                      padding: 18px 20px;
                      color: #333;
                      transition: color 0.2s;

                      img {
                        float: left;
                        width: 40px;
                        height: 40px;
                        margin-right: 12px;
                        vertical-align: middle;
                        // background: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=40&h=40&f=webp&q=90') 0 0;
                      }

                      span {
                        display: block;
                        float: left;
                        // width: 172px;
                        width: 172px;
                        line-height: 40px;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                    }

                    a:hover {
                      color: #ff6700;
                    }

                    a::before {
                      content: '';
                      display: table;
                    }

                    a::after {
                      content: '';
                      clear: both;
                      display: table;
                    }
                  }
                }
              }
              .category_box:hover {
                display: block;
              }
            }
            & > li:hover {
              background-color: #ff6700;
            }
          }
        }
      }

      .nav_item {
        // position: relative;

        .item_children {
          display: none;
          // height: 230px;
          // width: 4000px;
          // position: absolute;
          // left: 0;
          // top: 100%;
          // z-index: 9999;
          // transition: height 0.5s;
          // background-color: #fff;
          // border-top: 1px solid #ccc;

          .container {
            ul {
              li {
                a {
                  .nav_item_goodsBox {
                    img {
                    }
                  }

                  .title {
                  }

                  .price {
                  }
                }
              }
            }
          }
        }
      }

      .nav_item:hover & > .item_children {
        // display: block;
        height: 230px;
      }
    }

    ul::before {
      content: '';
      display: table;
    }

    ul::after {
      content: '';
      clear: both;
      display: table;
    }
  }

  // 头部商品搜索框
  .header_search {
    float: right;
    width: 296px;
    height: 50px;
    margin-top: 25px;

    form {
      position: relative;
      width: 296px;
      height: 50px;

      .search_input {
        input {
          position: absolute;
          top: 0;
          border: 1px solid #e0e0e0;
          transition: all 0.2s;
          right: 51px;
          padding: 0 10px;
          outline: none;
          font-size: 14px;
          width: 223px;
          line-height: 48px;
        }

        // input:focus {
        //     outline: none;
        //     border: 1px solid rgb(255, 86, 0);
        // }
      }

      .search_submit {
        button {
          position: absolute;
          top: 0;
          right: 0;
          border: 1px solid #e0e0e0;
          transition: all 0.2s;
          width: 52px;
          height: 50px;
          line-height: 24px;
          font-size: 24px;
          background-color: #fff;
          outline: none;
        }

        button::before {
          content: '\e615';
        }

        button:hover {
          color: #fff;
          border: 1px solid rgb(255, 86, 0);
          background-color: rgb(255, 86, 0);
        }

        // input {
        //     position: absolute;
        //     top: 0;
        //     right: 0;
        //     border: 1px solid #e0e0e0;
        //     transition: all .2s;
        //     width: 52px;
        //     height: 50px;
        //     line-height: 24px;
        //     font-size: 24px;
        //     background-color: #fff;
        //     outline: none;
        // }

        // input::before {
        //     content: "\e615";
        // }

        // input:hover {
        //     color: #fff;
        //     border: 1px solid rgb(255, 86, 0);
        //     background-color: rgb(255, 86, 0);
        // }
      }
    }

    form:hover input {
      border: 1px solid rgb(176, 176, 176);
    }

    form:hover button {
      border: 1px solid rgb(176, 176, 176);
    }

    // form:focus input {
    //     outline: none;
    //     border: 1px solid rgb(255, 86, 0);
    // }

    form::before {
      content: '';
      display: table;
    }

    form::after {
      content: '';
      clear: both;
      display: table;
    }
  }

  // }

  .container::before {
    content: '';
    display: table;
  }

  .container::after {
    content: '';
    display: table;
    clear: both;
  }

  .navMenu {
    display: none;
    position: absolute;
    z-index: 2;
    top: 100px;
    left: 0;
    width: 100%;
    border-top: 1px solid #e0e0e0;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

    ul {
      li {
        float: left;
        width: 180px;
        padding: 36px 12px;
        text-align: center;

        a {
          color: #333;

          .menu_img {
            width: 160px;
            height: 110px;
            margin: 0 auto 16px;
            text-align: center;
            border-right: 1px solid #ccc;

            img {
              width: 160px;
              height: 110px;
            }
          }

          .title {
            color: #333;
            line-height: 20px;
          }

          .price {
            color: #ff6700;
            line-height: 20px;
          }
        }
      }

      li:last-child a > div {
        border: none;
      }
    }
  }
}

.header-nav-menu {
  // display: none;
  height: 0px;
  opacity: 0;
  // transition: box-shadow 0.2s, opacity 0.3s, height 0.3s,
  //   -webkit-box-shadow 0.2s;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  position: absolute;
  top: 140px;
  left: 0;
  z-index: 24;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  background: #fff;
  overflow: hidden;
  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    ul {
      font-size: 12px;
      li {
        position: relative;
        float: left;
        width: 180px;
        padding: 35px 12px 0;
        text-align: center;
        a {
          display: block;
          color: #757575;
          .nav_item_goodsBox {
            width: 160px;
            height: 110px;
            margin: 0 auto 16px;
            // padding: 0 9.5px 16px;
            text-align: center;
            // border-right: 1px solid #ccc;
            img {
              width: 160px;
              height: 110px;
            }
          }
          .title {
            line-height: 20px;
          }
          .price {
            margin: 0;
            line-height: 20px;
            color: #ff6700;
          }
        }
      }
      li::before {
        position: absolute;
        left: 0;
        top: 35px;
        z-index: 1;
        width: 1px;
        height: 100px;
        content: '';
        background-color: #e0e0e0;
      }
      li:first-child::before {
        content: '';
        display: none;
      }
    }
  }
}
.header-nav-menu:hover {
  opacity: 1;
  height: 230px;
}
</style>
