import * as types from './mutation-types'
// import Vue from 'vue'
// import router from '../../router'
// let qs = require('qs')


const state = {
  dataForwards: [
    {
      id: 1,
      birthday: '07/04/1995',
      country: 'Thị trấn Thất Khê',
      last_name: 'Lê Anh',
      first_name: 'Hào',
      size: '169',
      height: '60',
      item_number: '14',
      position: 'Tiền đạo',
      image: require('../../assets/images/Rooney.jpg')
    },
    {
      id: 2,
      birthday: '1995',
      country: 'Thị trấn Đình Lập',
      last_name: 'Hà Đình',
      first_name: 'Văn',
      size: '172',
      height: '72',
      item_number: '12',
      position: 'Tiền đạo',
      image: require('../../assets/images/Rooney.jpg')
    },
    {
      id: 3,
      birthday: '1994',
      country: 'Thành phố Quảng Ninh',
      last_name: 'Trần',
      first_name: 'Long',
      size: '180',
      height: '75',
      item_number: '9',
      position: 'Tiền đạo',
      image: require('../../assets/images/Rooney.jpg')
    },
    {
      id: 4,
      birthday: '1996',
      country: 'Thành phố Thái Nguyên',
      last_name: 'Nông Văn',
      first_name: 'Hà',
      size: '170',
      height: '65',
      item_number: '28',
      position: 'Tiền đạo',
      image: require('../../assets/images/Rooney.jpg')
    },
    {
      id: 5,
      birthday: '1996',
      country: 'Thị trấn Lộc Bình',
      last_name: 'Chu',
      first_name: 'Chuyên',
      size: '167',
      height: '54',
      item_number: '22',
      position: 'Tiền đạo',
      image: require('../../assets/images/Rooney.jpg')
    }
  ],
  birthdayForwards: '',
  countryForwards: '',
  lastNameForwards: '',
  firstNameForwards: '',
  sizeForwards: '',
  heightForwards: '',
  itemNumberForwards: '',
  positionForwards: '',
  imageForwards: ''
}

const getters = {
  dataForwards: state => state.dataForwards,
  birthdayForwards: state => state.birthdayForwards,
  countryForwards: state => state.countryForwards,
  lastNameForwards: state => state.lastNameForwards,
  firstNameForwards: state => state.firstNameForwards,
  sizeForwards: state => state.sizeForwards,
  heightForwards: state => state.heightForwards,
  itemNumberForwards: state => state.itemNumberForwards,
  positionForwards: state => state.positionForwards,
  imageForwards: state => state.imageForwards,
}

const actions = {
  setBirthdayForwards ({ commit }, name) {
    commit(types.BIRTHDAY_FORWARDS, name)
  },
  setCountryForwards ({ commit }, name) {
    commit(types.COUNTRY_FORWARDS, name)
  },
  setLastNameForwards ({ commit }, name) {
    commit(types.LAST_NAME_FORWARDS, name)
  },
  setFirstNameForwards ({ commit }, name) {
    commit(types.FIRST_NAME_FORWARDS, name)
  },
  setSizeForwards ({ commit }, name) {
    commit(types.SIZE_FORWARDS, name)
  },
  setHeightForwards ({ commit }, name) {
    commit(types.HEIGHT_FORWARDS, name)
  },
  setItemNumberForwards ({ commit }, name) {
    commit(types.ITEM_NUMBER_FORWARDS, name)
  },
  setPositionForwards ({ commit }, name) {
    commit(types.POSITION_FORWARDS, name)
  },
  setImageForwards ({ commit }, name) {
    commit(types.IMAGE_FORWARDS, name)
  },
}

const mutations = {
  [types.BIRTHDAY_FORWARDS] (state, name) {
    state.birthdayForwards = name
  },
  [types.COUNTRY_FORWARDS] (state, name) {
    state.countryForwards = name
  },
  [types.LAST_NAME_FORWARDS] (state, name) {
    state.lastNameForwards = name
  },
  [types.FIRST_NAME_FORWARDS] (state, name) {
    state.firstNameForwards = name
  },
  [types.SIZE_FORWARDS] (state, name) {
    state.sizeForwards = name
  },
  [types.HEIGHT_FORWARDS] (state, name) {
    state.heightForwards = name
  },
  [types.ITEM_NUMBER_FORWARDS] (state, name) {
    state.itemNumberForwards = name
  },
  [types.POSITION_FORWARDS] (state, name) {
    state.positionForwards = name
  },
  [types.IMAGE_FORWARDS] (state, name) {
    state.imageForwards = name
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
