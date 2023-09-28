export const CardBlog = () => {
  return (
    <img
      src={
        import.meta.env.DEV
          ? "/images/mock-card.png"
          : "/ns-hinto/images/mock-card.png"
      }
      width="100%"
      height="auto"
      alt=""
    />
  );
};
