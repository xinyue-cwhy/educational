const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 书籍相关
router.post('/selecinbook', (req, res) => {
  let sqlStr = sql.user.selectinbook;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.subname], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/addbooks', (req, res) => {
  let sqlStr = sql.user.addinbook;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.subname,params.bookname,params.account,params.price,params.major], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  conn.end();
});

router.post('/books', (req, res) => {
  let sqlStr = sql.user.books;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
    }
  });
  conn.end();
});
router.post('/inbook', (req, res) => {
  let sqlStr = sql.user.inbook;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
    }
  });
  conn.end();
});
//用户相关
router.post('/selectT', (req, res) => {
  let sqlStr = sql.user.tselect;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
    }
  });
  conn.end();
});
router.post('/cjselect', (req, res) => {
  let sqlStr = sql.user.cjselect;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
    }
  });
  conn.end();
});

// 查询学生用户
router.post('/selectUser', (req, res) => {
  let sqlStr = sql.user.selects;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.name,params.pwd], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
// 查询教师用户
router.post('/selectTuser', (req, res) => {
  let sqlStr = sql.user.selectt;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.name,params.pwd], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
//修改用户
router.post('/updatesp', (req, res) => {
  let sqlStr = sql.user.updatesp;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.pwd,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatetp', (req, res) => {
  let sqlStr = sql.user.updatetp;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.pwd,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatese', (req, res) => {
  let sqlStr = sql.user.updatese;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.email,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatete', (req, res) => {
  let sqlStr = sql.user.updatete;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.email,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatess', (req, res) => {
  let sqlStr = sql.user.updatess;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.phone,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatets', (req, res) => {
  let sqlStr = sql.user.updatets;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.phone,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatesm', (req, res) => {
  let sqlStr = sql.user.updatesm;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.mibao,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
router.post('/updatetm', (req, res) => {
  let sqlStr = sql.user.updatetm;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.mibao,params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});
//教师修改成绩
router.post('/updatecj', (req, res) => {
  let sqlStr = sql.user.updatecj;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.subsuccess,params.name,params.sub], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});

//成绩相关
router.post('/selectcj', (req, res) => {
  let sqlStr = sql.user.selectcj;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.name], (err, result) => {
    if (err) {
      console.log('失败');
    } else {
      res.json(result)
      console.log('找到了');
    }
  });
  conn.end();
});





module.exports = router;