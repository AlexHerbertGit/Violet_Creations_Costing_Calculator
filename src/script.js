document.getElementById("calculate").addEventListener("click", function() {
    // Extracting values
    let materialSelected = document.getElementById("materialSelection").value;
    let gramsUsed = parseFloat(document.getElementById("gramsUsed").value);
    let labourHours = parseFloat(document.getElementById("labourHours").value);
    let labourCost = parseFloat(document.getElementById("labourCost").value);
    let additionalCost = parseFloat(document.getElementById("additionalCost").value);

    if (isNaN(gramsUsed) || isNaN(labourHours) || isNaN(labourCost) || isNaN(additionalCost)) {
        alert("Please ensure all fields are filled out correctly.");
        return;
    }

    // Determine material cost per gram
    let costPerGram;
    switch (materialSelected) {
        case 'copper':
            costPerGram = 0.37;
            break;
        case 'silver':
            costPerGram = 3.36;
            break;
        case 'gold':
            costPerGram = 8.80;
            break;
    }

    // Calculating total costs
    let totalMaterialCost = gramsUsed * costPerGram;
    let totalLabourCost = labourHours * labourCost;
    let totalCost = totalMaterialCost + totalLabourCost + additionalCost;

    // Assume a markup for selling price, for instance, 20% profit
    let sellingPrice = totalCost * 1.30;

    // Display the results
    document.getElementById("materialCostResult").value = "$" + totalMaterialCost.toFixed(2);
    document.getElementById("labourCostResult").value = "$" + totalLabourCost.toFixed(2);
    document.getElementById("totalSellingPrice").value = "$" + sellingPrice.toFixed(2);
});
