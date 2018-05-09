import TreeUtils from 'immutable-treeutils'
import { Seq, List, Map } from 'immutable'

const tree = new TreeUtils(
  Seq.of('document'),
  'key',
  'nodes'
)

export const getSelectionPath = value => {
  return List([value.startKey])
    .map(key => tree.byId(value, key))
    .reduce(
      (memo, path) =>
        memo
          .push(path)
          .concat(tree.ancestors(value, path)),
      List()
    )
    .reduceRight(
      (memo, path) =>
        memo.set(tree.id(value, path), path),
      Map()
    )
    .map(value.getIn.bind(value))
    .filter(n => n.object !== 'text')
    .toList()
}

export const getChildIndex = (value, node) => {
  return tree.childIndex(value, node.key)
}