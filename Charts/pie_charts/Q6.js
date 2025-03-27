var ctx = document.getElementById("doughnut6");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "monthly",
      "weekly",
      "Mai toh bas placement lene aaya hoon (don't really care about it)",
      "Daily"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [172, 149, 131, 33],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#1E4460",
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
