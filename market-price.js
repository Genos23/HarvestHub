const cropPrices = {};

// Function to update the crop price list and the bar chart
function updatePriceList() {
    const cropPriceList = document.getElementById("crop-price-list");
    cropPriceList.innerHTML = ""; // Clear the list
    const sortedCrops = Object.entries(cropPrices).sort((a, b) => b[1] - a[1]); // Sort by price (highest to lowest)

    // Update the list
    sortedCrops.forEach(([crop, price]) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${crop}: $${price.toFixed(2)}`;
        cropPriceList.appendChild(listItem);
    });

    updateChart();
}

// Function to update the chart
function updateChart() {
    const ctx = document.getElementById("price-chart").getContext("2d");
    const sortedCrops = Object.entries(cropPrices).sort((a, b) => b[1] - a[1]);

    const cropNames = sortedCrops.map(item => item[0]);
    const cropPricesValues = sortedCrops.map(item => item[1]);

    if (window.myChart) {
        window.myChart.destroy(); // Destroy existing chart instance
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cropNames,
            datasets: [{
                label: 'Crop Prices',
                data: cropPricesValues,
                backgroundColor: 'rgba(58, 118, 58, 0.7)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false // Allow chart to resize
        }
    });
}

// Update price form submission
document.getElementById("update-price-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    const cropName = document.getElementById("crop-name").value.trim();
    const newPrice = parseFloat(document.getElementById("new-price").value);

    if (cropPrices[cropName] !== undefined) {
        cropPrices[cropName] = newPrice; // Update existing crop price
        alert(`Price for ${cropName} updated to $${newPrice.toFixed(2)}`);
    } else {
        alert(`Crop ${cropName} does not exist. Please add it first.`);
    }

    updatePriceList();
    document.getElementById("update-price-form").reset(); // Reset form
});

// Add new crop form submission
document.getElementById("add-crop-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    const newCropName = document.getElementById("new-crop-name").value.trim();
    const newCropPrice = parseFloat(document.getElementById("new-crop-price").value);

    if (!cropPrices[newCropName]) {
        cropPrices[newCropName] = newCropPrice; // Add new crop
        alert(`New crop ${newCropName} added with price $${newCropPrice.toFixed(2)}`);
    } else {
        alert(`Crop ${newCropName} already exists. Update its price instead.`);
    }

    updatePriceList();
    document.getElementById("add-crop-form").reset(); // Reset form
});

// Initial test data
cropPrices["Wheat"] = 4.00;
cropPrices["Corn"] = 3.50;
cropPrices["Rice"] = 5.00;
cropPrices["Barley"] = 4.50;

// Initial update
updatePriceList();
