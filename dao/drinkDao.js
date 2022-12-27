const { Op } = require('sequelize');
const { Drink } = require('../models/index');

const dao = {
  //음료 검색
  selectList(params) {
    console.log(params)
    // where 검색 조건
    const setQuery = {};
    if (params.name || params.store || params.keyword) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name},${params.sotre},${params.keyword}%` }, // like검색
      };
    }
    // if (params.userid) {
    //   setQuery.where = {
    //     ...setQuery.where,
    //     userid: params.userid, // '='검색
    //   };
    // }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      Drink.findAndCountAll({
        ...setQuery,
        where: {category : params.category } 
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  //음료 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Drink.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
}

module.exports = dao;