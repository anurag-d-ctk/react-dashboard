import { useState } from "react";
import { InfoIcon } from "../icons/info";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        className="bg-primary text-white font-bold p-2 rounded-full"
        onClick={toggleOpen}
      >
        <InfoIcon />
      </button>
      <div
        className="fixed overflow-hidden border-2 dark:border-darkGray bottom-16 right-4 bg-white dark:bg-appbg-dark rounded shadow-xl transition-all"
        style={{
          width: isOpen ? "400px" : "0px",
          height: isOpen ? "70vh" : "0px",
        }}
      >
        {isOpen && (
          <div className="p-4 text-secondary dark:text-white font-normal flex flex-col max-h-full gap-3 overflow-y-auto">
            <h3 className="font-semibold border-b pb-3 text-xl">
              About this Dashboard
            </h3>
            <div>Suggested Ideas (Could not be implemented due to time constraint)</div>
            <hr />
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                On Clicking on Statistics, the area chart would fade in the background and the volume bars in the Bottom would be highligted as bar chart.
              </li>
              <li>
                Settings to enable or disable axis labels and change time range.
              </li>
              <li>
                Option to download the chart as an image or data
              </li>
            <li>
              Clicking on Year wise analysis, each year will open a panel to view monthly analysis.
            </li>
              <li>
                Improve colors for dark mode
              </li>
              </ul>
            <br />
            <br />
            <div>Assumptions</div>
            <hr />
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                This chart is prepared using apple stock dataset <br />
                <a
                  className="text-blue-800 dark:text-blue-300"
                  href="https://www.kaggle.com/datasets/tarunpaparaju/apple-aapl-historical-stock-data"
                >
                  Dataset
                </a>
              </li>
              <li>
                The font has been changed, since the one used in Figma is Closed
                Source.
              </li>
              <li>Apple Dataset cannot be unselected</li>
              <li>
                Based on the available data the chart is modified like change in
                the time range and the percentage growth.
              </li>
              <li>
                Percentage growth is calculated based on the start and end
                values of the stock price.
              </li>
              <li>
                Compare option has been added to compare two charts(2nd one
                contains dummy values)
              </li>
              <li>
                Navbar functionality to show Summary, Stats, Analysis and
                settings are yet to be added.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
