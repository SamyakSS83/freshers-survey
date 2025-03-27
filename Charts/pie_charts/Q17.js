var ctx = document.getElementById("doughnut17");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "a week or two",
      "a few days",
      "pull an all-nighter",
      "The grind is forever!",
      "padhna bhi hota hai?",
      "The grind is forever"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [152, 138, 80, 64, 50, 1],
        borderWidth: 1,
        backgroundColor: [
          "#1E4460",
          "#112838",
          "#091D2C",
          "#295574",
          "#13344C",
          "#37617F"
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
