import "./SkeletonElement.scss";

function SkeletonElement({ type }) {
  return <div className={`skeleton ${type}`}></div>;
}

export default SkeletonElement;
