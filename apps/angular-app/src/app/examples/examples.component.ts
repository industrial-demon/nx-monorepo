import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, OnInit } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'
import { TREE_DATA, Node } from './examples.routing'

interface ExampleFlatNode {
  expandable: boolean
  name: string
  level: number
  link: string
  value: string
}

@Component({
  selector: 'nx-monorepo-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent implements OnInit {
  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      value: node.value || '',
      link: node.link || '',
      level: level,
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  )
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)

  ngOnInit(): void {
    this.dataSource.data = TREE_DATA
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable
}
