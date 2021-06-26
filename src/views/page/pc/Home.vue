<template>
  <div>
    <Header></Header>
    <!-- 轮播推荐部分 -->
    <div class="home-hero-container">
      <div class="home-hero">
        <!-- <div class="home-hero-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41fc2ad85864c19cc37a509ff1fb7685.jpg?w=2452&h=920"
                />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34151fee7afb74b91c3a39ae8d85c8d8.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
                />
              </a>
            </div>
          </div>
          <div class="swiper-pagination">
            <a></a>
            <a></a>
            <a></a>
            <a></a>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div> -->
        <swiper
          :options="bannerHomeSwiper"
          ref="mySwiper"
          class="bannerHomeSwiper"
        >
          <div
            class="editSwiperData"
            v-if="isBackstage"
            @click="openDrawer('编辑首页轮播图', 'editPcHomeBanner')"
          >
            <p>编辑轮播图内容<i class="iconfont icon-bianji"></i></p>
          </div>
          <!-- swiper-slide 轮播图的每一项 -->
          <swiper-slide v-for="(item, index) in swiperImages" :key="index">
            <img :src="item.url" :alt="item.desc" />
          </swiper-slide>
          <!-- <swiper-slide>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5084e471aa2554867cd1c9bf333a83e4.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5ebb3ecd10ba5b5f1fa25125d034492.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/175b22f0032803f8bdbd94590c8c6629.jpeg?thumb=1&w=1226&h=460&f=webp&q=90"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b2b6279cbfca1c1d78f463ccf40fcf.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
              alt=""
            />
          </swiper-slide> -->
          <!-- 分页 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 上一页 下一页 点击按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="home-hero-sub">
          <div class="convenient">
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
                    alt="小米秒杀"
                  />小米秒杀
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
                    alt="企业团购"
                  />企业团购
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
                    alt="F码通道"
                  />F码通道
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
                    alt="米粉卡"
                  />米粉卡
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
                    alt="以旧换新"
                  />以旧换新
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
                    alt="话费充值"
                  />话费充值
                </a>
              </li>
            </ul>
          </div>
          <div class="recommend">
            <ul>
              <li class="first">
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播推荐部分 -->
    <div class="home-main">
      <div class="container">
        <!-- 限时抢购 -->
        <div class="home-flashsale">
          <div class="flashsale-hd">
            <h2 class="title">小米秒杀</h2>
          </div>
          <div class="flashsale-bd">
            <div class="flashsale-countdown">
              <div class="round">00:00 场</div>
              <img src="../../../assets/seckill.png" alt="小米闪购" />
              <div class="desc">本场已结束</div>
              <div class="countdown">
                <span>{{ flashSaleHou }}</span>
                <i>:</i>
                <span>{{ flashSaleMin }}</span>
                <i>:</i>
                <span>{{ flashSaleSec }}</span>
              </div>
            </div>
            <div class="flashsale-list">
              <swiper
                :options="flashSaleHomeSwiper"
                ref="flashSaleSwiper"
                class="flashSaleHomeSwiper"
              >
                <!-- swiper-slide 轮播图的每一项 -->
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f03fbaa9f17d62b0e2e0687b5d8fabc.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f03fbaa9f17d62b0e2e0687b5d8fabc.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f03fbaa9f17d62b0e2e0687b5d8fabc.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f03fbaa9f17d62b0e2e0687b5d8fabc.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </swiper-slide>
              </swiper>
              <ul style="display:none;">
                <li>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="content">
                      <div class="thumb">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c2d4d189980dcb86af402595206f002.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视Pro 32英寸 E32S"
                        />
                      </div>
                      <h3 class="title">全面屏电视Pro 32英寸 E32S</h3>
                      <p class="desc">多种连接方式，满足多样的娱乐需求</p>
                      <p class="price"><span>999</span>元<del>1099元</del></p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="flashsale-controls">
              <!-- 上一页 下一页 点击按钮 -->
              <!-- <div class="swiper-flashsale-prev" slot="button-prev"></div>
              <div class="swiper-flashsale-next" slot="button-next"></div> -->
              <span class="swiper-flashsale-prev" slot="button-prev">
                <i class="iconfont icon-zuojiantou3"></i>
              </span>
              <span class="swiper-flashsale-next" slot="button-next">
                <i class="iconfont icon-youjiantou1"></i>
              </span>
            </div>
            <!-- <div class="flashsale-controls">
              <span class="flashsale-pre">
                <i class="iconfont icon-zuojiantou3"></i>
              </span>
              <span class="flashsale-next">
                <i class="iconfont icon-youjiantou1"></i>
              </span>
            </div> -->
          </div>
        </div>

        <!-- 横幅广告 -->
        <div class="banner-box">
          <a href="#">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
              alt="test"
            />
          </a>
        </div>

        <!-- 手机商品展示橱窗 -->
        <div class="shopwindow">
          <div class="box-hd">
            <h2 class="title">手机</h2>
            <div class="more">
              <a href="#">查看更多<i class="iconfont icon-youjiantou1"></i></a>
            </div>
          </div>
          <div class="box-db">
            <div class="box-container">
              <div class="represent-first">
                <ul>
                  <li class="first-full">
                    <a href="#">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=234&h=614&f=webp&q=90"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="represent-secondly">
                <ul>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米MIX FOLD"
                        />
                      </div>
                      <h3 class="title">小米MIX FOLD</h3>
                      <p class="desc">折叠大屏｜自研芯片</p>
                      <p class="price">
                        <span class="num">9999</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米11 Ultra"
                        />
                      </div>
                      <h3 class="title">小米11 Ultra</h3>
                      <p class="desc">1.12''GN2｜2K四微曲屏</p>
                      <p class="price">
                        <span class="num">5999</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米11 Pro"
                        />
                      </div>
                      <h3 class="title">小米11 Pro</h3>
                      <p class="desc">1.12''GN2｜骁龙888</p>
                      <p class="price">
                        <span class="num">4999</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米11 青春版"
                        />
                      </div>
                      <h3 class="title">小米11 青春版</h3>
                      <p class="desc">小米11 青春版 轻薄</p>
                      <p class="price">
                        <span class="num">2299</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b7fbb6fe07907c60f08358adab5adfe.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="K40 游戏增强版"
                        />
                      </div>
                      <h3 class="title">K40 游戏增强版</h3>
                      <p class="desc">轻薄电竞设计</p>
                      <p class="price">
                        <span class="num">1999</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d47f7ecaa04d92bf2790d4a5d53d9099.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="黑鲨4 Pro"
                        />
                      </div>
                      <h3 class="title">黑鲨4 Pro</h3>
                      <p class="desc">黑鲨4 Pro</p>
                      <p class="price">
                        <span class="num">3999</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c21247abf4bc610cd86fe00601b0f766.png?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="黑鲨4"
                        />
                      </div>
                      <h3 class="title">黑鲨4</h3>
                      <p class="desc">黑鲨4 磁动力升降肩键</p>
                      <p class="price">
                        <span class="num">2499</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3553083a4975325eab6470d94465548.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米10S"
                        />
                      </div>
                      <h3 class="title">小米10S</h3>
                      <p class="desc">骁龙870 | 对称式双扬立体声</p>
                      <p class="price">
                        <span class="num">3299</span>元<span>起</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="editSwiperData"
            v-if="isBackstage"
            @click="openDrawer('编辑首页轮播图', 'editPcHomeBanner')"
          >
            <p>编辑手机展示橱窗内容<i class="iconfont icon-bianji"></i></p>
          </div>
        </div>

        <!-- 横幅广告 -->
        <div class="banner-box">
          <a href="#">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
              alt="test"
            />
          </a>
        </div>

        <!-- 商品展示橱窗 -->
        <div class="shopwindow">
          <div class="box-hd">
            <h2 class="title">家电</h2>
            <div class="more">
              <ul>
                <li>热门</li>
                <li>电视音影</li>
              </ul>
            </div>
          </div>
          <div class="box-db">
            <div class="box-container">
              <div class="represent-first">
                <ul>
                  <li class="first-half">
                    <a href="#">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/116fc43816b87192be4e67cf762e8da5.jpeg?thumb=1&w=234&h=300&f=webp&q=90"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="first-half">
                    <a href="#">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfbdabe36b2d630d57a015e6fb5eb3ea.jpg?thumb=1&w=234&h=300&f=webp&q=90"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="represent-secondly">
                <ul>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米全面屏电视65英寸 E65X"
                        />
                      </div>
                      <h3 class="title">小米全面屏电视65英寸 E65X</h3>
                      <p class="desc">全面屏设计</p>
                      <p class="price"><span class="num">3099</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="全面屏电视E43K"
                        />
                      </div>
                      <h3 class="title">全面屏电视E43K</h3>
                      <p class="desc">全面屏设计，海量内容</p>
                      <p class="price"><span class="num">1399</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="小米电视4A 70英寸"
                        />
                      </div>
                      <h3 class="title">小米电视4A 70英寸</h3>
                      <p class="desc">大屏更享受</p>
                      <p class="price"><span class="num">3699</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bed167fc905bab57dee478bcf1e5e0d.JPG?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="米家互联网对开门冰箱 540L"
                        />
                      </div>
                      <h3 class="title">米家互联网对开门冰箱 540L</h3>
                      <p class="desc">重磅新品福利特惠</p>
                      <p class="price"><span class="num">2999</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="Redmi全自动波轮洗衣机1A 8kg"
                        />
                      </div>
                      <h3 class="title">Redmi全自动波轮洗衣机1A 8kg</h3>
                      <p class="desc">一键操作，父母都爱用</p>
                      <p class="price"><span class="num">899</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="Air 13.3'' 2019款"
                        />
                      </div>
                      <h3 class="title">Air 13.3'' 2019款</h3>
                      <p class="desc">新一代独立显卡</p>
                      <p class="price"><span class="num">6299</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-full">
                    <a href="#">
                      <div class="secondly-boximg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                          alt="米家互联网烟灶套装（天然气）"
                        />
                      </div>
                      <h3 class="title">米家互联网烟灶套装（天然气）</h3>
                      <p class="desc">点火排烟，风随火动</p>
                      <p class="price"><span class="num">2298</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-half">
                    <a href="#">
                      <div class="secondly-figureimg">
                        <img
                          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&w=100&h=100&f=webp&q=90"
                          alt="米家电烤箱"
                        />
                      </div>
                      <h3 class="title">米家电烤箱</h3>
                      <p class="price"><span class="num">299</span>元</p>
                    </a>
                  </li>
                  <li class="secondly-half">
                    <a href="#">
                      <div class="figure-more">
                        <i class="iconfont icon-gengduo"></i>
                      </div>
                      <div class="text-more">
                        浏览更多
                        <small>热门</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 横幅广告 -->
        <div class="banner-box">
          <a href="#">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
              alt="test"
            />
          </a>
        </div>

        <div class="video-box">
          <div class="box-hd">
            <h2 class="title">视频</h2>
            <div class="more">
              <a href="#">查看全部<i class="iconfont icon-youjiantou1"></i></a>
            </div>
          </div>
          <div class="box-bd">
            <ul>
              <li>
                <a href="#">
                  <div class="figure-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                      alt="2021年春季新品发布会第一场"
                    />
                    <span class="play">
                      <i class="iconfont icon-bofang"></i>
                    </span>
                  </div>
                  <h3 class="title">2021年春季新品发布会第一场</h3>
                  <p class="desc"></p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="figure-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                      alt="Redmi 10X系列发布会"
                    />
                    <span class="play">
                      <i class="iconfont icon-bofang"></i>
                    </span>
                  </div>
                  <h3 class="title">Redmi 10X系列发布会</h3>
                  <p class="desc">Redmi 10X系列发布会</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="figure-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                      alt="小米10 青春版 发布会"
                    />
                    <span class="play">
                      <i class="iconfont icon-bofang"></i>
                    </span>
                  </div>
                  <h3 class="title">小米10 青春版 发布会</h3>
                  <p class="desc"></p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="figure-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                      alt="小米10 8K手机拍大片"
                    />
                    <span class="play">
                      <i class="iconfont icon-bofang"></i>
                    </span>
                  </div>
                  <h3 class="title">小米10 8K手机拍大片</h3>
                  <p class="desc"></p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <ToolBar></ToolBar>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-form ref="Form" :model="Form" label-width="120px">
        <div v-for="(item, index) in swiperImages" :key="index">
          <el-image style="width: 100%;" :src="item.url"> </el-image>
          <el-form-item :label="item.label">
            <el-input v-model="Form[item.bannerAddress]"></el-input>
          </el-form-item>
        </div>
        <el-row class="drawerButton">
          <el-button @click="handleClose()">取消</el-button>
          <el-button type="primary" @click="editPageData()">提交</el-button>
        </el-row>
        <!-- <el-form-item label="轮播图1">
          <el-input v-model="Form.bannerOne"></el-input>
        </el-form-item>
        <el-form-item label="轮播图2">
          <el-input v-model="Form.bannerTow"></el-input>
        </el-form-item>
        <el-form-item label="轮播图3">
          <el-input v-model="Form.bannerThree"></el-input>
        </el-form-item>
        <el-form-item label="轮播图4">
          <el-input v-model="Form.bannerFour"></el-input>
        </el-form-item> -->
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Header from '../../../components/page/pc/Head.vue'
import Footer from '../../../components/page/pc/Footer.vue'
import ToolBar from '../../../components/page/pc/ToolBar.vue'

export default {
  data() {
    return {
      // 是否为后台管理编辑页面
      isBackstage: true,
      // 抽屉
      drawer: false,
      direction: 'rtl',
      // 表单
      Form: {},
      // 前台
      swiperImages: [
        {
          url:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5084e471aa2554867cd1c9bf333a83e4.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          //   desc: '红米K40 游戏增强版',
          bannerAddress: 'bannerOne',
          label: '轮播图1地址链接'
        },
        {
          url:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5ebb3ecd10ba5b5f1fa25125d034492.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          //   desc: '红米电视MAX 86寸',
          bannerAddress: 'bannerTow',
          label: '轮播图2地址链接'
        },
        {
          url:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/175b22f0032803f8bdbd94590c8c6629.jpeg?thumb=1&w=1226&h=460&f=webp&q=90',
          //   desc: '小米笔记本Pro 15',
          bannerAddress: 'bannerThree',
          label: '轮播图3地址链接'
        },
        {
          url:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b2b6279cbfca1c1d78f463ccf40fcf.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
          //   desc: '米家智能驱蚊器2',
          bannerAddress: 'bannerFour',
          label: '轮播图4地址链接'
        }
      ],
      flashSaleDate: new Date(),
      flashSaleHou: 0,
      flashSaleMin: 0,
      flashSaleSec: 0,
      // flashSaleSsec: 0,
      flashSaleEndTime: '',
      flashSaleDisprArr: [],
      bannerHomeSwiper: {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      flashSaleHomeSwiper: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: '.swiper-flashsale-next',
          prevEl: '.swiper-flashsale-prev'
        }
      }
    }
  },
  methods: {
    flashSaleSwiperStyle() {
      this.$refs.flashSaleSwiper.$children.forEach(item => {
        item.$el.style.marginRight = '14px'
        item.$el.style.width = '234px'
      })
    },
    time() {
      const that = this
      const dateEnd = Date.parse(new Date()) + 7200 * 1000
      setInterval(function timestampToTime() {
        const date = dateEnd - Date.parse(new Date())
        if (date > 0) {
          // console.log(4444)
          const time = date / 1000
          that.flashSaleHou = parseInt(time / 3600)
          that.flashSaleMin = parseInt((time - that.flashSaleHou * 3600) / 60)
          that.flashSaleSec = parseInt(
            time - that.flashSaleHou * 3600 - that.flashSaleMin * 60
          )
        } else {
          that.day = 0
          that.flashSaleHou = 0
          that.flashSaleMin = 0
          that.flashSaleSec = 0
        }
      }, 1000)
    },
    openDrawer() {
      this.swiperImages.map(item => {
        this.Form[item.bannerAddress] = item.url
      })
      this.drawer = true
    },
    handleClose(done) {
      this.drawer = false
    },

    /** ************************************************
     * @description 修改页面数据
     ************************************************ */
    async editPageData() {
      console.log('修改页面数据')
      console.log(this.Form)
      const { data } = await this.$http.put('PcPage/HomeBanner', {
        params: this.Form
      })
      console.log(data)
    }
    /**
     * @description 接收调用此页面的 父组件 传递过来的数据
     * @param { Object } event - 父组件 传递消息载体
     */
    // receiveParentMessage(event) {
    //   console.log('子接收父')
    //   console.log(event)
    //   this.isBackstage = true
    // },
    /**
     * @description 发送数据给调用此页面的 父组件
     */
    // sendingParentMessage(isDrawer) {
    //   console.log('子传递父')
    //   window.parent.postMessage(
    //     {
    //       cmd: 'returnInfo',
    //       params: {
    //         info: isDrawer
    //       }
    //     },
    //     '*'
    //   )
    // }
  },
  components: {
    Header,
    Footer,
    ToolBar,
    swiper,
    swiperSlide
  },
  created() {},

  /* ******************** vue 监听 ******************** */
  watch: {
    flashSaleDate: function() {
      console.log(this.flashSaleDate)
    }
  },

  /* ******************** vue 页面创建完毕 ******************** */
  mounted() {
    // window.addEventListener('message', this.receiveParentMessage)
    // this.sendingParentMessage()
    this.$nextTick(function() {
      this.flashSaleSwiperStyle()
      this.time()
    })
  }
}
</script>

<style lang="less" scoped>
ul::before {
  content: '';
  display: table;
}
ul::after {
  content: '';
  clear: both;
  display: table;
}

/deep/.el-drawer__body {
  overflow: scroll;
}

.el-form {
  padding: 0 20px;
}

.drawerButton {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  //   position: absolute;
  //   right: 20px;
  //   bottom: 20px;
}

.shopwindow:hover & > .editSwiperData {
  height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.editSwiperData {
  display: flex;
  position: absolute;
  top: 0;
  z-index: 99999;
  width: 100%;
  height: 0%;
  line-height: 100%;
  color: #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  p {
    i {
      font-size: 20px;
    }
  }
}

.bannerHomeSwiper {
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  .swiper-wrapper:hover .editSwiperData {
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .swiper-pagination {
    position: absolute;
    width: 400px;
    left: auto;
    right: 30px;
    bottom: 20px;
    text-align: right;

    /deep/ .swiper-pagination-bullet {
      display: inline-block;
      margin: 0 4px;
      width: 6px;
      height: 6px;
      border: 2px solid #fff;
      border-color: hsla(0, 0%, 100%, 0.3);
      border-radius: 10px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.4);
      opacity: 1;
      cursor: pointer;
    }
    /deep/ .swiper-pagination-bullet-active {
      background: hsla(0, 0%, 100%, 0.4);
      border-color: rgba(0, 0, 0, 0.4);
    }
  }

  .swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 234px;
    width: 41px;
    height: 69px;
    margin-top: -35px;
    cursor: pointer;
    outline: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -84px
      50%;
  }

  .swiper-button-prev:hover {
    background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat
      0px 50%;
  }

  .swiper-button-next {
    position: absolute;
    top: 50%;
    right: 0;
    width: 41px;
    height: 69px;
    margin-top: -35px;
    cursor: pointer;
    outline: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px
      50%;
  }

  .swiper-button-next:hover {
    background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -42px
      50%;
  }
}

.flashSaleHomeSwiper {
  height: 340px;
  width: 100%;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
  .swiper-slide {
    width: 234px;
    margin-right: 14px;
    border-top-width: 1px;
    border-top-style: solid;
    text-align: center;
    background: #fff;
    transition: all 0.6s;
    list-style: none;
    border-top-color: #ffac13;
    a {
      display: block;
      padding: 0 1px;
      height: 300px;
      padding-top: 39px;
      position: relative;
      text-decoration: none;
      color: #757575;
      background: rgba(0, 0, 0, 0);
      .content {
        .thumb {
          width: 160px;
          margin: 0 auto 22px;
          img {
            width: 160px;
            height: 160px;
          }
        }
        .title {
          margin: 0 20px 3px;
          font-size: 14px;
          font-weight: 400;
          text-overflow: ellipsis;
          color: #212121;
          overflow: hidden;
          white-space: nowrap;
        }
        .desc {
          height: 18px;
          margin: 0 20px 12px;
          font-size: 12px;
          text-overflow: ellipsis;
          color: #b0b0b0;
          overflow: hidden;
          white-space: nowrap;
        }
        .price {
          margin: 0;
          color: #ff6709;
          del {
            margin-left: 3px;
            color: #b0b0b0;
          }
        }
      }
    }
    a::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background: rgba(0, 0, 0, 0.02);
    }
  }
}

.flashsale-controls {
  position: absolute;
  right: 0;
  top: 24px;
  .swiper-flashsale-prev {
    display: inline-block;
    width: 24px;
    height: 16px;
    padding: 3px 5px;
    margin-left: -1px;
    border: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 16px;
    transition: color 0.5s;
    text-align: center;
    cursor: pointer;
  }
  .swiper-flashsale-next {
    display: inline-block;
    width: 24px;
    height: 16px;
    padding: 3px 5px;
    margin-left: -1px;
    border: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 16px;
    transition: color 0.5s;
    text-align: center;
    cursor: pointer;
  }
  span:hover {
    color: #ff6700;
  }
}

.home-hero-sub {
  margin-top: 14px;
  .convenient {
    width: 234px;
    float: left;
    ul {
      margin: 0;
      padding: 3px;
      list-style-type: none;
      font-size: 12px;
      text-align: center;
      background: #5f5750;
      li {
        float: left;
        width: 70px;
        height: 82px;
        padding: 0 3px;
        a {
          display: block;
          padding-top: 18px;
          text-overflow: ellipsis;
          color: #fff;
          opacity: 0.7;
          transition: opacity 0.2s;
          img {
            display: block;
            width: 24px;
            height: 24px;
            margin: 0 auto 4px;
          }
        }
        a:hover {
          opacity: 1;
        }
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
  .recommend {
    width: 978px;
    float: left;
    margin-left: 14px;
    ul {
      li {
        float: left;
        width: 316px;
        height: 170px;
        margin-left: 15px;
        transition: box-shadow 0.2s linear;
        a {
          display: block;
          height: 170px;
          background: url(//i1.mifile.cn/f/i/2014/cn/placeholder-80.png)
            no-repeat 50%;
          img {
            width: 316px;
            height: 170px;
          }
        }
      }
      li:hover {
        box-shadow: 0 15px 30px rgba(204, 204, 204);
      }

      .first {
        margin-left: 0;
      }
    }
  }
}

.home-hero-container {
  width: 1226px;
  margin: 0 auto;
  .home-hero {
    position: relative;
    margin-bottom: 26px;

    .home-hero-sub::before {
      content: '';
      display: table;
    }
    .home-hero-sub::after {
      content: '';
      clear: both;
      display: table;
    }
  }
}

.home-main {
  padding-top: 4px;
  padding-bottom: 12px;
  background: #f5f5f5;
  .container {
    width: 1226px;
    margin: 0 auto;
    .home-flashsale {
      position: relative;
      .flashsale-hd {
        height: 58px;
        -webkit-font-smoothing: antialiased;
        .title {
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }
      }
      .flashsale-bd {
        .flashsale-countdown {
          float: left;
          border-top-color: #e53935;
          height: 300px;
          width: 234px;
          padding-top: 39px;
          border-top-width: 1px;
          border-top-style: solid;
          background: #f1eded;
          text-align: center;
          .round {
            font-size: 21px;
            color: #ef3a3b;
            padding-top: 15px;
          }
          img {
            margin: 25px auto;
          }
          .desc {
            color: rgba(0, 0, 0, 0.54);
            font-size: 15px;
          }
          .countdown {
            width: 168px;
            margin: 28px auto 0;
            span {
              width: 46px;
              height: 46px;
              background: #605751;
              color: #fff;
              font-size: 24px;
              line-height: 46px;
              float: left;
            }
            i {
              width: 15px;
              float: left;
              height: 46px;
              line-height: 46px;
              color: #605751;
              font-size: 28px;
              font-style: normal;
            }
          }
          .countdown::before {
            content: '';
            display: table;
          }
          .countdown::after {
            content: '';
            clear: both;
            display: table;
          }
        }
        .flashsale-list {
          float: left;
          width: 978px;
          margin-left: 14px;
          ul {
            height: 340px;
            width: 100%;
            display: flex;
            transition-property: transform, -webkit-transform;
            box-sizing: content-box;
            li {
              margin-right: 14px;
              border-top-width: 1px;
              border-top-style: solid;
              text-align: center;
              background: #fff;
              transition: all 0.6s;
              list-style: none;
              border-top-color: #ffac13;
              a {
                display: block;
                padding: 0 1px;
                height: 300px;
                padding-top: 39px;
                position: relative;
                text-decoration: none;
                color: #757575;
                background: rgba(0, 0, 0, 0);
                .content {
                  .thumb {
                    width: 160px;
                    margin: 0 auto 22px;
                    img {
                      width: 160px;
                      height: 160px;
                    }
                  }
                  .title {
                    margin: 0 20px 3px;
                    font-size: 14px;
                    font-weight: 400;
                    text-overflow: ellipsis;
                    color: #212121;
                    overflow: hidden;
                    white-space: nowrap;
                  }
                  .desc {
                    height: 18px;
                    margin: 0 20px 12px;
                    font-size: 12px;
                    text-overflow: ellipsis;
                    color: #b0b0b0;
                    overflow: hidden;
                    white-space: nowrap;
                  }
                  .price {
                    margin: 0;
                    color: #ff6709;
                    del {
                      margin-left: 3px;
                      color: #b0b0b0;
                    }
                  }
                }
              }
              a::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                z-index: 2;
                background: rgba(0, 0, 0, 0.02);
              }
            }
          }
        }
      }
      .flashsale-bd::before {
        content: '';
        display: table;
      }
      .flashsale-bd::after {
        content: '';
        clear: both;
        display: table;
      }
    }
    .banner-box {
      height: 120px;
      margin: 22px 0;
      overflow: hidden;
    }
    .shopwindow {
      position: relative;
      .box-hd {
        position: relative;
        height: 58px;
        -webkit-font-smoothing: antialiased;
        .title {
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }
        .more {
          position: absolute;
          top: 0;
          right: 0;
          a {
            font-size: 16px;
            line-height: 58px;
            color: #424242;
            transition: all 0.4s;
            i {
              width: 12px;
              height: 12px;
              padding: 4px;
              margin-left: 8px;
              border-radius: 16px;
              font-size: 12px;
              line-height: 12px;
              background: #b0b0b0;
              color: #fff;
              vertical-align: 1px;
              transition: all 0.4s;
            }
          }
          a:hover {
            color: #ff6700;
          }
          a:hover i {
            background-color: #ff6700;
          }
          ul {
            margin: 0;
            padding: 16px 0 0;
            list-style-type: none;
            font-size: 16px;
            li {
              margin: 0 0 0 30px;
              display: inline-block;
              padding: 0;
              color: #424242;
              border-bottom: 2px solid rgba(0, 0, 0, 0);
              transition: border 0.3s;
              cursor: pointer;
            }
            li:hover {
              color: #ff6700;
              border-bottom: 2px solid #ff6700;
            }
          }
        }
      }
      .box-db {
        .box-container {
          .represent-first {
            width: 234px;
            float: left;
            ul {
              li {
                float: left;
                width: 234px;
                background-color: #fff;
                transition: all 0.2s linear;
                margin-bottom: 14px;
                a {
                  display: block;
                  width: 100%;
                  height: 100%;
                  img {
                    width: 100%;
                  }
                }
              }
              .first-full {
                height: 614px;
              }
              .first-half {
                height: 300px;
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
          .represent-secondly {
            width: 992px;
            float: left;
            // margin-left: 14px;
            ul {
              width: 992px;
              // margin-left: 14px;
              li {
                position: relative;
                float: left;
                width: 234px;
                margin-left: 14px;
                margin-bottom: 14px;
                background: #fff;
                transition: all 0.2s linear;
                a {
                  color: #757575;
                  background: rgba(0, 0, 0, 0);
                  .secondly-boximg {
                    width: 160px;
                    height: 160px;
                    margin: 0 auto 18px;
                    img {
                      width: 160px;
                      height: 160px;
                    }
                  }
                  .desc {
                    margin: 0 10px 10px;
                    height: 18px;
                    font-size: 12px;
                    color: #b0b0b0;
                    text-align: center;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  }
                }
              }
              .secondly-full {
                height: 260px;
                padding: 20px 0;
                .title {
                  margin: 0 10px 2px;
                  text-align: center;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  font-size: 14px;
                  font-weight: 400;
                  color: #333;
                }
                .price {
                  margin: 0 10px 14px;
                  text-align: center;
                  color: #ff6700;
                  .num {
                    text-align: center;
                    color: #ff6700;
                  }
                }
              }
              .secondly-half {
                height: 93px;
                padding-top: 50px;
                .secondly-figureimg {
                  position: absolute;
                  right: 20px;
                  top: 32px;
                  width: 80px;
                  height: 80px;
                  img {
                    width: 80px;
                    height: 80px;
                  }
                }
                .title {
                  margin: -10px 110px 5px 30px;
                  font-size: 14px;
                  font-weight: 400;
                  color: #333;
                }
                .price {
                  margin: 0 110px 0 30px;
                  font-size: 12px;
                  color: #ff6700;
                  .num {
                    font-size: 14px;
                    color: #ff6700;
                  }
                }
                .figure-more {
                  position: absolute;
                  right: 35px;
                  top: 48px;
                  width: 48px;
                  height: 48px;
                  color: #ff6700;
                  i {
                    font-size: 48px;
                    line-height: 48px;
                  }
                }
                .text-more {
                  display: block;
                  margin: 0 110px 0 30px;
                  font-size: 18px;
                  color: #333;
                  small {
                    display: block;
                    font-size: 12px;
                    color: #757575;
                  }
                }
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
          li:hover {
            box-shadow: 0 15px 30px rgba(204, 204, 204);
            transform: translate3d(0, -2px, 0);
          }
        }
        .box-container::before {
          content: '';
          display: table;
        }
        .box-container::after {
          content: '';
          clear: both;
          display: table;
        }
      }
    }
    .video-box {
      .box-hd {
        position: relative;
        height: 58px;
        -webkit-font-smoothing: antialiased;
        .title {
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }
        .more {
          position: absolute;
          top: 0;
          right: 0;
          a {
            font-size: 16px;
            line-height: 58px;
            color: #424242;
            transition: all 0.4s;
            i {
              width: 12px;
              height: 12px;
              padding: 4px;
              margin-left: 8px;
              border-radius: 16px;
              font-size: 12px;
              line-height: 12px;
              background: #b0b0b0;
              color: #fff;
              vertical-align: 1px;
              transition: all 0.4s;
            }
          }
          a:hover {
            color: #ff6700;
          }
          a:hover i {
            background-color: #ff6700;
          }
        }
      }
      .box-bd {
        height: 299px;
        ul {
          width: 1226px;
          height: 285px;
          margin: 0;
          padding: 0;
          list-style-type: none;
          li {
            position: relative;
            float: left;
            width: 296px;
            height: 285px;
            margin-left: 14px;
            margin-bottom: 14px;
            text-align: center;
            background: #fff;
            transition: all 0.2s linear;
            a {
              color: #757575;
              .figure-img {
                position: relative;
                width: 296px;
                height: 180px;
                margin: 0 0 28px;
                img {
                  width: 296px;
                  height: 180px;
                }
                .play {
                  position: absolute;
                  left: 20px;
                  bottom: 10px;
                  width: 32px;
                  height: 20px;
                  text-align: center;
                  border: 2px solid #fff;
                  border-radius: 12px;
                  background-color: rgba(0, 0, 0, 0.6);
                  transition: all 0.2s;
                  overflow: hidden;
                  i {
                    color: #fff;
                    font-size: 12px;
                    line-height: 20px;
                  }
                }
              }
              .figure-img:hover {
                .play {
                  border: 2px solid #ff6700;
                  background-color: #ff6700;
                }
              }
              .title {
                margin: 0 14px 6px;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 14px;
                font-weight: 400;
                color: #333;
              }
              .desc {
                margin: 0 14px;
                height: 18px;
                font-size: 12px;
                color: #b0b0b0;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }
          li:first-child {
            margin-left: 0;
          }
          li:hover {
            box-shadow: 0 15px 30px rgba(204, 204, 204);
            transform: translate3d(0, -2px, 0);
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
    }
  }
}
</style>
