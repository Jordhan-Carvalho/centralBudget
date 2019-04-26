import React, { Component } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { connect } from "react-redux";
import {
  getApril,
  getMay,
  getJune,
  getJuly,
  getAugust,
  getSept,
  getOctober,
  getNovember,
  getDezember
} from "../services/montlyChartData";

export class TransChart extends Component {
  state = {
    data: []
  };

  getExpenses = (exp, inc) => {
    const data = [
      ...this.state.data,
      getApril(exp, inc),
      getMay(exp, inc),
      getJune(exp, inc),
      getJuly(exp, inc),
      getAugust(exp, inc),
      getSept(exp, inc),
      getOctober(exp, inc),
      getNovember(exp, inc),
      getDezember(exp, inc)
    ];
    this.setState({ data });
  };

  async componentDidMount() {
    await this.getExpenses(this.props.expenses, this.props.incomes);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.expenses !== prevProps.expenses ||
      this.props.incomes !== prevProps.incomes
    ) {
      this.getExpenses(this.props.expenses, this.props.incomes);
    }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={this.props.height}>
        <AreaChart
          data={this.state.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="incomes"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

//redux
const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    incomes: state.incomes
  };
};

export default connect(mapStateToProps)(TransChart);
