// sql语句
var sqlMap = {
  user: {
    // 查询用户
    selects: 'select * from slogin where name like ?',
    selectt: 'select * from tlogin where name like ?',
    sselect:'select * from slogin',
    tselect:'select * from tlogin',
    //查询成绩
    selectcj:'select * from cj where name like ?',
    cjselect:'select * from cj',
    //修改
    updatesp:'UPDATE slogin SET pwd = ? WHERE name like ?',
    updatese:'UPDATE slogin SET email = ? WHERE name like ?',
    updatess:'UPDATE slogin SET phone = ? WHERE name like ?',
    updatesm:'UPDATE slogin SET mibao = ? WHERE name like ?',
    //修改成绩
    updatecj:'UPDATE cj SET subsuccess = ? WHERE name like ? AND sub like ?',
    //教师
    updatetp:'UPDATE tlogin SET pwd = ? WHERE name like ?',
    updatete:'UPDATE tlogin SET email = ? WHERE name like ?',
    updatets:'UPDATE tlogin SET phone = ? WHERE name like ?',
    updatetm:'UPDATE tlogin SET mibao = ? WHERE name like ?',
    //书籍
    books:'select * from book',
    inbook:'select * from inbook',
    addinbook: 'insert into inbook(subname,bookname,account,price,major) values (?,?,?,?,?)',
    selectinbook:'select * from inbook where subname like ?'
  }
}

module.exports = sqlMap;
