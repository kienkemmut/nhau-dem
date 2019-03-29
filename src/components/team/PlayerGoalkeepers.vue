<template>
    <div class="screen-player row">
        <div class="name-team">
            <span>TEAM</span>
        </div>
        <div class="content-player">
            <div class="name-number-player">
                <p class="name-player">{{ this.lastNameGoalKeepers }} {{ this.firstNameGoalKeepers }}</p>
                <div class="box-number-player">
                    <p class="number-player">{{ this.itemNumberGoalKeepers }}</p>
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
                        <img class="d-block w-100" :src="this.imageSlideGoalKeepers" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" :src="this.imageSlide1GoalKeepers" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" :src="this.imageSlide2GoalKeepers" alt="Third slide">
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
                                <td>{{ this.birthdayGoalKeepers }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Nơi sinh</th>
                                <td>{{ this.countryGoalKeepers }}</td>
                            </tr>
                            <tr>
                                <th scope="row">chiều cao</th>
                                <td>{{ this.sizeGoalKeepers }} cm</td>
                            </tr>
                            <tr>
                                <th scope="row">cân nặng</th>
                                <td>{{ this.heightGoalKeepers }} kg</td>
                            </tr>
                            <tr>
                                <th scope="row">số áo</th>
                                <td>{{ this.itemNumberGoalKeepers }}</td>
                            </tr>
                            <tr>
                                <th scope="row">vị trí</th>
                                <td>{{ this.positionGoalKeepers }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Biệt danh</th>
                                <td>{{ this.nickNameGoalKeepers }}</td>
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
        imgTest: require('../../assets/images/stadium-history.png')
      }
    },
    computed: {
      dataGoalKeepers: {
        get: function () {
          return this.$store.getters.dataGoalKeepers
        }
      },
      birthdayGoalKeepers: {
        get: function () {
          return this.$store.getters.birthdayGoalKeepers
        }
      },
      countryGoalKeepers: {
        get: function () {
          return this.$store.getters.countryGoalKeepers
        }
      },
      lastNameGoalKeepers: {
        get: function () {
          return this.$store.getters.lastNameGoalKeepers
        }
      },
      firstNameGoalKeepers: {
        get: function () {
          return this.$store.getters.firstNameGoalKeepers
        }
      },
      sizeGoalKeepers: {
        get: function () {
          return this.$store.getters.sizeGoalKeepers
        }
      },
      heightGoalKeepers: {
        get: function () {
          return this.$store.getters.heightGoalKeepers
        }
      },
      itemNumberGoalKeepers: {
        get: function () {
          return this.$store.getters.itemNumberGoalKeepers
        }
      },
      positionGoalKeepers: {
        get: function () {
          return this.$store.getters.positionGoalKeepers
        }
      },
      imageGoalKeepers: {
        get: function () {
          return this.$store.getters.imageGoalKeepers
        }
      },
      imageSlideGoalKeepers: {
        get: function () {
          return this.$store.getters.imageSlideGoalKeepers
        }
      },
      imageSlide1GoalKeepers: {
        get: function () {
          return this.$store.getters.imageSlide1GoalKeepers
        }
      },
      imageSlide2GoalKeepers: {
        get: function () {
          return this.$store.getters.imageSlide2GoalKeepers
        }
      },
      nickNameGoalKeepers: {
        get: function () {
          return this.$store.getters.nickNameGoalKeepers
        }
      }
    },
    created: function () {
      for (let i = 0; i < this.dataGoalKeepers.length; i++) {
        let dataG = this.dataGoalKeepers[i]
        let param = JSON.parse(this.$route.params.id)
        if (dataG.id === param) {

          let birthdayGoalKeeper = dataG.birthday
          let countryGoalKeeper = dataG.country
          let lastNameGoalKeeper = dataG.last_name
          let firstNameGoalKeeper = dataG.first_name
          let sizeGoalKeeper = dataG.size
          let heightGoalKeeper = dataG.height
          let itemNumberGoalKeeper = dataG.item_number
          let positionGoalKeeper = dataG.position
          let imageGoalKeeper = dataG.image
          let imageSlideGoalKeeper = dataG.image_slide
          let imageSlide1GoalKeeper = dataG.image_slide_1
          let imageSlide2GoalKeeper = dataG.image_slide_2
          let nickNameGoalKeeper = dataG.nick_name

          this.$store.dispatch('setBirthdayGoalKeepers', birthdayGoalKeeper)
          this.$store.dispatch('setCountryGoalKeepers', countryGoalKeeper)
          this.$store.dispatch('setLastNameGoalKeepers', lastNameGoalKeeper)
          this.$store.dispatch('setFirstNameGoalKeepers', firstNameGoalKeeper)
          this.$store.dispatch('setSizeGoalKeepers', sizeGoalKeeper)
          this.$store.dispatch('setHeightGoalKeepers', heightGoalKeeper)
          this.$store.dispatch('setItemNumberGoalKeepers', itemNumberGoalKeeper)
          this.$store.dispatch('setPositionGoalKeepers', positionGoalKeeper)
          this.$store.dispatch('setImageGoalKeepers', imageGoalKeeper)
          this.$store.dispatch('setImageSlideGoalKeepers', imageSlideGoalKeeper)
          this.$store.dispatch('setImageSlide1GoalKeepers', imageSlide1GoalKeeper)
          this.$store.dispatch('setImageSlide2GoalKeepers', imageSlide2GoalKeeper)
          this.$store.dispatch('setNickNameGoalKeepers', nickNameGoalKeeper)
        }
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>
