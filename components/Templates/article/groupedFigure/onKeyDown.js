import {
  compose,
  converge,
  both,
  ifElse,
  always,
  allPass
} from 'ramda'

import { removeBlock } from '@orbiting/publikator-editor/changes'

import {
  getChange,
  isCollapsed,
  getParentOf,
  getStartBlock,
  hasEmptyText,
  eventHandler,
  isDelete,
  isBackspace,
  isBlock
} from '@orbiting/publikator-editor/lib'

const onDeleteOrBackspace = compose(
  ifElse(
    allPass([
      isCollapsed,
      compose(
        isBlock('figureImage'),
        getStartBlock
      ),
      compose(
        both(
          isBlock('groupedFigure'),
          hasEmptyText
        ),
        getParentOf(getStartBlock)
      )
    ]),
    converge(removeBlock, [
      getChange,
      getParentOf(getStartBlock),
      always({ url: '' })
    ])
  )
)

const onBackspace = onDeleteOrBackspace(
  always(undefined)
)

const onDelete = onDeleteOrBackspace(
  always(undefined)
)

export default eventHandler(
  compose(
    ifElse(isBackspace, onBackspace),
    ifElse(isDelete, onDelete)
  )(always(undefined))
)
