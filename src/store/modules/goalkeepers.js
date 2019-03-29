import * as types from './mutation-types'
// import Vue from 'vue'
// import router from '../../router'
// let qs = require('qs')


const state = {
  dataGoalKeepers: [
    {
      id: 1,
      birthday: '1995',
      country: 'Thị trấn Bắc Sơn',
      last_name: 'Cu',
      first_name: 'Duy',
      size: '180',
      height: '68',
      item_number: '1',
      position: 'Thủ môn',
      image: require('../../assets/images/avt_duy.jpg'),
      image_slide: require('../../assets/images/1_duy.jpg'),
      image_slide_1: require('../../assets/images/2_duy.jpg'),
      image_slide_2: require('../../assets/images/3_duy.jpg'),
      nick_name: 'Cu Duy'
    },
    {
      id: 2,
      birthday: '20/11/1995',
      country: 'Thị trấn Thất Khê',
      last_name: 'Nguyễn Minh',
      first_name: 'Trường',
      size: '170',
      height: '56',
      item_number: '69',
      position: 'Thủ môn',
      image: require('../../assets/images/avt_truong.jpg'),
      image_slide: require('../../assets/images/1_truong.jpg'),
      image_slide_1: require('../../assets/images/2_truong.jpg'),
      image_slide_2: require('../../assets/images/3_truong.jpg'),
      nick_name: 'Tắc Kè'
    }
  ],
  birthdayGoalKeepers: '',
  countryGoalKeepers: '',
  lastNameGoalKeepers: '',
  firstNameGoalKeepers: '',
  sizeGoalKeepers: '',
  heightGoalKeepers: '',
  itemNumberGoalKeepers: '',
  positionGoalKeepers: '',
  imageGoalKeepers: '',
  imageSlideGoalKeepers: '',
  imageSlide1GoalKeepers: '',
  imageSlide2GoalKeepers: '',
  nickNameGoalKeepers: ''
}

const getters = {
  dataGoalKeepers: state => state.dataGoalKeepers,
  birthdayGoalKeepers: state => state.birthdayGoalKeepers,
  countryGoalKeepers: state => state.countryGoalKeepers,
  lastNameGoalKeepers: state => state.lastNameGoalKeepers,
  firstNameGoalKeepers: state => state.firstNameGoalKeepers,
  sizeGoalKeepers: state => state.sizeGoalKeepers,
  heightGoalKeepers: state => state.heightGoalKeepers,
  itemNumberGoalKeepers: state => state.itemNumberGoalKeepers,
  positionGoalKeepers: state => state.positionGoalKeepers,
  imageGoalKeepers: state => state.imageGoalKeepers,
  imageSlideGoalKeepers: state => state.imageSlideGoalKeepers,
  imageSlide1GoalKeepers: state => state.imageSlide1GoalKeepers,
  imageSlide2GoalKeepers: state => state.imageSlide2GoalKeepers,
  nickNameGoalKeepers: state => state.nickNameGoalKeepers,
}

const actions = {
  setBirthdayGoalKeepers ({ commit }, name) {
    commit(types.BIRTHDAY_GOALKEEPERS, name)
  },
  setCountryGoalKeepers ({ commit }, name) {
    commit(types.COUNTRY_GOALKEEPERS, name)
  },
  setLastNameGoalKeepers ({ commit }, name) {
    commit(types.LAST_NAME_GOALKEEPERS, name)
  },
  setFirstNameGoalKeepers ({ commit }, name) {
    commit(types.FIRST_NAME_GOALKEEPERS, name)
  },
  setSizeGoalKeepers ({ commit }, name) {
    commit(types.SIZE_GOALKEEPERS, name)
  },
  setHeightGoalKeepers ({ commit }, name) {
    commit(types.HEIGHT_GOALKEEPERS, name)
  },
  setItemNumberGoalKeepers ({ commit }, name) {
    commit(types.ITEM_NUMBER_GOALKEEPERS, name)
  },
  setPositionGoalKeepers ({ commit }, name) {
    commit(types.POSITION_GOALKEEPERS, name)
  },
  setImageGoalKeepers ({ commit }, name) {
    commit(types.IMAGE_GOALKEEPERS, name)
  },
  setImageSlideGoalKeepers ({ commit }, name) {
    commit(types.SET_IMAGE_IMAGE_SLIDE_GOALKEEPERS, name)
  },
  setImageSlide1GoalKeepers ({ commit }, name) {
    commit(types.SET_IMAGE_IMAGE_SLIDE_1_GOALKEEPERS, name)
  },
  setImageSlide2GoalKeepers ({ commit }, name) {
    commit(types.SET_IMAGE_IMAGE_SLIDE_2_GOALKEEPERS, name)
  },
  setNickNameGoalKeepers ({ commit }, name) {
    commit(types.SET_NICK_NAME_GOALKEEPERS, name)
  },
}

const mutations = {
  [types.BIRTHDAY_GOALKEEPERS] (state, name) {
    state.birthdayGoalKeepers = name
  },
  [types.COUNTRY_GOALKEEPERS] (state, name) {
    state.countryGoalKeepers = name
  },
  [types.LAST_NAME_GOALKEEPERS] (state, name) {
    state.lastNameGoalKeepers = name
  },
  [types.FIRST_NAME_GOALKEEPERS] (state, name) {
    state.firstNameGoalKeepers = name
  },
  [types.SIZE_GOALKEEPERS] (state, name) {
    state.sizeGoalKeepers = name
  },
  [types.HEIGHT_GOALKEEPERS] (state, name) {
    state.heightGoalKeepers = name
  },
  [types.ITEM_NUMBER_GOALKEEPERS] (state, name) {
    state.itemNumberGoalKeepers = name
  },
  [types.POSITION_GOALKEEPERS] (state, name) {
    state.positionGoalKeepers = name
  },
  [types.IMAGE_GOALKEEPERS] (state, name) {
    state.imageGoalKeepers = name
  },
  [types.SET_IMAGE_IMAGE_SLIDE_GOALKEEPERS] (state, name) {
    state.imageSlideGoalKeepers = name
  },
  [types.SET_IMAGE_IMAGE_SLIDE_1_GOALKEEPERS] (state, name) {
    state.imageSlide1GoalKeepers = name
  },
  [types.SET_IMAGE_IMAGE_SLIDE_2_GOALKEEPERS] (state, name) {
    state.imageSlide2GoalKeepers = name
  },
  [types.SET_NICK_NAME_GOALKEEPERS] (state, name) {
    state.nickNameGoalKeepers = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
