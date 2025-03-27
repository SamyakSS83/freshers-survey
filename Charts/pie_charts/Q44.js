var ctx = document.getElementById("doughnut44");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Nahi yaar abhi night mess nhi (5-6 hrs of sleep)",
      "Yaar mujhe neend ke jhatke aa rhe (7-8 hrs of sleep)",
      "Ab toh raat ke char baje hi neend aati hai (3-4 hrs of sleep)",
      "I need my beauty sleep (8+ hrs of sleep)",
      "Mujhe kya mai toh ullu hu (1-2 hrs of sleep)"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [214, 109, 106, 51, 5],
        borderWidth: 1,
        backgroundColor: [
          "#295574",
          "#112838",
          "#1E4460",
          "#091D2C",
          "#13344C"
        ],
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        color: "#fff", // Color of the labels
        anchor: "end", // Anchor the label position at the end of the arc
        align: "start", // Align the label text start
        offset: -10, // Offset the labels to avoid overlapping
        formatter: function (value, context) {
          return value; // Display the data value
        }
      }
    }
  }
});
