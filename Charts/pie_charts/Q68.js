var ctx = document.getElementById("doughnut68");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "1K-3K",
      "3K-7K",
      "Berozgaar hoon😭 (No other source of income)",
      "7K-10K",
      ">10K",
      "< 1K"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [168, 101, 100, 47, 36, 33],
        borderWidth: 1,
        backgroundColor: [
          "#13344C",
          "#37617F",
          "#295574",
          "#112838",
          "#1E4460",
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
