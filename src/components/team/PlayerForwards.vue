<template>
    <div class="screen-player row">
        <div class="name-team">
            <span>TEAM</span>
        </div>
        <div class="content-player">
            <div class="name-number-player">
                <p class="name-player">{{ this.lastNameForwards }} {{ this.firstNameForwards }}</p>
                <div class="box-number-player">
                    <p class="number-player">{{ this.itemNumberForwards }}</p>
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
                        <img class="d-block w-100" :src="this.imageSlideForwards" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" :src="this.imageSlide1Forwards" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" :src="this.imageSlide2Forwards" alt="Third slide">
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
                                <td>{{ this.birthdayForwards }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Nơi sinh</th>
                                <td>{{ this.countryForwards }}</td>
                            </tr>
                            <tr>
                                <th scope="row">chiều cao</th>
                                <td>{{ this.sizeForwards }} cm</td>
                            </tr>
                            <tr>
                                <th scope="row">cân nặng</th>
                                <td>{{ this.heightForwards }} kg</td>
                            </tr>
                            <tr>
                                <th scope="row">số áo</th>
                                <td>{{ this.itemNumberForwards }}</td>
                            </tr>
                            <tr>
                                <th scope="row">vị trí</th>
                                <td>{{ this.positionForwards }}</td>
                            </tr>
                            <tr>
                                <th scope="row">biệt danh</th>
                                <td>{{ this.nickNameForwards }}</td>
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
      dataForwards: {
        get: function () {
          return this.$store.getters.dataForwards
        }
      },
      birthdayForwards: {
        get: function () {
          return this.$store.getters.birthdayForwards
        }
      },
      countryForwards: {
        get: function () {
          return this.$store.getters.countryForwards
        }
      },
      lastNameForwards: {
        get: function () {
          return this.$store.getters.lastNameForwards
        }
      },
      firstNameForwards: {
        get: function () {
          return this.$store.getters.firstNameForwards
        }
      },
      sizeForwards: {
        get: function () {
          return this.$store.getters.sizeForwards
        }
      },
      heightForwards: {
        get: function () {
          return this.$store.getters.heightForwards
        }
      },
      itemNumberForwards: {
        get: function () {
          return this.$store.getters.itemNumberForwards
        }
      },
      positionForwards: {
        get: function () {
          return this.$store.getters.positionForwards
        }
      },
      imageForwards: {
        get: function () {
          return this.$store.getters.imageForwards
        }
      },
      imageSlideForwards: {
        get: function () {
          return this.$store.getters.imageSlideForwards
        }
      },
      imageSlide1Forwards: {
        get: function () {
          return this.$store.getters.imageSlide1Forwards
        }
      },
      imageSlide2Forwards: {
        get: function () {
          return this.$store.getters.imageSlide2Forwards
        }
      },
      nickNameForwards: {
        get: function () {
          return this.$store.getters.nickNameForwards
        }
      }
    },
    created: function () {
      for (let i = 0; i < this.dataForwards.length; i++) {
        let dataF = this.dataForwards[i]
        let param = JSON.parse(this.$route.params.id)
        if (dataF.id === param) {

          let birthdayForward = dataF.birthday
          let countryForward = dataF.country
          let lastNameForward = dataF.last_name
          let firstNameForward = dataF.first_name
          let sizeForward = dataF.size
          let heightForward = dataF.height
          let itemNumberForward = dataF.item_number
          let positionForward = dataF.position
          let imageForward = dataF.image
          let imageSlideForward = dataF.image_slide
          let imageSlide1Forward = dataF.image_slide_1
          let imageSlide2Forward = dataF.image_slide_2
          let nickNameForward = dataF.nick_name

          this.$store.dispatch('setBirthdayForwards', birthdayForward)
          this.$store.dispatch('setCountryForwards', countryForward)
          this.$store.dispatch('setLastNameForwards', lastNameForward)
          this.$store.dispatch('setFirstNameForwards', firstNameForward)
          this.$store.dispatch('setSizeForwards', sizeForward)
          this.$store.dispatch('setHeightForwards', heightForward)
          this.$store.dispatch('setItemNumberForwards', itemNumberForward)
          this.$store.dispatch('setPositionForwards', positionForward)
          this.$store.dispatch('setImageForwards', imageForward)
          this.$store.dispatch('setImageSlideForwards', imageSlideForward)
          this.$store.dispatch('setImageSlide1Forwards', imageSlide1Forward)
          this.$store.dispatch('setImageSlide2Forwards', imageSlide2Forward)
          this.$store.dispatch('setNickNameForwards', nickNameForward)
        }
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>
