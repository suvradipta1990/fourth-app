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
const connectionString = 'postgres://postgres:password@192.168.0.14:5433/LALITKALA';
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

    var getpendingpayment = (req,res) => {
        const getPendingPayQry = 'SELECT * from master.t_pending_payment_approval where is_deleted=false  order by pending_payment_id';
        console.log("db.js console getPendingPayQry: ");
        client.query(getPendingPayQry,
                    (err, result, callback) => {
        if (err) {
        console.log(err);
        return null;
        }
        console.log("db.js console REGISTER results : "+result.rows);
        res.status(200).json(result.rows);
        });
    }

    var approve_reject_payment = (p_approve_del,p_id,p_remarks,res) => {
        const approve_reject_payQry = 'SELECT  approve_reject_payment from master.approve_reject_payment ($1,$2,$3)';
        console.log("db.js console approve_reject_payQry: ");
        client.query(approve_reject_payQry,
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

  var search_student = (firstname,lastname,mobileno,regno,res) => {
    const search_studentQry = 'SELECT  * from master.search_student ($1,$2,$3,$4)';
    console.log("db.js console search_studentQry: ");
    client.query(search_studentQry,
                  [firstname,
                    lastname,
                    mobileno,
                    regno],
                (err, result, callback) => {
    if (err) {
    console.log(err);
    return null;
    }
    console.log("db.js console search_student results : "+result.rows);
    res.status(200).json(result.rows);
    });
  }
  var update_fees = (regn_no,fees,discounted_fees,res) => {
      const update_feesQry = 'SELECT  * from master.update_fees ($1,$2,$3)';
      console.log("db.js console update_feesQry: ");
      client.query(update_feesQry,
                  [regn_no,
                   fees,
                   discounted_fees],
                  (err, result, callback) => {
      if (err) {
      console.log(err);
      return null;
      }
      console.log("db.js console update_fees results : "+result.rows);
      res.status(200).json(result.rows);
      });
  }

  var update_profile = (profile_id,
                        regno,
                        oldregnno,
                        firstname,
                        middlename,
                        lastname,
                        dateofbirth,
                        mobilenumber,
                        fathersname,
                        fathersnumber,
                        mothersname,
                        mothersnumber,
                        emailid,
                        dateofjoin,
                        fathersoccupation,
                        mothersoccupation,
                        gender,
                        aadhaar,
                        subject,
                        country,
                        addressline1,
                        addressline2,
                        district,
                        city,
                        pincode,
                        address_type,
                      res) => {
      const update_profileQry = 'SELECT  * from master.update_profile ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26)';
      console.log("db.js console update_profileQry: ");
      client.query(update_profileQry,
                  [profile_id,
                    regno,
                    oldregnno,
                    firstname,
                    middlename,
                    lastname,
                    dateofbirth,
                    mobilenumber,
                    fathersname,
                    fathersnumber,
                    mothersname,
                    mothersnumber,
                    emailid,
                    dateofjoin,
                    fathersoccupation,
                    mothersoccupation,
                    gender,
                    aadhaar,
                    subject,
                    country,
                    addressline1,
                    addressline2,
                    district,
                    city,
                    pincode,
                    address_type],
                  (err, result, callback) => {
      if (err) {
      console.log(err);
      return null;
      }
      console.log("db.js console update_profile results : "+result.rows);
      res.status(200).json(result.rows);
      });
  }

  var add_teacher_history = (teachername,practisefrom,practisetill,
                             is_lalitkala_teacher,is_delete,history_id,profile_id,
                         res) => {
        const add_teacher_historyQry = 'SELECT  * from master.add_del_history ($1,$2,$3,$4,$5,$6,$7)';
        console.log("db.js console add_teacher_historyQry: ");
        client.query(add_teacher_historyQry,
                    [teachername,
                    practisefrom,
                    practisetill,
                    is_lalitkala_teacher,
                    is_delete,
                    history_id,
                    profile_id],
                    (err, result, callback) => {
        if (err) {
        console.log(err);
        return null;
        }
        console.log("db.js console add_del_history results : "+result.rows);
        res.status(200).json(result.rows);
        });
  }

  var get_payment_defaulter = (no_of_month,
                              res) => {
          const get_payment_defaulterQry = 'SELECT  * from master.get_payment_defaulter ($1)';
          console.log("db.js console get_payment_defaulter: ");
          client.query(get_payment_defaulterQry,
                      [no_of_month],
                  (err, result, callback) => {
                      if (err) {
                        console.log(err);
                        return null;
                      }
          console.log("db.js console add_del_history results : "+result.rows);
          res.status(200).json(result.rows);
          });
    }

    var forget_pwd_validation = (regnno,
                                  SecurityQues,
                                  answer,
                                  res) => {
          const forget_pwd_validationQry = 'SELECT  * from master.forget_pwd_validation ($1,$2,$3)';
                    console.log("db.js console forget_pwd_validation: ");
                    client.query(forget_pwd_validationQry,
                               [regnno,
                                SecurityQues,
                                answer],
                    (err, result, callback) => {
                    if (err) {
                    console.log(err);
                    return null;
                    }
                    console.log("db.js console forget_pwd_validation results : "+result.rows);
                    res.status(200).json(result.rows);
           });
      }

      var update_password = (regnno,
                            password,
                            res) => {
      const update_passwordQry = 'SELECT  * from master.update_password ($1,$2)';
                    console.log("db.js console update_password: ");
            client.query(update_passwordQry,
                        [regnno,
                        password],
                (err, result, callback) => {
                if (err) {
                   console.log(err);
                   return null;
                 }
            console.log("db.js console update_password results : "+result.rows);
            res.status(200).json(result.rows);
        });
      }

    var delete_user = (regnno,
                      res) => {
            const delete_userQry = 'SELECT  * from master.delete_user ($1)';
            console.log("db.js console delete_user: ");
            client.query(delete_userQry,
                        [regnno],
                      (err, result, callback) => {
                      if (err) {
                        console.log(err);
                        return null;
                      }
                console.log("db.js console delete_user results : "+result.rows);
                res.status(200).json(result.rows);
            });
  }

 /*****************************AUDITION MODULE************************************ */


 var create_audition = (audname,
                        dateofaud,
                        subject,
                        regfee,
                        res) => {
        const create_auditionQry = 'SELECT  * from master.create_audition ($1,$2,$3,$4)';
        console.log("db.js console forget_pwd_validation: ");
        client.query(create_auditionQry,
                      [audname,
                       dateofaud,
                       subject,
                       regfee],
                      (err, result, callback) => {
                  if (err) {
                  console.log(err);
                  return null;
                  }
              console.log("db.js console create_audition results : "+result.rows);
              res.status(200).json(result.rows);
        });
    }

  
    var get_upcomming_aud = (req,res) => {
      const get_upcomming_audQry = 'SELECT * from audition.t_audition where reg_start_date<=current_date and reg_end_date>current_date and is_deleted=false  order by audition_date';
      console.log("db.js console get_upcomming_audQry: ");
      client.query(get_upcomming_audQry,
                  (err, result, callback) => {
      if (err) {
      console.log(err);
      return null;
      }
      console.log("db.js console REGISTER results : "+result.rows);
      res.status(200).json(result.rows);
      });
  }


  var aud_registration = (audition_id, 
                          firstname, 
                          emailid, 
                          mobilenumber, 
                          altmobilenumber, 
                          aadhaar, 
                          dateofbirth, 
                          gender,
                          addresstype,
                          addressline1,
                          addressline2,
                          district,
                          city,
                          pincode,
                          subject,
                          fathersname,
                          fathersoccupation,
                          fathersnumber,
                          mothersname,
                          mothersoccupation,
                          mothersnumber,
                          totalyrstrainning, 
                          teacher1, 
                          sdate1, 
                          edate1, 
                          teacher2, 
                          sdate2, 
                          edate2,
                          teacher3, 
                          sdate3, 
                          edate3,
                          certification,
                          fammusic,
                          membername,
                          musicinstrument,
                          refperson,
                          res) => {
                      const registerQry = 'SELECT * from MASTER.aud_registration ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36)';
                      console.log("db.js console profile_id: "+firstname);
                      client.query(registerQry, [audition_id, 
                                                firstname, 
                                                emailid, 
                                                mobilenumber, 
                                                altmobilenumber, 
                                                aadhaar, 
                                                dateofbirth, 
                                                gender,
                                                addresstype,
                                                addressline1,
                                                addressline2,
                                                district,
                                                city,
                                                pincode,
                                                subject,
                                                fathersname,
                                                fathersoccupation,
                                                fathersnumber,
                                                mothersname,
                                                mothersoccupation,
                                                mothersnumber,
                                                totalyrstrainning, 
                                                teacher1, 
                                                sdate1, 
                                                edate1, 
                                                teacher2, 
                                                sdate2, 
                                                edate2,
                                                teacher3, 
                                                sdate3, 
                                                edate3,
                                                certification,
                                                fammusic,
                                                membername,
                                                musicinstrument,
                                                refperson], 
                (err, result, callback) => {
                   if (err) {
                     console.log(err);
                     return null;
                   }
                  console.log("db.js console REGISTER results : "+result.rows);
                  res.status(200).json(result.rows);
                });
}

var get_audreg_list = (audname,
                      apprejlist,
                      res) => {
            const create_auditionQry = 'SELECT  * from master.get_audreg_list ($1,$2)';
            console.log("db.js console get_audreg_list: ");
            client.query(create_auditionQry,
                        [audname,
                        apprejlist],
                        (err, result, callback) => {
                          if (err) {
                           console.log(err);
                           return null;
                          }
            console.log("db.js console get_audreg_list results : "+result.rows);
            res.status(200).json(result.rows);
      });
  }

  var get_aud_form = (id,
                      res) => {
            const get_aud_formQry = 'SELECT  * from audition.t_aud_registration where id= $1';
            console.log("db.js console get_aud_form: ");
            client.query(get_aud_formQry,
                  [id],
                  (err, result, callback) => {
                    if (err) {
                    console.log(err);
                    return null;
                    }
            console.log("db.js console get_aud_form results : "+result.rows);
            res.status(200).json(result.rows);
      });
}

var approve_reg_candidate = (id,
                             is_selected,
                             res) => {
                const approve_regQry = 'SELECT * from master.approve_reject_candidate($1,$2)';
                console.log("db.js console approve_reg_candidate: ");
                client.query(approve_regQry,
                            [id,
                            is_selected],
                            (err, result, callback) => {
                            if (err) {
                              console.log(err);
                              return null;
                            }
                            console.log("db.js console approve_reg_candidate results : "+result);
                            res.status(200).json(result.rows);
                  });
  }


  var student_payment_history = (startdate,
                                 enddate,
                                 regnno,
                                 res) => {
        console.log(startdate);
        console.log(enddate);
        console.log(regnno);
        const student_payment_historyQry = 'SELECT * from master.get_student_payment_history($1,$2,$3)';
        console.log("db.js console student_payment_history: ");
        client.query(student_payment_historyQry,
                    [startdate,
                      enddate,
                      regnno],
                    (err, result, callback) => {
                      if (err) {
                        console.log(err);
                        return null;
                      }
                    console.log("db.js console student_payment_history results : "+result);
                    res.status(200).json(result.rows);
                });
   }

    var payment_report = (startdate,
                          enddate,
                          res) => {
                const payment_reportQry = 'SELECT * from master.get_payment_report ($1,$2)';
                console.log("db.js console student_payment_history: ");
                client.query(payment_reportQry,
                            [startdate,
                            enddate],
                            (err, result, callback) => {
                            if (err) {
                            console.log(err);
                            return null;
                            }
                            console.log("db.js console payment_report results : "+result);
                            res.status(200).json(result.rows);
                  });
    }

    var get_teachers = (req,
                        res) => {
            const get_teachersQry = 'SELECT * from master.get_all_teachers()';
            console.log("db.js console student_payment_history: ");
            client.query(get_teachersQry,
                        (err, result, callback) => {
                        if (err) {
                          console.log(err);
                          return null;
                        }
                    console.log("db.js console get_teachers results : "+result);
                    res.status(200).json(result.rows);
            });
  }

  var create_teacher = (firstname, 
                        speciality, 
                        mobilenumber, 
                        emailid, 
                        dateofbirth, 
                        gender,
                        addressline1,
                        addressline2,
                        district,
                        city,
                        pincode,
                        subject,
                          res) => {
                      const registerQry = 'SELECT * from MASTER.create_teacher ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12)';
                      console.log("db.js console profile_id: "+firstname);
      client.query(registerQry,[firstname, 
                                speciality, 
                                mobilenumber, 
                                emailid, 
                                dateofbirth, 
                                gender,
                                addressline1,
                                addressline2,
                                district,
                                city,
                                pincode,
                                subject], 
              (err, result, callback) => {
              if (err) {
              console.log(err);
              return null;
              }
              console.log("db.js console REGISTER results : "+result.rows);
              res.status(200).json(result.rows);
        });
  }

  var create_class = (teacher,
                      subject,
                      dow,
                      stime,
                      etime,
                      res) => {
        const registerQry = 'SELECT * from MASTER.create_class ($1, $2, $3, $4,$5)';
        console.log("db.js console profile_id: "+teacher);
        client.query(registerQry,[teacher,
                                  subject,
                                  dow,
                                  stime,
                                  etime], 
                    (err, result, callback) => {
                    if (err) {
                      console.log(err);
                      return null;
                    }
                    console.log("db.js console REGISTER results : "+result.rows);
                    res.status(200).json(result.rows);
          });
  }

  var get_teacher_by_profileid = (teacher,
                                 res) => {
      const registerQry = 'SELECT * from MASTER.get_teacher_by_profileid ($1)';
      console.log("db.js console profile_id: "+teacher);
      client.query(registerQry,[teacher], 
                    (err, result, callback) => {
                    if (err) {
                      console.log(err);
                      return null;
                    }
                    console.log("db.js console REGISTER results : "+result.rows);
                    res.status(200).json(result.rows);
        });
  }

  var get_class_by_teacher = (teacher_id,
                              res) => {
          const registerQry = 'SELECT * from master.get_class_by_teacher($1)';
          console.log("db.js console teacher_id: "+teacher_id);
      client.query(registerQry,[teacher_id], 
                              (err, result, callback) => {
                              if (err) {
                                  console.log(err);
                                  return null;
                              }
                      console.log("db.js console get_class_by_teacher results : "+result.rows);
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
                   'create_payment' : create_payment,
                   'getpendingpayment' : getpendingpayment,
                   'approve_reject_payment' : approve_reject_payment,
                   'search_student' : search_student,
                   'update_fees' : update_fees,
                   'update_profile' : update_profile,
                   'add_teacher_history' : add_teacher_history,
                   'get_payment_defaulter' :get_payment_defaulter,
                   'forget_pwd_validation' : forget_pwd_validation,
                   'update_password' : update_password,
                   'delete_user' : delete_user,
                   'create_audition' : create_audition,
                   'get_upcomming_aud' : get_upcomming_aud,
                   'aud_registration' : aud_registration,
                   'get_audreg_list' : get_audreg_list,
                   'get_aud_form' : get_aud_form,
                   'approve_reg_candidate' : approve_reg_candidate,
                   'student_payment_history' : student_payment_history,
                   'payment_report' : payment_report,
                   'get_teachers' : get_teachers,
                   'create_teacher' : create_teacher,
                   'create_class' :create_class,
                   'get_teacher_by_profileid' : get_teacher_by_profileid,
                   'get_class_by_teacher' : get_class_by_teacher
                  };