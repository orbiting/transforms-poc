import { resetKeyGenerator } from 'slate'
import { Editor } from 'slate-react'
import { connect } from 'react-redux'
import { change } from '../actions'

resetKeyGenerator()

const mapStateToProps = state => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: t => {
      dispatch(change(t))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Editor
)
