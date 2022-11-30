export const ReviewCard = ({ data }) => {
  const { avatar, name, text } = data;
  return (
    <div className={"shadow-2xl rounded-xl lg:p-10 p-4 bg-white text-grey mb-10"}>
      <div>{text}</div>
      <div className="flex mt-10 items-center">
        <img width="50" src={avatar} alt="avatar" />
        <div className="ml-3">{name}</div>
      </div>
    </div>
  );
};
