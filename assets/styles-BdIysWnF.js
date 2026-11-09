import { q as styled, U, ac as tr } from "./index-B08HRm4A.js";
const ORIGIN_MAP = {
  "top-left": {
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
    transformOrigin: { vertical: "top", horizontal: "left" }
  },
  "top-center": {
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
    transformOrigin: { vertical: "top", horizontal: "center" }
  },
  "top-right": {
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
    transformOrigin: { vertical: "top", horizontal: "right" }
  },
  "bottom-left": {
    anchorOrigin: { vertical: "top", horizontal: "left" },
    transformOrigin: { vertical: "bottom", horizontal: "left" }
  },
  "bottom-center": {
    anchorOrigin: { vertical: "top", horizontal: "center" },
    transformOrigin: { vertical: "bottom", horizontal: "center" }
  },
  "bottom-right": {
    anchorOrigin: { vertical: "top", horizontal: "right" },
    transformOrigin: { vertical: "bottom", horizontal: "right" }
  },
  "left-top": {
    anchorOrigin: { vertical: "top", horizontal: "right" },
    transformOrigin: { vertical: "top", horizontal: "left" }
  },
  "left-center": {
    anchorOrigin: { vertical: "center", horizontal: "right" },
    transformOrigin: { vertical: "center", horizontal: "left" }
  },
  "left-bottom": {
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
    transformOrigin: { vertical: "bottom", horizontal: "left" }
  },
  "right-top": {
    anchorOrigin: { vertical: "top", horizontal: "left" },
    transformOrigin: { vertical: "top", horizontal: "right" }
  },
  "right-center": {
    anchorOrigin: { vertical: "center", horizontal: "left" },
    transformOrigin: { vertical: "center", horizontal: "right" }
  },
  "right-bottom": {
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
    transformOrigin: { vertical: "bottom", horizontal: "right" }
  }
};
function flipHorizontal(origin) {
  if (origin.horizontal === "left") return { ...origin, horizontal: "right" };
  if (origin.horizontal === "right") return { ...origin, horizontal: "left" };
  return origin;
}
function getPopoverOrigin(placement, isRtl = false) {
  const originPair = ORIGIN_MAP[placement];
  if (isRtl)
    return {
      anchorOrigin: flipHorizontal(originPair.anchorOrigin),
      transformOrigin: flipHorizontal(originPair.transformOrigin)
    };
  return originPair;
}
function getArrowOffset(anchorRect, paperRect, arrowSize) {
  const anchorCenterX = anchorRect.left - paperRect.left + anchorRect.width / 2;
  const anchorCenterY = anchorRect.top - paperRect.top + anchorRect.height / 2;
  let offsetX = anchorCenterX - arrowSize / 2;
  let offsetY = anchorCenterY - arrowSize / 2;
  const minOffset = arrowSize / 2;
  const maxOffsetX = paperRect.width - arrowSize * 2;
  const maxOffsetY = paperRect.height - arrowSize * 2;
  offsetX = Math.max(minOffset, Math.min(offsetX, maxOffsetX));
  offsetY = Math.max(minOffset, Math.min(offsetY, maxOffsetY));
  return { offsetX, offsetY };
}
const ARROW_TRANSLATE = "48%";
const ARROW_COLOR_THRESHOLDS = {
  topCyan: 0.6,
  bottomRed: 0.4,
  sideCyan: 0.6,
  sideRed: 0.4
};
function getPaperOffsetStyles(placement, paperOffsets, isRtl) {
  if (!placement) return {};
  const [primaryOffset, secondaryOffset] = paperOffsets;
  const rtlDirection = isRtl ? -1 : 1;
  const offsetBySide = {
    top: {
      left: [-primaryOffset * rtlDirection, secondaryOffset],
      center: [0, secondaryOffset],
      right: [primaryOffset * rtlDirection, secondaryOffset]
    },
    bottom: {
      left: [-primaryOffset * rtlDirection, -secondaryOffset],
      center: [0, -secondaryOffset],
      right: [primaryOffset * rtlDirection, -secondaryOffset]
    },
    left: {
      top: [secondaryOffset * rtlDirection, -primaryOffset],
      center: [secondaryOffset * rtlDirection, 0],
      bottom: [secondaryOffset * rtlDirection, primaryOffset]
    },
    right: {
      top: [-secondaryOffset * rtlDirection, -primaryOffset],
      center: [-secondaryOffset * rtlDirection, 0],
      bottom: [-secondaryOffset * rtlDirection, primaryOffset]
    }
  };
  const [side, align = "center"] = placement.split("-");
  const [translateX, translateY] = offsetBySide[side]?.[align] || [0, 0];
  return { translate: `${translateX}px ${translateY}px` };
}
function getArrowPlacementStyles(side, isRtl = false) {
  const styleBySide = {
    top: { top: 0, rotate: "135deg", translate: `0 -${ARROW_TRANSLATE}` },
    bottom: { bottom: 0, rotate: "-45deg", translate: `0 ${ARROW_TRANSLATE}` },
    left: isRtl ? { left: 0, rotate: "-135deg", translate: `${ARROW_TRANSLATE} 0` } : { left: 0, rotate: "45deg", translate: `-${ARROW_TRANSLATE} 0` },
    right: isRtl ? { right: 0, rotate: "45deg", translate: `-${ARROW_TRANSLATE} 0` } : { right: 0, rotate: "-135deg", translate: `${ARROW_TRANSLATE} 0` }
  };
  return styleBySide[side] ?? {};
}
function getArrowColor({ isRtl, placement, xRatio, yRatio, paperRatio }) {
  if (!placement) return null;
  const isTop = placement.startsWith("top-");
  const isBottom = placement.startsWith("bottom-");
  const isLeft = placement.startsWith("left-");
  const isRight = placement.startsWith("right-");
  if (isTop && xRatio > ARROW_COLOR_THRESHOLDS.topCyan) return "cyan";
  if (isBottom && xRatio < ARROW_COLOR_THRESHOLDS.bottomRed) return "red";
  if (isLeft || isRight) {
    const useCyan = yRatio > ARROW_COLOR_THRESHOLDS.sideCyan || paperRatio >= 1.8;
    const useRed = yRatio < ARROW_COLOR_THRESHOLDS.sideRed || paperRatio >= 1.8;
    if (isRtl) {
      if (isRight && useCyan) return "red";
      if (isLeft && useRed) return "cyan";
    } else {
      if (isRight && useRed) return "cyan";
      if (isLeft && useCyan) return "red";
    }
  }
  return null;
}
const Arrow = styled("span", {
  shouldForwardProp: (prop) => !["size", "placement", "anchorRect", "paperRect", "sx"].includes(prop)
})(({ size = 0, placement = "top-right", anchorRect, paperRect, theme }) => {
  const isRtl = theme.direction === "rtl";
  const { offsetX, offsetY } = getArrowOffset(anchorRect, paperRect, size);
  const arrowColor = getArrowColor({
    isRtl,
    placement,
    xRatio: offsetX / paperRect.width,
    yRatio: offsetY / paperRect.height,
    paperRatio: Math.round(paperRect.width / paperRect.height * 100) / 100
  });
  const arrowBaseStyle = {
    width: size,
    height: size,
    position: "absolute",
    borderBottomLeftRadius: isRtl ? 0 : size / 4,
    borderBottomRightRadius: isRtl ? size / 4 : 0,
    clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
    backgroundColor: theme.vars.palette.background.paper,
    border: `solid 1px ${U(theme.vars.palette.grey["500Channel"], 0.12)}`,
    ...theme.applyStyles("dark", {
      border: `solid 1px ${U(theme.vars.palette.common.blackChannel, 0.12)}`
    })
  };
  const arrowBackgroundStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: `${size * 3}px ${size * 3}px`,
    ...arrowColor === "cyan" && {
      backgroundPosition: tr("top right"),
      backgroundImage: `linear-gradient(45deg, ${U(theme.vars.palette.info.mainChannel, 0.08)}, ${U(theme.vars.palette.info.mainChannel, 0.08)})`
    },
    ...arrowColor === "red" && {
      backgroundPosition: tr("bottom left"),
      backgroundImage: `linear-gradient(45deg, ${U(theme.vars.palette.error.mainChannel, 0.08)}, ${U(theme.vars.palette.error.mainChannel, 0.08)})`
    }
  };
  return {
    ...arrowBaseStyle,
    ...arrowBackgroundStyle,
    variants: [
      {
        props: (props) => props.placement?.startsWith("top-"),
        style: { ...getArrowPlacementStyles("top"), left: tr(`${offsetX}px`) }
      },
      {
        props: (props) => props.placement?.startsWith("bottom-"),
        style: { ...getArrowPlacementStyles("bottom"), left: tr(`${offsetX}px`) }
      },
      {
        props: (props) => props.placement?.startsWith("left-"),
        style: { ...getArrowPlacementStyles("left", isRtl), top: `${offsetY}px` }
      },
      {
        props: (props) => props.placement?.startsWith("right-"),
        style: { ...getArrowPlacementStyles("right", isRtl), top: `${offsetY}px` }
      }
    ]
  };
});
export {
  Arrow as A,
  getPaperOffsetStyles as a,
  getPopoverOrigin as g
};
