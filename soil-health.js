document.getElementById("analyze-soil").addEventListener("click", function () {
    // Get values from the form and convert to floats
    const phLevel = parseFloat(document.getElementById("ph-level").value);
    const nitrogen = parseFloat(document.getElementById("nitrogen").value);
    const phosphorus = parseFloat(document.getElementById("phosphorus").value);
    const potassium = parseFloat(document.getElementById("potassium").value);
    const organicMatter = parseFloat(document.getElementById("organic-matter").value);

    // Output element
    const analysisOutput = document.getElementById("soil-analysis-output");
    const analysisText = document.getElementById("analysis-text");

    // Validate inputs
    if (isNaN(phLevel) || isNaN(nitrogen) || isNaN(phosphorus) || 
        isNaN(potassium) || isNaN(organicMatter)) {
        analysisText.innerHTML = "Please enter valid numerical values for all fields.";
        analysisOutput.style.display = "block"; // Show the output section
        return; // Exit the function if validation fails
    }

    // Set initial recommendations
    let recommendations = [];

    // Basic analysis logic
    if (phLevel < 6.0) {
        recommendations.push("Consider adding lime to increase soil pH.");
    } else if (phLevel > 7.5) {
        recommendations.push("Consider adding sulfur to decrease soil pH.");
    }

    if (nitrogen < 20) {
        recommendations.push("Increase nitrogen levels with fertilizer for better crop growth.");
    }

    if (phosphorus < 15) {
        recommendations.push("Consider adding phosphorus fertilizer to boost crop yield.");
    }

    if (potassium < 100) {
        recommendations.push("Increase potassium levels for healthy plant growth.");
    }

    if (organicMatter < 3) {
        recommendations.push("Consider adding compost or organic matter to improve soil structure.");
    }

    // Compile recommendations
    if (recommendations.length === 0) {
        analysisText.innerHTML = "Your soil is healthy and balanced!";
    } else {
        analysisText.innerHTML = recommendations.join(" ");
    }

    // Show relevant images based on conditions
    const soilImages = document.getElementById("soil-images");
    soilImages.innerHTML = ""; // Clear previous images

    let image = document.createElement("img");

    // Add images based on conditions
    if (phLevel < 6.0) {
        image.src = "images/lime-soil.jpg"; // Update with your image path
        image.alt = "Lime soil image";
    } else if (phLevel > 7.5) {
        image.src = "images/sulfur-soil.png"; // Update with your image path
        image.alt = "Sulfur soil image";
    } else if (nitrogen < 20) {
        image.src = "images/nitrogen-fertilizer.jpg"; // Update with your image path
        image.alt = "Nitrogen fertilizer image";
    } else if (phosphorus < 15) {
        image.src = "images/phosphorus-fertilizer.jpg"; // Update with your image path
        image.alt = "Phosphorus fertilizer image";
    } else if (potassium < 100) {
        image.src = "images/potassium-fertilizer.jpg"; // Update with your image path
        image.alt = "Potassium fertilizer image";
    } else if (organicMatter < 3) {
        image.src = "images/compost.jpg"; // Update with your image path
        image.alt = "Compost image";
    } else {
        // No specific conditions met, set a default image or do nothing
        image.src = ""; // Optional: Set a default image
    }

    // Append the image to the soil images container if a valid image source is set
    if (image.src) {
        image.className = "soil-image"; // Add a class for styling
        image.style.width = "300px";   // Set width for uniformity
        image.style.height = "300px";  // Set height for uniformity
        image.style.objectFit = "cover"; // Maintain aspect ratio
        soilImages.appendChild(image);
    }

    // Display the analysis output
    analysisOutput.style.display = "block"; // Show the output section
});
