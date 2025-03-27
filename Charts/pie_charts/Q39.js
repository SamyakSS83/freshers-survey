var ctx = document.getElementById("doughnut39");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Livable - there are inconveniences and problems, but I’ll live",
      "Bad - I face multiple inconveniences every day, it’s annoying",
      "Good - I seldom face any problems, it’s comfortable to live in",
      "Terrible - if I could help it i’d never step foot in my hostel",
      "Excellent - I almost don’t want to go home"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [223, 112, 82, 50, 5],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#13344C",
          "#1E4460",
          "#112838",
          "#295574"
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
