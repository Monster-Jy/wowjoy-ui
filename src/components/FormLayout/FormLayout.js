import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${props => props.defaultStyles};
`;
class FormLayout extends PureComponent {
  state = {
    columnCount: 2
  };
  needReload = true;
  componentDidMount() {
    this.layout();
    window.onresize = this.layout;
  }
  componentDidUpdate(prevProps, prevState) {
    this.layout();
  }
  wrapNode = void 0;
  layout = () => {
    if (!this.needReload) {
      this.needReload = true;
      return;
    }
    const { wrapNode } = this;
    const { fontSize = 16, labelClassName, getColumnsCount } = this.props;
    const wrapWidth = wrapNode.scrollWidth;
    const columnCount = (getColumnsCount || defaultGetColumnsCount)(wrapWidth);
    this.setState({
      columnCount: columnCount
    });
    if (typeof labelClassName !== "string") {
      console.error(
        "need labelClassName as String to layout form, but get " +
          typeof labelClassName
      );
      return false;
    }
    const labelNodes = wrapNode.querySelectorAll("." + labelClassName);
    const maxWidthObj = {};
    labelNodes.forEach((ele, index) => {
      const columnNum = index % columnCount;
      const length = ele.textContent.length;
      const width =
        length > 6
          ? Math.ceil(length / 2) * (fontSize - 2)
          : Math.min(length, 6) * fontSize;
      maxWidthObj[columnNum] = Math.max(maxWidthObj[columnNum] || 0, width);
    });
    labelNodes.forEach((ele, index) => {
      const columnNum = index % columnCount;
      ele.style.width = maxWidthObj[columnNum] + "px";
      ele.style.textAlign = "right";
      ele.style.fontSize = fontSize + "px";
      if (ele.textContent.length > 6) {
        ele.style.fontSize = fontSize - 2 + "px";
      }
    });
  };
  render() {
    const { className, defaultStyles, children } = this.props;
    const Container = this.Container;
    const width = (100 / this.state.columnCount).toFixed(2) + "%";
    return (
      <Wrap
        defaultStyles={defaultStyles}
        className={"wjc-form-layout " + className || ""}
        ref={el => (this.wrapNode = el)}
      >
        {React.Children.toArray(children).map((ele, index) => {
          return (
            <li key={index} style={{ width }}>
              {ele}
            </li>
          );
        })}
      </Wrap>
    );
  }
}

function defaultGetColumnsCount(width) {
  if (width > 1634) {
    return 4;
  }
  if (width > 1134) {
    return 3;
  }
  if (width > 634) {
    return 2;
  }
  return 1;
}

FormLayout.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  fontSize: PropTypes.number,
  labelClassName: PropTypes.string,
  defaultGetColumnsCount: PropTypes.func
};
export default FormLayout;