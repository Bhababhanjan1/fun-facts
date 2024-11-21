const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I have hiked to the summit of three different mountains this year.",
    "I enjoy capturing breathtaking mountain landscapes through photography.",
    "I am planning a trip to visit the Himalayas next summer.",
    "I love learning about the geology and history of mountain ranges."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
});
