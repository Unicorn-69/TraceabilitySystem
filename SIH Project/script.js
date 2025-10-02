// Generate sample blockchain blocks
const blockchainDiv = document.getElementById("blockchain");

const blocks = [
  { id: 1, data: "Genesis Block" },
  { id: 2, data: "Farmer → Collector" },
  { id: 3, data: "Collector → Manufacturer" },
  { id: 4, data: "Manufacturer → Distributor" },
  { id: 5, data: "Distributor → Consumer" }
];

blocks.forEach(block => {
  const blockDiv = document.createElement("div");
  blockDiv.className = "block";
  blockDiv.innerHTML = `<strong>Block ${block.id}</strong><br>${block.data}`;
  blockchainDiv.appendChild(blockDiv);
});