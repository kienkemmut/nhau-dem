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
      image: require('../../assets/images/pogba.png')
    },
    {
      id: 2,
      birthday: '1995',
      country: 'Thị trấn Kim Bôi',
      last_name: 'Đỗ Thành',
      first_name: 'Chung',
      size: '166',
      height: '65',
      item_number: '24',
      position: 'Tiền vệ',
      image: require('../../assets/images/pogba.png')
    },
    {
      id: 3,
      birthday: '1996',
      country: 'Thị trấn Thất Khê',
      last_name: 'Hứa Minh',
      first_name: 'Hưởng',
      size: '178',
      height: '68',
      item_number: '8',
      position: 'Tiền vệ',
      image: require('../../assets/images/pogba.png')
    },
    {
      id: 4,
      birthday: '1996',
      country: 'Thị trấn Thất Khê',
      last_name: 'Lê Huy',
      first_name: 'Quang',
      size: '174',
      height: '64',
      item_number: '21',
      position: 'Tiền vệ',
      image: require('../../assets/images/pogba.png')
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
  imageMidfielders: ''
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
}

export default {
  state,
  getters,
  actions,
  mutations
}
