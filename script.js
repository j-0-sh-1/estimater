var totalCost = 0;

function calculate() {
    var sqft = document.getElementById('sqft').value;
    var rateTile = 60;
    var rateAdhesive = 12;
    var rateGrout = 2;
    var toolCost = 150;
    var safetyNet = 500;

    var tileCost = sqft * rateTile;
    var adhesiveCost = sqft * rateAdhesive;
    var groutCost = sqft * rateGrout;
    totalCost = tileCost + adhesiveCost + groutCost + toolCost + safetyNet;
    var roundedTotalCost = Math.round(totalCost);

    var resultText = 'Total Cost: Rs. ' + roundedTotalCost;
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('breakdown').style.display = 'none';
}

function showBreakdown() {
    var sqft = document.getElementById('sqft').value;
    var rateTile = 60;
    var rateAdhesive = 12;
    var rateGrout = 2;
    var toolCost = 150;
    var safetyNet = 0; 
    
    var breakdownText =
        '<p>Tile Cost: Rs. ' + (sqft * rateTile) + '</p>' +
        '<p>Tile Adhesive Cost: Rs. ' + (sqft * rateAdhesive) + '</p>' +
        '<p>Grout Cost: Rs. ' + (sqft * rateGrout) + '</p>' +
        '<p>Tools Cost: Rs. ' + toolCost + '</p>' +
        '<p>' + (safetyNet) + '</p>';

    document.getElementById('breakdown').innerHTML = breakdownText;
    document.getElementById('breakdown').style.display = 'block';
}
