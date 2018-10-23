import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { employeeFetch } from "../actions/EmployeeAction";
import CardSection from "./CardSection";
import Card from "./Card";

import _ from "lodash";

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

  onItemClick = item => {
    alert(item.name);
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onItemClick.bind(this, item)}>
        <CardSection key={item.uid}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </CardSection>
      </TouchableOpacity>
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
  }
};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
