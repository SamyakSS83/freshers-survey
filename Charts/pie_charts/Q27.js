var ctx = document.getElementById("doughnut27");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "3.0",
      "2.0",
      "4.0",
      "5.0",
      "1.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [191, 102, 98, 49, 45],
        borderWidth: 1,
        backgroundColor: [
          "#295574",
          "#13344C",
          "#1E4460",
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
