import React from 'react';
import PropTypes from 'prop-types';
import { GridCenter, GridRow, GridColumn, GridColumnGroup } from '../Grid';
import Button from '../Button';
import Heading from '../Heading';
import './ComponentCustomizer.css';

const customOptionsShape = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    childComponentOptions: PropTypes.object.isRequired
  })
);

const OptionGrid = ({ selectedIndex, options, onSelect }) => (
  <GridRow>
    <GridColumnGroup>
    {options.map((item, i) => (
      <GridColumn key={i}>
        <Button
          selected={i === selectedIndex}
          onClick={() => onSelect(i)}>
          {item.title}
        </Button>
      </GridColumn>
    ))}
    </GridColumnGroup>
  </GridRow>
);

OptionGrid.propTypes = {
  options: customOptionsShape.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default class ComponentCustomizer extends React.Component {
  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired,

    customOptions: customOptionsShape,
    defaultOptionsIndex: PropTypes.number,
    customOptionsLabel: PropTypes.string
  };

  static defaultProps = {
    defaultOptionsIndex: 0,
    customOptionsLabel: 'Choose a design'
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedOptionsIndex: props.defaultOptionsIndex
    };
    this.onSelectCustomOption = this.onSelectCustomOption.bind(this);
  }

  onSelectCustomOption(index) {
    this.setState({
      selectedOptionsIndex: index
    });
  }

  render() {
    const Component = this.props.component;
    const selected = this.props.customOptions[
      this.state.selectedOptionsIndex
    ];
    const { childComponentProps } = selected;

    return (
      <div className="customizer">
        <GridRow>
          <GridColumnGroup>
            <Component {...childComponentProps} />
            <div className="custom-option-description">
              <Heading size="normal">
                {selected.description}
              </Heading>
            </div>
          </GridColumnGroup>
        </GridRow>
        <GridRow>
          <Heading size="normal">
            {this.props.customOptionsLabel}
          </Heading>
        </GridRow>
        <GridRow>
          <OptionGrid
            onSelect={this.onSelectCustomOption}
            selectedIndex={this.state.selectedOptionsIndex}
            options={this.props.customOptions}
          />
        </GridRow>
      </div>
    );
  }
}