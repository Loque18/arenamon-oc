import "./loading.scss";
type LoadingType = {
  isLoading?: boolean;
};
export default function Loading({ isLoading }: LoadingType) {
  return (
    <div
      className={`${isLoading ? "loading_page activeLoading" : "loading_page"}`}
    >
      <img className="logoIcon" alt="" src="assets/logo.png" />
    </div>
  );
}
