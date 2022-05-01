from flask import Flask, render_template, redirect, url_for

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