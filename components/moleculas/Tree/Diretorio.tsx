import type { GetProps, TreeDataNode } from 'antd'
import { Tree } from 'antd'

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>

const { DirectoryTree } = Tree

type DiretorioProps = {
  treeData: TreeDataNode[]
  onSelect?: (node: TreeDataNode) => void
}

export function Diretorio(props: DiretorioProps) {
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    props.onSelect?.(info.node)
  }

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info)
  }

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={props.treeData}
    />
  )
}
