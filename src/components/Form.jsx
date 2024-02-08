import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import {calcularIngresos} from '../../utils/calcularIngresos'
import {calcularTablaAmortizacion} from '../../utils/calcularTablaAmortizacion'
import {calcularEdad} from '../../utils/calcularEdad'
import {Picker} from '@react-native-picker/picker';
import { Pressable, Image, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import {styles} from '../../assets/styles/styles'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: 'full',
//     justifyContent: 'space-between',
//     backgroundColor: '#c5d9ed',
//   },
//   inputContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight:'bold',
//     color:'white',
//     backgroundColor: 'navy',
//     textAlign: 'center',
//     width:350,
//     margin:4,
//     padding:4,
//     borderRadius: 4,
//   },
//   label: {
//     color:'#0a4b78',
//     marginTop: 4,
//   },
//   buttons: {
//     // display:'flex',
//     // flexDirection:'row',
//     // justifyContent:'center',
//     // alignItems:'center',
//     // marginEnd:24,
//   },
//   buttonText: {
//     fontWeight:'bold',
//     color: 'navy',
//     fontSize: 15,
//   },
//   buttonRight: {
//     position: 'absolute',
//     right: 0,
//     bottom: 24,
//     padding: 24,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 25,
//     borderWidth: 2,
//   },
//   buttonLeft: {
//     position: 'absolute',
//     left: 0,
//     bottom: 24,
//     padding: 24,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 25,
//     borderWidth: 2,
//   },
//   input: {
//     borderWidth: 2,
//     borderRadius: 4,
//     margin: 4,
//     padding: 4,
//   },
//   insufficientFunds: {
//     margin: 15,
//     padding: 15,
//     borderColor: 'red',
//     borderWidth: 1,
//     borderRadius: 15,
//     alignItems: 'center',
//     backgroundColor: '#FF9999'
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 2,
//     textAlign: 'center',
//     borderWidth:1,
//   },
//   cell: {
//     margin: 8,
//     // fontSize: 12,
//     width:60,
//     textAlign: 'center',
//   },
//   topCell: {
//     // margin: 10,
//     fontWeight:'bold',
//     width:60,
//     fontSize: 10,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//   },
//   tabla: {
//     margin: 10,
//     maxWidth: 330,
//   },
// });

const Form = () => {
  const [parteDelFormulario, setParteDelFormulario] = useState(1);

  const [nombre, setNombre] = useState('Juan Perez');
  const [tipoDeId, setTipoDeId] = useState('CI');
  const [dni, setDni] = useState('23456789');
  const [email, setEmail] = useState('jp@gmail.com');
  const [birthday, setBirthday] = useState('1981-11-01');
  const [edad, setEdad] = useState('');
  const [valorUnidad, setValorUnidad] = useState('');
  const [valorPrestamo, setValorPrestamo] = useState('20000');
  const [tasaAnual, setTasaAnual] = useState(7);
  const [plazoFinanciamiento, setPlazoFinanciamiento] = useState(24);
  const [saldoDelPrecio, setSaldoDelPrecio] = useState(4.8);
  const [seguroDesempleo, setSeguroDesempleo] = useState(4.75);
  const [gastosAdministrativos, setGastosAdministrativos] = useState(0.7);
  const [ingresosNetosMensuales, setIngresosNetosMensuales] = useState(2500);
  const [vehiculoPropio, setVehiculoPropio] = useState('');
  const [esSocioDeUnClub, setEsSocioDeUnClub] = useState('');
  const [ingresosNetosMensuales2, setIngresosNetosMensuales2] = useState('');
  const [vehiculoPropio2, setVehiculoPropio2] = useState('');
  const [esSocioDeUnClub2, setEsSocioDeUnClub2] = useState('');
  const [ingresosNetosMensuales3, setIngresosNetosMensuales3] = useState('');
  const [vehiculoPropio3, setVehiculoPropio3] = useState('');
  const [esSocioDeUnClub3, setEsSocioDeUnClub3] = useState('');
  const [ingresosTotales, setIngresosTotales] = useState();
  const [cuota, setCuota] = useState(0);
  const [cuotas, setCuotas] = useState([]);

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const currentDate = new Date();
  const maxDate = new Date(currentDate);
  maxDate.setFullYear(currentDate.getFullYear() - 18);
  const minDate = new Date(currentDate);
  minDate.setFullYear(currentDate.getFullYear() - 65);


  const handleNext = () => { if (parteDelFormulario < 4) setParteDelFormulario(parteDelFormulario + 1)};

  const handlePrevious = () => {if (parteDelFormulario > 1) setParteDelFormulario(parteDelFormulario - 1)};

  const exportExcel = () => {
    // exportToExcel(cuotas, nombre)
  };

  useEffect(() => {
    const result = calcularTablaAmortizacion(
      valorPrestamo,
      tasaAnual,
      plazoFinanciamiento,
      saldoDelPrecio,
      seguroDesempleo,
      gastosAdministrativos
    );
    setCuotas(result);
    if (result.length > 0) setCuota(result[0]['CUOTA A PAGAR']);

    setIngresosTotales(
      calcularIngresos(ingresosNetosMensuales, ingresosNetosMensuales2, ingresosNetosMensuales3, vehiculoPropio, vehiculoPropio2, vehiculoPropio3, esSocioDeUnClub, esSocioDeUnClub2, esSocioDeUnClub3)
    );
  }, [ valorPrestamo, tasaAnual, plazoFinanciamiento, setCuota, cuota, saldoDelPrecio, seguroDesempleo, gastosAdministrativos, edad, ingresosTotales, setIngresosTotales, ingresosNetosMensuales, ingresosNetosMensuales2, ingresosNetosMensuales3, vehiculoPropio, vehiculoPropio2, vehiculoPropio3, esSocioDeUnClub, esSocioDeUnClub2, esSocioDeUnClub3,]
  );


  return (
    <SafeAreaView style={styles.container}>
      {parteDelFormulario === 1 && (
        <View
        contentContainerStyle={styles.inputContainer}
        >
          <View>
          <Text style={styles.title}>1# Datos personales</Text>
          </View>
          <ScrollView
           
           >
          <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
          <TextInput style={styles.input} value={dni} onChangeText={setDni} inputMode="numeric"/>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          <Text style={styles.subTitle}>Edad actual: {edad}</Text>
          <View
          style={{width: 270, margin:4}}
          >
            <Text>Fecha de nacimiento: {birthday ? `${birthday?.$D}/${birthday?.$M +1}/${birthday?.$y}`: null}</Text>
            <DateTimePicker
            mode="single"
            date={birthday}
            maxDate={maxDate.toISOString().split('T')[0]}
            minDate={minDate.toISOString().split('T')[0]}
            onChange={(params) => {
              setBirthday(params.date)
              setEdad(calcularEdad(params.date));
            }}
            />
          </View>
          </ScrollView>
        </View>
      )}

      {parteDelFormulario === 2 && (
        <View
        contentContainerStyle={styles.inputContainer}
        >
          <Text style={styles.title}>2# Ingresos mensuales</Text>
          <Text style={{color: 'blue', textAlign:'center', margin: 8}} >Ingresos totales: {ingresosTotales}</Text>
          <ScrollView
           
          >
          
          <Text style={styles.subTitle}>Propietario 1</Text>
          
          <Text style={styles.label}>Ingresos mensuales</Text>
            <TextInput 
                style={styles.input}
                value={String(ingresosNetosMensuales)} 
                onChangeText={(e) => +e ? setIngresosNetosMensuales(e) : null} 
                inputMode='numeric'
                />
          

          {/* <Text style={styles.label}>Vehículos que posee (-150 USD cada uno)</Text> */}
            {/* <Picker 
            // style={styles.input} 
            selectedValue='number'
            value={vehiculoPropio}
            onValueChange={(e) =>
              setVehiculoPropio(Number(e)) 
            }>
            <Picker.Item label="" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
            </Picker> */}
          
          {/* <TextInput style={styles.input} value={esSocioDeUnClub} onChangeText={setEsSocioDeUnClub} /> */}
          
          <Text style={styles.subTitle}>Propietario 2</Text>
          <Text style={styles.label}>Ingresos mensuales</Text>
          <TextInput 
              style={styles.input} 
              value={String(ingresosNetosMensuales2)} 
              onChangeText={(e) => +e ? setIngresosNetosMensuales2(e) : null} 
              inputMode='numeric'
              />          
          
          {/* <Picker style={styles.input} 
            onValueChange={(itemValue) =>
              setVehiculoPropio2(Number(itemValue))
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker> */}
          {/* <TextInput style={styles.input} value={esSocioDeUnClub2} onChangeText={setEsSocioDeUnClub2} /> */}
          
          <Text style={styles.subTitle}>Propietario 3</Text>
          <Text style={styles.label}>Ingresos mensuales</Text>
          <TextInput 
              style={styles.input} 
              value={String(ingresosNetosMensuales3)} 
              onChangeText={(e) => +e ? setIngresosNetosMensuales3(e) : null} 
              inputMode='numeric'
              />
          
          {/* <Picker style={styles.input} 
            onValueChange={(itemValue) =>
              setVehiculoPropio3(Number(itemValue))
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker> */}
          {/* <TextInput style={styles.input} value={esSocioDeUnClub3} onChangeText={setEsSocioDeUnClub3} /> */}
          </ScrollView>
        </View>
      )}

      {parteDelFormulario === 3 && (
        <View>
          <Text style={styles.title}>3# Datos del préstamo</Text>
          <ScrollView
           
          >
          <Text style={styles.label}>Valor total de la unidad</Text>
          <TextInput style={styles.input} value={String(valorUnidad)} onChangeText={(e)=> +e ? setValorUnidad(e) : null} />
          
          <Text style={styles.label}>Valor total del préstamo</Text>
          <TextInput style={styles.input} value={String(valorPrestamo)} onChangeText={(e) => +e ? setValorPrestamo(e) : null} inputMode='numeric' />
          
          <Text style={styles.label}>Plazo del financiamiento (en meses)</Text>
          <TextInput style={styles.input} value={String(plazoFinanciamiento)} onChangeText={(e) => +e ? setPlazoFinanciamiento(e) : null} />
          
          <Text style={styles.label}>Tasa anual</Text>
          <TextInput style={styles.input} value={String(tasaAnual)} onChangeText={(e) => +e ? setTasaAnual(e) : null} />
          <Text style={styles.label}>Saldo del precio</Text>
          <TextInput style={styles.input} value={String(saldoDelPrecio)} onChangeText={(e) => +e ? setSaldoDelPrecio(e) : null} />
          <Text style={styles.label}>Seguro de desempleo</Text>
          <TextInput style={styles.input} value={String(seguroDesempleo)} onChangeText={(e) => +e ? setSeguroDesempleo(e) : null} />
          <Text style={styles.label}>Gastos administrativos</Text>
          <TextInput style={styles.input} value={String(gastosAdministrativos)} onChangeText={(e) => +e ? setGastosAdministrativos(e) : null} />
        

          </ScrollView>
        </View>
      )}

      {parteDelFormulario === 4 && (
        <View>
          <Text style={styles.title}>4# Tabla y Excel</Text>
          <ScrollView >
           
           {/* <View>
            <Text>Edad: {edad} años </Text>
            <Text>{tipoDeId}: {dni} </Text>
            <Text>Valor de la unidad: USD {valorUnidad}</Text>
            <Text>Valor del préstamo: USD {valorPrestamo}</Text>
            <Text>Plazo del financiamiento: {plazoFinanciamiento} meses</Text>
              </View>
              <View>
            <Text>Saldo del precio: {saldoDelPrecio}%</Text>
            <Text>Seguro de desempleo: {seguroDesempleo}%</Text>
            <Text>Gastos administrativos: {gastosAdministrativos}%</Text>
            <Text>Total ingresos mensuales: USD {ingresosTotales}</Text>
          </View> */}
           
          <View>
            {ingresosTotales < cuota ? (
              <View style={styles.insufficientFunds}>
                <Text>Ingresos insuficientes. Diferencia: {cuota - ingresosTotales}</Text>
              </View>
            ) : (
              <ScrollView style={styles.tabla} horizontal>
                <View>
                  <View style={styles.row}>
                    
                    <Text style={styles.topCell}>Cuota{"\n"}nº</Text>
                    <Text style={styles.topCell}>Capital{"\n"}amortizado</Text>
                    <Text style={styles.topCell}>Interés</Text>
                    <Text style={styles.topCell}>Cuota{"\n"}pura</Text>
                    <Text style={styles.topCell}>Cuota{"\n"}a{"\n"}pagar</Text>
                    <Text style={styles.topCell}>Saldo{"\n"}del{"\n"}precio</Text>
                    <Text style={styles.topCell}>Seguro{"\n"}de{"\n"}desempleo</Text>
                    <Text style={styles.topCell}>Gastos{"\n"}admin</Text>
                    <Text style={styles.topCell}>Capital{"\n"}remanente</Text>
                    
                  </View>
                  
                  {cuotas.map((c) => (
                    <View style={styles.row} key={c['NRO. DE CUOTA']}>
                      <Text style={styles.cell}>{c['NRO. DE CUOTA']}</Text>
                      <Text style={styles.cell}>{c['CAPITAL AMORTIZADO'].toFixed(2)}</Text>
                      <Text style={styles.cell}>{c['INTERÉS'].toFixed(2)}</Text>
                      <Text style={styles.cell}>{c['CUOTA PURA'].toFixed(2)}</Text>
                      <Text style={styles.cell}>{c['CUOTA A PAGAR']}</Text>
                      <Text style={styles.cell}>{c['SALDO DEL PRECIO']}</Text>
                      <Text style={styles.cell}>{c['SEGURO DE DESEMPLEO']}</Text>
                      <Text style={styles.cell}>{c['GASTOS ADMINISTRATIVOS']}</Text>
                      <Text style={styles.cell}>{c['CAPITAL REMANENTE'].toFixed(2)}</Text>
                      
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
 
           </ScrollView>
        </View>
      )}

      <View style={styles.buttons}>
        {parteDelFormulario > 1 && (
          <Pressable style={styles.buttonLeft} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        )}

        {parteDelFormulario < 4 && (
          <Pressable style={styles.buttonRight} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        )}
        {/* {parteDelFormulario === 4 && (
          <Pressable style={styles.buttonRight} onPress={exportExcel}>
            <Text style={styles.buttonText}>Excel</Text>
          </Pressable>
        )} */}
      </View>
    </SafeAreaView>
  );
};
export default Form;
