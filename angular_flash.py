# -*- coding: utf-8 -*-
__author__ = 'florije'

from flask import Flask, render_template

app = Flask(__name__)
app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'


@app.route('/')
def hello_world():
    return render_template('page_next.html')


if __name__ == '__main__':
    app.run(debug=True)
