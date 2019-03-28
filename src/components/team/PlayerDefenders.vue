<template>
    <div class="screen-player row">
        <div class="name-team">
            <span>TEAM</span>
        </div>
        <div class="content-player">
            <div class="name-number-player">
                <p class="name-player">{{ this.lastNameDefenders }} {{ this.firstNameDefenders }}</p>
                <div class="box-number-player">
                    <p class="number-player">{{ this.itemNumberDefenders }}</p>
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
                                <td>{{ this.birthdayDefenders }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Nơi sinh</th>
                                <td>{{ this.countryDefenders }}</td>
                            </tr>
                            <tr>
                                <th scope="row">chiều cao</th>
                                <td>{{ this.sizeDefenders }} cm</td>
                            </tr>
                            <tr>
                                <th scope="row">cân nặng</th>
                                <td>{{ this.heightDefenders }} kg</td>
                            </tr>
                            <tr>
                                <th scope="row">số áo</th>
                                <td>{{ this.itemNumberDefenders }}</td>
                            </tr>
                            <tr>
                                <th scope="row">vị trí</th>
                                <td>{{ this.positionDefenders }}</td>
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
      dataDefenders: {
        get: function () {
          return this.$store.getters.dataDefenders
        }
      },
      birthdayDefenders: {
        get: function () {
          return this.$store.getters.birthdayDefenders
        }
      },
      countryDefenders: {
        get: function () {
          return this.$store.getters.countryDefenders
        }
      },
      lastNameDefenders: {
        get: function () {
          return this.$store.getters.lastNameDefenders
        }
      },
      firstNameDefenders: {
        get: function () {
          return this.$store.getters.firstNameDefenders
        }
      },
      sizeDefenders: {
        get: function () {
          return this.$store.getters.sizeDefenders
        }
      },
      heightDefenders: {
        get: function () {
          return this.$store.getters.heightDefenders
        }
      },
      itemNumberDefenders: {
        get: function () {
          return this.$store.getters.itemNumberDefenders
        }
      },
      positionDefenders: {
        get: function () {
          return this.$store.getters.positionDefenders
        }
      },
      imageDefenders: {
        get: function () {
          return this.$store.getters.imageDefenders
        }
      },
    },
    created: function () {
      for (let i = 0; i < this.dataDefenders.length; i++) {
        let dataD = this.dataDefenders[i]
        let param = JSON.parse(this.$route.params.id)
        if (dataD.id === param) {

          let birthdayDefender = dataD.birthday
          let countryDefender = dataD.country
          let lastNameDefender = dataD.last_name
          let firstNameDefender = dataD.first_name
          let sizeDefender = dataD.size
          let heightDefender = dataD.height
          let itemNumberDefender = dataD.item_number
          let positionDefender = dataD.position
          let imageDefender = dataD.image

          this.$store.dispatch('setBirthdayDefenders', birthdayDefender)
          this.$store.dispatch('setCountryDefenders', countryDefender)
          this.$store.dispatch('setLastNameDefenders', lastNameDefender)
          this.$store.dispatch('setFirstNameDefenders', firstNameDefender)
          this.$store.dispatch('setSizeDefenders', sizeDefender)
          this.$store.dispatch('setHeightDefenders', heightDefender)
          this.$store.dispatch('setItemNumberDefenders', itemNumberDefender)
          this.$store.dispatch('setPositionDefenders', positionDefender)
          this.$store.dispatch('setImageDefenders', imageDefender)

        }
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>
