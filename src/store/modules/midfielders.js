import * as types from './mutation-types'
// import Vue from 'vue'
// import router from '../../router'
// let qs = require('qs')


const state = {
  dataMidfielders: [
    {
      id: 1,
      birthday: '19/12/1995',
      country: 'Thị trấn Thất Khê',
      last_name: 'La Văn',
      first_name: 'Mạnh',
      size: '178',
      height: '65',
      item_number: '15',
      position: 'Tiền vệ',
      image: require('../../assets/images/avt_manh.jpg'),
      image_slide: require('../../assets/images/1_manh.jpg'),
      image_slide_1: require('../../assets/images/2_manh.jpg'),
      image_slide_2: require('../../assets/images/3_manh.jpg'),
      nick_name: 'Mạnh Chít'
    },
    {
      id: 2,
      birthday: '19/06/1995',
      country: 'Thị trấn Kim Bôi',
      last_name: 'Đỗ Thành',
      first_name: 'Chung',
      size: '166',
      height: '65',
      item_number: '24',
      position: 'Tiền vệ',
      image: require('../../assets/images/avt_chung.jpg'),
      image_slide: require('../../assets/images/1_chung.jpg'),
      image_slide_1: require('../../assets/images/2_chung.jpg'),
      image_slide_2: require('../../assets/images/3_chung.jpg'),
      nick_name: 'Chung chim'
    },
    {
      id: 3,
      birthday: '29/07/1996',
      country: 'Thị trấn Thất Khê',
      last_name: 'Hứa Minh',
      first_name: 'Hưởng',
      size: '178',
      height: '68',
      item_number: '8',
      position: 'Tiền vệ',
      image: require('../../assets/images/avt_ti.jpg'),
      image_slide: require('../../assets/images/1_ti.jpg'),
      image_slide_1: require('../../assets/images/2_ti.jpg'),
      image_slide_2: require('../../assets/images/3_ti.jpg'),
      nick_name: 'Tý Iêu'
    },
    {
      id: 4,
      birthday: '27/09/1996',
      country: 'Thị trấn Thất Khê',
      last_name: 'Lê Huy',
      first_name: 'Quang',
      size: '174',
      height: '64',
      item_number: '21',
      position: 'Tiền vệ',
      image: require('../../assets/images/avt_quang.jpg'),
      image_slide: require('../../assets/images/1_quang.jpg'),
      image_slide_1: require('../../assets/images/2_quang.jpg'),
      image_slide_2: require('../../assets/images/3_quang.jpg'),
      nick_name: 'Quang Lợn'
    }
  ],
  birthdayMidfielders: '',
  countryMidfielders: '',
  lastNameMidfielders: '',
  firstNameMidfielders: '',
  sizeMidfielders: '',
  heightMidfielders: '',
  itemNumberMidfielders: '',
  positionMidfielders: '',
  imageMidfielders: '',
  imageSlideMidfielders: '',
  imageSlide1Midfielders: '',
  imageSlide2Midfielders: '',
  nickNameMidfielders: ''
}

const getters = {
  dataMidfielders: state => state.dataMidfielders,
  birthdayMidfielders: state => state.birthdayMidfielders,
  countryMidfielders: state => state.countryMidfielders,
  lastNameMidfielders: state => state.lastNameMidfielders,
  firstNameMidfielders: state => state.firstNameMidfielders,
  sizeMidfielders: state => state.sizeMidfielders,
  heightMidfielders: state => state.heightMidfielders,
  itemNumberMidfielders: state => state.itemNumberMidfielders,
  positionMidfielders: state => state.positionMidfielders,
  imageMidfielders: state => state.imageMidfielders,
  imageSlideMidfielders: state => state.imageSlideMidfielders,
  imageSlide1Midfielders: state => state.imageSlide1Midfielders,
  imageSlide2Midfielders: state => state.imageSlide2Midfielders,
  nickNameMidfielders: state => state.nickNameMidfielders
}

const actions = {
  setBirthdayMidfielders ({ commit }, name) {
    commit(types.BIRTHDAY_MIDFIELDERS, name)
  },
  setCountryMidfielders ({ commit }, name) {
    commit(types.COUNTRY_MIDFIELDERS, name)
  },
  setLastNameMidfielders ({ commit }, name) {
    commit(types.LAST_NAME_MIDFIELDERS, name)
  },
  setFirstNameMidfielders ({ commit }, name) {
    commit(types.FIRST_NAME_MIDFIELDERS, name)
  },
  setSizeMidfielders ({ commit }, name) {
    commit(types.SIZE_MIDFIELDERS, name)
  },
  setHeightMidfielders ({ commit }, name) {
    commit(types.HEIGHT_MIDFIELDERS, name)
  },
  setItemNumberMidfielders ({ commit }, name) {
    commit(types.ITEM_NUMBER_MIDFIELDERS, name)
  },
  setPositionMidfielders ({ commit }, name) {
    commit(types.POSITION_MIDFIELDERS, name)
  },
  setImageMidfielders ({ commit }, name) {
    commit(types.IMAGE_MIDFIELDERS, name)
  },
  setImageSlideMidfielders ({ commit }, name) {
    commit(types.SET_IMAGE_SLIDE_MIDFIELDERS, name)
  },
  setImageSlide1Midfielders ({ commit }, name) {
    commit(types.SET_IMAGE_SLIDE_1_MIDFIELDERS, name)
  },
  setImageSlide2Midfielders ({ commit }, name) {
    commit(types.SET_IMAGE_SLIDE_2_MIDFIELDERS, name)
  },
  setNickNameMidfielders ({ commit }, name) {
    commit(types.SET_NICK_NAME_MIDFIELDERS, name)
  }
}

const mutations = {
  [types.BIRTHDAY_MIDFIELDERS] (state, name) {
    state.birthdayMidfielders = name
  },
  [types.COUNTRY_MIDFIELDERS] (state, name) {
    state.countryMidfielders = name
  },
  [types.LAST_NAME_MIDFIELDERS] (state, name) {
    state.lastNameMidfielders = name
  },
  [types.FIRST_NAME_MIDFIELDERS] (state, name) {
    state.firstNameMidfielders = name
  },
  [types.SIZE_MIDFIELDERS] (state, name) {
    state.sizeMidfielders = name
  },
  [types.HEIGHT_MIDFIELDERS] (state, name) {
    state.heightMidfielders = name
  },
  [types.ITEM_NUMBER_MIDFIELDERS] (state, name) {
    state.itemNumberMidfielders = name
  },
  [types.POSITION_MIDFIELDERS] (state, name) {
    state.positionMidfielders = name
  },
  [types.IMAGE_MIDFIELDERS] (state, name) {
    state.imageMidfielders = name
  },
  [types.SET_IMAGE_SLIDE_MIDFIELDERS] (state, name) {
    state.imageSlideMidfielders = name
  },
  [types.SET_IMAGE_SLIDE_1_MIDFIELDERS] (state, name) {
    state.imageSlide1Midfielders = name
  },
  [types.SET_IMAGE_SLIDE_2_MIDFIELDERS] (state, name) {
    state.imageSlide2Midfielders = name
  },
  [types.SET_NICK_NAME_MIDFIELDERS] (state, name) {
    state.nickNameMidfielders = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
