function Message() {
  const name = "";
  if (name)
    return (
      <h1 className="text-xl font-bold text-black flex flex-row justify-center ">
        Hello {name}
      </h1>
    );
  return <button className="btn">Hello World</button>;
}

export default Message;
