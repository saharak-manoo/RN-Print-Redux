import React, {Component} from 'react';
import {Alert, View, Platform, Dimensions, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../../helpers/i18n';
import {connect} from 'react-redux';
import {setDarkMode, setLanguage} from '../actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const IS_IOS = Platform.OS === 'ios';

class LogoView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async UNSAFE_componentWillMount() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            alignSelf: 'center',
          }}></View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  screenBadge: state.screenBadge,
  setting: state.setting,
});

const mapDispatchToProps = {
  setDarkMode,
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoView);
