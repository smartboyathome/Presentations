from flask import Flask, Response, render_template
import os, json, glob

app = Flask(__name__)
app.debug = True

@app.route('/')
def hello_world():
    presentation_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),
                                     'templates', 'presentations')
    presentations = glob.glob(os.path.join(presentation_path, '*/index.jinja2'))
    data = {'presentations': []}
    for path in presentations:
        data['presentations'].append(os.path.basename(os.path.dirname(path)))
    return Response(response=json.dumps(data), mimetype='application/json', status=200)

@app.route('/presentations/<presentation_id>')
def presentation(presentation_id):
    template_path = os.path.join('presentations', presentation_id, 'index.jinja2')
    presentation_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),
                        'templates', template_path)
    if not os.path.exists(presentation_path):
        return Response(status=404)
    return render_template(template_path)

if __name__ == '__main__':
    app.run()
