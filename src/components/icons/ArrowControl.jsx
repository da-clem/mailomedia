import React from "react";
import styled from "styled-components";
import { Arrow } from "./";

const StyledControl = styled.div`
  top: calc(100% + 1rem) !important;

  &::before {
    display: none;
  }
`

export default function ArrowControl(props) {
  const shouldShow = () => {
    const { next, previous, slidesToShow, slideCount, currentSlide } = props;
    if (next) {
      return !(slideCount === slidesToShow + currentSlide);
    }
    if (previous) {
      return !!currentSlide;
    }
  };

  const style = {
    transform: `rotate(${props.next ? "-" : ""}90deg)`,
    [`${props.next ? "right" : "left"}`]: "8rem",
    display: `${shouldShow() ? "block" : "none"}`
  };

  return (
    <StyledControl className={props.className} onClick={props.onClick} style={style}>
      <Arrow />
    </StyledControl>
  );
}
