document.getElementById('get-recommendation').addEventListener('click', function () {
    // Collect form input values
    const cropType = document.getElementById('crop-type').value;
    const plantingDate = document.getElementById('planting-date').value;
    const location = document.getElementById('location').value;
    const soilType = document.getElementById('soil-type').value;

    // Reference to the recommendation output div
    const recommendationText = document.getElementById('recommendation-text');
    const recommendationOutput = document.getElementById('recommendation-output');

    // Validate the input fields
    if (!cropType || !plantingDate || !location || !soilType) {
        recommendationText.innerHTML = 'Please fill out all fields to get recommendations.';
        recommendationOutput.style.display = 'block';
        return;
    }

    // Simulated recommendations based on user input
    let recommendations = `
        <strong>Location:</strong> ${location}<br>
        <strong>Best Planting Date:</strong> ${new Date(plantingDate).toLocaleDateString()}<br>
        <strong>Soil Type:</strong> ${soilType}<br>
        <strong>Crop Type:</strong> ${cropType}<br>
        <br>
        <h4>Recommended Inputs:</h4>
        <ul>
            <li>Fertilizer: ${(soilType === 'loam' ? 'Balanced Fertilizer' : 'Nitrogen-based Fertilizer')}</li>
            <li>Irrigation: Regular watering for ${cropType}</li>
            <li>Planting Depth: Plant ${cropType} seeds about 1 inch deep</li>
        </ul>
        <br>
        <h4>Additional Tips:</h4>
        <p>Ensure proper crop rotation to maintain soil health, and monitor weather forecasts for optimal irrigation.</p>
    `;

    // Add an image based on crop type
    let imageSrc;
    switch (cropType) {
        case 'corn':
            imageSrc = 'images/corn.jpg';
            break;
        case 'wheat':
            imageSrc = 'images/wheat.jpg';
            break;
        case 'rice':
            imageSrc = 'images/rice.jpg';
            break;
        case 'potato':
            imageSrc = 'images/potato.jpg';
            break;
        default:
            imageSrc = 'images/default.jpg';
    }

    recommendations += `<img src="${imageSrc}" alt="${cropType} Image" class="recommendation-image">`;

    // Display recommendations
    recommendationText.innerHTML = recommendations;
    recommendationOutput.style.display = 'block';
});
