var ctx = document.getElementById("doughnut24");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Yes",
      "It's complicated",
      "No"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [461, 8, 8],
        borderWidth: 1,
        backgroundColor: [
          "#13344C",
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
