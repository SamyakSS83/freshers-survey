var ctx = document.getElementById("doughnut4");

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
        data: [169, 148, 79, 56, 33],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#295574",
          "#1E4460",
          "#091D2C",
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
