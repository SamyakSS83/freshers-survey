var ctx = document.getElementById("doughnut20");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Humse na hoga!",
      "I feel content with my branch",
      "Hopeful",
      "Will not even try for depC",
      "DepC to easy haiii",
      "I am content with my branch"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [162, 149, 93, 69, 3, 1],
        borderWidth: 1,
        backgroundColor: [
          "#13344C",
          "#1E4460",
          "#295574",
          "#112838",
          "#37617F",
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
