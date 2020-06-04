// const sgMail = require('@sendgrid/mail')

// var sendgridAPIKey = ""

// sgMail.setApiKey(sendgridAPIKey)







// sgMail.setApiKey(SENDGRID_APY_KEY);
// sgMail.send({
//     to: 'shreyagarwal611@gmail.com',
//     from: 'shreyagarwal611@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.',
// }).then(()=>{
//     console.log('message sent')
// }).catch((error)=>{
//     console.log('e')
// })
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmail = async (email,name) =>{
  sgMail.send({
    to:email,
    from:'shreyagarwal611@gmail.com',
    subject:'Thanks for joining in!!',
    text: `Welcome to the app, ${name}. let me know how you get along with app`
    
  })
}
const sendCancellationEmail= async (email,name)=>{
  sgMail.setApiKey({
    to:email,
    from:'shreyagarwal611@gmail.com',
    subject:'Sad to see you leave!!',
    text: `Sad to the see you leave, ${name}. let me know how can we improve our app for you to stay`,
  })
  console.log('deleted')
}
module.exports={
  sendWelcomeEmail,
  sendCancellationEmail
}