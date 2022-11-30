export const ProgressBar = ({ percent }) => {
  return (
    <div className="bg-white w-5 rounded-full h-48 relative">
      <div
        className="bg-primary rounded-full absolute bottom-0 w-full"
        style={{ height: (192 * percent) / 100 + "px" }}
      />
    </div>
  );
};
