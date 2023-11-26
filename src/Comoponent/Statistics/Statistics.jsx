import { Chart } from "react-google-charts";
import { GetID } from "../javascript/funtion";

const Statistics = () => {
  const arraydata = GetID();
  const dataa = JSON.parse(arraydata);
  var len;
  if (dataa) len = dataa.length;
  else len = 0;
  const data = [
    ["Task", "Hours per Day"],
    ["My Donation", len],
    ["Total Donation", 12],
    //     // ["Commute", 2],
    //     // ["Watch TV", 2],
    //     // ["Sleep", 7],
  ];
  //   const options = {
  //     title: "My Daily Activities",
  //     is3D: true,
  //   };

  return (
    <div>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
      {/* <div>
        <progress
          class="progress progress-success w-56"
          value="0"
          max="100"></progress>
        <progress
          class="progress progress-success w-56"
          value= {data[0].}
          max="100"></progress>
      </div> */}
    </div>
  );
};

export default Statistics;
