var ctx = document.getElementById("doughnut1");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Never", "About once a month", "Once a week"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [309,95,28],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#112838",
          "#13344C",
          ],
      },
    ],
  },
  options: {
    plugins: {
      // legend: {
      //   display: true,
      //   position: "right",
      // },
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
