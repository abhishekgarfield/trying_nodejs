var nodemailer=require('nodemailer');

var transporter= nodemailer.createTransport(
{
    service: 'Gmail',
    auth: {
        user: 'abhishek2759@gmail.com',
        pass: 'Garfield@1859'
      }
});
var mailOptions={
    from:'abhishek2759@gmail',
    to:'swadhashree456@gmail.com',
    subject:'ilove yu',
    text: 'love uh jean'
};

transporter.sendMail(mailOptions ,function(err ,info)
{
    if(err)
    {
        throw err;
    }
    else{
        console.log("email sent"+ info.response);
    }
})