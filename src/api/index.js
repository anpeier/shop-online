const getGoodsInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        goodsimg: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1507575374,888115040&fm=26&gp=0.jpg']
      })
    }, 1000);
  })
};

module.exports = {
  getGoodsInfo
}
