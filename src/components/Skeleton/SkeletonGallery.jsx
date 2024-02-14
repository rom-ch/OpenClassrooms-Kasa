import Shimmer from "../Shimmer/Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./SkeletonElement.scss";

function SkeletonGallery() {
  const skeletonGallery = [...Array(20)].map((_, index) => (
    <SkeletonElement key={index} type="gallery" />
  ));

  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-gallery">{skeletonGallery}</div>
      <Shimmer />
    </div>
  );
}

export default SkeletonGallery;
