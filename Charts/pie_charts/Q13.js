var ctx = document.getElementById("doughnut13");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "3.0",
      "4.0",
      "2.0",
      "1.0",
      "5.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [143, 104, 84, 67, 46],
        borderWidth: 1,
        backgroundColor: [
          "#295574",
          "#13344C",
          "#1E4460",
          "#112838",
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
