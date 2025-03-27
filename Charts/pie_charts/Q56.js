var ctx = document.getElementById("doughnut56");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Never",
      "once a month",
      "Few times a month",
      "quite often"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [329, 25, 8, 6],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#1E4460",
          "#13344C",
          "#091D2C"
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
