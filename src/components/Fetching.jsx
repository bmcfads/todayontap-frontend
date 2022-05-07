import Message from "./messages/Message";

export default function Fetching({ loading, error }) {
  return (
    <>
      {loading && <Message variant="loading" />}
      {error && <Message variant="error" />}
    </>
  );
}
