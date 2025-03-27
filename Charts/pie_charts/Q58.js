var ctx = document.getElementById("doughnut58");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Never",
      "Tried it a couple of times",
      "Socially or at parties",
      "Couple of times a days",
      ">5 times/day"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [390, 11, 10, 3, 2],
        borderWidth: 1,
        backgroundColor: [
          "#13344C",
          "#091D2C",
          "#112838",
          "#295574",
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
