<template>
    <div class="screen-team">
        <div class="row mb-4">
            <span class="span-border">THỦ MÔN</span>
            <div class="col-lg-3 mt-3" v-for="goalKeeper in dataGoalKeepers" :key="goalKeeper.id" @click="pushGoalKeepers(goalKeeper.id)">
                <div class="card bg-dark text-white card-player">
                    <img class="card-img img-player" height="336px" :src="goalKeeper.image"  alt="Card image">
                    <div class="card-img-overlay card-img-overlay-custom">
                        <h5 class="card-title card-title-custom">{{ goalKeeper.item_number }}</h5>
                        <p class="card-text">{{ goalKeeper.last_name }}</p>
                        <p class="card-text">{{ goalKeeper.first_name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <span class="span-border">HẬU VỆ</span>
            <div class="col-lg-3 mt-3" v-for="defender in dataDefenders" :key="defender.id" @click="pushDefenders(defender.id)">
                <div class="card bg-dark text-white card-player">
                    <img class="card-img" height="336px" :src="defender.image"  alt="Card image">
                    <div class="card-img-overlay card-img-overlay-custom">
                        <h5 class="card-title card-title-custom">{{ defender.item_number }}</h5>
                        <p class="card-text">{{ defender.last_name }}</p>
                        <p class="card-text">{{ defender.first_name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <span class="span-border">TIỀN VỆ</span>
            <div class="col-lg-3 mt-3" v-for="midfielder in dataMidfielders" :key="midfielder.id" @click="pushMidfielders(midfielder.id)">
                <div class="card bg-dark text-white card-player">
                    <img class="card-img" height="336px" :src="midfielder.image"  alt="Card image">
                    <div class="card-img-overlay card-img-overlay-custom">
                        <h5 class="card-title card-title-custom">{{ midfielder.item_number }}</h5>
                        <p class="card-text">{{ midfielder.last_name }}</p>
                        <p class="card-text">{{ midfielder.first_name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <span class="span-border">TIỀN ĐẠO</span>
            <div class="col-lg-3 mt-3" v-for="forward in dataForwards" :key="forward.id" @click="pushForwards(forward.id)">
                <div class="card bg-dark text-white card-player">
                    <img class="card-img" height="336px" :src="forward.image"  alt="Card image">
                    <div class="card-img-overlay card-img-overlay-custom">
                        <h5 class="card-title card-title-custom">{{ forward.item_number }}</h5>
                        <p class="card-text">{{ forward.last_name }}</p>
                        <p class="card-text">{{ forward.first_name }}</p>
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
        nameT: '',
      }
    },
    computed: {
      dataGoalKeepers: {
        get: function () {
          return this.$store.getters.dataGoalKeepers
        }
      },
      dataDefenders: {
        get: function () {
          return this.$store.getters.dataDefenders
        }
      },
      dataMidfielders: {
        get: function () {
          return this.$store.getters.dataMidfielders
        }
      },
      dataForwards: {
        get: function () {
          return this.$store.getters.dataForwards
        }
      },
      nameD: {
        get: function () {
          return this.$store.getters.nameD
        }
      }
    },
    mounted: function () {
    },
    methods: {
      pushForwards: function (id) {
        for (let i = 0; i < this.dataForwards.length; i++) {
          let dataF = this.dataForwards[i]
          let param = {id: dataF.id}
          console.log(param, dataF.id, 'nnn')
          if (dataF.id === id) {

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

            this.$router.push({ name: 'PlayerForwards', params: {id: param.id} })
          }
        }
      },
      pushGoalKeepers: function (id) {
        for (let i = 0; i < this.dataGoalKeepers.length; i++) {
          let dataG = this.dataGoalKeepers[i]
          let param = {id: dataG.id}
          if (dataG.id === id) {

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

            this.$router.push({ name: 'PlayerGoalkeepers', params: {id: param.id} })
          }
        }
      },
      pushMidfielders: function (id) {
        for (let i = 0; i < this.dataMidfielders.length; i++) {
          let dataM = this.dataMidfielders[i]
          let param = {id: dataM.id}
          if (dataM.id === id) {

            let birthdayMidfielder = dataM.birthday
            let countryMidfielder = dataM.country
            let lastNameMidfielder = dataM.last_name
            let firstNameMidfielder = dataM.first_name
            let sizeMidfielder = dataM.size
            let heightMidfielder = dataM.height
            let itemNumberMidfielder = dataM.item_number
            let positionMidfielder = dataM.position
            let imageMidfielder = dataM.image
            let imageSlideMidfielder = dataM.image_slide
            let imageSlide1Midfielder = dataM.image_slide_1
            let imageSlide2Midfielder = dataM.image_slide_2
            let nickNameMidfielder = dataM.nick_name

            this.$store.dispatch('setBirthdayMidfielders', birthdayMidfielder)
            this.$store.dispatch('setCountryMidfielders', countryMidfielder)
            this.$store.dispatch('setLastNameMidfielders', lastNameMidfielder)
            this.$store.dispatch('setFirstNameMidfielders', firstNameMidfielder)
            this.$store.dispatch('setSizeMidfielders', sizeMidfielder)
            this.$store.dispatch('setHeightMidfielders', heightMidfielder)
            this.$store.dispatch('setItemNumberMidfielders', itemNumberMidfielder)
            this.$store.dispatch('setPositionMidfielders', positionMidfielder)
            this.$store.dispatch('setImageMidfielders', imageMidfielder)
            this.$store.dispatch('setImageSlideMidfielders', imageSlideMidfielder)
            this.$store.dispatch('setImageSlide1Midfielders', imageSlide1Midfielder)
            this.$store.dispatch('setImageSlide2Midfielders', imageSlide2Midfielder)
            this.$store.dispatch('setNickNameMidfielders', nickNameMidfielder)

            this.$router.push({ name: 'PlayerMidfielders', params: {id: param.id} })
          }
        }
      },
      pushDefenders: function (id) {
        for (let i = 0; i < this.dataDefenders.length; i++) {
          let dataD = this.dataDefenders[i]
          let param = {id: dataD.id}
          if (dataD.id === id) {

            let birthdayDefender = dataD.birthday
            let countryDefender = dataD.country
            let lastNameDefender = dataD.last_name
            let firstNameDefender = dataD.first_name
            let sizeDefender = dataD.size
            let heightDefender = dataD.height
            let itemNumberDefender = dataD.item_number
            let positionDefender = dataD.position
            let imageDefender = dataD.image
            let imageSlideDefender = dataD.image_slide
            let imageSlide1Defender = dataD.image_slide_1
            let imageSlide2Defender = dataD.image_slide_2
            let nickNameDefender = dataD.nick_name

            this.$store.dispatch('setBirthdayDefenders', birthdayDefender)
            this.$store.dispatch('setCountryDefenders', countryDefender)
            this.$store.dispatch('setLastNameDefenders', lastNameDefender)
            this.$store.dispatch('setFirstNameDefenders', firstNameDefender)
            this.$store.dispatch('setSizeDefenders', sizeDefender)
            this.$store.dispatch('setHeightDefenders', heightDefender)
            this.$store.dispatch('setItemNumberDefenders', itemNumberDefender)
            this.$store.dispatch('setPositionDefenders', positionDefender)
            this.$store.dispatch('setImageDefenders', imageDefender)
            this.$store.dispatch('setImageSlideDefenders', imageSlideDefender)
            this.$store.dispatch('setImageSlide1Defenders', imageSlide1Defender)
            this.$store.dispatch('setImageSlide2Defenders', imageSlide2Defender)
            this.$store.dispatch('setNickNameDefenders', nickNameDefender)

            this.$router.push({ name: 'PlayerDefenders', params: {id: param.id} })
          }
        }
      }
    }
  }
</script>
