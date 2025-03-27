var ctx = document.getElementById("doughnut1");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "4.0",
      "3.0",
      "2.0",
      "5.0",
      "1.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [180, 164, 68, 50, 23],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#091D2C",
          "#1E4460",
          "#295574",
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
