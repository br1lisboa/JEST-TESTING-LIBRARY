import PropTypes from 'prop-types';
//Literal react nos permite imprimir directamente variables, arrays, numbers, booleans, strings, 
//con la exepcion de objetos, los objetos no se pueden imprimir directamente. Necesitamos usar el 
//metodo JSON.stringify(nombreObjeto).

//Otra informacion interesante es crear las variables que no se necesiten rerenderizar por fuera del 
//componente.

const newMessage = {
  message: 'Hola mundo',
  title: 'Bruno'
}

function saludar() {
  console.log('funciona');
}

export const FirstApp = ({ title, subTitle, number }) => {

  //console.log(props);

  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <h3>{subTitle}</h3>
      <h4>{number + 100}</h4>
    </>
  );
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  //title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  number: 0
}