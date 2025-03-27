var ctx = document.getElementById("doughnut57");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Non veg food :)",
      "Alcohol",
      "Cigarettes",
      "Vape",
      "Marijuana"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [135, 21, 7, 6, 4],
        borderWidth: 1,
        backgroundColor: [
          "#1E4460",
          "#295574",
          "#091D2C",
          "#13344C",
          "#112838"
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
