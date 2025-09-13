import React from "react";
import { ShimmerTitle } from "react-shimmer-effects";
import { ShimmerText } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div>
      <div id="shimmerui">
        <ShimmerTitle
          line={1}
          gap={10}
          className="shimmeruititle"
          variant="primary"
        />
        <div id="shimmeruiwidgetbox">
          <div id="Shimmeruiwidget">
            <ShimmerTitle
              line={1}
              gap={10}
              className="shimmeruiwidgettitle"
              variant="primary"
            />
            <ShimmerText
              mode="dark"
              line={4}
              className="shimmeruiwidgettext"
              gap={10}
            />
          </div>
          <div id="Shimmeruiwidget">
            <ShimmerTitle
              line={1}
              gap={10}
              className="shimmeruiwidgettitle"
              variant="primary"
            />
            <ShimmerText
              mode="dark"
              line={4}
              className="shimmeruiwidgettext"
              gap={10}
            />
          </div>
          <div id="Shimmeruiwidget">
            <ShimmerTitle
              line={1}
              gap={10}
              className="shimmeruiwidgettitle"
              variant="primary"
            />
            <ShimmerText
              mode="dark"
              line={4}
              className="shimmeruiwidgettext"
              gap={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shimmer;
