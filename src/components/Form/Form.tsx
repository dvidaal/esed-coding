const Form = (): JSX.Element => {
  return (
    <>
      <div>
        <label className="email">Your Email Address</label>
        <input type="email" name="email" id="userEmail" />
      </div>
    </>
  );
};

export default Form;
