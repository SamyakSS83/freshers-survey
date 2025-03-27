var ctx = document.getElementById("doughnut5");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "5.0",
      "4.0",
      "3.0",
      "1.0",
      "2.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [138, 125, 98, 65, 59],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#295574",
          "#13344C",
          "#112838",
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
