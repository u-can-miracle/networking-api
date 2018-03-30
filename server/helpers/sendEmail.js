import nodemailer from 'nodemailer'

export function sendEmail(email, hash, req) {
    var smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'rubygarag@gmail.com',
            pass: 'weekpassword'
        },
        secureConnection: true
    })

    smtpTransport.sendMail({ //email options
			// sender address.  Must be the same as authenticated user if using Gmail.
        from: 'Network service registration <rubygarag@gmail.com>',
        to: email, // receiver
        subject: 'Registration at ' + req.headers.host, // subject
        // text: 'You have registered at rubygarage-fullstack-js.heroku.com.\n\n'
        text: 'You are receiving this because you have registered at ' +
						req.headers.host + '\n\n' +
            'Please click on the following link, or paste this ' +
						'into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/confirm/' + hash + '\n\n' +
            'If you did not request this, please ignore this email ' +
						'and your password will remain unchanged.\n'
    }, function(error/*, response*/) { //callback
        if (error) {
            console.log('error', error)
        }
				// Shut down the connection pool, no more messages.
				// Comment this line out to continue sending emails.
        smtpTransport.close()
    })
}
