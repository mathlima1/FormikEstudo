import {Formik, Form as FormikForm, FormikProps, yupToFormErrors} from 'formik'
import {TextField} from './TextField'
import * as Yup  from 'yup'

interface Values{
    nome: string;
    cpf: string;
    email: string;
    data_de_nascimento: Date
}

const Schema = Yup.object().shape({
    nome: Yup.string()
        .max(100, "Muito grande")
        .required('Campo obrigatorio'),
    cpf: Yup.string()
        .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/, "Digite no formato 000.000.000-00"),
    email: Yup.string()
        .email('Insira um email em um formato válido')
        .required('Campo obrigatorio'),
    data_de_nascimento: Yup.date()
        .required('Campo Obrigatorio')
})

export function Form(){
    return(
        <>
            <Formik 
                initialValues={{
                    nome: '',
                    cpf: '',
                    email: '',
                    data_de_nascimento: new Date(),
                }}
                validationSchema={Schema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
            >
                {(props:FormikProps<Values>)=>(
                    <FormikForm>
                        <TextField name="nome" type="text" label="Nome" />
                        <TextField name="cpf" type="text" label="CPF" />
                        <TextField name="email" type="email" label="Email" />
                        <TextField name="data_de_nascimento" type="date" label="Data de nascimento" />
                        <button type="submit">Submit</button>
                    </FormikForm>
                )}
            </Formik>
        </>
    )
}