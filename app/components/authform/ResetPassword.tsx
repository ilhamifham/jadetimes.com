import FormButton from "@/app/components/FormButton";

const ResetPassword = ({
  handleResetPasswordOff,
}: {
  handleResetPasswordOff: () => void;
}) => {
  return (
    <>
      <div className="font-semibold text-heading text-center text-4xl">
        Reset password
      </div>
      <p className="text-sm text-center my-4">
        Enter your login email and we’ll send you a link to reset your password.
      </p>
      <form className="flex flex-col gap-6 mb-5">
        <input
          className="inputStyles"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          aria-label="email"
          required
          pattern="^.+@.+\.[a-zA-Z]{2,63}$"
          maxLength={250}
          autoFocus
        />
        <FormButton>Reset Password</FormButton>
      </form>
      <div className="text-sm text-center">
        Back to{" "}
        <button
          className="underline font-medium text-heading"
          onClick={handleResetPasswordOff}
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default ResetPassword;
