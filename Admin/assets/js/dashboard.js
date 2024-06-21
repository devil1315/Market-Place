var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 3, 17, 28, 24, 7],
        backgroundColor: "rgba(36,99,235,1)",
      },
      {
        label: "Sales",
        data: [30, 29, 5, 5, 20, 3, 10],
        backgroundColor: "rgba(25,25,25,1)",
      },
    ],
  },
});
