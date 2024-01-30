import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import { Alert, Pressable, Image, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 'full',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color:'white',
    backgroundColor: 'black',
    textAlign: 'center',
    width:300,
    margin:4,
    padding:4,
    borderRadius: '4px',
  },
  buttons: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  buttonLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  input: {
    border:'1px solid black', 
    borderRadius: '4px',
    margin: 4,
    padding: 4,
  },
});

const Form = () => {
  const [parteDelFormulario, setParteDelFormulario] = useState(1);

  const [nombre, setNombre] = useState('Juan Perez');
  const [tipoDeId, setTipoDeId] = useState('CI');
  const [dni, setDni] = useState('23456789');
  const [email, setEmail] = useState('jp@gmail.com');
  const [birthday, setBirthday] = useState();
  const [edad, setEdad] = useState('');
  const [valorUnidad, setValorUnidad] = useState('');
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

  const handleNext = (e) => {
    e.preventDefault();
    if (parteDelFormulario < 4) setParteDelFormulario(parteDelFormulario + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (parteDelFormulario > 1) setParteDelFormulario(parteDelFormulario - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <View
          style={{width: 270, margin:4}}
          >
            <Text>Fecha de nacimiento: {birthday ? `${birthday?.$D}/${birthday?.$M +1}/${birthday?.$y}`: null}</Text>
            <DateTimePicker
            mode="single"
            date={birthday}
            onChange={(params) => setBirthday(params.date)}
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
          <ScrollView
           
          >
          <Text>Propietario 1</Text>
          <TextInput style={styles.input} value={ingresosNetosMensuales} onChangeText={setIngresosNetosMensuales} />
          <TextInput style={styles.input} value={vehiculoPropio} onChangeText={setVehiculoPropio} />
          <TextInput style={styles.input} value={esSocioDeUnClub} onChangeText={setEsSocioDeUnClub} />
          
          <Text>Propietario 2</Text>
          <TextInput style={styles.input} value={ingresosNetosMensuales2} onChangeText={setIngresosNetosMensuales2} />
          <TextInput style={styles.input} value={vehiculoPropio2} onChangeText={setVehiculoPropio2} />
          <TextInput style={styles.input} value={esSocioDeUnClub2} onChangeText={setEsSocioDeUnClub2} />
          
          <Text>Propietario 3</Text>
          <TextInput style={styles.input} value={ingresosNetosMensuales3} onChangeText={setIngresosNetosMensuales3} />
          <TextInput style={styles.input} value={vehiculoPropio3} onChangeText={setVehiculoPropio3} />
          <TextInput style={styles.input} value={esSocioDeUnClub3} onChangeText={setEsSocioDeUnClub3} />
          </ScrollView>
        </View>
      )}

      {parteDelFormulario === 3 && (
        <View>
          <Text style={styles.title}>3# Datos del préstamo</Text>
          <ScrollView
           
          >
          <TextInput style={styles.input} value={valorUnidad} onChangeText={setValorUnidad} />
          <TextInput style={styles.input} value={valorPrestamo} onChangeText={setValorPrestamo} />
          <TextInput style={styles.input} value={plazoFinanciamiento} onChangeText={setPlazoFinanciamiento} />
          <TextInput style={styles.input} value={tasaAnual} onChangeText={setTasaAnual} />
          <TextInput style={styles.input} value={saldoDelPrecio} onChangeText={setSaldoDelPrecio} />
          <TextInput style={styles.input} value={seguroDesempleo} onChangeText={setSeguroDesempleo} />
          <TextInput style={styles.input} value={gastosAdministrativos} onChangeText={setGastosAdministrativos} />
        

          </ScrollView>
        </View>
      )}

      {parteDelFormulario === 4 && (
        <View>
          <Text style={styles.title}>4# Tabla y Excel</Text>
          <ScrollView
           
           >
           
           <View>
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
          </View>
           
 
           </ScrollView>
        </View>
      )}

      <View style={styles.buttons}>
        {parteDelFormulario > 1 && (
          <Pressable style={styles.buttonLeft} onPress={handlePrevious}>
            <Text>Back</Text>
          </Pressable>
        )}

        {parteDelFormulario < 4 && (
          <Pressable style={styles.buttonRight} onPress={handleNext}>
            <Text>Next</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Form;
