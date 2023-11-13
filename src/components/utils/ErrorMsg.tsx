const ErrorMsg = ({ error = "Error" }: { error: string }) => {
  return (
    <div className="loader-wrapper">
      <span className="error-msg">{error}</span>
    </div>
  );
};

export default ErrorMsg;
