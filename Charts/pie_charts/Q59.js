var ctx = document.getElementById("doughnut59");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Never",
      "Socially or at parties",
      "tried it once",
      "once a month",
      "few times a month",
      "quite often"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [365, 18, 17, 10, 3, 3],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#295574",
          "#37617F",
          "#1E4460",
          "#091D2C",
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
