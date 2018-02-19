import React from 'react';
import PropTypes from 'prop-types';
import './Vase.css';
import Image from '../Image';

export default class Vase extends React.Component {
  static propTypes = {
    templateImage: PropTypes.string,
    fillTexture: PropTypes.string,
    fillLevel: PropTypes.number,
    fillAnimationSpeed: PropTypes.number,
    height: PropTypes.string,
    width: PropTypes.string
  };

  static defaultProps = {
    templateImage: 'https://i.imgur.com/gdcGtpr.png',
    fillTexture: 'http://lauterdaybrewers.org/wp/wp-content/uploads/2014/12/water.jpg',
    fillLevel: 0,
    height: '200px',
    width: '100px'
  };

  constructor() {
    super();
    this.state = {
      fillLevel: 0
    };
  }

  animateToFillLevel(fillLevel = this.props.fillLevel) {
    window.setTimeout(() => {
      this.setState({
        fillLevel
      });
    }, 100);
  }

  componentDidMount() {
    this.animateToFillLevel();
  }

  componentWillReceiveProps(nextProps) {
    this.animateToFillLevel(nextProps.fillLevel);
  }

  render() {
    const containerInlineStyle = {
      width: this.props.width
    };
    const fillInlineStyle = {
      height: `${this.state.fillLevel}%`,
      backgroundImage: `url(${this.props.fillTexture})`,
      transitionDuration: `${this.props.fillAnimationSpeed}s`
    };
    
    return (
      <div className="vase" style={containerInlineStyle}>
        <div className="vase-content">
          <Image
            src={this.props.templateImage}
            height={this.props.height}
            width={this.props.width}
          />
        </div>
        <div
          className="vase-fill-texture"
          style={fillInlineStyle}
        ></div>
        <div className="vase-empty-texture"></div>
      </div>
    );
  }
}