import React, { useEffect, useState } from "react";
import { fetchCard } from "../state/action-creators";
import { useSelector, useDispatch } from "react-redux";
import Icons from "./Icons";
import UsageBar from "./UsageBar";

const Progressbar2 = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  const arr = card["Card1"];
  const [header, setHeader] = useState("");
  const [icons, setIcons] = useState("");
  const [CardPart1, setCardPart1] = useState("");
  const [CardPart2, setCardPart2] = useState("");
  const [readings, setReading] = useState([]);
  const [graphics, setGraphics] = useState("");

  const [graph, setBarGraph] = useState([]);
  const [graph_width, setBarGraphWidth] = useState([]);
  const [cores, setCores] = useState([]);
  const [process, setProcessordesc] = useState("");
  const [usage, setUsage] = useState([]);
  const [titles, setTitles] = useState("");

  useEffect(() => {
    if (header !== "" || CardPart1 !== "" || CardPart2 !== "") {
      setIcons(header.temp_icon);
      setProcessordesc(CardPart1.processor_desc);
      setReading(CardPart1.multiprogressbar);
      setGraphics(CardPart2.graphics_desc);
      setBarGraph(CardPart1.bar_graph.bar_array);
      setBarGraphWidth(CardPart1.bar_graph.width);
      setCores(CardPart1.cores_desc.cores_number);
      setUsage(CardPart1.cores_desc.cores_usage);
      setTitles(CardPart1.cores_desc);
    } else {
      return null;
    }
  });

  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  useEffect(() => {
    if (typeof arr !== "undefined") {
      if (arr.length > 0) {
        console.log("Header", arr[1]);
        const { Header, Card_Part1, Card_Part2 } = arr[1];
        console.log("Header", Header);
        setHeader(Header);
        setCardPart1(Card_Part1);
        setCardPart2(Card_Part2);
      }
    } else {
      return null;
    }
  });

  const Progress = ({ readings }) => {
    return (
      <div className="progress2">
        {readings.map((item, i) => {
          if (item.value > 0) {
            return (
              <div
                className="value"
                key={i}
                style={{ backgroundColor: item.color, width: item.value + "%" }}
              ></div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

  return (
    <>
      <div className="card2">
        <div className="card-body2">
          <div className="d-flex">
            <div className="font"> {header.usage_title}</div>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons name={icons.icon1} color="currentColor" size={16} />
              <Icons name={icons.icon2} color="currentColor" size={25} />
            </span>
          </div>
          <div
            className="d-flex"
            style={{ borderBottom: "2px dotted rgb(232, 234, 237)" }}
          >
            <div className="font">{header.processor_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>

          <div className="tableflex">
            <div>{process.process_cpu}</div>
            <div className="tablespecs">{process.process_cpu_value}</div>
            <div>{process.process_base}</div>
            <div className="tablespecs">{process.process_base_value}</div>
            <div>{process.process_cores}</div>
            <div className="tablespecs">{process.process_cores_value}</div>
          </div>
          <br />
          <div>
            <div className="progressflex2">
              <Progress readings={readings} />
            </div>
          </div>

          <br />
          <div className="d-flex">
            <div className="font">{CardPart1.usage_load_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>

          <div className="progressflexbar">
            <span className="bar-flex">
              <span style={{ fontSize: "40px", width: "10px" }}>
                {CardPart1.temp_value}
              </span>

              <UsageBar value={graph} width={graph_width} />
            </span>
          </div>
          <br />

          <div className="tableflex2">
            <div
              style={{
                display: "flex",
                columnGap: "64px",
                borderBottom: "2px dotted #E8EAED",
                color: "#96a4b5",
              }}
            >
              <div>{titles.cores_title}</div>
              <div
                style={{
                  display: "flex",
                  columnGap: "34px",
                  position: "relative",
                  left: "41px",
                }}
              >
                {cores.map((e) => {
                  return <div className="tablespecs"> {e}</div>;
                })}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                columnGap: "45px",
                borderBottom: "2px dotted #E8EAED",
                color: "#96a4b5",
              }}
            >
              <div>
                <span>{titles.cores_usage_title}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: "26px",
                  position: "relative",
                  left: "41px",
                }}
              >
                {usage.map((e) => {
                  return <div className="tablespecs">{e}</div>;
                })}
              </div>
            </div>

            <div
              style={{ display: "flex", columnGap: "80px", color: "#96a4b5" }}
            >
              <div>{titles.tendency}</div>
              <div style={{ display: "flex", columnGap: "15px" }}>
                <div>
                  <Icons
                    name={CardPart1.tendency_icon}
                    color="currentColor"
                    size={24}
                  />
                </div>
                <div>
                  <Icons
                    name={CardPart1.tendency_icon}
                    color="currentColor"
                    size={24}
                  />
                </div>
                <div>
                  <Icons
                    name={CardPart1.tendency_icon}
                    color="currentColor"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="font">{CardPart2.graphics_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>

          <div className="tableflex">
            <div>{graphics.process_gpu}</div>
            <div className="tablespecs">{graphics.process_gpu_value} </div>
            <div>{graphics.process_buswidth}</div>
            <div className="tablespecs">{graphics.process_buswidth_value}</div>
            <div>{graphics.process_memory}</div>
            <div className="tablespecs">{graphics.process_memory_value}</div>
          </div>

          <br />
          <div className="d-flex">
            <div className="font">{CardPart2.usage_title}</div>
            <Icons
              name={header.arrowdownshorticon}
              color="currentColor"
              size={24}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar2;
