import React, { useState } from 'react';
import MockJson from './Assigninment-data.json';
import Table from './components/table';
import Filter from './components/filters';
import StackedColChart from './components/column-chat';
import PieChart from './components/pie-chart';
import './App.css';

function App() {

  const a = MockJson;

  const { dateTime, ...categories } = a.defaultReport.items[0];

  const [filter, SetFilter] = useState(Object.keys(categories));
  const [range, SetRange] = useState('45');

  const applyFilters = (filter) => {
    filter.length > 0 ? SetFilter(filter) : SetFilter(Object.keys(categories))
  }

  const handleRangeChange = (e) => {
    SetRange(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>Risk categories</div>
          <div>
            <select onChange={handleRangeChange}>
              <option value="45">Last 45 Days</option>
              <option value="50">Last 50 Days</option>
              <option value="60">Last 60 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
          </div>
        </div>
      </header>

      <div className="report-container">
        <div id="filter-container">
          <Filter applyFilters={applyFilters} categories={Object.keys(categories)} />
        </div>
        <div id="charts-container">
          <PieChart range={range} filter={filter} items={a.defaultReport.items} />
          <StackedColChart range={range} filter={filter} items={a.defaultReport.items} />
          <Table data={a?.defaultReport?.aggregated?.items} />
        </div>
      </div>
    </div>
  );
}

export default App;
