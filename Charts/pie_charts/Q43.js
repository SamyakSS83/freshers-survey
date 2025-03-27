var ctx = document.getElementById("doughnut43");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "no- can have more (current spots are overcrowded/not in the right places)",
      "yes- every spot is a hangout spot :P",
      "maybe- the ones we have can be improved (timings/facilities)"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [185, 180, 120],
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
