import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextInput, View, StyleSheet, Pressable } from 'react-native'
import theme from '../theme'
import Text from './Text'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 16,
    backgroundColor: 'white',
    gap: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid',
    borderRadius: 2,
    padding: 4,
    fontSize: theme.fontSizes.subheading,
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderStyle: 'solid',
    borderRadius: 2,
    padding: 4,
  },
  submitText: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
  },
})

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must contain at least five characters')
    .max(30, 'Username must contain at most thirty characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must contain at least five characters')
    .max(50, 'Password must contain at most 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required'),
})

export const SignUpContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  })

  const usernameInputStyles = [
    styles.textInput,
    formik.touched.username && formik.errors.username && { borderColor: 'red' },
  ]

  const passwordInputStyles = [
    styles.textInput,
    formik.touched.password && formik.errors.password && { borderColor: 'red' },
  ]

  const passwordConfirmationInputStyles = [
    styles.textInput,
    formik.touched.passwordConfirmation &&
      formik.errors.passwordConfirmation && { borderColor: 'red' },
  ]

  return (
    <View style={styles.container}>
      <TextInput
        style={usernameInputStyles}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      ></TextInput>
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={passwordInputStyles}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      ></TextInput>
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <TextInput
        style={passwordConfirmationInputStyles}
        placeholder="Password confirmation"
        value={formik.values.passwordConfirmation}
        onChangeText={formik.handleChange('passwordConfirmation')}
        secureTextEntry
      ></TextInput>
      {formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation && (
          <Text style={{ color: 'red' }}>
            {formik.errors.passwordConfirmation}
          </Text>
        )}
      <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
        <Text style={styles.submitText}>Sign up</Text>
      </Pressable>
    </View>
  )
}

const SignUp = () => {
  const [createUser] = useSignUp()
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await createUser({ username, password })
      if (data) {
        await signIn({ username, password })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp
