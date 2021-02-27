import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


type CarouselBlockProps = {
  items: number[]
  active: number
  slideImages: any[]
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

  generateItems() {
    const items = []
    let level
    for (let i = this.state.active - 1; i < this.state.active + 2; i++) {
      let index: number = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      items.push(
        <Item
          key={i}
          id={this.state.items[index]}
          level={level}
          image = {this.props.slideImages[this.state.items[index] - 1]}
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
    return(
      <div className='main'>
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
          <ReactCSSTransitionGroup
            transitionName={this.state.direction}
          >
            { this.generateItems() }
          </ReactCSSTransitionGroup>
          <div
            className='arrow arrow-right'
            onClick={this.moveRight}
          >
            <i className='fi-arrow-right' />
          </div>
        </div>
      </div>
    )
  }
}

type ItemProps = {
  level: number
  id: number
  image: any
}

class Item extends React.Component<ItemProps> {
  state: { level:number } = { level: this.props.level }

  render() {
    const className = 'item level' + this.props.level
    return(
      <div className={className}>
        <div className='dark' />
        <img
          src={this.props.image}
          className='slideImage'
        />
      </div>
    )
  }
}

export default CarouselBlock