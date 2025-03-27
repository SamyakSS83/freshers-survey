var ctx = document.getElementById("doughnut66");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Mai sakht aadmi hoon / I'm a strong independant human:(Almost never)",
      "The pile of laundry triggers me:(Once a month)",
      "Weekends means 'ghar ka khaana':(Every weekend)",
      "No motivaishan to stay on campus:(Every other day)",
      "Mai yaha ka hoo hi nahi (I'm a day scholar)"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [232, 170, 63, 12, 8],
        borderWidth: 1,
        backgroundColor: [
          "#091D2C",
          "#1E4460",
          "#13344C",
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
