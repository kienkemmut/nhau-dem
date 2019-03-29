import * as types from './mutation-types'
// import Vue from 'vue'
// import router from '../../router'
// let qs = require('qs')


const state = {
  dataDefenders: [
    {
      id: 1,
      birthday: '09/03/1995',
      country: 'Thị trấn Thất Khê',
      last_name: 'Trương Hải',
      first_name: 'Kiên',
      size: '160',
      height: '60',
      item_number: '10',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_kien.jpg'),
      image_slide: require('../../assets/images/1_kien.jpg'),
      image_slide_1: require('../../assets/images/2_kien.jpg'),
      image_slide_2: require('../../assets/images/3_kien.jpg'),
      nick_name: 'Kiên Kem Mút'
    },
    {
      id: 2,
      birthday: '24/01/1995',
      country: 'Thị trấn Thanh Sơn',
      last_name: 'Nguyễn Duy',
      first_name: 'Khánh',
      size: '173',
      height: '65',
      item_number: '19',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_khanh.jpg'),
      image_slide: require('../../assets/images/1_khanh.jpg'),
      image_slide_1: require('../../assets/images/2_khanh.jpg'),
      image_slide_2: require('../../assets/images/3_khanh.jpg'),
      nick_name: 'Khánh bẩn'
    },
    {
      id: 3,
      birthday: '1995',
      country: 'Hà Giang',
      last_name: 'Phạm Quang',
      first_name: 'Trung',
      size: '178',
      height: '70',
      item_number: '23',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_trung.jpg'),
      image_slide: require('../../assets/images/1_trung.jpg'),
      image_slide_1: require('../../assets/images/2_trung.jpg'),
      image_slide_2: require('../../assets/images/3_trung.jpg'),
      nick_name: 'Trung Trâu'
    },
    {
      id: 4,
      birthday: '1995',
      country: 'Thành phố Cao Bằng',
      last_name: 'Nguyễn Đức',
      first_name: 'Hùng',
      size: '160',
      height: '62',
      item_number: '6',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_hung.jpg'),
      image_slide: require('../../assets/images/1_hung.jpg'),
      image_slide_1: require('../../assets/images/2_hung.jpg'),
      image_slide_2: require('../../assets/images/3_hung.jpg'),
      nick_name: 'Hùng Xí'
    },
    {
      id: 5,
      birthday: '01/12/1995',
      country: 'Phú Thọ',
      last_name: 'Đinh Thanh',
      first_name: 'Liêm',
      size: '176',
      height: '66',
      item_number: '7',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_liem.jpg'),
      image_slide: require('../../assets/images/1_liem.jpg'),
      image_slide_1: require('../../assets/images/2_liem.jpg'),
      image_slide_2: require('../../assets/images/3_liem.jpg'),
      nick_name: 'Liêm Chó'
    },
    {
      id: 6,
      birthday: '1995',
      country: 'Thị trấn Bắc Sơn',
      last_name: 'Mu',
      first_name: 'Nam',
      size: '174',
      height: '63',
      item_number: '18',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_nam.jpg'),
      image_slide: require('../../assets/images/1_nam.jpg'),
      image_slide_1: require('../../assets/images/2_nam.jpg'),
      image_slide_2: require('../../assets/images/3_nam.jpg'),
      nick_name: 'Nam Mu'
    },
    {
      id: 7,
      birthday: '22/2/1995',
      country: 'Thành phố Cao Bằng',
      last_name: 'Khánh',
      first_name: 'Giang',
      size: '173',
      height: '55',
      item_number: '20',
      position: 'Hậu vệ',
      image: require('../../assets/images/avt_giang.jpg'),
      image_slide: require('../../assets/images/1_giang.jpg'),
      image_slide_1: require('../../assets/images/2_giang.jpg'),
      image_slide_2: require('../../assets/images/3_giang.jpg'),
      nick_name: 'Giang Chè'
    }
  ],
  birthdayDefenders: '',
  countryDefenders: '',
  lastNameDefenders: '',
  firstNameDefenders: '',
  sizeDefenders: '',
  heightDefenders: '',
  itemNumberDefenders: '',
  positionDefenders: '',
  imageDefenders: '',
  imageSlideDefenders: '',
  imageSlide1Defenders: '',
  imageSlide2Defenders: '',
  nickNameDefenders: ''
}

const getters = {
  dataDefenders: state => state.dataDefenders,
  birthdayDefenders: state => state.birthdayDefenders,
  countryDefenders: state => state.countryDefenders,
  lastNameDefenders: state => state.lastNameDefenders,
  firstNameDefenders: state => state.firstNameDefenders,
  sizeDefenders: state => state.sizeDefenders,
  heightDefenders: state => state.heightDefenders,
  itemNumberDefenders: state => state.itemNumberDefenders,
  positionDefenders: state => state.positionDefenders,
  imageDefenders: state => state.imageDefenders,
  imageSlideDefenders: state => state.imageSlideDefenders,
  imageSlide1Defenders: state => state.imageSlide1Defenders,
  imageSlide2Defenders: state => state.imageSlide2Defenders,
  nickNameDefenders: state => state.nickNameDefenders
}

const actions = {
  setBirthdayDefenders ({ commit }, name) {
    commit(types.BIRTHDAY_DEFENDERS, name)
  },
  setCountryDefenders ({ commit }, name) {
    commit(types.COUNTRY_DEFENDERS, name)
  },
  setLastNameDefenders ({ commit }, name) {
    commit(types.LAST_NAME_DEFENDERS, name)
  },
  setFirstNameDefenders ({ commit }, name) {
    commit(types.FIRST_NAME_DEFENDERS, name)
  },
  setSizeDefenders ({ commit }, name) {
    commit(types.SIZE_DEFENDERS, name)
  },
  setHeightDefenders ({ commit }, name) {
    commit(types.HEIGHT_DEFENDERS, name)
  },
  setItemNumberDefenders ({ commit }, name) {
    commit(types.ITEM_NUMBER_DEFENDERS, name)
  },
  setPositionDefenders ({ commit }, name) {
    commit(types.POSITION_DEFENDERS, name)
  },
  setImageDefenders ({ commit }, name) {
    commit(types.IMAGE_DEFENDERS, name)
  },
  setImageSlideDefenders ({ commit }, name) {
    commit(types.SET_IMAGE_SLIDE_DEFENDERS, name)
  },
  setImageSlide1Defenders ({ commit }, name) {
    commit(types.SET_IMAGE_SLIDE_1_DEFENDERS, name)
  },
  setImageSlide2Defenders ({ commit }, name) {
    commit(types.SET_IMAGE_SLIDE_2_DEFENDERS, name)
  },
  setNickNameDefenders ({ commit }, name) {
    commit(types.SET_NICK_NAME_DEFENDERS, name)
  },
}

const mutations = {
  [types.BIRTHDAY_DEFENDERS] (state, name) {
    state.birthdayDefenders = name
  },
  [types.COUNTRY_DEFENDERS] (state, name) {
    state.countryDefenders = name
  },
  [types.LAST_NAME_DEFENDERS] (state, name) {
    state.lastNameDefenders = name
  },
  [types.FIRST_NAME_DEFENDERS] (state, name) {
    state.firstNameDefenders = name
  },
  [types.SIZE_DEFENDERS] (state, name) {
    state.sizeDefenders = name
  },
  [types.HEIGHT_DEFENDERS] (state, name) {
    state.heightDefenders = name
  },
  [types.ITEM_NUMBER_DEFENDERS] (state, name) {
    state.itemNumberDefenders = name
  },
  [types.POSITION_DEFENDERS] (state, name) {
    state.positionDefenders = name
  },
  [types.IMAGE_DEFENDERS] (state, name) {
    state.imageDefenders = name
  },
  [types.SET_IMAGE_SLIDE_DEFENDERS] (state, name) {
    state.imageSlideDefenders = name
  },
  [types.SET_IMAGE_SLIDE_1_DEFENDERS] (state, name) {
    state.imageSlide1Defenders = name
  },
  [types.SET_IMAGE_SLIDE_2_DEFENDERS] (state, name) {
    state.imageSlide2Defenders = name
  },
  [types.SET_NICK_NAME_DEFENDERS] (state, name) {
    state.nickNameDefenders = name
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
