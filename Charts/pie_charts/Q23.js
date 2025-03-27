var ctx = document.getElementById("doughnut23");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Could be better",
      "Just trying to cope",
      "Yeh bhi karna hota hai?",
      "I am productivity personified!"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [225, 117, 94, 49],
        borderWidth: 1,
        backgroundColor: [
          "#112838",
          "#091D2C",
          "#13344C",
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
