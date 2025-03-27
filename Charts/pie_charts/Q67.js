var ctx = document.getElementById("doughnut67");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "3.0",
      "5.0",
      "7.0",
      "4.0",
      "2.0",
      "8.0",
      "1.0",
      "6.0",
      "10.0",
      "9.0"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [95, 69, 57, 57, 51, 44, 43, 34, 19, 16],
        borderWidth: 1,
        backgroundColor: [
          "#A4BCCC",
          "#89A6BB",
          "#37617F",
          "#091D2C",
          "#4F7793",
          "#295574",
          "#1E4460",
          "#112838",
          "#7092AA",
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
