const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); 
const path = require('path');
const app = express();
var session = require('express-session');
var db = require('./models/db.js');
const { response } = require('express');
const multer = require('multer');
const myImagePath ='../src/assets/images/';

var fs = require('fs');
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

db.client.on('connect', () => {
    console.log('connected to the db');
  });
  db.client.connect();

app.use(cors());

// Body parser use JSON data
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
  extended: true
}));

//api start from here
app.get('/', (req, res) => {
    res.json('Hello World, ');
});

app.get('/my-custom-url', function(req, res) {
    console.dir(req)
    res.json('Hello World,my-custom-url ' + req);
})
// REST =>
// POST -> Cretae
// PUT -> Update 
// GET -> Retrieve
// DELETE -> Delete
// server.listen(process.env.PORT||3000);

// Login api
    app.post('/login', (req, res) => {
        console.log(req.body) ;
        //console.log(res.body) ;
        db.login(req.body.username, req.body.password, res);  // res.json(data);


    })

    app.post('/profile', (req, res) => {
        console.log(req.body) ;
        console.log(res.body) ;
        return db.getprofile(req.body.userid, res);  // res.json(data);
    })

    app.post('/profilehistory', (req, res) => {
        console.log('profilehistory REQ') ;
        console.log(req.body.profile_id) ;
        console.log('profilehistory RES') ;
        console.log(res.body) ;
        return db.getprofileprofilehist(req.body.profile_id, res);  // res.json(data);
    })

    app.post('/getPaymentSummary', (req, res) => {
        console.log('getPaymentSummary REQ') ;
        console.log(req.body.profile_id) ;
        console.log('getPaymentSummary RES') ;
        console.log(res.body) ;
        return db.getPaymentSummary(req.body.profile_id, res);  // res.json(data);
    })

    app.post('/getAddress', (req, res) => {
        console.log('getAddress REQ') ;
        console.log(req.body.profile_id) ;
        console.log('getAddress RES') ;
        console.log(res.body) ;
        return db.getAddress(req.body.profile_id, res);  // res.json(data);
    })

    app.post('/register', (req, res) => {
        console.log('register REQ') ;
        console.log(req.body) ;
        console.log('register RES') ;
        console.log(res.body) ;
        return db.register(req.body.firstname,
                        req.body.lastname,
                        req.body.mobilenumber,
                        req.body.emailid,
                        req.body.password,
                        req.body.dateofbirth,
                        req.body.oldregnno,
                        req.body.confirmpassword,
                        req.body.dateofjoin,
                        req.body.gender,
                        req.body.fathersnumber,
                        req.body.mothersnumber,
                        req.body.addresstype,
                        req.body.addressline1,
                        req.body.addressline2,
                        req.body.district,
                        req.body.city,
                        req.body.pincode,
                        req.body.aadhaar,
                        req.body.subject,
                        req.body.fathersname,
                        req.body.mothersname,
                        req.body.fathersoccupation,
                        req.body.mothersoccupation,
                        res);  // res.json(data);
    })

    app.get('/pendingreg', (req, res) => {
        console.log('pendingreg REQ') ;
        console.log(req.body) ;
        console.log('pendingreg RES') ;
        console.log(res.body) ;
        return db.getpedingreg(req,res);  // res.json(data);
    })

    app.post('/approve_reject_reg', (req, res) => {
        console.log('approve_reject_reg REQ') ;
        console.log(req.body) ;
        console.log('approve_reject_reg RES') ;
        console.log(res.body) ;
        return db.approve_reject_reg(req.body.p_approve_del,
                                                req.body.p_id,
                                                req.body.p_remarks,
                                            res);  // res.json(data); 
    }) 



    app.post('/createpayment', (req, res) => {
        console.log('approve_reject_reg REQ') ;
        console.log(req.body) ;
        console.log('approve_reject_reg RES') ;
        console.log(res.body) ;
        return db.create_payment(req.body.profile_id,
                                    req.body.officename,
                                    req.body.transacid,
                                    req.body.teacher,
                                    req.body.paymonthfrom,
                                    req.body.paymonthto,
                                    req.body.payamount,
                                    req.body.isadmin,
                                    req.body.regn_no,
                                    null,
                                res);  // res.json(data); 
    })

    /****************************Fee Reciept Upload *************** */
    var FeeReciept = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, myImagePath + 'fees_transaction_image')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    });
    const FeeRecieptupload = multer({ storage: FeeReciept });

    app.post('/uploadFeeReciept', FeeRecieptupload.single('uploads'), function(req,res) {
        console.log('storage location is ', req.hostname +'/' + req.file.path);
        return res.send(req.file);
    }) 

    app.get('/pendingpayment', (req, res) => {
        console.log('pendingpayment REQ') ;
        console.log(req.body) ;
        console.log('pendingpayment RES') ;
        console.log(res.body) ;
        return db.getpendingpayment(req,res);  // res.json(data);
    })

    app.post('/approve_reject_payment', (req, res) => {
        console.log('approve_reject_payment REQ') ;
        console.log(req.body) ;
        console.log('approve_reject_payment RES') ;
        console.log(res.body) ;
        return db.approve_reject_payment(req.body.p_approve_del,
                                                req.body.p_id,
                                                req.body.p_remarks,
                                            res);  // res.json(data); 
    }) 

    app.post('/search_student', (req, res) => {
        console.log('search_student REQ') ;
        console.log(req.body) ;
        console.log('search_student RES') ;
        console.log(res.body) ;
        return db.search_student(req.body.firstname,
                                req.body.lastname,
                                req.body.mobileno,
                                req.body.regno,
                                res);  // res.json(data); 
    }) 


    app.post('/update_fees', (req, res) => {
        console.log('update_fees REQ') ;
        console.log(req.body) ;
        console.log('update_fees RES') ;
        console.log(res.body) ;
        return db.update_fees(req.body.regn_no,
                                req.body.fees,
                                req.body.discounted_fees,
                                res);  // res.json(data); 
    })
    
    
    app.post('/search_student', (req, res) => {
        console.log('search_student REQ') ;
        console.log(req.body) ;
        console.log('search_student RES') ;
        console.log(res.body) ;
        return db.search_student(req.body.firstname,
                                req.body.lastname,
                                req.body.mobileno,
                                req.body.regno,
                                res);  // res.json(data); 
    }) 

    app.post('/updateProfile', (req, res) => {
        console.log('updateProfile REQ') ;
        console.log(req.body) ;
        console.log('updateProfile RES') ;
        console.log(res.body) ;
           return db.update_profile(req.body.profile_id,
                                    req.body.regno,
                                    req.body.oldregnno,
                                    req.body.firstname,
                                    req.body.middlename,
                                    req.body.lastname,
                                    req.body.dateofbirth,
                                    req.body.mobilenumber,
                                    req.body.fathersname,
                                    req.body.fathersnumber,
                                    req.body.mothersname,
                                    req.body.mothersnumber,
                                    req.body.emailid,
                                    req.body.dateofjoin,
                                    req.body.fathersoccupation,
                                    req.body.mothersoccupation,
                                    req.body.gender,
                                    req.body.aadhaar,
                                    req.body.subject,
                                    req.body.country,
                                    req.body.addressline1,
                                    req.body.addressline2,
                                    req.body.district,
                                    req.body.city,
                                    req.body.pincode,
                                    req.body.address_type,
                                res);  // res.json(data); 
    })

    app.post('/add_history', (req, res) => {
        console.log('search_student REQ') ;
        console.log(req.body) ;
        console.log('search_student RES') ;
        console.log(res.body) ;
        return db.add_teacher_history(req.body.teachername,
                                    req.body.practisefrom,
                                    req.body.practisetill,
                                    req.body.is_lalitkala_teacher,
                                    req.body.is_delete,
                                    req.body.history_id,
                                    req.body.profile_id,
                                    res);  // res.json(data); 
    }) 

    app.post('/getallpaymentdefaulter', (req, res) => {
        console.log('getallpaymentdefaulter REQ') ;
        console.log(req.body) ;
        console.log('getallpaymentdefaulter RES') ;
        console.log(res.body) ;
        return db.get_payment_defaulter(req.body.no_of_months,
                                       res);  // res.json(data); 
    }) 



    app.post('/foregetpwdvalidity', (req, res) => {
        console.log('foregetpwdvalidity REQ') ;
        console.log(req.body) ;
        console.log('foregetpwdvalidity RES') ;
        console.log(res.body) ;
        return db.forget_pwd_validation(req.body.regnno,
                                        req.body.SecurityQues,
                                        req.body.answer,
                                       res);  // res.json(data); 
    }) 

    app.post('/updatepassword', (req, res) => {
        console.log('updatepassword REQ') ;
        console.log(req.body) ;
        console.log('updatepassword RES') ;
        console.log(res.body) ;
        return db.update_password(req.body.regnno,
                                  req.body.password,
                               res);  // res.json(data); 
    }) 

    app.post('/deleteuser', (req, res) => {
        console.log('deleteuser REQ') ;
        console.log(req.body) ;
        console.log('deleteuser RES') ;
        console.log(res.body) ;
        return db.delete_user(req.body.regnno,
                               res);  // res.json(data); 
    }) 


 /****************************Profile Photo Upload *************** */
    var ProfilePhoto = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, myImagePath + 'profile_image')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    });
    const ProfilePhotoupload = multer({ storage: ProfilePhoto });

    app.post('/uploadProfilePic', ProfilePhotoupload.single('uploads'), function(req,res) {
        console.log('storage location is ', req.hostname +'/' + req.file.path);
        return res.send(req.file);
    }) 

/************************************************************ */   

/*****************************AUDITION MODULE******************************** */

app.post('/createaudition', (req, res) => {
    console.log('createaudition REQ') ;
    console.log(req.body) ;
    console.log('createaudition RES') ;
    console.log(res.body) ;
    return db.create_audition(req.body.audname,
                                    req.body.dateofaud,
                                    req.body.subject,
                                    req.body.regfee,
                                   res);  // res.json(data); 
}) 

app.get('/getUpcommingAud', (req, res) => {
    console.log('getUpcommingAud REQ') ;
    console.log(req.body) ;
    console.log('getUpcommingAud RES') ;
    console.log(res.body) ;
    return db.get_upcomming_aud(req,res);  // res.json(data);
})

app.post('/pre-aud-register', (req, res) => {
    console.log('register REQ') ;
    console.log(req.body) ;
    console.log('register RES') ;
    console.log(res.body) ;
    return db.aud_registration(req.body.audition_id, 
                                req.body.firstname, 
                                req.body.emailid, 
                                req.body.mobilenumber, 
                                req.body.altmobilenumber, 
                                req.body.aadhaar, 
                                req.body.dateofbirth, 
                                req.body.gender,
                                req.body.addresstype,
                                req.body.addressline1,
                                req.body.addressline2,
                                req.body.district,
                                req.body.city,
                                req.body.pincode,
                                req.body.subject,
                                req.body.fathersname,
                                req.body.fathersoccupation,
                                req.body.fathersnumber,
                                req.body.mothersname,
                                req.body.mothersoccupation,
                                req.body.mothersnumber,
                                req.body.totalyrstrainning, 
                                req.body.teacher1, 
                                req.body.sdate1, 
                                req.body.edate1, 
                                req.body.teacher2, 
                                req.body.sdate2, 
                                req.body.edate2,
                                req.body.teacher3, 
                                req.body.sdate3, 
                                req.body.edate3,
                                req.body.certification,
                                req.body.fammusic,
                                req.body.membername,
                                req.body.musicinstrument,
                                req.body.refperson,
                            res);  // res.json(data);
})

var AuditionFile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, myImagePath + 'audition')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const AuditionFiles = multer({ storage: AuditionFile });

app.post('/uploadRegPic', AuditionFiles.single('uploads'), function(req,res) {
    console.log('storage location is ', req.hostname +'/' + req.file.path);
    return res.send(req.file);
}) 


app.post('/getaudreglist', (req, res) => {
    console.log('getaudreglist REQ') ;
    console.log(req.body) ;
    console.log('getaudreglist RES') ;
    console.log(res.body) ;
    return db.get_audreg_list(req.body.audname,
                              req.body.apprejlist,
                              res);  // res.json(data); 
}) 

app.post('/getAudRegForm', (req, res) => {
    console.log('getAudRegForm REQ') ;
    console.log(req.body) ;
    console.log('getAudRegForm RES') ;
    console.log(res.body) ;
    return db.get_aud_form(req.body.id,
                           res);  // res.json(data); 
}) 

app.post('/selectReject', (req, res) => {
    console.log('selectReject REQ') ;
    console.log(req.body) ;
    console.log('selectReject RES') ;
    console.log(res.body) ;
    return db.approve_reg_candidate(req.body.id,
                                    req.body.is_selected,
                                    res);  // res.json(data); 
}) 

/****************************Background Photo Upload *************** */
var BackgroundPhoto = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, myImagePath + 'backgroud-images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const BackgroundPhotoupload = multer({ storage: BackgroundPhoto });

app.post('/uploadBackgroundPic', BackgroundPhotoupload.single('uploads'), function(req,res) {
    console.log('storage location is ', req.hostname +'/' + req.file.path);
    return res.send(req.file);
}) 

app.post('/student-payment-history', (req, res) => {
    console.log('student-payment-history REQ') ;
    console.log(req.body) ;
    console.log('student-payment-history RES') ;
    console.log(res.body) ;
    return db.student_payment_history(req.body.startdate,
                                     req.body.enddate,
                                     req.body.regno, res);  // res.json(data);
})

app.post('/getpaymentreport', (req, res) => {
    console.log('payment-report REQ') ;
    console.log(req.body.regno) ;
    console.log('payment-report RES') ;
    console.log(res.body) ;
    return db.payment_report(req.body.startdate,
                             req.body.enddate,
                             res);  // res.json(data);
})

app.get('/getallteachers', (req, res) => {
    console.log('payment-report REQ') ;
    console.log(req) ;
    console.log('payment-report RES') ;
    console.log(res.body) ;
    return db.get_teachers(req,res);  // res.json(data);
})

app.post('/createteacher', (req, res) => {
    console.log('createteacher REQ') ;
    console.log(req) ;
    console.log('createteacher RES') ;
    console.log(res.body) ;
    return db.create_teacher(req.body.firstname, 
                            req.body.speciality, 
                            req.body.mobilenumber, 
                            req.body.emailid, 
                            req.body.dateofbirth, 
                            req.body.gender,
                            req.body.addressline1,
                            req.body.addressline2,
                            req.body.district,
                            req.body.city,
                            req.body.pincode,
                            req.body.subject,
                            res);  // res.json(data);
})

/****************************Teacher Photo Upload *************** */
var ProfilePhoto = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, myImagePath + 'teachers')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const TeacherPicupload = multer({ storage: ProfilePhoto });

app.post('/uploadTeacherPic', TeacherPicupload.single('uploads'), function(req,res) {
    console.log('storage location is ', req.hostname +'/' + req.file.path);
    return res.send(req.file);
}) 

/************************************************************ */   

app.post('/createclass', (req, res) => {
    console.log('createclass REQ') ;
    console.log(req) ;
    console.log('createclass RES') ;
    console.log(res.body) ;
    return db.create_class(req.body.teacher,
                             req.body.subject,
                             req.body.dow,
                             req.body.stime,
                             req.body.etime,
                             res);  // res.json(data);
})

app.post('/getteacherbyprofileid', (req, res) => {
    console.log('getteacherbyprofileid REQ') ;
    console.log(req.body) ;
    console.log('getteacherbyprofileid RES') ;
    console.log(res.body) ;
    return db.get_teacher_by_profileid(req.body.profile_id,
                                       res);  // res.json(data);
})

app.post('/getClassByTeacher', (req, res) => {
    console.log('getClassByTeacher REQ') ;
    console.log(req.body) ;
    console.log('getClassByTeacher RES') ;
    console.log(res.body) ;
    return db.get_class_by_teacher(req.body.teacher_id,
                                   res);  // res.json(data);
})


app.post('/classMapping', (req, res) => {
    console.log('classMapping REQ') ;
    console.log(req.body) ;
    console.log('classMapping RES') ;
    console.log(res.body) ;
    return db.class_mapping_for_student(req.body.regnno,
                                        req.body.teacher,
                                        req.body.classes,
                                        res);  // res.json(data);
})

app.listen(3000, () => {
    console.log('App running in port 3000');
})