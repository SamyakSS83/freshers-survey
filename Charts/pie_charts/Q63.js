var ctx = document.getElementById("doughnut63");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "English",
      "Hindi",
      "Regional Language/Your mother tongue",
      "Hinglish",
      "Hinglish ",
      "naam ka english tja aait hindi he hai bas acche se ya shayad wo bhi nahi"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [450, 17, 15, 1, 1, 1],
        borderWidth: 1,
        backgroundColor: [
          "#1E4460",
          "#295574",
          "#37617F",
          "#13344C",
          "#112838",
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
