var ctx = document.getElementById("doughnut64");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Male",
      "Female",
      "Non-binary",
      "Helicopter ",
      " handbag"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [376, 104, 3, 1, 1],
        borderWidth: 1,
        backgroundColor: [
          "#13344C",
          "#112838",
          "#091D2C",
          "#295574",
          "#1E4460"
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
