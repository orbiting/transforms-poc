import React, { Fragment } from 'react'
import { SchemaComponent } from '@orbiting/publikator-editor/components/Schema'
import { ifElse, compose, always } from 'ramda'

import {
  isBlock,
  safeProp,
} from '@orbiting/publikator-editor/lib'

import { SubheadUI } from './ui'

export default {
  renderNode: ifElse(
    compose(
      isBlock('subhead'),
      safeProp('node')
    ),
    ({ node, children, attributes, editor }) => (
      <Fragment>
        <SubheadUI
          key="ui"
          node={node}
          editor={editor}
        />
        <SchemaComponent
          name="subhead"
          key="content"
          {...attributes}
        >
          {children}
        </SchemaComponent>
      </Fragment>
    ),
    always(undefined)
  ),
}
