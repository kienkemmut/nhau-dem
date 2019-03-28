<template>
    <div>
        <div>
            <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    controls
                    fade
                    indicators
            >
                <b-carousel-slide id="slide-1" caption="" :img-src="require('../../assets/images/team1.jpg')"/>
            </b-carousel>
        </div>
        <div class="screen-home">
            <div class="row div-match">
                <div class="col-lg-4 last-match">
                    <h4>TRẬN TRƯỚC</h4>
                    <div class="row mb-2">
                        <div class="col-lg-5">FC Nhậu Đêm</div>
                        <div class="col-lg-2">6 - 4</div>
                        <div class="col-lg-5">FC NTS</div>
                    </div>
                    <p>Sân La Thành</p>
                    <p>22/03/2019 20:30</p>
                </div>
                <div class="col-lg-8 next-match">
                    <h4>TRẬN TIẾP THEO</h4>
                    <div class="row mb-2">
                        <div class="col-lg-5">FC Nhậu Đêm</div>
                        <div class="col-lg-2">- : -</div>
                        <div class="col-lg-5">FC tiNiWorld VNCT</div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-lg-3 icon-stadium"></div>
                                <div class="col-lg-6">Sân Ngọc Bảo</div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <span><font-awesome-icon :icon="['fas', 'clock']" :style="{color: '#000'}" class="icon alt"/> 29/03/2019 20:30</span>
                        </div>
                        <div class="col-lg-4">Giao hữu</div>
                    </div>
                </div>
            </div>
            <div class="images-team-home">
                <div class="row">
                    <div class="col-lg-6 img-team-padding">
                        <div class="img-team-1"></div>
                    </div>
                    <div class="col-lg-6 img-team-padding">
                        <div class="img-team-1"></div>
                    </div>
                </div>
            </div>
            <div class="div-history-match">
                <div class="border-bottom-title">
                    <span class="title-history-match">Lịch sử trận đấu</span>
                </div>
                <div class="box-history-match">
                    <div class="card history-card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <span><font-awesome-icon :icon="['fas', 'clock']" :style="{color: '#000'}" class="icon alt"/> 29/03/2019 20:30</span>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-lg-5">FC Nhậu Đêm</div>
                                            <div class="col-lg-2">- : -</div>
                                            <div class="col-lg-5">FC tiNiWorld VNCT</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-2 icon-stadium-history"></div>
                                            <div class="col-lg-8">Sân Ngọc Bảo</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <span><font-awesome-icon :icon="['fas', 'clock']" :style="{color: '#000'}" class="icon alt"/> 29/03/2019 20:30</span>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-lg-5">FC Nhậu Đêm</div>
                                            <div class="col-lg-2">- : -</div>
                                            <div class="col-lg-5">FC tiNiWorld VNCT</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-2 icon-stadium-history"></div>
                                            <div class="col-lg-8">Sân Ngọc Bảo</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <span><font-awesome-icon :icon="['fas', 'clock']" :style="{color: '#000'}" class="icon alt"/> 29/03/2019 20:30</span>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-lg-5">FC Nhậu Đêm</div>
                                            <div class="col-lg-2">- : -</div>
                                            <div class="col-lg-5">FC tiNiWorld VNCT</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-2 icon-stadium-history"></div>
                                            <div class="col-lg-8">Sân Ngọc Bảo</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style="margin-bottom: 0">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <span><font-awesome-icon :icon="['fas', 'clock']" :style="{color: '#000'}" class="icon alt"/> 29/03/2019 20:30</span>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-lg-5">FC Nhậu Đêm</div>
                                            <div class="col-lg-2">- : -</div>
                                            <div class="col-lg-5">FC tiNiWorld VNCT</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-2 icon-stadium-history"></div>
                                            <div class="col-lg-8">Sân Ngọc Bảo</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>
