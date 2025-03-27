var ctx = document.getElementById("doughnut9");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "1-2 hours",
      "<1hour",
      "2-3 hours",
      ">4 hours",
      "3-4 hours"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [150, 111, 91, 69, 57],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#295574",
          "#091D2C",
          "#1E4460",
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
