from flask import Flask, render_template, redirect, url_for, request
import json
import smtplib

app = Flask(__name__)

@app.route("/")
def root():
    return redirect(url_for('aboutMe'))
 
@app.route("/about-me")
def aboutMe():
    return render_template("aboutMe.html")

@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/newMessage", methods=['POST'])
def newMessage():
    name = request.form['name']
    email = request.form['email']
    msg = request.form['msg']
    ret = ['OK', 204]

    gmail_user = 'mckennask00@gmail.com'
    
    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, 'tbwidjlsdcrpnwtb')
    except:
        print('could not log into gmail')

    sent_from = gmail_user
    to = gmail_user
    subject = 'Contact Me - {}'.format(name)
    body = 'New contact from website!\n\n{}\n\n{} can be reached at {}'.format(msg,name,email)

    email_text = """\
    From: %s
    To: %s
    Subject: %s

    %s
    """ % (sent_from, to, subject, body)

    server.sendmail(sent_from, to, email_text)
    server.close()

    return json.dumps(ret)