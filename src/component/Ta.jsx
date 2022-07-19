import React from "react";
import "../A.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Ta = () => {
  return (
    <div>
      <div className="App">
        <Tabs className="Tabs">
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanel>
            <p>Tab 1 works!</p>7
          </TabPanel>
          <TabPanel>
            <p>Tab 2 works!</p>
          </TabPanel>
          <TabPanel>
            <p>Tab 3 works!</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Ta;
