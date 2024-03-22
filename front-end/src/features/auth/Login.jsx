import Button from "../../ui/Button";
import Link from "../../ui/Link";

export default function Login() {
  return (
    <div className="text-center mb-20">
      <h1 className="text-2xl font-bold text-primary-color mb-4">Rozgar</h1>
      <form
        action=""
        className="flex flex-col bg-white  shadow-xl rounded-md py-6 px-4 items-center justify-center gap-4"
      >
        <p className="font-medium">Login into Rozgar</p>
        <div className="border w-96 flex rounded-md shadwo-inner bg-white">
          <input
            type="text"
            placeholder="Enter your phone number"
            className=" bg-white font-medium  px-4 py-3 w-full rounded-md focus:outline-none placeholder:text-lg placeholder:font-normal "
          />
        </div>

        <div className="border w-96 flex rounded-md shadwo-inner bg-white">
          <input
            type="password"
            placeholder="Password"
            className=" bg-white text-xl font-medium  px-4 py-3 w-full rounded-md focus:outline-none placeholder:text-lg placeholder:font-normal"
          />
        </div>
        <Button>Login in</Button>

        <div className=" w-full text-sm space-x-4">
          <Link> Forgot password</Link>
          <Link>Create New Account</Link>
        </div>
      </form>
    </div>
  );
}
