from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    sqft = float(request.form['sqft'])
    rate = 75
    tile_cost = 60
    adhesive_cost = 12
    grout_cost = 1
    tools_cost = 150
    safety_net = 0.05

    total_cost = (sqft * rate) + (sqft * tile_cost) + (sqft * adhesive_cost) + (sqft * grout_cost) + tools_cost
    total_cost += total_cost * safety_net
    total_cost = round(total_cost, 2)

    breakdown = {
        'Tile Cost': sqft * tile_cost,
        'Adhesive Cost': sqft * adhesive_cost,
        'Grout Cost': sqft * grout_cost,
        'Tools Cost': tools_cost
    }

    return render_template('result.html', sqft=sqft, total_cost=total_cost, breakdown=breakdown)

if __name__ == '__main__':
    app.run(debug=True)
