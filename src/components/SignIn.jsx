import { useFormik } from 'formik'
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
  },
})

const initialValues = {
  username: '',
  password: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const SignIn = () => {
  const formik = useFormik({ initialValues, onSubmit })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
      ></TextInput>
      <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
        <Text style={styles.submitText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
