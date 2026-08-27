import os
import flask
def index():
    os.system("echo " + flask.request.args.get("cmd"))
