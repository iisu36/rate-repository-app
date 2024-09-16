import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextInput, View, StyleSheet, Pressable } from 'react-native'
import theme from '../theme'
import Text from './Text'
import useReview from '../hooks/useReview'

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
    color: theme.colors.textSecondary,
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
  repositoryName: '',
  rating: '',
  review: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().min(0).max(100).required('Rating is required'),
  review: yup.string(),
})

export const CreateReviewContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  })

  const usernameInputStyles = [
    styles.textInput,
    formik.touched.username && formik.errors.username && { borderColor: 'red' },
  ]
  const repositoryNameInputStyles = [
    styles.textInput,
    formik.touched.repositoryName &&
      formik.errors.repositoryName && { borderColor: 'red' },
  ]
  const ratingInputStyles = [
    styles.textInput,
    formik.touched.rating && formik.errors.rating && { borderColor: 'red' },
  ]

  return (
    <View style={styles.container}>
      <TextInput
        style={usernameInputStyles}
        placeholder="Repository owner name"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      ></TextInput>
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={repositoryNameInputStyles}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      ></TextInput>
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: 'red' }}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        style={ratingInputStyles}
        placeholder="Rating between 0 and 100"
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      ></TextInput>
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Review"
        value={formik.values.review}
        onChangeText={formik.handleChange('review')}
        multiline
      ></TextInput>
      <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
        <Text style={styles.submitText}>Create a review</Text>
      </Pressable>
    </View>
  )
}

const CreateReview = () => {
  const [createReview] = useReview()

  const onSubmit = async (values) => {
    const review = {
      rating: parseInt(values.rating),
      repositoryName: values.repositoryName,
      ownerName: values.username,
      text: values.review,
    }
    try {
      await createReview({ review })
    } catch (e) {
      console.log(e)
    }
  }

  return <CreateReviewContainer onSubmit={onSubmit} />
}

export default CreateReview
