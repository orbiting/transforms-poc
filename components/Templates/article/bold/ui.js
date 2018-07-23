import BoldIcon from 'react-icons/lib/fa/bold'
import buttonStyles from '@orbiting/publikator-editor/styles/buttonStyles'
import ToggleMarkButton from '@orbiting/publikator-editor/components/ToggleMarkButton'

export const BoldButton = props => (
  <ToggleMarkButton
    mark={'bold'}
    {...props}
    {...buttonStyles.iconButton}
  >
    <BoldIcon size={22} />
  </ToggleMarkButton>
)
