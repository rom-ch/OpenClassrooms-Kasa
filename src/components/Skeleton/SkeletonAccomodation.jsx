import Shimmer from "../Shimmer/Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./SkeletonElement.scss";

function SkeletonAccomodation() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-accomodation">
        <SkeletonElement type="carousel" />
        <div className="skeleton-infos">
          <div className="skeleton-acc">
            <SkeletonElement type="title" />
            <SkeletonElement type="subtitle" />
            <SkeletonElement type="tags" />
          </div>
          <div className="skeleton-host">
            <div className="host-infos">
              <SkeletonElement type="hostname" />
              <SkeletonElement type="avatar" />
            </div>
            <SkeletonElement type="rating" />
          </div>
        </div>
        <div className="skeleton-accordion">
          <SkeletonElement type="accordion" />
          <SkeletonElement type="accordion" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}

export default SkeletonAccomodation;
