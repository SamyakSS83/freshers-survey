var ctx = document.getElementById("doughnut54");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "single (eager to mingle)",
      "single (by choice- pyaar ka naam na lena, i hate love stories)",
      "still “figuring it out”",
      "in a serious relationship",
      "in a casual relationship (no strings attached)"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [202, 129, 41, 32, 19],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#1E4460",
          "#295574",
          "#13344C",
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
