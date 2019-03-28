<template>
    <div>

        <div class="screen-home">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../../assets/images/nhau-dem-home.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../../assets/images/vidic.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../../assets/images/vidic.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
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
