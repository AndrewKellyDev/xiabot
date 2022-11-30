export const Card = ({ rotation, zIndex, text, className }) => {
  return (
    <div
      className={
        "bg-[#181818] shadow-custom text-white lg:text-2xl text-xl text-center py-5 rounded-lg md:absolute relative md:mt-0 mt-2 " +
        className
      }
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: zIndex,
      }}
    >
      {text}
    </div>
  );
};
