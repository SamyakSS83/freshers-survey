var ctx = document.getElementById("doughnut21");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "1-3 hrs",
      "<1 hrs",
      "3-5 hrs",
      "5-7 hrs",
      ">7 hrs"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [244, 105, 97, 25, 14],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#295574",
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
