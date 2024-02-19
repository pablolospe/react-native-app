import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import {calcularIngresos} from '../../utils/calcularIngresos'
import {calcularTablaAmortizacion} from '../../utils/calcularTablaAmortizacion'
import {calcularPrestamoMaximo} from '../../utils/calcularPrestamoMaximo'
import {calcularEdad} from '../../utils/calcularEdad'
import {Picker} from '@react-native-picker/picker';
import { Pressable, Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import {styles} from '../../assets/styles/styles'

const Form = () => {
  const [parteDelFormulario, setParteDelFormulario] = useState(1);

  const [nombre, setNombre] = useState('Pablo X. Lospennato');
  const [tipoDeId, setTipoDeId] = useState('DNI');
  const [dni, setDni] = useState('23456789');
  const [email, setEmail] = useState('pablolospennato@gmail.com');
  const [birthday, setBirthday] = useState('1981-11-01');
  const [edad, setEdad] = useState('');
  const [valorUnidad, setValorUnidad] = useState('120000');
  const [valorPrestamo, setValorPrestamo] = useState('');
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

  const ingresoRatio = 0.3;

  const handleNext = () => { if (parteDelFormulario < 4) setParteDelFormulario(parteDelFormulario + 1)};

  const handlePrevious = () => {if (parteDelFormulario > 1) setParteDelFormulario(parteDelFormulario - 1)};

  const handleCalcularPrestamoMaximo = () => {
    const prestamoMaximo = calcularPrestamoMaximo( ingresosTotales, tasaAnual, plazoFinanciamiento, ingresoRatio, saldoDelPrecio, seguroDesempleo, gastosAdministrativos);
    // setMostrarAlerta(true)
    setValorPrestamo(prestamoMaximo);
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

      {/* //////////// */}
      {/* P A R T E  1 */}
      {/* //////////// */}
      {parteDelFormulario === 1 && (
        <View
        contentContainerStyle={styles.inputContainer}
        style={styles.marginBottom}
        >
          <View>
          <Text style={styles.title}>1# Datos personales</Text>
          </View>
          <ScrollView
           
           >
          <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
          <TextInput style={styles.input} value={dni} onChangeText={setDni} inputMode="numeric"/>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
            <Text style={styles.subTitle}>Fecha de nacimiento: </Text>
            {/* {!birthday ? null : <Text >{`${birthday.$D}-${birthday.$m}-${birthday.$Y}`} </Text>} */}
            <View style={styles.calendar}>
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
            <Text style={styles.subTitle}>Edad actual: {edad} años</Text>
          
          </ScrollView>
        </View>
      )}

      {/* //////////// */}
      {/* P A R T E  2 */}
      {/* //////////// */}

      {parteDelFormulario === 2 && (
        <View
        style={styles.marginBottom}
        contentContainerStyle={styles.inputContainer}
        >
          <Text style={styles.title}>2# Ingresos mensuales</Text>
          <Text style={styles.bigText} >Ingresos totales: {ingresosTotales} U$D</Text>
          <ScrollView
           
          >
          
          <Text style={styles.subTitle}>Propietario 1</Text>
          
          <Text style={styles.label}>Ingresos mensuales</Text>
            <TextInput 
                style={styles.input}
                value={String(ingresosNetosMensuales)} 
                onChangeText={(e) => setIngresosNetosMensuales(e)} 
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
              onChangeText={(e) => setIngresosNetosMensuales2(e)} 
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
              onChangeText={(e) => setIngresosNetosMensuales3(e)} 
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

      {/* //////////// */}
      {/* P A R T E  3 */}
      {/* //////////// */}

      {parteDelFormulario === 3 && (
        <View
          style={styles.marginBottom}
        >
          <Text style={styles.title}>3# Datos del préstamo</Text>
          <ScrollView

          >
          <Text style={styles.label}>Valor total de la unidad</Text>
          <TextInput 
            style={styles.input} 
            value={String(valorUnidad)} 
            onChangeText={(e) => setValorUnidad(e)} 
            inputMode='numeric'
            />
          
          <Text style={styles.label}>Valor total del préstamo</Text>
          <TextInput
            style={styles.input}
            value={String(valorPrestamo)}
            onChangeText={(e) => setValorPrestamo(e)} 
            inputMode='numeric' 
            />

          <Pressable
            onPress={handleCalcularPrestamoMaximo}
            style={styles.buttonCalcular}
          >
            <Text style={styles.buttonText}>Calcular préstamo máximo</Text>
          </Pressable>
          
          <Text style={styles.label}>Plazo del financiamiento (en meses)</Text>
          <TextInput
            style={styles.input}
            value={String(plazoFinanciamiento)}
            onChangeText={(e) => setPlazoFinanciamiento(e)} 
            inputMode='numeric'
            />
          
          <Text style={styles.label}>Tasa anual</Text>
          <TextInput 
            style={styles.input} 
            value={String(tasaAnual)} 
            onChangeText={(e) => setTasaAnual(e)} 
            inputMode='numeric'
            />
          
          <Text style={styles.label}>Saldo del precio</Text>
          <TextInput 
            style={styles.input} 
            value={String(saldoDelPrecio)} 
            onChangeText={(e) => setSaldoDelPrecio(e)} 
            inputMode='numeric'
            />
          
          <Text style={styles.label}>Seguro de desempleo</Text>
          <TextInput 
            style={styles.input} 
            value={String(seguroDesempleo)} 
            onChangeText={(e) => setSeguroDesempleo(e)} 
            inputMode='numeric'
            />
          
          <Text style={styles.label}>Gastos administrativos</Text>
          <TextInput 
            style={styles.input} 
            value={String(gastosAdministrativos)} 
            onChangeText={(e) => setGastosAdministrativos(e)} 
            inputMode='numeric'
            />


          </ScrollView>
        </View>
      )}

      {/* //////////// */}
      {/* P A R T E  4 */}
      {/* //////////// */}

      {parteDelFormulario === 4 && (
        <View>
          <Text style={styles.title}>4# Tabla</Text>
          <ScrollView >
           
          <View>
            {ingresosTotales < cuota ? (
              <View style={styles.insufficientFunds}>
                <Text>Ingresos insuficientes. Diferencia: {cuota - ingresosTotales}</Text>
              </View>
            ) : (
              <ScrollView style={styles.tabla} >
              <ScrollView style={styles.innerTabla} horizontal >
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
