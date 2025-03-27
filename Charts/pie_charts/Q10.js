var ctx = document.getElementById("doughnut10");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Yes",
      "No, did not know that they existed",
      "No, felt that they were spam",
      "No, did not know they existed"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [232, 199, 49, 1],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#13344C",
          "#091D2C",
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
