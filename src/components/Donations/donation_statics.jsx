import React from "react";

const donation_statics = () => {
  return (
    <div className="bg-primary py-2 px-6 mb-5 ">
      <div class="mx-auto w-11/12 overflow-hidden md:w-3/5">
        <canvas
          data-te-chart="doughnut"
          data-te-dataset-label="Traffic"
          data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
          data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
          data-te-dataset-background-color="['rgba(63, 81, 181, 0.5)', 'rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(233, 30, 99, 0.5)', 'rgba(66, 73, 244, 0.4)', 'rgba(66, 133, 244, 0.2)']"
        ></canvas>
      </div>
    </div>
  );
};

export default donation_statics;
