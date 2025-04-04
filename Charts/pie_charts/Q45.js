var ctx = document.getElementById("doughnut45");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "1.0",
      "0.0",
      "2.0",
      "3.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [251, 99, 94, 30],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#112838",
          "#13344C",
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
