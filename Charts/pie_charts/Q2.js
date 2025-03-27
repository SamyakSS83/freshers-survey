var ctx = document.getElementById("doughnut2");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "No",
      "Mai is gambhir vishay pe chuppi saadhna chahunga",
      "Yes"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [210, 164, 111],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
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
