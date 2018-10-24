import React, { Component } from "react";
import Communications from "react-native-communications";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  UIManager,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { employeeFetch } from "../actions/EmployeeAction";
import CardSection from "./CardSection";

import _ from "lodash";
import { Actions } from "react-native-router-flux";

class EmployeeList extends Component {

  UNSAFE_componentWillMount = () => {
    this.props.employeeFetch();
    // this.cerateDataSource(this.props);
  };

  // UNSAFE_componentWillReceiveProps = nextProps => {
  //   this.cerateDataSource(nextProps);
  // };

  // cerateDataSource = ({ employees }) => {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.dataSource = ds.cloneWithRows(employees);
  // };

  // renderData = rowData => {
  //   return (
  //     <View>
  //       <Text>Hello</Text>
  //     </View>
  //   );
  // };

  // render it -listview
  // <ListView dataSource={this.dataSource} renderRow={this.renderData} />

  sendText = employee => {
    Communications.text(
      employee.phone,
      `Hey ${employee.name},Your Shift is at ${employee.shift}.`
    );
  };

  renderItem = ({ item }) => {
    return (
      <CardSection>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => Actions.editEmployee({ employee: item })}
            style={{ flex: 2 }}
          >
            <Text style={styles.textStyle}>{item.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={this.sendText.bind(this, item)}
          >
            <Text style={styles.msgStyle}>Send Schedule</Text>
          </TouchableOpacity>
        </View>
      </CardSection>
    );
  };

  render() {
    return (
      <View>
        <CardSection>
          <FlatList data={this.props.employees} renderItem={this.renderItem} />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // convert object to list to render list
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  msgStyle: {
    fontSize: 16,
    color: "red",
    paddingTop: 10,
    opacity: 0.7
  }
};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
