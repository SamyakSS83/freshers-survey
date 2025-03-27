var ctx = document.getElementById("doughnut22");

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
        data: [258, 156, 47, 24],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#1E4460",
          "#112838",
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
