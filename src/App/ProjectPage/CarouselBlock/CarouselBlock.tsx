import './CarouselBlock.module.scss'


import { CSSTransition } from 'react-transition-group'
import React from 'react'


type ItemProps = {
  level: number
  id: number
}

class Item extends React.Component<ItemProps> {
  constructor(props: any) {
    super(props)
    this.state = { level: this.props.level }
  }

  render() {
    const className = 'item level' + this.props.level
    return(
      <div className={className}>
        { this.props.id }
      </div>
    )
  }
}

type CarouselBlockProps = {
  items: number[]
  active: number
}


type State = {
  items: number[]
  active: number
  direction: string
}


class CarouselBlock extends React.Component<CarouselBlockProps> {
  state: State = {
    items: this.props.items,
    active: this.props.active,
    direction: '',
  }

  constructor(props: CarouselBlockProps) {
    super(props)
  }

  generateItems() {
    const items = []
    let level
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index: number = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      items.push(
        <Item
          key={index}
          id={this.state.items[index]}
          level={level}
        />
      )
    }
    return items
  }

  moveLeft = () => {
    let newActive = this.state.active
    newActive--
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left',
    })
  }

  moveRight = () => {
    const newActive = this.state.active
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right',
    })
  }

  render() {
    // @ts-ignore
    return(
      <div
        id='carousel'
        className='noselect'
      >
        <div
          className='arrow arrow-left'
          onClick={this.moveLeft}
        >
          <i className='fi-arrow-left' />
        </div>
        <CSSTransition classNames={this.state.direction}>
          { this.generateItems() }
        </CSSTransition>
        <div
          className='arrow arrow-right'
          onClick={this.moveRight}
        >
          <i className='fi-arrow-right' />
        </div>
      </div>
    )
  }
}

export default CarouselBlock