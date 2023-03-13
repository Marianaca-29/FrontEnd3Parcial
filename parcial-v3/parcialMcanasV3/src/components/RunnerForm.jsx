import React from 'react';
import { FormContainer, Container, Input, Title, Error} from '../styles/StyledComponent';
import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from "yup";

const inputs = [
    { id: 1, label: "Nombre", placeholder: "Ingresa tu nombre: ", name: "name" },
    { id: 2, label: "Edad", placeholder: "Ingresa tu edad: ", name: "age" },
    { id: 3, label: "Ciudad", placeholder: "Ingresa tu ciudad: ", name: "city" },
    { id: 4, label: "Distancia", placeholder: "Ingresa distancia para correr: ", name: "dist" }
]

const RunnerForm = ({ handleFetchValues }) => {
  const getInitialValues = () => ({
    name: "",
    age: "",
    city: "",
    dist: ""
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .min(3, 'Debés ingresar al menos 3 letras')
          .max(20, 'Superaste el máximo de letras')
          .trim('Tu nombre tiene un espacio en blanco adelante').strict()
          .required("Debes ingresar tu nombre"),
        age: Yup.string()
          .min(1, 'Debés ingresar al menos 1 caracter')
          .max(2, 'Superaste el máximo de caracteres')
          .trim('Tu edad tiene un espacio en blanco adelante').strict()
          .required("Debes ingresar tu edad"),
        city: Yup.string()
          .min(3, 'Debés ingresar al menos 3 letras')
          .max(20, 'Superaste el máximo de letras')
          .trim('Tu ciudad tiene un espacio en blanco adelante').strict()
          .required("Debes ingresar tu ciudad"),
        dist: Yup.string()
          .min(1, 'Debés ingresar al menos 1 caracter')
          .max(3, 'Superaste el máximo de caracteres')
          .trim('Tu distancia tiene un espacio en blanco adelante').strict()
          .required("Debes ingresar tu distancia favorita"),
      })
    )
  )

  const onSubmit = (values) => {
    console.log(values);
    handleFetchValues(values);
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  })

    return (
        <>
        <Title style={{textShadow: "5px 4px 3px whitesmoke"}}>¿Cuál es tu distancia?</Title>
        <FormContainer from="runner">
            <form id="runner-form" onSubmit={handleSubmit}>
            {
              inputs.map(field => (
                <Container key={field.id}>
                  <label>{field.label}</label>
                  <Input
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={(e) => setFieldValue(field.name, e.target.value)}
                  />
                  {
                    errors[field.name] && (
                      <Error>{errors[field.name]}</Error>
                    )
                  }
                </Container>
              ))
            }
            </form>
            <Container content="row">
                <button form="runner-form" btn="submit" type="submit">?</button>
            </Container>
        </FormContainer>
        </>
    )
}

export default RunnerForm;