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
      image: require('../../assets/images/degea.jpg')
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
  imageGoalKeepers: ''
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
}

export default {
  state,
  getters,
  actions,
  mutations
}
