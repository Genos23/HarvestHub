// Mock existing discussions (simulating a database)
const existingDiscussions = [
    {
        topic: "Best Practices for Sustainable Farming",
        message: "What are some effective practices for sustainable farming that you've found helpful?"
    },
    {
        topic: "Dealing with Pests in Organic Crops",
        message: "I have been facing challenges with pests in my organic crops. Any advice?"
    },
    {
        topic: "Maximizing Crop Yield",
        message: "Looking for tips to maximize yield without harming the soil health."
    }
];

// Function to display existing discussions
function displayExistingDiscussions() {
    existingDiscussions.forEach(discussion => {
        addDiscussion(discussion.topic, discussion.message);
    });
}

// Function to add a new discussion
function addDiscussion(topic, message) {
    const discussionList = document.getElementById("discussion-list");

    // Create a new discussion element
    const discussion = document.createElement("div");
    discussion.className = "discussion";
    discussion.innerHTML = `
        <h3>${topic}</h3>
        <p>${message}</p>
    `;

    // Append the new discussion to the list
    discussionList.prepend(discussion);
}

// Form submission handling
document.getElementById("discussion-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    // Add the new discussion
    addDiscussion(topic, message);

    // Clear the form fields
    this.reset();
});

// Display existing discussions when the page loads
displayExistingDiscussions();
