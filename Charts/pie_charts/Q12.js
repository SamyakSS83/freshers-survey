var ctx = document.getElementById("doughnut12");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Yes",
      "Ho kar bhi nahi the (was working as team head)",
      "No, went home",
      "No, was cooped up in my room"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [355, 61, 58, 11],
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
