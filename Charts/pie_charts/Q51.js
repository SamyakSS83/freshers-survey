var ctx = document.getElementById("doughnut51");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "never",
      "once or twice",
      "sometimes",
      "frequently"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [266, 126, 61, 15],
        borderWidth: 1,
        backgroundColor: [
          "#13344C",
          "#091D2C",
          "#112838",
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
