<template>
    <div class="screen-player row">
        <div class="name-team">
            <span>TEAM</span>
        </div>
        <div class="content-player">
            <div class="name-number-player">
                <p class="name-player">{{ this.lastNameMidfielders }} {{ this.firstNameMidfielders }}</p>
                <div class="box-number-player">
                    <p class="number-player">{{ this.itemNumberMidfielders }}</p>
                </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../../assets/images/vidic.jpg" alt="First slide">
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
            <div class="info-player">
                <span>Thông tin</span>
                <div class="row">
                    <div class="col-lg-6">
                        <table class="table table-dark table-info">
                            <thead>
                            <tr>
                                <th scope="col" colspan="2">thông tin cá nhân</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Ngày tháng năm sinh</th>
                                <td>{{ this.birthdayMidfielders }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Nơi sinh</th>
                                <td>{{ this.countryMidfielders }}</td>
                            </tr>
                            <tr>
                                <th scope="row">chiều cao</th>
                                <td>{{ this.sizeMidfielders }} cm</td>
                            </tr>
                            <tr>
                                <th scope="row">cân nặng</th>
                                <td>{{ this.heightMidfielders }} kg</td>
                            </tr>
                            <tr>
                                <th scope="row">số áo</th>
                                <td>{{ this.itemNumberMidfielders }}</td>
                            </tr>
                            <tr>
                                <th scope="row">vị trí</th>
                                <td>{{ this.positionMidfielders }}</td>
                            </tr>
                            </tbody>
                        </table>
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
      dataMidfielders: {
        get: function () {
          return this.$store.getters.dataMidfielders
        }
      },
      birthdayMidfielders: {
        get: function () {
          return this.$store.getters.birthdayMidfielders
        }
      },
      countryMidfielders: {
        get: function () {
          return this.$store.getters.countryMidfielders
        }
      },
      lastNameMidfielders: {
        get: function () {
          return this.$store.getters.lastNameMidfielders
        }
      },
      firstNameMidfielders: {
        get: function () {
          return this.$store.getters.firstNameMidfielders
        }
      },
      sizeMidfielders: {
        get: function () {
          return this.$store.getters.sizeMidfielders
        }
      },
      heightMidfielders: {
        get: function () {
          return this.$store.getters.heightMidfielders
        }
      },
      itemNumberMidfielders: {
        get: function () {
          return this.$store.getters.itemNumberMidfielders
        }
      },
      positionMidfielders: {
        get: function () {
          return this.$store.getters.positionMidfielders
        }
      },
      imageMidfielders: {
        get: function () {
          return this.$store.getters.imageMidfielders
        }
      },
    },
    created: function () {
      for (let i = 0; i < this.dataMidfielders.length; i++) {
        let dataM = this.dataMidfielders[i]
        let param = JSON.parse(this.$route.params.id)
        if (dataM.id === param) {

          let birthdayMidfielder = dataM.birthday
          let countryMidfielder = dataM.country
          let lastNameMidfielder = dataM.last_name
          let firstNameMidfielder = dataM.first_name
          let sizeMidfielder = dataM.size
          let heightMidfielder = dataM.height
          let itemNumberMidfielder = dataM.item_number
          let positionMidfielder = dataM.position
          let imageMidfielder = dataM.image

          this.$store.dispatch('setBirthdayMidfielders', birthdayMidfielder)
          this.$store.dispatch('setCountryMidfielders', countryMidfielder)
          this.$store.dispatch('setLastNameMidfielders', lastNameMidfielder)
          this.$store.dispatch('setFirstNameMidfielders', firstNameMidfielder)
          this.$store.dispatch('setSizeMidfielders', sizeMidfielder)
          this.$store.dispatch('setHeightMidfielders', heightMidfielder)
          this.$store.dispatch('setItemNumberMidfielders', itemNumberMidfielder)
          this.$store.dispatch('setPositionMidfielders', positionMidfielder)
          this.$store.dispatch('setImageMidfielders', imageMidfielder)

          console.log('11')
        }
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>
