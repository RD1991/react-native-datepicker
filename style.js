import {
  StyleSheet,
  Dimensions
} from 'react-native';
const component_width = Dimensions.get('window').width - 60;
const CONSTANT = require('../../constant');

let style = StyleSheet.create({
  dateTouch: {
    
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginRight: 5
  },
  dateInput: {
    flex: 1,
    height: 30,
    justifyContent: 'center'
  },
  dateText: {
    color: 'black',
    fontSize: CONSTANT.TEXTINPUT_FONT
  },
  placeholderText: {
    color: '#c9c9c9'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    color: 'black',
    fontSize: CONSTANT.TEXTINPUT_FONT
  },
  btnTextCancel: {
    color: 'black',
    fontSize: CONSTANT.TEXTINPUT_FONT
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  }
});

export default style;
