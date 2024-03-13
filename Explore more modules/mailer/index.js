// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const qinterface = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
})

async function sendMail(email){
    //1, creating a mail transporter(SMTP)
    const transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
        user : 'codingninjas2k16@gmail.com',
        pass : 'slwvvlczduktvhdj'
      }
    });

    //2 configure mail content
    const mailOptions = {
      from : 'codingninjas2k16@gmail.com',
      to : email,
      subject : 'Coding Ninjas',
      text : 'The world has enough coders; be a coding ninja!'
    };
  
    //3 sending a mail
    try{
      const result = await transporter.sendMail(mailOptions);
      console.log('Success: Email sent to ',email);
    }catch(err){
      console.log('Error in sending a mail',err);
    }
    
}

const Solution = () => {
  // Write your code here
  qinterface.question('please enter your mail ',(mail) => {
    sendMail(mail).then(() => {
      qinterface.close(); // Close the interface after sending the mail
    });
  })
};

export default Solution;
