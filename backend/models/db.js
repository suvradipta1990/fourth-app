// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'LALITKALA',
//   password: 'password',
//   port: 5433,
// })
// pool.connect();

// module.exports = pool;

const { Client } = require('pg');
// const login = require('./users/login');
const connectionString = 'postgres://postgres:password@localhost:5433/LALITKALA';
const client = new Client({
    connectionString: connectionString
});



var login = (user, pwd,res) => {
  const loginQuery = 'SELECT * FROM master.t_user WHERE username = $1 AND password = $2';
  client.query(loginQuery, [user,pwd], (err, result, callback) => {
    if (err) {
        console.log(err);
        return null;
    }
    res.status(200).json(result.rows);
  });
}

// ///////////////////////////////////////////////////////////

  var getprofile = (userid,res) => {
      const getprofileQuery = 'SELECT * FROM master.t_profile WHERE user_id = $1 AND is_deleted = false';
      console.log("db.js console "+userid);
      client.query(getprofileQuery, [userid], (err, result, callback) => {
        if (err) {
            console.log(err);
            return null;

        }
        res.status(200).json(result.rows);
      });
  }

  var getprofileprofilehist = (profile_id,res) => {
        const getprofhistQuery = 'SELECT * FROM master.t_profile_history WHERE profile_id = $1 AND is_deleted = false';
        console.log("db.js console profile_id: "+profile_id);
        client.query(getprofhistQuery, [profile_id], (err, result, callback) => {
          if (err) {
              console.log(err);
              return null;

          }
          console.log("db.js console profile_id results : "+result.rows);
          res.status(200).json(result.rows);
        });
  }

  var getPaymentSummary = (profile_id,res) => {
      const getPaymentSummary = 'SELECT * FROM master.payment_summery_view WHERE profile_id = $1';
      console.log("db.js console profile_id: "+profile_id);
      client.query(getPaymentSummary, [profile_id], (err, result, callback) => {
        if (err) {
            console.log(err);
            return null;

        }
        console.log("db.js console profile_id results : "+result.rows);
        res.status(200).json(result.rows);
      });
  }

  var getAddress = (profile_id,res) => {
          const getAddressqry = 'SELECT * FROM master.t_address WHERE profile_id = $1 and is_deleted =false';
          console.log("db.js console profile_id: "+profile_id);
          client.query(getAddressqry, [profile_id], (err, result, callback) => {
            if (err) {
                console.log(err);
                return null;

            }
            console.log("db.js console getAddress results : "+result.rows);
            res.status(200).json(result.rows);
          });
  }

  var register = (firstname,
                lastname,
                mobilenumber,
                emailid,
                password,   
                dateofbirth,
                oldregnno,
                confirmpassword,
                dateofjoin,
                gender,
                fathersnumber,
                mothersnumber,
                addresstype,
                addressline1,
                addressline2,
                district,
                city,
                pincode,
                aadhaar,
                subject,
                fathersname,
                mothersname,
                fathersoccupation,
                mothersoccupation,
              res) => {
      const register = 'SELECT * from MASTER.REGISTRATION ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24)';
      console.log("db.js console profile_id: "+firstname);
      client.query(register, [firstname,
                              lastname,
                              mobilenumber,
                              emailid,
                              password,
                              dateofbirth,
                              oldregnno,
                              confirmpassword,
                              dateofjoin,
                              gender,
                              fathersnumber,
                              mothersnumber,
                              addresstype,
                              addressline1,
                              addressline2,
                              district,
                              city,
                              pincode,
                              aadhaar,
                              subject,
                              fathersname,
                              mothersname,
                              fathersoccupation,
                              mothersoccupation], 
                              (err, result, callback) => {
          if (err) {
                  console.log(err);
                  return null;
              }
              console.log("db.js console REGISTER results : "+result.rows);
              res.status(200).json(result.rows);
            });
    }

   var getpedingreg = (req,res) => {
          const getpedingreg = 'SELECT * from master.t_pending_regitration_approval where is_deleted=false and length(trim(regn_no))>0 order by id';
          console.log("db.js console getpedingreg: ");
          client.query(getpedingreg,
                      (err, result, callback) => {
          if (err) {
          console.log(err);
          return null;
          }
          console.log("db.js console REGISTER results : "+result.rows);
          res.status(200).json(result.rows);
          });
   }

  var approve_reject_reg = (p_approve_del,p_id,p_remarks,res) => {
        const app_reject_reg = 'SELECT  approve_decline_registration from master.approve_decline_registration ($1,$2,$3)';
        console.log("db.js console approve_reject_reg: ");
        client.query(app_reject_reg,
                      [p_approve_del,
                        p_id,
                        p_remarks],
                    (err, result, callback) => {
        if (err) {
        console.log(err);
        return null;
        }
        console.log("db.js console REGISTER APPROVE results : "+result.rows);
        res.status(200).json(result.rows);
        });
  }

  var create_payment = (profile_id,
                        officename,
                        transacid,
                        teacher,
                        paymonthfrom,   
                        paymonthto,
                        payamount,
                        isadmin,
                        regn_no,
                        transacslip,
                      res) => {
      const create_paymentqry = 'SELECT * from MASTER.create_payment ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10)';
      console.log("db.js console profile_id: "+profile_id);
      client.query(create_paymentqry, [profile_id,
                                    officename,
                                    transacid,
                                    teacher,
                                    paymonthfrom,   
                                    paymonthto,
                                    payamount,
                                    isadmin,
                                    regn_no,
                                    transacslip], 
                  (err, result, callback) => {
              if (err) {
              console.log(err);
              return null;
              }
              console.log("db.js console create_paymentqry results : "+result.rows);
              res.status(200).json(result.rows);
              });
    }

module.exports = {'client': client,
                  'login': login,
                   'getprofile': getprofile,
                   'getprofileprofilehist': getprofileprofilehist,
                   'getPaymentSummary': getPaymentSummary,
                   'getAddress' : getAddress,
                   'register': register,
                   'getpedingreg' : getpedingreg,
                   'approve_reject_reg' : approve_reject_reg,
                   'create_payment' : create_payment
                  };