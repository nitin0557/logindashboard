import React from "react";

const UsageBar = ({ value, width }) => {
  const progress = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "0.1fr 0.1fr 0.1fr",
    gap: "26px",
  };
  let result = [];
  function setprogress() {
    for (let j = 0; j < 3; j++) {
      let ele = "";
      let finalele = "";
      let eleArr = [];
      var rem = (value[j] % width) / 10;

      var quo = Math.floor(value[j] / width);

      for (let i = 0; i < 5; i++) {
        if (i < quo) {
          ele = (
            <div
              style={{
                backgroundColor: "#00b6ff",
                height: "10px",
                width: "10px",
                margin: "2px 0",
              }}
            ></div>
          );
          eleArr.push(ele);
        } else if (i === quo) {
          ele = (
            <div
              style={{
                backgroundColor: "#dee2e6",
                height: "10px",
                width: "10px",
                margin: "2px 0",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <div
                style={{
                  backgroundColor: "#00b6ff",
                  height: value[j] * rem + "px",
                  width: "10px",
                }}
              ></div>
            </div>
          );
          eleArr.push(ele);
        } else {
          ele = (
            <div
              style={{
                backgroundColor: "#dee2e6",
                height: "10px",
                width: "10px",
                margin: "2px 0",
                overflow: "hidden",
              }}
            ></div>
          );

          eleArr.push(ele);
          finalele = (
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              {eleArr}
            </div>
          );
        }
      }
      result.push(finalele);
    }
   console.log(result)
    return result;
  }

  let usage = setprogress();

  return <div style={progress}>{usage}</div>;
};
export default UsageBar;
