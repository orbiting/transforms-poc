import { FaSuperscript as SupIcon } from 'react-icons/fa'
import ToggleMarkButton from '@orbiting/publikator-editor/components/ToggleMarkButton'
import { withTheme } from '@orbiting/publikator-editor/apps/theme'

export const SupButton = withTheme()(props => (
  <ToggleMarkButton
    mark={'sup'}
    {...props}
    {...props.styles.buttons.iconButton}
  >
    <SupIcon size={22} />
  </ToggleMarkButton>
))