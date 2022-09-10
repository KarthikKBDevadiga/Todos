import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
  Container: {
    height: '100%',
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  AddFab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 32,
    backgroundColor: 'blue',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 8,
    padding: 8,
  },
  FabIcon: {
    width: 40,
    height: 40,
  },
  Button: {
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginTop: 16,
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Heading: {fontSize: 20, color: 'black'},
  INPUT: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
