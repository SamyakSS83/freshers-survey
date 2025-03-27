var ctx = document.getElementById("doughnut34");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "0-20",
      "20-40",
      "40-60",
      "60-80",
      "80-100"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [394, 55, 23, 7, 6],
        borderWidth: 1,
        backgroundColor: [
          "#1E4460",
          "#112838",
          "#13344C",
          "#295574",
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
