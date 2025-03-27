var ctx = document.getElementById("doughnut53");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Never",
      "Sometimes",
      "Often",
      "Always"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [327, 60, 23, 17],
        borderWidth: 1,
        backgroundColor: [
          "#1E4460",
          "#13344C",
          "#091D2C",
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
