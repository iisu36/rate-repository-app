import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextInput, View, StyleSheet, Pressable } from 'react-native'
import theme from '../theme'
import Text from './Text'

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
}

const onSubmit = (values) => {
  console.log(values)
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(8, 'Username must contain at least eight characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least eight characters')
    .required('Password is required'),
})

const SignIn = () => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const usernameInputStyles = [
    styles.textInput,
    formik.touched.username && formik.errors.username && { borderColor: 'red' },
  ]
  const passwordInputStyles = [
    styles.textInput,
    formik.touched.username && formik.errors.password && { borderColor: 'red' },
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
      <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
        <Text style={styles.submitText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
