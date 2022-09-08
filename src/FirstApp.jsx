import PropTypes from "prop-types";

const nombre = "Juan Pablo";
const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const objeto = {
  message: "Hola mundo de react",
  student: "jgonzales",
};

const saludo = () => "HOLA MUNDO DESDE FUNCION";
const sumar = (a, b) => a + b;

export const FirstApp = ({
  title,
  subTitle,
  numero,
  valueDefect = "Este props tiene valor por defecto ",
}) => {
  return (
    <>
      <h1>{nombre}</h1>
      <p>{arreglo}</p>
      <p>{JSON.stringify(objeto)}</p>
      <p>{objeto.message}</p>
      <p>{objeto.student}</p>
      <h3>{saludo()}</h3>
      <h3>{sumar(2, 5)}</h3>

      {/* <p>{props.title}</p> */}
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>{numero + 10}</p>
      <p>{valueDefect}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  numero: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  numero: "No Hay un numero",
  subTitle: "No Hay subtitulo",
  title: "No Hay titulo",
};
