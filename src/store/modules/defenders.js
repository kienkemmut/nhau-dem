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
      image: require('../../assets/images/vidic.jpg')
    },
    {
      id: 2,
      birthday: '1995',
      country: 'Thị trấn Thanh Sơn',
      last_name: 'Nguyễn Duy',
      first_name: 'Khánh',
      size: '173',
      height: '65',
      item_number: '19',
      position: 'Hậu vệ',
      image: require('../../assets/images/vidic.jpg')
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
      image: require('../../assets/images/vidic.jpg')
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
      image: require('../../assets/images/vidic.jpg')
    },
    {
      id: 5,
      birthday: '1995',
      country: 'Phú Thọ',
      last_name: 'Đinh Thanh',
      first_name: 'Liêm',
      size: '176',
      height: '66',
      item_number: '7',
      position: 'Hậu vệ',
      image: require('../../assets/images/vidic.jpg')
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
      image: require('../../assets/images/vidic.jpg')
    },
    {
      id: 7,
      birthday: '1995',
      country: 'Thành phố Cao Bằng',
      last_name: 'Khánh',
      first_name: 'Giang',
      size: '173',
      height: '55',
      item_number: '20',
      position: 'Hậu vệ',
      image: require('../../assets/images/vidic.jpg')
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
  imageDefenders: ''
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
}
export default {
  state,
  getters,
  actions,
  mutations
}
