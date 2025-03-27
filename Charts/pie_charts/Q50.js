var ctx = document.getElementById("doughnut50");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "4.0",
      "3.0",
      "5.0",
      "1.0",
      "2.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [156, 141, 75, 51, 46],
        borderWidth: 1,
        backgroundColor: [
          "#1E4460",
          "#091D2C",
          "#112838",
          "#13344C",
          "#295574"
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
