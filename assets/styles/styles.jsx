import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 'full',
    justifyContent: 'space-between',
    backgroundColor: '#c5d9ed',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
    color:'white',
    backgroundColor: 'navy',
    textAlign: 'center',
    width:350,
    marginHorizontal:4,
    marginVertical:16,
    padding:8,
    borderRadius: 4,
  },
  subTitle: {
    fontSize: 20,
    // fontWeight:'bold',
    color:'white',
    backgroundColor: 'navy',
    textAlign: 'center',
    width:350,
    marginHorizontal:4,
    marginTop:32,
    padding:6,
    borderRadius: 4,
  },
  label: {
    fontSize:18,
    color:'navy',
    marginTop: 8,
    marginLeft:4,
  },
  calendar: {
    position: 'relative',
    margin:'auto',
    width:350,
  },
  buttons: {
    // marginHorizontal:-16,
  },
  buttonText: {
    letterSpacing:2,
    // fontWeight:'bold',
    color: 'white',
    fontSize: 20,
    textAlign:'center',
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    width:177,
    paddingHorizontal:20, 
    paddingVertical:10, 
    backgroundColor:'navy', 
    // borderRadius:10, 
    elevation:5,
  },
  buttonLeft: {
    position: 'absolute',
    left: 0,
    bottom: 1,
    width:177,
    paddingHorizontal:20, 
    paddingVertical:10, 
    backgroundColor:'navy', 
    // borderRadius:10, 
    elevation:5,
  },
  buttonCalcular: {
    paddingHorizontal:20, 
    paddingVertical:10, 
    backgroundColor:'navy', 
    borderRadius:10, 
    elevation:5,
    alignSelf:'center',
    marginTop: 40,
    width:150,
  },
  input: {
    fontSize:20,
    borderWidth: 2,
    borderRadius: 4,
    margin: 4,
    padding: 8,
    backgroundColor:'white'
  },
  insufficientFunds: {
    margin: 15,
    padding: 15,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#FF9999'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 2,
    textAlign: 'center',
    borderWidth:1,
  },
  cell: {
    margin: 8,
    width:60,
    textAlign: 'center',
  },
  topCell: {
    // margin: 10,
    fontWeight:'bold',
    width:60,
    fontSize: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  tabla: {
    verticalAlign:'center',
    margin: 10,
    maxWidth: 330,
    maxHeight:700,
  },
});