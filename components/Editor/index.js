import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor as SlateEditor } from 'slate-react'
import { withApp } from './apps/value'
import { withTheme } from './apps/theme'
import { DOM_NODE_ID as SELECTION_PATH_ID } from './apps/selectionPath'

import SelectionPath from './components/SelectionPath'

const Editor = withApp(SlateEditor)

class PublikatorEditor extends Component {
  render() {
    const { styles } = this.props
    return (
      <div>
        <div {...styles.layout.ui}>
          <SelectionPath.Menu />
          <div id={SELECTION_PATH_ID} />
        </div>
        <Editor
          spellCheck={false}
          autoFocus={false}
          plugins={this.props.plugins}
          initialValue={this.props.initialValue}
        />
      </div>
    )
  }
}

PublikatorEditor.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.object.isRequired,
  plugins: PropTypes.array.isRequired,
}

export default withTheme()(PublikatorEditor)
