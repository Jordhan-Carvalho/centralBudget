import React, { Component } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
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

export class SavingsChart extends Component {
  state = {
    data: []
  };

  getExpenses = (exp, inc, sav) => {
    const data = [
      ...this.state.data,
      getApril(exp, inc, sav),
      getMay(exp, inc, sav),
      getJune(exp, inc, sav),
      getJuly(exp, inc, sav),
      getAugust(exp, inc, sav),
      getSept(exp, inc, sav),
      getOctober(exp, inc, sav),
      getNovember(exp, inc, sav),
      getDezember(exp, inc, sav)
    ];
    this.setState({ data });
  };

  async componentDidMount() {
    await this.getExpenses(
      this.props.expenses,
      this.props.incomes,
      this.props.savings
    );
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.expenses !== prevProps.expenses ||
      this.props.incomes !== prevProps.incomes ||
      this.props.savings !== prevProps.savings
    ) {
      this.getExpenses(
        this.props.expenses,
        this.props.incomes,
        this.props.savings
      );
    }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={this.props.height}>
        <ComposedChart
          data={this.state.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Legend verticalAlign="bottom" height={36} />
          <Area
            type="monotone"
            dataKey="expenses"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="savings" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="incomes" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

//redux
const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    incomes: state.incomes,
    savings: state.savings
  };
};

export default connect(mapStateToProps)(SavingsChart);
