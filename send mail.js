const nodemailer = require('nodemailer');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

// Configure your email settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // For example, use Gmail. You can use other services too.
  auth: {
    user: 'bhairav.chaudhari@thinkitive.com',
    pass: 'bhvr zsbj ofhd pnwb'
  }
});

const mailOptions = {
  from: 'bhairav.chaudhari@thinkitive.com',
  to: 'agam.mishra@thinkitive.com',
  subject: 'Allure Report',
  text: 'Please find the attached Allure report. ',
//   attachments: []
};

// Function to compress the Allure report directory
function compressAllureReport(reportDir, output) {
  return new Promise((resolve, reject) => {
    const outputZip = fs.createWriteStream(output);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    outputZip.on('close', () => {
      resolve();
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(outputZip);
    archive.directory(reportDir, false);
    archive.finalize();
  });
}

async function sendAllureReport() {
  const reportDir = path.join(__dirname, 'cypress/reports/allure-report');
  const outputZip = path.join(__dirname, 'cypress/reports/allure-report.zip');

  try {
    await compressAllureReport(reportDir, outputZip);

    mailOptions.attachments.push({
      filename: 'allure-report.zip',
      path: outputZip
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);

      // Optionally, delete the zip file after sending the email
      fs.unlinkSync(outputZip);
    });
  } catch (error) {
    console.error('Error compressing or sending Allure report:', error);
  }
}

sendAllureReport();
