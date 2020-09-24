// https://ccstockholm.netlify.com/.netlify/functions/googleSheets
const spreadsheetAppend = require("./connectSheet");
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');

const fromEmail = 'dhfranchisedev@gmail.com';
const fromEmailWithName = `Danube Home Franchise  `+ `<danubehomefranchise` + `@gmail.com>`;
const ccEmail = 'abhishek@valuescale.in';
const adminEmail = 'abhishek@valuescale.in';
const fromPassword = 'dhfranchise123$';
var readHTMLFile = function (path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: fromEmail,
        pass: fromPassword
    }
}));
const becomeAFranchise = {
    subject: 'Become a Franchise Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. We\'ll reach out to you shortly.<br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>\n',
    adminSubject: 'Become a Franchise Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Become a Franchise form was just filled in by the following person on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const becomeASellerRequest = {
    subject: 'Become a Seller Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. We\'ll reach out to you shortly.<br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Become a Seller Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '"Become a Seller" form was just filled in by the following person on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const franchiseCatalogue = {
    subject: 'Franchise Catalogue Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. It is our goal that you are always happy with what you receive from us, so\n' +
        'please let us know if your experience on the website was anything short of excellent. We look\n' +
        'forward to seeing you again. Have a great day!<br><br>\n' +
        '<a\n' +
        '        href="https://drive.google.com/file/d/1wIVI_UUNQ42xr2kQ4dZQkYKj2zHwdXxM/view?usp=sharing"\n' +
        '>Click here to Download the Catalogue</a><br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Franchise Catalogue Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'The Franchise Catalogue was just requested & received by the following on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const sellerCatalogue = {
    subject: 'Sellers\' Catalogue Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. It is our goal that you are always happy with what you receive from us, so\n' +
        'please let us know if your experience on the website was anything short of excellent. We look\n' +
        'forward to seeing you again. Have a great day!<br><br>\n' +
        '<a href="https://drive.google.com/file/d/15-\n' +
        'sKvo_KNQOlurwNmnPIMSRofWuZaaAb/view?usp=sharing">Click here to Download the B2B\n' +
        '    Furniture Catalogue</a><br>\n' +
        '<a\n' +
        '        href="https://drive.google.com/file/d/1XSMBRuPFq81VxOVmVXbwhIB78J2Z9_Ts/view?usp=sharing\n' +
        '">Click here to Download the Design Decor Ramadan Catalogue</a><br>\n' +
        '<a href="https://drive.google.com/file/d/1DSi_q4y3SFML7FaEHN83SRPqkyu1-\n' +
        'Id0/view?usp=sharing">Click here to Download the Garden Catalogue</a><br>\n' +
        '<a\n' +
        '        href="https://drive.google.com/file/d/1M0t_x1trZ_rTTHsm_PUlpDa9Uz2b1mZJ/view?usp=sharing">\n' +
        '    Click here to Download the Tile, Bathroom & Kitchen Catalogue</a><br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Franchise Catalogue Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'The Sellers\' Catalogues were just requested & received by the following on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const contactUs = {
    subject: 'Thanks for Contacting us! | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. We\'ll reach out to you shortly.<br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Contact Us Form | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Contact us form was just filled by the following person on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const b2BFurniture = {
    subject: 'B2B Furniture Catalogue Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. It is our goal that you are always happy with what you receive from us, so\n' +
        'please let us know if your experience on the website was anything short of excellent. We look\n' +
        'forward to seeing you again. Have a great day!<br><br>\n' +
        '<a href="https://drive.google.com/file/d/15-\n' +
        'sKvo_KNQOlurwNmnPIMSRofWuZaaAb/view?usp=sharing">Click here to Download the\n' +
        '    Catalogue</a><br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'B2B Furniture Catalogue Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'The B2B Catalogue was just requested & received by the following on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const ramadanDecor = {
    subject: 'Design Decor Ramadan Catalogue Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. It is our goal that you are always happy with what you receive from us, so\n' +
        'please let us know if your experience on the website was anything short of excellent. We look\n' +
        'forward to seeing you again. Have a great day!<br><br>\n' +
        '<a\n' +
        '        href="https://drive.google.com/file/d/1XSMBRuPFq81VxOVmVXbwhIB78J2Z9_Ts/view?usp=sharing\n' +
        '">Click here to Download the Catalogue</a><br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Design Decor Ramadan Catalogue Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'The Design Decor Ramadan Catalogue was just requested & received by the following on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const gardenCatalogue = {
    subject: 'Garden Catalogue Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. It is our goal that you are always happy with what you receive from us, so\n' +
        'please let us know if your experience on the website was anything short of excellent. We look\n' +
        'forward to seeing you again. Have a great day!<br><br>\n' +
        '<a href="https://drive.google.com/file/d/1DSi_q4y3SFML7FaEHN83SRPqkyu1-\n' +
        'Id0/view?usp=sharing">Click here to Download the Catalogue</a><br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Garden Catalogue Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Garden Catalogue was just requested & received by the following on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
const tilesCatalogue = {
    subject: 'Tiles, Bathroom & Kitchen Request | Danube Home',
    content: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Dear {{name}},<br><br>\n' +
        'Thank you for visiting us and showing interest in doing business with us! We’re glad that you found\n' +
        'what you were looking for. It is our goal that you are always happy with what you receive from us, so\n' +
        'please let us know if your experience on the website was anything short of excellent. We look\n' +
        'forward to seeing you again. Have a great day!<br><br>\n' +
        '<a\n' +
        '        href="https://drive.google.com/file/d/1M0t_x1trZ_rTTHsm_PUlpDa9Uz2b1mZJ/view?usp=sharing">\n' +
        '    Click here to Download the Catalogue</a><br><br>\n' +
        'Best Regards,<br>\n' +
        'Your friends at Danube Home\n' +
        '</body>\n' +
        '</html>',
    adminSubject: 'Tiles, Bathroom & Kitchen Catalogue Request | Web Inquiry | {{name}} | {{email}}',
    adminContent: '\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Title</title>\n' +
        '</head>\n' +
        '<body>\n' +
        'Tiles, Bathroom & Kitchen Catalogue was just requested & received by the following on Danube Home Franchise\n' +
        'Website:<br><br>\n' +
        'Name : {{name}}<br>\n' +
        'Email : {{email}}<br>\n' +
        'Contact No : {{phoneNumber}}<br>\n' +
        'Company Name : {{company}}<br>\n' +
        'City : {{city}}<br>\n' +
        'Country : {{country}}<br>\n' +
        'Message : {{message}}<br><br>\n' +
        'Regards,<br>\n' +
        'Danube Home Franchise | Website-Admin\n' +
        '</body>\n' +
        '</html>'
};
exports.handler = async function (event, context, callback) {
    try {

        const type = JSON.parse(event.body).type;
        const name = JSON.parse(event.body).name;
        const email = JSON.parse(event.body).email;
        const phoneNumber = JSON.parse(event.body).phoneNumber;
        const country = JSON.parse(event.body).country;
        const city = JSON.parse(event.body).city;
        const message = JSON.parse(event.body).message;
        const company = JSON.parse(event.body).company;
        const source = JSON.parse(event.body).source;
        const date = new Date();
        let content = [name, email, phoneNumber, country, city, message, company, (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
        "/" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
        "/" +
        date.getFullYear(), source];
        if (type === 'NEWS_LETTER') {
            content = ['-', email, '-', '-', '-', '-', '-', (date.getMonth() > 8
                ? date.getMonth() + 1
                : "0" + (date.getMonth() + 1)) +
            "/" +
            (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
            "/" +
            date.getFullYear(), type];
        }

        const sheetsRes = await new Promise((resolve, reject) => {
            spreadsheetAppend.addRecord(
                content, (err, success) => {
                    resolve(success);
                }
            );
        });

        let html = becomeAFranchise;
        switch (source) {
            case 'Become a Franchise':
                html = becomeAFranchise;
                break;
            case 'Become a Seller':
                html = becomeASellerRequest;
                break;
            case 'Franchise Catalogue':
                html = franchiseCatalogue;
                break;
            case 'Seller Catalogue':
                html = sellerCatalogue;
                break;
            case 'Contact Form':
                html = contactUs;
                break;
            case 'Furniture Catalogue':
                html = b2BFurniture;
                break;
            case 'Design Decor Catalogue - Ramadan':
                html = ramadanDecor;
                break;
            case 'Garden Catalogue':
                html = gardenCatalogue;
                break;
            case 'Tiles-Bathroom-Kitchen Catalogue':
                html = tilesCatalogue;
                break;
        }
        await new Promise(((resolve, reject) => {
            // readHTMLFile('email-1.html', function (err, html) {
            var template = handlebars.compile(html.content);
            var replacements = {
                name: name || 'NA',
                email: email || 'NA',
                phoneNumber: phoneNumber || 'NA',
                country: country || 'NA',
                city: city || 'NA',
                message: message || 'NA',
                company: company || 'NA'
            };
            var htmlToSend = template(replacements);
            var mailOptions = {
                from: fromEmailWithName,
                to: email,
                subject: html.subject,
                html: htmlToSend
            };
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log('----------------------Baned error')

                    console.log(error);
                } else {
                    console.log('----------------------Baned sent')

                }
                resolve();
            });
            // });
        }));
        await new Promise(((resolve, reject) => {
            // readHTMLFile('email-1.html', function (err, html) {
            var template = handlebars.compile(html.adminContent);
            var replacements = {
                name: name || 'NA',
                email: email || 'NA',
                phoneNumber: phoneNumber || 'NA',
                country: country || 'NA',
                city: city || 'NA',
                message: message || 'NA',
                company: company || 'NA'
            };
            var htmlToSend = template(replacements);
            var mailOptions = {
                from: fromEmailWithName,
                to: adminEmail,
                cc: ccEmail,
                subject: html.adminSubject.replace('{{email}}', email).replace('{{name}}', name),
                html: htmlToSend
            };
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    console.log('----------------------Admin Error')

                } else {
                    console.log('----------------------Admin sent')
                }
                resolve();
            });
            // });
        }));
        return {
            statusCode: 200,
        };
    } catch (err) {
        console.log(err)
        return {statusCode: 500, body: err.toString()}
    }
}
